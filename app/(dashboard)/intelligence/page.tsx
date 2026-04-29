import Link from 'next/link';
import { ArrowRight, FileText, Gauge, Route, Scale, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    title: 'Transaction context',
    text: 'Capture where funds are expected to move, which parties are involved, and what business purpose sits behind the transaction.',
    icon: Route
  },
  {
    title: 'Review signals',
    text: 'Flag practical questions around documentation, timing, concentration, and handoff points for professional review.',
    icon: Gauge
  },
  {
    title: 'Decision support',
    text: 'Turn scattered transaction details into notes, checklists, and review summaries that advisory teams can use with clients.',
    icon: FileText
  }
];

const disciplines = [
  {
    title: 'Trade finance',
    text: 'Letter of credit terms, documentary collections, pre- and post-shipment financing structures, and exporter/importer obligations.',
    icon: Globe
  },
  {
    title: 'Payments and FX',
    text: 'Correspondent banking chains, FX conversion mechanics, payment timing windows, and intermediary obligations.',
    icon: ArrowUpRight
  },
  {
    title: 'Settlement mechanics',
    text: 'Clearing and settlement arrangements, netting exposure, nostro and vostro balances, and intraday liquidity positioning.',
    icon: Scale
  },
  {
    title: 'Compliance preparation',
    text: 'AML documentation sets, sanctions screening records, regulatory reporting obligations, and jurisdiction-specific filing requirements.',
    icon: ShieldCheck
  }
];

export default function IntelligencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-primary">
              Advisory model
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
              Structure cross-border transaction reviews before advice is finalized.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dominion is designed to help teams organize facts, identify
              missing context, and produce consistent review materials for
              cross-border client situations.
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center bg-brand-primary text-white">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-gray-950">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* What Dominion helps clarify */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold text-gray-950">
              What Dominion helps clarify
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              The model is intentionally practical. It gives accountants,
              advisors, and internal operators a common review frame for client
              transaction questions.
            </p>
          </div>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {[
              'Which corridors and parties are material to the review.',
              'Which documents are complete, missing, or unclear.',
              'Where timing, reporting, or operational questions need attention.',
              'Which notes should be prepared before a client discussion.',
              'Which specialist — tax, legal, compliance, or banking — owns the next step.',
              'Where records require escalation before a transaction proceeds.'
            ].map((item) => (
              <p key={item} className="py-4 text-sm leading-6 text-gray-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Discipline coverage */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-primary">
              Coverage
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-950">
              Four disciplines, one review framework.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Most cross-border mandates touch more than one of these areas.
              Dominion gives teams a single frame for organizing facts across
              all of them.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d) => (
              <article key={d.title} className="bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center bg-brand-primary text-white">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-950">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology note */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-primary">
              Methodology
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-950">
              Neutral by design.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Dominion does not recommend transactions, counterparties, or
              jurisdictions. The advisory model is designed to produce facts,
              structured questions, and documentation records — and to stop
              there. Specialist judgment belongs with the accountant, lawyer,
              compliance officer, or banker who holds the relevant mandate.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Organize facts before specialist review begins.',
                'Separate what is known from what is missing.',
                'Produce consistent records across engagements.',
                'Reduce rework at the handoff between advisory and specialist teams.'
              ].map((item) => (
                <div key={item} className="border-l-2 border-brand-secondary pl-4">
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Member tools are available after login.
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Access the transaction diagnostics calculator, route review
              materials, and downloadable resources from the protected workspace.
            </p>
          </div>
          <Button asChild className="bg-white text-gray-950 hover:bg-gray-100">
            <Link href="/sign-in">
              Login
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
