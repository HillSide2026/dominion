export const ALLOWED_SIGNUP_EMAIL_DOMAINS = [
  'levine-law.ca',
  'levinelegal.ca',
  'levinelegalservices.com'
] as const;

export const ALLOWED_SIGNUP_DOMAINS_TEXT =
  ALLOWED_SIGNUP_EMAIL_DOMAINS.join(', ');

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isAllowedSignupEmail(email: string) {
  const normalizedEmail = normalizeEmail(email);
  const [, domain] = normalizedEmail.split('@');

  return Boolean(
    domain &&
      ALLOWED_SIGNUP_EMAIL_DOMAINS.includes(
        domain as (typeof ALLOWED_SIGNUP_EMAIL_DOMAINS)[number]
      )
  );
}

export function getSignupDomainErrorMessage() {
  return `Portal access is currently limited to approved domains: ${ALLOWED_SIGNUP_DOMAINS_TEXT}.`;
}

export function getSafeRedirectPath(redirect?: string | null) {
  if (!redirect || !redirect.startsWith('/') || redirect.startsWith('//')) {
    return null;
  }

  return redirect;
}
