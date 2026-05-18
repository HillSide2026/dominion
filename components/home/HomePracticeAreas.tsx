import Link from 'next/link';
import { authorityLinks } from '@/lib/authority-pages';

export function HomePracticeAreas() {
  return (
    <section id="practice-areas" className="relative scroll-mt-[72px]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
            Trade topics
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-ink md:text-4xl">
            Advisory Intelligence for the Trade Decisions Organizations Actually Face.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {authorityLinks.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="block border border-brand-border p-5 transition-colors hover:border-brand-primary"
            >
              <h3 className="text-lg font-semibold text-brand-ink">{area.title}</h3>
              <p className="mt-2 text-brand-text">{area.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            className="font-semibold text-brand-primary hover:underline"
            href="/trade-advisory"
          >
            View all topics
          </Link>
        </div>
      </div>
    </section>
  );
}
