import Link from 'next/link';
import { insightLinks } from '@/lib/authority-pages';

export function HomeInsightsPreview() {
  return (
    <section id="insights">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Insights
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-ink md:text-4xl">
              Practical writing for international trade teams.
            </h2>
          </div>
          <Link
            className="shrink-0 font-semibold text-brand-primary hover:underline"
            href="/insights"
          >
            Read insights
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {insightLinks.map((insight) => (
            <article key={insight.title} className="border border-brand-border p-5">
              <h3 className="text-lg font-semibold text-brand-ink">{insight.title}</h3>
              <p className="mt-2 text-brand-text">{insight.description}</p>
              <Link
                className="mt-4 inline-block text-sm font-semibold text-brand-primary hover:underline"
                href={insight.href}
              >
                View topic
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
