import type { Metadata } from 'next';
import {
  ServicePageCta,
  ServicePageHero,
  ServicePageSection
} from '@/components/marketing/service-page';

const serviceAreas = [
  {
    title: 'Cross-Border Payment Infrastructure',
    text: 'Designing how funds move across entities, counterparties, and jurisdictions.',
    items: [
      'Multi-currency payables and receivables',
      'Provider selection and structuring',
      'Settlement efficiency and cost reduction'
    ]
  },
  {
    title: 'FX Strategy and Optimization',
    text: 'Managing currency exposure across international operations.',
    items: [
      'Currency exposure assessment',
      'Conversion strategy and spread reduction',
      'Timing and routing optimization'
    ]
  },
  {
    title: 'Treasury Structuring',
    text: 'Aligning financial flows with operational and trade structures.',
    items: [
      'Payment flow mapping and alignment',
      'Intercompany and internal funding flows',
      'Friction reduction and cost leakage control'
    ]
  },
  {
    title: 'Regulatory and Compliance Alignment',
    text: 'Ensuring treasury operations meet jurisdictional requirements.',
    items: [
      'Cross-border reporting obligations',
      'Currency control and repatriation requirements',
      'Tax and transfer pricing considerations'
    ]
  }
];

const differentiators = [
  'Not tied to a single provider or institution',
  'Integrated with trade and regulatory advisory',
  'Focused on total cost and operational control',
  'Structured advisory, not transactional execution'
];

const idealClients = [
  'Finance leaders at mid-market businesses with international operations',
  'Organizations with significant multi-currency exposure',
  'Companies managing cross-border intercompany flows',
  'Businesses facing regulatory complexity in treasury operations'
];

export const metadata: Metadata = {
  title: 'Treasury Advisory | Dominion Partners',
  description:
    'Cross-border treasury advisory for finance leaders managing international operations.'
};

export default function TreasuryAdvisoryPage() {
  return (
    <main className="bg-white">
      <ServicePageHero
        eyebrow="Treasury Advisory"
        title="Treasury Advisory"
        description="Cross-border treasury advisory for finance leaders managing international operations."
      />

      <ServicePageSection>
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Finance leaders at global businesses face treasury complexity that
              generic providers are not equipped to solve.
            </p>
            <p>
              We bring together legal, compliance, and commercial expertise to
              design treasury structures that work across jurisdictions —
              addressing payment infrastructure, FX exposure, intercompany
              flows, and regulatory alignment in a single integrated mandate.
            </p>
            <p>
              Our work is advisory. We design the structure and the strategy,
              and coordinate execution across your existing providers and
              institutions.
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
            Treasury as a strategic function
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Most organizations treat cross-border treasury as an operational
              problem. Cost overruns, currency drag, and settlement delays are
              managed reactively rather than by design.
            </p>
            <p>
              We treat treasury as a strategic function — one that should be
              structured with the same rigour applied to trade and legal
              arrangements.
            </p>
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

      <ServicePageCta description="Engage with us to bring structure to your cross-border treasury operations." />
    </main>
  );
}
