import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { insightLinks } from '@/lib/authority-pages';

const topics = [
  'Trade policy',
  'Tariffs',
  'Export controls',
  'Customs',
  'Trade finance',
  'AML compliance'
];

export default function InsightsPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Insights
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-5xl">
              Practical writing for international trade and advisory teams.
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-text">
              Short, practical perspectives for organizations navigating cross-border
              trade, treasury, regulatory compliance, and market access decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="border border-brand-border px-3 py-1 text-xs font-medium text-brand-text"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border bg-brand-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {insightLinks.map((insight) => (
            <article
              key={insight.title}
              className="border border-brand-border bg-white p-6"
            >
              <h2 className="text-xl font-semibold leading-7 text-brand-ink">
                {insight.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-brand-text">
                {insight.description}
              </p>
              <Link
                href={insight.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:underline"
              >
                View topic <ArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              About these notes
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink">
              Written for practitioners, not general audiences.
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-text">
              These notes are written for trade, treasury, and advisory professionals
              who carry direct responsibility for cross-border client situations. They
              do not constitute legal, tax, or compliance advice.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Member resources
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-ink">
              Downloadable review materials included.
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-text">
              Sign in to access client review materials and structured advisory
              resources available through the client portal.
            </p>
            <Button
              asChild
              className="mt-6 bg-brand-primary text-white hover:bg-brand-primary-hover"
            >
              <Link href="/sign-in">
                Client portal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
