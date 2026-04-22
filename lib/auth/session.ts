import { compare, hash } from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NewUser } from '@/lib/db/schema';

const SALT_ROUNDS = 10;
const isSecureCookie = process.env.NODE_ENV === 'production';

function getSigningKey() {
  const authSecret = process.env.AUTH_SECRET;

  if (!authSecret) {
    throw new Error('AUTH_SECRET environment variable is not set');
  }

  return new TextEncoder().encode(authSecret);
}

export async function hashPassword(password: string) {
  return hash(password, SALT_ROUNDS);
}

export async function comparePasswords(
  plainTextPassword: string,
  hashedPassword: string
) {
  return compare(plainTextPassword, hashedPassword);
}

type SessionData = {
  user: { id: number };
  expires: string;
};

export async function signToken(payload: SessionData) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1 day from now')
    .sign(getSigningKey());
}

export async function verifyToken(input: string) {
  const { payload } = await jwtVerify(input, getSigningKey(), {
    algorithms: ['HS256'],
  });
  return payload as SessionData;
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  if (!session) return null;

  try {
    return await verifyToken(session);
  } catch (error) {
    console.error('Failed to read session:', error);
    return null;
  }
}

export async function setSession(user: NewUser) {
  const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const session: SessionData = {
    user: { id: user.id! },
    expires: expiresInOneDay.toISOString(),
  };
  const encryptedSession = await signToken(session);
  (await cookies()).set('session', encryptedSession, {
    expires: expiresInOneDay,
    httpOnly: true,
    secure: isSecureCookie,
    sameSite: 'lax',
    path: '/',
  });
}
