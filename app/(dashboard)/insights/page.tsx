import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insights = [
  {
    title: 'Why cross-border transaction reviews need a shared fact base',
    category: 'Review practice',
    summary:
      'Teams often begin with scattered statements, invoices, and email notes. A common fact base reduces rework before specialist review and makes the handoff to legal or compliance materially cleaner.'
  },
  {
    title: 'Questions accountants can ask before a route review',
    category: 'Client intake',
    summary:
      'Corridor, counterparty, purpose, documentation, and timing questions can be gathered early without moving beyond the advisory role. These are the inputs that specialist teams consistently say they do not receive.'
  },
  {
    title: 'Turning document gaps into review priorities',
    category: 'Documentation',
    summary:
      'Missing records do not all carry the same operational weight. Dominion separates incomplete facts from higher-priority review items so teams can sequence their preparation more effectively.'
  },
  {
    title: 'How trade finance reviews differ from payment corridor reviews',
    category: 'Trade finance',
    summary:
      'Documentary trade and open-account payments involve different parties, different timing structures, and different document requirements. Understanding the distinction helps accountants ask better questions before the mandate deepens.'
  },
  {
    title: 'The role of the correspondent bank in cross-border review',
    category: 'Payments',
    summary:
      'Correspondent banking relationships introduce intermediary risk, fee uncertainty, and potential delays that clients rarely disclose unprompted. A structured intake process surfaces these earlier.'
  },
  {
    title: 'Preparing a settlement review for institutional clients',
    category: 'Settlement',
    summary:
      'Institutional mandates involving netting, nostro positioning, or intraday liquidity require a different level of documentation than standard payment flows. A review brief that maps these mechanics early reduces escalation risk.'
  }
];

const topics = [
  'Review practice',
  'Client intake',
  'Documentation',
  'Trade finance',
  'Payments',
  'Settlement'
];

export default function InsightsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0614b8]">Insights</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
              Notes on cross-border transaction review and advisory preparation.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Short, practical perspectives for accounting and advisory teams
              working with client cross-border transaction questions.
            </p>
          </div>
        </div>
      </section>

      {/* Topic tags */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {insights.map((insight) => (
            <article key={insight.title} className="bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase text-[#0614b8]">
                {insight.category}
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-7 text-gray-950">
                {insight.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {insight.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* About the insights */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#0614b8]">
              About these notes
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-950">
              Written for practitioners, not general audiences.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              These notes are written for accountants, advisors, and treasury
              professionals who carry direct responsibility for cross-border
              client situations. They do not constitute legal, tax, or
              compliance advice.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0614b8]">
              Member resources
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-950">
              Downloadable review materials included.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Sign in to access the transaction diagnostics calculator, route
              review brief, and client intake download templates — structured
              for repeat use across engagements.
            </p>
            <Button
              asChild
              className="mt-6 bg-[#0614b8] text-white hover:bg-[#07108f]"
            >
              <Link href="/sign-in">
                Login
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-white">
              Member resources include downloadable review materials.
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">
              Sign in to access the diagnostics calculator, route review brief,
              and client intake downloads.
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
