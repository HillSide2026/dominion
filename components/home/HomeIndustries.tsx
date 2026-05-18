import Link from 'next/link';
import { verticalLinks } from '@/lib/vertical-pages';

export function HomeIndustries() {
  return (
    <section id="services" className="relative scroll-mt-[72px]">
      <div className="mx-auto max-w-7xl px-4 pb-12 md:px-6 md:pb-16 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">
              Services
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-ink md:text-4xl">
              Integrated Advisory for International Trade and Operations.
            </h2>
            <p className="mt-4 text-lg text-brand-text">
              Built for organizations operating where trade policy, supply chains, treasury, and
              regulatory frameworks meet.
            </p>
            <Link
              className="mt-6 inline-block font-semibold text-brand-primary hover:underline"
              href="/trade-advisory"
            >
              Explore services
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {verticalLinks.map((service) => (
              <li key={service.title}>
                <Link
                  className="block border border-brand-border px-4 py-3 font-medium text-brand-ink transition-colors hover:border-brand-primary"
                  href={service.href}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
