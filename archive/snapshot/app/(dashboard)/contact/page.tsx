'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  submitContactIntake,
  type ContactIntakeState
} from './actions';

const fieldClassName = 'space-y-2';

export default function ContactPage() {
  const [state, action, pending] = useActionState<
    ContactIntakeState,
    FormData
  >(submitContactIntake, {});
  const values = state.values || {};

  return (
    <main className="bg-white">
      <section className="mx-auto grid max-w-content gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-eyebrow text-brand-primary">
            General Inquiries
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            Strategic Advisory for International Business
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-text">
            We support organizations operating across borders through
            integrated trade and strategic advisory services.
          </p>
          <div className="mt-10 space-y-5 text-sm leading-6 text-brand-text">
            {[
              'Advisory support across trade, treasury, and regulatory matters',
              'Strategic guidance for organizations operating internationally',
              'Collaboration through a global network of professional relationships'
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-brand-border bg-white p-8 shadow-soft sm:p-10">
          {state.success ? (
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-brand-ink">
                  Message received
                </h2>
                <p className="mt-3 text-base leading-7 text-brand-text">
                  {state.success}
                </p>
              </div>
              <Button asChild className="bg-brand-primary text-white hover:bg-brand-primary-hover">
                <Link href="/sign-in">
                  Access client portal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <form action={action} className="space-y-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className={fieldClassName}>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue={values.name} required />
                </div>
                <div className={fieldClassName}>
                  <Label htmlFor="company">Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    defaultValue={values.company}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className={fieldClassName}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={values.email}
                    required
                  />
                </div>
                <div className={fieldClassName}>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    defaultValue={values.phone}
                  />
                </div>
              </div>

              <div className={fieldClassName}>
                <Label htmlFor="challenge">How can we support your team?</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  defaultValue={values.challenge}
                  rows={4}
                  required
                />
              </div>

              {state.error && (
                <p className="text-sm text-red-500">{state.error}</p>
              )}

              <Button
                type="submit"
                className="h-12 rounded-full bg-brand-primary px-7 text-white hover:bg-brand-primary-hover"
                disabled={pending}
              >
                {pending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Begin Conversation
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
