import Link from 'next/link';
import { site } from '@/lib/site';

export function HomeGuideCTA() {
  const { guideCta } = site;
  return (
    <section id="guide" className="relative not-prose scroll-mt-[72px]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="border border-brand-border p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
                {guideCta.eyebrow}
              </p>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-brand-ink md:text-3xl">
                {guideCta.title}
              </h2>
              <p className="mt-3 text-brand-text">{guideCta.description}</p>
            </div>
            <Link href={guideCta.cta.href} className="btn-primary">
              {guideCta.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
