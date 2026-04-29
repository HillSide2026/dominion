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
      <section className="mx-auto grid max-w-content gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-eyebrow text-brand-primary">
            Export Intake
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
            Help Canadian product businesses export with confidence.
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-text">
            Tell us what you sell, where you want to go, and what is blocking
            the next step. Dominion will turn the intake into a structured
            advisory review.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-6 text-brand-text">
            {[
              'Lead capture becomes a structured intake.',
              'Qualified opportunities can become cases.',
              'Cases move into diagnostics, market review, and deliverables.'
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-brand-border bg-white p-6 shadow-soft sm:p-8">
          {state.success ? (
            <div className="space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-brand-ink">
                  Intake received
                </h2>
                <p className="mt-3 text-sm leading-6 text-brand-text">
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
            <form action={action} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className={fieldClassName}>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue={values.name} required />
                </div>
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
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className={fieldClassName}>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    defaultValue={values.company}
                    required
                  />
                </div>
                <div className={fieldClassName}>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    defaultValue={values.website}
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className={fieldClassName}>
                <Label htmlFor="product">What product are you exporting?</Label>
                <Textarea
                  id="product"
                  name="product"
                  defaultValue={values.product}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className={fieldClassName}>
                  <Label htmlFor="targetMarket">Target market</Label>
                  <Input
                    id="targetMarket"
                    name="targetMarket"
                    defaultValue={values.targetMarket}
                    required
                  />
                </div>
                <div className={fieldClassName}>
                  <Label htmlFor="currentStage">Current export stage</Label>
                  <Input
                    id="currentStage"
                    name="currentStage"
                    defaultValue={values.currentStage}
                    placeholder="Exploring, quoting, shipping..."
                  />
                </div>
              </div>

              <div className={fieldClassName}>
                <Label htmlFor="challenge">What do you need help with?</Label>
                <Textarea
                  id="challenge"
                  name="challenge"
                  defaultValue={values.challenge}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className={fieldClassName}>
                  <Label htmlFor="timeline">Timeline</Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    defaultValue={values.timeline}
                    placeholder="This month, this quarter..."
                  />
                </div>
                <div className={fieldClassName}>
                  <Label htmlFor="message">Other notes</Label>
                  <Input
                    id="message"
                    name="message"
                    defaultValue={values.message}
                  />
                </div>
              </div>

              {state.error && (
                <p className="text-sm text-red-500">{state.error}</p>
              )}

              <Button
                type="submit"
                className="bg-brand-primary text-white hover:bg-brand-primary-hover"
                disabled={pending}
              >
                {pending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit intake
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
