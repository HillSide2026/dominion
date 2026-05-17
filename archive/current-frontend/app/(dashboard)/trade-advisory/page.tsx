import type { Metadata } from 'next';
import {
  ServicePageCta,
  ServicePageHero,
  ServicePageSection
} from '@/components/marketing/service-page';

const advisoryAreas = [
  {
    title: 'Market Entry and Expansion',
    text: 'Entering new markets with the right structure from the outset.',
    items: ['Jurisdiction selection', 'Local structuring', 'Operational setup']
  },
  {
    title: 'Trade Structuring',
    text: 'Designing transactions that hold up commercially and contractually.',
    items: [
      'Import and export terms',
      'Counterparty diligence',
      'Contract structuring and negotiation'
    ]
  },
  {
    title: 'Regulatory Coordination',
    text: 'Aligning trade activity with jurisdictional requirements.',
    items: [
      'Local compliance alignment',
      'Customs and classification review',
      'Commodity and transfer tax considerations'
    ]
  },
  {
    title: 'Operational Strategy',
    text: 'Ensuring trade structures function in practice.',
    items: [
      'Value chain design',
      'Entity coordination',
      'Cross-border workflows'
    ]
  }
];

export const metadata: Metadata = {
  title: 'Trade Advisory | Dominion Partners',
  description:
    'Structuring international operations with clarity, compliance, and commercial focus.'
};

export default function TradeAdvisoryPage() {
  return (
    <main className="bg-white">
      <ServicePageHero
        eyebrow="Trade Advisory"
        title="Trade Advisory"
        description="Structuring international operations with clarity, compliance, and commercial focus."
      />

      <ServicePageSection>
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Dominion Partners supports businesses navigating complex
              cross-border trade environments.
            </p>
            <p>
              We structure operations that are commercially viable,
              operationally efficient, and aligned with regulatory requirements
              across jurisdictions.
            </p>
            <p>
              Our work sits at the transaction level where counterparties,
              goods, and financial flows intersect.
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
            {advisoryAreas.map((area) => (
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
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Trade, considered end to end
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>We do not approach trade in isolation.</p>
            <p>
              Every structure we design considers how money moves across
              currencies, jurisdictions, and counterparties.
            </p>
            <p>
              This ensures that trade decisions are aligned with how
              transactions are ultimately settled.
            </p>
          </div>
        </div>
      </ServicePageSection>

      <ServicePageCta description="Engage with us to structure your cross-border operations correctly from the outset." />
    </main>
  );
}
