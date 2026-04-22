'use server';

import { z } from 'zod';
import { and, eq, isNull, sql } from 'drizzle-orm';
import { getDb } from '@/lib/db/drizzle';
import {
  User,
  users,
  teams,
  teamMembers,
  activityLogs,
  type NewUser,
  type NewTeam,
  type NewTeamMember,
  type NewActivityLog,
  ActivityType,
  invitations
} from '@/lib/db/schema';
import { comparePasswords, hashPassword, setSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUser, getUserWithTeam } from '@/lib/db/queries';
import {
  validatedAction,
  validatedActionWithUser
} from '@/lib/auth/middleware';
import {
  getSafeRedirectPath,
  getSignupDomainErrorMessage,
  isAllowedSignupEmail,
  normalizeEmail
} from '@/lib/auth/signup-policy';

function getSignInFailureMessage() {
  return 'Sign-in is temporarily unavailable. Please try again.';
}

function getSignUpFailureMessage(error: unknown) {
  if (
    error &&
    typeof error === 'object' &&
    'code' in error &&
    error.code === '23505'
  ) {
    return 'An account already exists for this email. Please sign in.';
  }

  return 'Signup is temporarily unavailable. Please contact Dominion Partners if you need access.';
}

async function logActivity(
  teamId: number | null | undefined,
  userId: number,
  type: ActivityType,
  ipAddress?: string
) {
  if (teamId === null || teamId === undefined) {
    return;
  }

  const db = getDb();

  const newActivity: NewActivityLog = {
    teamId,
    userId,
    action: type,
    ipAddress: ipAddress || ''
  };
  await db.insert(activityLogs).values(newActivity);
}

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
  redirect: z.string().optional()
});

export const signIn = validatedAction(signInSchema, async (data) => {
  const { email, password, redirect: requestedRedirect } = data;
  const normalizedEmail = normalizeEmail(email);
  const redirectTo = getSafeRedirectPath(requestedRedirect) || '/dashboard';

  let signInStep = 'loading user';

  try {
    const db = getDb();
    const userWithTeam = await db
      .select({
        user: users,
        team: teams
      })
      .from(users)
      .leftJoin(teamMembers, eq(users.id, teamMembers.userId))
      .leftJoin(teams, eq(teamMembers.teamId, teams.id))
      .where(and(eq(users.email, normalizedEmail), isNull(users.deletedAt)))
      .limit(1);

    if (userWithTeam.length === 0) {
      return {
        error: 'Invalid email or password. Please try again.',
        email: normalizedEmail
      };
    }

    const { user: foundUser, team: foundTeam } = userWithTeam[0];

    signInStep = 'verifying password';
    const isPasswordValid = await comparePasswords(
      password,
      foundUser.passwordHash
    );

    if (!isPasswordValid) {
      return {
        error: 'Invalid email or password. Please try again.',
        email: normalizedEmail
      };
    }

    signInStep = 'creating session';
    await Promise.all([
      setSession(foundUser),
      logActivity(foundTeam?.id, foundUser.id, ActivityType.SIGN_IN)
    ]);
  } catch (error) {
    console.error(`Sign-in failed during ${signInStep}:`, error);

    return {
      error: getSignInFailureMessage(),
      email: normalizedEmail
    };
  }

  redirect(redirectTo);
});

const signUpSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(100),
  inviteId: z.string().optional(),
  redirect: z.string().optional()
});

export const signUp = validatedAction(signUpSchema, async (data) => {
  const {
    email,
    password,
    inviteId,
    redirect: requestedRedirect
  } = data;
  const normalizedEmail = normalizeEmail(email);
  const redirectTo = getSafeRedirectPath(requestedRedirect) || '/dashboard';

  if (!isAllowedSignupEmail(normalizedEmail)) {
    return {
      error: getSignupDomainErrorMessage(),
      email: normalizedEmail
    };
  }

  let invitation:
    | typeof invitations.$inferSelect
    | undefined;
  let signUpStep = 'checking existing user';

  try {
    const db = getDb();
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, normalizedEmail))
      .limit(1);

    if (existingUser.length > 0) {
      return {
        error: 'An account already exists for this email. Please sign in.',
        email: normalizedEmail
      };
    }

    if (inviteId) {
      signUpStep = 'validating invitation';
      const invitationId = Number(inviteId);

      if (!Number.isInteger(invitationId)) {
        return {
          error: 'Invalid or expired invitation.',
          email: normalizedEmail
        };
      }

      [invitation] = await db
        .select()
        .from(invitations)
        .where(
          and(
            eq(invitations.id, invitationId),
            eq(invitations.email, normalizedEmail),
            eq(invitations.status, 'pending')
          )
        )
        .limit(1);

      if (!invitation) {
        return {
          error: 'Invalid or expired invitation.',
          email: normalizedEmail
        };
      }
    }

    signUpStep = 'hashing password';
    const passwordHash = await hashPassword(password);

    signUpStep = 'creating user records';
    const { createdUser } = await db.transaction(async (tx) => {
      signUpStep = 'creating user';
      const newUser: NewUser = {
        email: normalizedEmail,
        passwordHash,
        role: invitation?.role ?? 'owner'
      };

      const [createdUser] = await tx.insert(users).values(newUser).returning();

      if (!createdUser) {
        throw new Error('Failed to create user');
      }

      let teamId: number;
      const userRole = invitation?.role ?? 'owner';

      if (invitation) {
        signUpStep = 'accepting invitation';
        teamId = invitation.teamId;

        await tx
          .update(invitations)
          .set({ status: 'accepted' })
          .where(eq(invitations.id, invitation.id));

        await tx.insert(activityLogs).values({
          teamId,
          userId: createdUser.id,
          action: ActivityType.ACCEPT_INVITATION,
          ipAddress: ''
        });
      } else {
        signUpStep = 'creating team';
        const newTeam: NewTeam = {
          name: `${normalizedEmail}'s Team`
        };

        const [createdTeam] = await tx.insert(teams).values(newTeam).returning();

        if (!createdTeam) {
          throw new Error('Failed to create team');
        }

        teamId = createdTeam.id;

        await tx.insert(activityLogs).values({
          teamId,
          userId: createdUser.id,
          action: ActivityType.CREATE_TEAM,
          ipAddress: ''
        });
      }

      signUpStep = 'creating team membership';
      const newTeamMember: NewTeamMember = {
        userId: createdUser.id,
        teamId,
        role: userRole
      };

      await tx.insert(teamMembers).values(newTeamMember);
      signUpStep = 'creating signup activity log';
      await tx.insert(activityLogs).values({
        teamId,
        userId: createdUser.id,
        action: ActivityType.SIGN_UP,
        ipAddress: ''
      });

      return { createdUser };
    });

    signUpStep = 'creating session';
    await setSession(createdUser);
  } catch (error) {
    console.error(`Sign-up failed during ${signUpStep}:`, error);

    return {
      error: getSignUpFailureMessage(error),
      email: normalizedEmail
    };
  }

  redirect(redirectTo);
});

export async function signOut() {
  const user = (await getUser()) as User;
  const userWithTeam = await getUserWithTeam(user.id);
  await logActivity(userWithTeam?.teamId, user.id, ActivityType.SIGN_OUT);
  (await cookies()).delete('session');
}

const updatePasswordSchema = z.object({
  currentPassword: z.string().min(8).max(100),
  newPassword: z.string().min(8).max(100),
  confirmPassword: z.string().min(8).max(100)
});

export const updatePassword = validatedActionWithUser(
  updatePasswordSchema,
  async (data, _, user) => {
    const db = getDb();
    const { currentPassword, newPassword, confirmPassword } = data;

    const isPasswordValid = await comparePasswords(
      currentPassword,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return {
        currentPassword,
        newPassword,
        confirmPassword,
        error: 'Current password is incorrect.'
      };
    }

    if (currentPassword === newPassword) {
      return {
        currentPassword,
        newPassword,
        confirmPassword,
        error: 'New password must be different from the current password.'
      };
    }

    if (confirmPassword !== newPassword) {
      return {
        currentPassword,
        newPassword,
        confirmPassword,
        error: 'New password and confirmation password do not match.'
      };
    }

    const newPasswordHash = await hashPassword(newPassword);
    const userWithTeam = await getUserWithTeam(user.id);

    await Promise.all([
      db
        .update(users)
        .set({ passwordHash: newPasswordHash })
        .where(eq(users.id, user.id)),
      logActivity(userWithTeam?.teamId, user.id, ActivityType.UPDATE_PASSWORD)
    ]);

    return {
      success: 'Password updated successfully.'
    };
  }
);

const deleteAccountSchema = z.object({
  password: z.string().min(8).max(100)
});

export const deleteAccount = validatedActionWithUser(
  deleteAccountSchema,
  async (data, _, user) => {
    const db = getDb();
    const { password } = data;

    const isPasswordValid = await comparePasswords(password, user.passwordHash);
    if (!isPasswordValid) {
      return {
        password,
        error: 'Incorrect password. Account deletion failed.'
      };
    }

    const userWithTeam = await getUserWithTeam(user.id);

    await logActivity(
      userWithTeam?.teamId,
      user.id,
      ActivityType.DELETE_ACCOUNT
    );

    // Soft delete
    await db
      .update(users)
      .set({
        deletedAt: sql`CURRENT_TIMESTAMP`,
        email: sql`CONCAT(email, '-', id, '-deleted')` // Ensure email uniqueness
      })
      .where(eq(users.id, user.id));

    if (userWithTeam?.teamId) {
      await db
        .delete(teamMembers)
        .where(
          and(
            eq(teamMembers.userId, user.id),
            eq(teamMembers.teamId, userWithTeam.teamId)
          )
        );
    }

    (await cookies()).delete('session');
    redirect('/sign-in');
  }
);

const updateAccountSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address')
});

export const updateAccount = validatedActionWithUser(
  updateAccountSchema,
  async (data, _, user) => {
    const db = getDb();
    const { name, email } = data;
    const userWithTeam = await getUserWithTeam(user.id);

    await Promise.all([
      db.update(users).set({ name, email }).where(eq(users.id, user.id)),
      logActivity(userWithTeam?.teamId, user.id, ActivityType.UPDATE_ACCOUNT)
    ]);

    return { name, success: 'Account updated successfully.' };
  }
);

const removeTeamMemberSchema = z.object({
  memberId: z.number()
});

export const removeTeamMember = validatedActionWithUser(
  removeTeamMemberSchema,
  async (data, _, user) => {
    const db = getDb();
    const { memberId } = data;
    const userWithTeam = await getUserWithTeam(user.id);

    if (!userWithTeam?.teamId) {
      return { error: 'User is not part of a team' };
    }

    await db
      .delete(teamMembers)
      .where(
        and(
          eq(teamMembers.id, memberId),
          eq(teamMembers.teamId, userWithTeam.teamId)
        )
      );

    await logActivity(
      userWithTeam.teamId,
      user.id,
      ActivityType.REMOVE_TEAM_MEMBER
    );

    return { success: 'Team member removed successfully' };
  }
);

const inviteTeamMemberSchema = z.object({
  email: z.string().email('Invalid email address'),
  role: z.enum(['member', 'owner'])
});

export const inviteTeamMember = validatedActionWithUser(
  inviteTeamMemberSchema,
  async (data, _, user) => {
    const db = getDb();
    const normalizedEmail = normalizeEmail(data.email);
    const { role } = data;
    const userWithTeam = await getUserWithTeam(user.id);

    if (!userWithTeam?.teamId) {
      return { error: 'User is not part of a team' };
    }

    if (!isAllowedSignupEmail(normalizedEmail)) {
      return { error: getSignupDomainErrorMessage() };
    }

    const existingMember = await db
      .select()
      .from(users)
      .leftJoin(teamMembers, eq(users.id, teamMembers.userId))
      .where(
        and(
          eq(users.email, normalizedEmail),
          eq(teamMembers.teamId, userWithTeam.teamId)
        )
      )
      .limit(1);

    if (existingMember.length > 0) {
      return { error: 'User is already a member of this team' };
    }

    // Check if there's an existing invitation
    const existingInvitation = await db
      .select()
      .from(invitations)
      .where(
        and(
          eq(invitations.email, normalizedEmail),
          eq(invitations.teamId, userWithTeam.teamId),
          eq(invitations.status, 'pending')
        )
      )
      .limit(1);

    if (existingInvitation.length > 0) {
      return { error: 'An invitation has already been sent to this email' };
    }

    // Create a new invitation
    await db.insert(invitations).values({
      teamId: userWithTeam.teamId,
      email: normalizedEmail,
      role,
      invitedBy: user.id,
      status: 'pending'
    });

    await logActivity(
      userWithTeam.teamId,
      user.id,
      ActivityType.INVITE_TEAM_MEMBER
    );

    // TODO: Send invitation email and include ?inviteId={id} to sign-up URL
    // await sendInvitationEmail(email, userWithTeam.team.name, role)

    return { success: 'Invitation sent successfully' };
  }
);
