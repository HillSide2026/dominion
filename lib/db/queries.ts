import { desc, and, eq, isNull } from 'drizzle-orm';
import { getDb } from './drizzle';
import {
  activityLogs,
  cases,
  diagnosticAssessments,
  deliverables,
  followUps,
  marketReviews,
  teamMembers,
  users
} from './schema';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';

export async function getUser() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  let sessionData;

  try {
    sessionData = await verifyToken(sessionCookie.value);
  } catch (error) {
    console.error('Failed to verify session token:', error);
    return null;
  }

  if (
    !sessionData ||
    !sessionData.user ||
    typeof sessionData.user.id !== 'number'
  ) {
    return null;
  }

  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }

  try {
    const db = getDb();
    const user = await db
      .select()
      .from(users)
      .where(and(eq(users.id, sessionData.user.id), isNull(users.deletedAt)))
      .limit(1);

    if (user.length === 0) {
      return null;
    }

    return user[0];
  } catch (error) {
    console.error('Failed to load user from database:', error);
    return null;
  }
}

export async function getUserWithTeam(userId: number) {
  const db = getDb();
  const result = await db
    .select({
      user: users,
      teamId: teamMembers.teamId
    })
    .from(users)
    .leftJoin(teamMembers, eq(users.id, teamMembers.userId))
    .where(eq(users.id, userId))
    .limit(1);

  return result[0];
}

export async function getActivityLogs() {
  const user = await getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const db = getDb();
  return await db
    .select({
      id: activityLogs.id,
      action: activityLogs.action,
      timestamp: activityLogs.timestamp,
      ipAddress: activityLogs.ipAddress,
      userName: users.name
    })
    .from(activityLogs)
    .leftJoin(users, eq(activityLogs.userId, users.id))
    .where(eq(activityLogs.userId, user.id))
    .orderBy(desc(activityLogs.timestamp))
    .limit(10);
}

export async function getTeamForUser() {
  const user = await getUser();
  if (!user) {
    return null;
  }

  const db = getDb();
  const result = await db.query.teamMembers.findFirst({
    where: eq(teamMembers.userId, user.id),
    with: {
      team: {
        with: {
          teamMembers: {
            with: {
              user: {
                columns: {
                  id: true,
                  name: true,
                  email: true
                }
              }
            }
          }
        }
      }
    }
  });

  return result?.team || null;
}

export async function getCasesForCurrentTeam() {
  const team = await getTeamForUser();
  if (!team) {
    return [];
  }

  const db = getDb();
  return db
    .select()
    .from(cases)
    .where(eq(cases.teamId, team.id))
    .orderBy(desc(cases.updatedAt));
}

export async function getCaseForCurrentTeam(caseId: number) {
  const team = await getTeamForUser();
  if (!team) {
    return null;
  }

  const db = getDb();
  const [caseRecord] = await db
    .select()
    .from(cases)
    .where(and(eq(cases.id, caseId), eq(cases.teamId, team.id)))
    .limit(1);

  if (!caseRecord) {
    return null;
  }

  const [latestDiagnostic] = await db
    .select()
    .from(diagnosticAssessments)
    .where(eq(diagnosticAssessments.caseId, caseRecord.id))
    .orderBy(desc(diagnosticAssessments.createdAt))
    .limit(1);

  const [marketReview] = await db
    .select()
    .from(marketReviews)
    .where(eq(marketReviews.caseId, caseRecord.id))
    .orderBy(desc(marketReviews.updatedAt))
    .limit(1);

  const [latestDeliverable] = await db
    .select()
    .from(deliverables)
    .where(eq(deliverables.caseId, caseRecord.id))
    .orderBy(desc(deliverables.updatedAt))
    .limit(1);

  const caseFollowUps = await db
    .select()
    .from(followUps)
    .where(eq(followUps.caseId, caseRecord.id))
    .orderBy(desc(followUps.createdAt));

  const caseActivity = await db
    .select({
      id: activityLogs.id,
      action: activityLogs.action,
      timestamp: activityLogs.timestamp,
      userName: users.name,
      userEmail: users.email
    })
    .from(activityLogs)
    .leftJoin(users, eq(activityLogs.userId, users.id))
    .where(eq(activityLogs.caseId, caseRecord.id))
    .orderBy(desc(activityLogs.timestamp))
    .limit(12);

  return {
    case: caseRecord,
    latestDiagnostic: latestDiagnostic || null,
    marketReview: marketReview || null,
    latestDeliverable: latestDeliverable || null,
    followUps: caseFollowUps,
    activity: caseActivity
  };
}
