import Link from 'next/link';
import { site } from '@/lib/site';

export function HomeFinalCTA() {
  const { finalCta } = site;
  return (
    <section id="contact" className="relative not-prose scroll-mt-[72px]">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {finalCta.eyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-ink md:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 text-lg text-brand-text">{finalCta.description}</p>
          <div className="mt-8">
            <Link href={finalCta.cta.href} className="btn-primary">
              {finalCta.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
