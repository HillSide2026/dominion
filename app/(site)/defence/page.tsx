import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ServicePageCta,
  ServicePageHero,
  ServicePageSection
} from '@/components/marketing/service-page';

const serviceAreas = [
  {
    title: 'Regulatory Review',
    text: 'Clarifying the rules, filings, and obligations that affect cross-border operations before they slow down commercial activity.',
    items: [
      'Import, export, and market access requirements',
      'Customs, tariff, and classification review',
      'Jurisdiction-specific compliance obligations'
    ]
  },
  {
    title: 'Trade Defence Strategy',
    text: 'Helping organizations respond to tariffs, trade barriers, investigations, and measures that affect international supply chains.',
    items: [
      'Trade remedy exposure assessment',
      'Tariff and non-tariff barrier strategy',
      'Positioning for public-sector or regulatory engagement'
    ]
  },
  {
    title: 'Compliance Structuring',
    text: 'Designing practical operating structures that keep trade, supplier, and payment flows aligned with regulatory expectations.',
    items: [
      'Supplier and counterparty documentation',
      'Controls for restricted or sensitive trade flows',
      'Coordination across legal, finance, and operations teams'
    ]
  },
  {
    title: 'Operational Readiness',
    text: 'Turning regulatory requirements into workflows that teams can execute consistently across markets and counterparties.',
    items: [
      'Internal process and documentation mapping',
      'Issue triage and escalation pathways',
      'Ongoing monitoring for changing requirements'
    ]
  }
];

const differentiators = [
  'Integrated with trade, treasury, and commercial advisory',
  'Focused on practical operating decisions rather than abstract legal memos',
  'Built for organizations managing active cross-border flows',
  'Structured to support both immediate issues and ongoing readiness'
];

const idealClients = [
  'Importers and exporters facing changing tariff or customs requirements',
  'Businesses entering new markets with unclear local regulatory obligations',
  'Companies responding to trade barriers, investigations, or public-sector measures',
  'Finance, legal, and operations teams coordinating cross-border compliance',
  'Organizations with supplier, counterparty, or documentation risk across jurisdictions',
  'Industry groups and public bodies navigating regulatory and market access issues'
];

const pricingOptions = [
  {
    title: 'Regulatory Scan',
    price: 'Fixed scope',
    description:
      'A focused review of one market, product category, trade flow, or regulatory issue.',
    items: [
      'Initial issue assessment',
      'Requirements and exposure map',
      'Priority recommendations'
    ]
  },
  {
    title: 'Advisory Mandate',
    price: 'Monthly advisory',
    description:
      'Ongoing support for teams managing active regulatory, tariff, or trade defence matters.',
    items: [
      'Recurring advisory access',
      'Issue triage and documentation review',
      'Coordination across internal stakeholders'
    ]
  },
  {
    title: 'Strategic Engagement',
    price: 'Custom scope',
    description:
      'A deeper mandate for organizations facing complex market access, trade barrier, or compliance challenges.',
    items: [
      'Multi-jurisdictional workplan',
      'Stakeholder and counterparty strategy',
      'Implementation support'
    ]
  }
];

export const metadata: Metadata = {
  title: 'Defence | Dominion Partners',
  description:
    'Regulatory and trade defence advisory for organizations navigating tariffs, trade barriers, customs issues, and cross-border compliance.'
};

export default function DefencePage() {
  return (
    <main className="bg-white">
      <ServicePageHero
        eyebrow="Defence"
        title="Defence"
        description="Strategic support for organizations navigating tariffs, trade barriers, customs issues, and cross-border compliance."
      />

      <ServicePageSection>
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Cross-border businesses face regulatory complexity that can affect
              pricing, market access, supplier relationships, and operational
              continuity.
            </p>
            <p>
              Dominion Partners helps organizations understand the rules,
              exposures, and strategic options that shape international trade
              activity across jurisdictions.
            </p>
            <p>
              Our role is advisory and practical. We help teams move from
              uncertainty to an actionable structure for compliance, trade
              defence, documentation, and regulatory engagement.
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

      {/* Trade infrastructure bridge */}
      <section className="relative overflow-hidden border-y border-white/5 py-28 sm:min-h-[620px] lg:min-h-[720px] lg:py-0">
        <Image
          src="/images/trade-infrastructure.jpg"
          alt="International trade infrastructure"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/72 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-[620px]">
            <h2 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white">
              Regulatory clarity for cross-border trade
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-white/82">
              <p>
                Trade regulations shape how goods, capital, and counterparties
                move across borders.
              </p>
              <p>
                Tariffs, customs rules, documentation standards, sanctions,
                market access barriers, and local compliance obligations often
                interact across multiple jurisdictions.
              </p>
              <p>
                Strong regulatory strategy helps organizations anticipate
                friction, protect commercial timelines, and make better
                decisions before issues become operational constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicePageSection>
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Regulatory strategy as a core operating capability
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Many organizations treat regulatory issues as isolated events,
              handled only after a shipment, counterparty, or market access
              problem emerges.
            </p>
            <p>
              That reactive posture creates avoidable uncertainty across
              pricing, supplier commitments, financial flows, and customer
              obligations.
            </p>
            <p>
              We believe regulatory strategy should be designed into the way
              cross-border business operates, with clear documentation,
              escalation paths, and decision support across teams.
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
          <ul className="mt-10 grid gap-x-10 gap-y-5 text-base leading-7 text-brand-ink sm:grid-cols-2">
            {idealClients.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </ServicePageSection>

      <ServicePageSection>
        <div>
          <div className="max-w-[760px]">
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-text">
              Engagements are scoped around the regulatory issue, number of
              jurisdictions, urgency, and level of implementation support
              required.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricingOptions.map((option) => (
              <article
                key={option.title}
                className="flex rounded-[28px] border border-brand-border bg-white p-8 shadow-soft sm:p-10"
              >
                <div className="flex min-h-[360px] flex-col">
                  <h3 className="text-2xl font-semibold tracking-tight text-brand-ink">
                    {option.title}
                  </h3>
                  <p className="mt-4 text-base font-semibold uppercase tracking-eyebrow text-brand-primary">
                    {option.price}
                  </p>
                  <p className="mt-5 text-base leading-7 text-brand-text">
                    {option.description}
                  </p>
                  <ul className="mt-8 space-y-4 border-t border-brand-border pt-6">
                    {option.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-7 text-brand-ink"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </ServicePageSection>

      <ServicePageCta description="Speak with our team about regulatory strategy, trade defence, and cross-border compliance." />
    </main>
  );
}
