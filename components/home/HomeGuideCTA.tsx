import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export function HomeGuideCTA() {
  const { guideCta } = site;
  return (
    <section id="guide" className="relative scroll-mt-[72px]">
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
            <Button
              asChild
              className="h-12 shrink-0 rounded-full bg-brand-primary px-7 text-white hover:bg-brand-primary-hover"
            >
              <Link href={guideCta.cta.href}>
                {guideCta.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
