import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export function HomeFinalCTA() {
  const { finalCta } = site;
  return (
    <section id="contact" className="bg-[#fafaf9]">
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
            <Button
              asChild
              className="h-12 rounded-full bg-brand-primary px-7 text-white hover:bg-brand-primary-hover"
            >
              <Link href={finalCta.cta.href}>{finalCta.cta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
