import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { AuthorityPage } from '@/lib/authority-pages';
import { commonAuthorityCTA } from '@/lib/authority-pages';

export function AuthorityPageTemplate({ page }: { page: AuthorityPage }) {
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
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-lg leading-8 text-brand-text">
            {page.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related topics */}
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

      {/* Insights */}
      {page.insightLinks.length > 0 && (
        <section className="border-t border-brand-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-brand-ink">Insights</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {page.insightLinks.map((insight) => (
                <article key={insight.title} className="border border-brand-border p-5">
                  <h3 className="font-semibold text-brand-ink">{insight.title}</h3>
                  <p className="mt-2 text-sm text-brand-text">{insight.description}</p>
                  <Link
                    href={insight.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:underline"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-brand-border bg-brand-muted">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              {commonAuthorityCTA.title}
            </h2>
            <p className="mt-3 text-base text-brand-text">{commonAuthorityCTA.text}</p>
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
