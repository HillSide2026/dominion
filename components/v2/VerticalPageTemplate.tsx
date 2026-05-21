import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { VerticalPageData } from '@/lib/v2/vertical-pages';

export function VerticalPageTemplate({ page }: { page: VerticalPageData }) {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-text">{page.description}</p>
            <p className="mt-4 text-base leading-7 text-brand-text">{page.audience}</p>
          </div>
        </div>
      </section>

      {/* Practice Points */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
            {page.practiceTitle}
          </h2>
          <ul className="mt-8 space-y-4">
            {page.practicePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base leading-7 text-brand-text">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Models Grid */}
      <section className="border-t border-brand-border bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-brand-ink">
            {page.modelsTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.models.map((model) => (
              <div
                key={model.title}
                className="border border-brand-border bg-white p-6"
              >
                <h3 className="font-semibold text-brand-ink">{model.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-text">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation */}
      <section className="border-t border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              {page.regulationTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-brand-text">{page.regulationText}</p>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      {page.relatedTopics.length > 0 && (
        <section className="border-t border-brand-border bg-brand-muted">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-brand-ink">
              Related topics
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.relatedTopics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="block border border-brand-border bg-white p-5 transition-colors hover:border-brand-primary"
                >
                  <h3 className="font-semibold text-brand-ink">{topic.title}</h3>
                  <p className="mt-2 text-sm text-brand-text">{topic.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-brand-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-base leading-7 text-brand-text">{page.ctaText}</p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary hover:underline"
            >
              Speak with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
