'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { FlowSignalLogo } from '@/components/brand/flowsignal-logo';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';
import { ALLOWED_SIGNUP_DOMAINS_TEXT } from '@/lib/auth/signup-policy';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <div className="flex min-h-[100dvh] flex-col justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <FlowSignalLogo lockup imageClassName="w-48" />
        </div>
        <h2 className="mt-8 text-center text-3xl font-semibold text-brand-ink">
          {mode === 'signin'
            ? 'Login to Dominion Partners'
            : 'Create client portal access'}
        </h2>
        <p className="mt-3 text-center text-sm leading-6 text-brand-text">
          {mode === 'signin'
            ? 'Access the client portal, diagnostic tools, and review resources.'
            : 'Use your work email to create a protected Dominion Partners workspace.'}
        </p>
        {mode === 'signup' && (
          <p className="mt-4 text-center text-xs leading-6 text-brand-text">
            Beta access is limited to approved domains:
            {' '}
            {ALLOWED_SIGNUP_DOMAINS_TEXT}
          </p>
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" action={formAction}>
          <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} />
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="relative block w-full appearance-none rounded-md border border-brand-border px-3 py-2 text-brand-ink placeholder:text-brand-text focus:z-10 focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === 'signin' ? 'current-password' : 'new-password'
                }
                required
                minLength={8}
                maxLength={100}
                className="relative block w-full appearance-none rounded-md border border-brand-border px-3 py-2 text-brand-ink placeholder:text-brand-text focus:z-10 focus:border-brand-primary focus:outline-none focus:ring-brand-primary sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {state?.error && (
            <div className="text-red-500 text-sm">{state.error}</div>
          )}

          <div>
            <Button
              type="submit"
              className="flex w-full items-center justify-center border border-transparent bg-brand-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  {mode === 'signin' ? 'Signing in...' : 'Creating access...'}
                </>
              ) : mode === 'signin' ? (
                'Sign in'
              ) : (
                'Sign up'
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                {mode === 'signin'
                  ? 'New to Dominion Partners?'
                  : 'Already have access?'}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                redirect ? `?redirect=${redirect}` : ''
              }`}
              className="flex w-full justify-center rounded-md border border-brand-border bg-white px-4 py-2 text-sm font-medium text-brand-ink shadow-sm hover:bg-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              {mode === 'signin'
                ? 'Create client portal access'
                : 'Login with existing access'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
