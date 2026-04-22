import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Landmark
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const capabilities = [
  {
    label: 'Trade',
    title: 'Trade Advisory',
    description:
      'Market entry, trade structuring, and cross-border operational strategy.',
    icon: Globe2,
    href: '/trade-advisory'
  },
  {
    label: 'Payments',
    title: 'Payment Services',
    description:
      'Cross-border payments, FX optimization, and financial flow structuring for international businesses.',
    icon: Landmark,
    href: '/payment-services'
  }
];

const complexityPoints = [
  'Operate across trade and payments',
  'Advise at the strategic level and execute at the financial layer',
  'Access to global network',
  'Focus on cost, control, and efficiency of capital movement'
];

const audiences = [
  {
    title: 'Exporters and importers',
    description: 'Organizations buying and selling across borders'
  },
  {
    title: 'International distributors',
    description:
      'Businesses coordinating multi-market supply and settlement flows'
  },
  {
    title: 'Industry and trade associations',
    description: 'Institutions supporting member cross-border activity'
  },
  {
    title: 'Governments and public bodies',
    description:
      'Public-sector entities involved in trade, development, or international programs'
  }
];

const processSteps = [
  {
    title: 'Assess',
    description: 'Trade flows, counterparties, and payment structures'
  },
  {
    title: 'Structure',
    description: 'Jurisdiction, counterparties, and financial pathways'
  },
  {
    title: 'Optimize',
    description: 'Payments, FX, and ongoing flow efficiency'
  }
];

const containerClassName = 'mx-auto max-w-content px-4 sm:px-6 lg:px-8';

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="bg-white">
        <div className={`${containerClassName} py-24 sm:py-28 lg:py-32`}>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-eyebrow text-brand-primary">
              Cross-Border Advisory
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
              Cross-Border Trade and Payment Infrastructure
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-text sm:text-xl">
              We advise, structure, and optimize international trade and the
              movement of money behind it.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-brand-primary px-7 text-white hover:bg-brand-primary-hover"
              >
                <Link href="/sign-in">
                  Access Client Portal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-brand-border px-7 text-brand-ink hover:bg-brand-muted"
              >
                <Link href="#services">View our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-border bg-white">
        <div className={`${containerClassName} py-24 sm:py-28 lg:py-32`}>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Two Integrated Capabilities
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-text">
              Dominion Partners operates at the intersection of global trade
              and financial infrastructure. We support clients in structuring
              cross-border activity and ensuring the underlying movement of
              funds is efficient, compliant, and cost-effective.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-brand-muted">
        <div className={`${containerClassName} py-24 sm:py-28 lg:py-32`}>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
                href={capability.href}
                className="group flex min-h-[280px] flex-col rounded-[28px] border border-brand-border bg-white p-8 shadow-soft transition-colors hover:border-brand-primary/20 sm:p-10 lg:p-12"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-card text-brand-primary">
                    <capability.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-eyebrow text-brand-text">
                    {capability.label}
                  </span>
                </div>
                <h3 className="mt-10 text-3xl font-semibold tracking-tight text-brand-ink">
                  {capability.title}
                </h3>
                <p className="mt-5 max-w-lg text-lg leading-8 text-brand-text">
                  {capability.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold text-brand-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${containerClassName} py-24 sm:py-28 lg:py-32`}>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                Built for Cross-Border Complexity
              </h2>
              <p className="mt-6 text-lg leading-8 text-brand-text">
                We are built for transactions that cross jurisdictions,
                counterparties, currencies, and operational systems.
              </p>
            </div>
            <div className="rounded-[28px] border border-brand-border bg-brand-card p-8 sm:p-10">
              <div className="divide-y divide-brand-border">
                {complexityPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary shadow-soft ring-1 ring-brand-border">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-base font-medium leading-7 text-brand-ink sm:text-lg">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-muted">
        <div className={`${containerClassName} py-24 sm:py-28 lg:py-32`}>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Who We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-text">
              We support organizations managing complex cross-border trade and
              financial activity.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-brand-border sm:grid-cols-2">
            {audiences.map((audience) => (
              <article key={audience.title} className="bg-white p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-brand-ink">
                  {audience.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-brand-text">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="bg-white">
        <div className={`${containerClassName} py-24 sm:py-28 lg:py-32`}>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              How We Work
            </h2>
          </div>
          <div className="relative mt-14">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-brand-border lg:block" />
            <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-border bg-white text-sm font-semibold text-brand-primary shadow-soft">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-lg leading-8 text-brand-text">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 sm:pb-28 lg:pb-32">
        <div className={containerClassName}>
          <div className="rounded-[32px] bg-slate-950 px-8 py-14 sm:px-12 sm:py-16 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Cross-border operations require both strategic clarity and
                financial precision.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We provide both.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-10 h-12 rounded-full bg-white px-7 text-brand-ink hover:bg-brand-card lg:mt-0"
            >
              <Link href="/sign-up">
                Speak with us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
