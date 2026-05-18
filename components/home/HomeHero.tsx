import Link from 'next/link';
import { site } from '@/lib/site';

export function HomeHero() {
  const { hero } = site;
  return (
    <section className="relative not-prose">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-primary">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-ink md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-brand-text md:text-xl">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
