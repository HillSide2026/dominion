import type { Metadata } from 'next';
import {
  ServicePageCta,
  ServicePageHero,
  ServicePageSection
} from '@/components/marketing/service-page';

const serviceAreas = [
  {
    title: 'Payment Infrastructure',
    text: 'Designing how funds move between counterparties.',
    items: [
      'Cross-border payables and receivables',
      'Multi-currency payment flows',
      'Provider selection and structuring'
    ]
  },
  {
    title: 'FX Optimization',
    text: 'Managing how and where currency conversion occurs.',
    items: [
      'Currency conversion strategy',
      'Spread reduction',
      'Timing and routing optimization'
    ]
  },
  {
    title: 'Flow Structuring',
    text: 'Mapping and aligning transaction flows end to end.',
    items: [
      'Payment flow mapping',
      'Alignment with trade structures',
      'Reduction of friction and cost leakage'
    ]
  },
  {
    title: 'Ongoing Optimization',
    text: 'Ensuring performance as complexity increases.',
    items: [
      'Monitoring pricing and execution',
      'Adjusting providers and routing',
      'Scaling with business growth'
    ]
  }
];

const differentiators = [
  'Not tied to a single provider',
  'Integrated with trade advisory',
  'Focused on total cost, not headline rates',
  'Structured, not transactional'
];

const idealClients = [
  'Businesses with significant foreign exchange exposure',
  'Companies paying or receiving internationally',
  'Firms with inefficient or fragmented payment setups',
  'High-growth cross-border operators'
];

export const metadata: Metadata = {
  title: 'Cross-Border Payment Services | Dominion Partners',
  description:
    'Structuring and optimizing how money moves internationally.'
};

export default function PaymentServicesPage() {
  return (
    <main className="bg-white">
      <ServicePageHero
        eyebrow="Payment Services"
        title="Cross-Border Payment Services"
        description="Structuring and optimizing how money moves internationally."
      />

      <ServicePageSection>
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              We support businesses in managing the financial layer of
              cross-border activity including payments, foreign exchange, and
              settlement.
            </p>
            <p>
              Our approach focuses on efficiency, transparency, and control
              across the full lifecycle of a transaction.
            </p>
            <p>
              We work across providers and jurisdictions to ensure that payment
              flows align with underlying trade structures.
            </p>
          </div>
        </div>
      </ServicePageSection>

      <ServicePageSection className="bg-brand-muted">
        <div>
          <div className="max-w-[700px]">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              How We Help
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {serviceAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[28px] border border-brand-border bg-white p-8 shadow-soft sm:p-10"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                  {area.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-brand-text">
                  {area.text}
                </p>
                <ul className="mt-8 space-y-4 border-t border-brand-border pt-6">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-7 text-brand-ink"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </ServicePageSection>

      <ServicePageSection>
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Payments as infrastructure
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>Most businesses treat payments as an afterthought.</p>
            <p>We treat them as a core part of cross-border strategy.</p>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-brand-ink">
              How we differ
            </h3>
            <ul className="mt-6 grid gap-x-10 gap-y-4 text-base leading-7 text-brand-ink sm:grid-cols-2">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ServicePageSection>

      <ServicePageSection className="bg-brand-muted">
        <div className="max-w-[820px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Who this is for
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-4 text-lg leading-8 text-brand-ink sm:grid-cols-2">
            {idealClients.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ServicePageSection>

      <ServicePageCta description="Optimize how your business moves money across borders." />
    </main>
  );
}
