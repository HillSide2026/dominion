import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const servicePageContainerClassName =
  'mx-auto max-w-content px-4 sm:px-6 lg:px-8';

type ServicePageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

type ServicePageSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

type ServicePageCtaProps = {
  description: string;
  href?: string;
};

export function ServicePageHero({
  eyebrow,
  title,
  description
}: ServicePageHeroProps) {
  return (
    <section className="bg-white">
      <div
        className={cn(
          servicePageContainerClassName,
          'py-28 sm:py-32 lg:py-40'
        )}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-eyebrow text-brand-primary">
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-brand-ink sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-brand-text">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServicePageSection({
  children,
  className,
  contentClassName
}: ServicePageSectionProps) {
  return (
    <section className={cn('bg-white', className)}>
      <div
        className={cn(
          servicePageContainerClassName,
          'py-24 sm:py-28 lg:py-32',
          contentClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function ServicePageCta({
  description,
  href = '/contact'
}: ServicePageCtaProps) {
  return (
    <ServicePageSection contentClassName="pt-8 pb-24 sm:pb-28 lg:pb-32">
      <div className="max-w-2xl">
        <p className="text-2xl font-semibold leading-tight text-brand-ink sm:text-3xl">
          {description}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 h-12 rounded-full bg-brand-primary px-7 text-white hover:bg-brand-primary-hover"
        >
          <Link href={href}>
            Speak with us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </ServicePageSection>
  );
}
