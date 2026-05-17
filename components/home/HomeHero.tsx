import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export function HomeHero() {
  const { hero } = site;
  return (
    <section className="relative">
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
            <Button
              asChild
              className="h-12 rounded-full bg-brand-primary px-7 text-white hover:bg-brand-primary-hover"
            >
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-brand-border px-7 text-brand-ink hover:bg-brand-muted"
            >
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
