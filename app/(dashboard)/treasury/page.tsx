import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ServicePageCta,
  ServicePageHero,
  ServicePageSection
} from '@/components/marketing/service-page';

const serviceAreas = [
  {
    title: 'Cross-Border Payment Infrastructure',
    text: 'Designing payment and settlement structures that support international suppliers, counterparties, and trade operations.',
    items: [
      'Multi-currency supplier and receivables flows',
      'Banking and payment provider structuring',
      'Settlement efficiency across trade corridors'
    ]
  },
  {
    title: 'FX Strategy and Optimization',
    text: 'Managing currency exposure across international trade and procurement operations.',
    items: [
      'FX exposure linked to procurement and trade cycles',
      'Conversion strategy and spread reduction',
      'Settlement timing and liquidity optimization'
    ]
  },
  {
    title: 'Treasury Structuring',
    text: 'Aligning treasury operations with trade structures, supply chain flows, and multi-entity operations.',
    items: [
      'Intercompany funding and settlement structures',
      'Working capital flow alignment',
      'Treasury visibility across jurisdictions and entities'
    ]
  },
  {
    title: 'Regulatory and Compliance Alignment',
    text: 'Supporting treasury operations across cross-border trade and jurisdictional compliance environments.',
    items: [
      'Cross-border reporting obligations',
      'Currency control and repatriation requirements',
      'Tax and transfer pricing considerations'
    ]
  }
];

const differentiators = [
  'Independent of any single banking or payment institution',
  'Integrated with international trade and regulatory advisory',
  'Focused on operational control and treasury efficiency',
  'Structured advisory rather than transactional execution'
];

const idealClients = [
  'Finance leaders at businesses operating across international trade and supply chains',
  'Importers and exporters managing multi-jurisdictional operations',
  'Companies coordinating cross-border supplier and intercompany payment flows',
  'Organizations with significant multi-currency exposure and settlement requirements',
  'Businesses navigating treasury, compliance, and regulatory complexity across jurisdictions',
  'Companies seeking greater operational visibility and control across international financial operations'
];

export const metadata: Metadata = {
  title: 'Treasury & Trade Finance Advisory | Dominion Partners',
  description:
    'Treasury advisory for businesses managing international trade, cross-border payments, and global supply chains.'
};

export default function TreasuryAdvisoryPage() {
  return (
    <main className="bg-white">
      <ServicePageHero
        eyebrow="Treasury Advisory"
        title="Treasury & Trade Finance Advisory"
        description="Treasury advisory for businesses managing international trade, cross-border payments, and global supply chains."
      />

      <ServicePageSection>
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Businesses operating across international trade and supply chains
              face treasury complexity that standard banking and payment
              structures are not designed to solve.
            </p>
            <p>
              We bring together trade, legal, compliance, and commercial
              expertise to design treasury structures that support cross-border
              procurement, supplier payments, intercompany flows, and
              international settlement requirements across jurisdictions.
            </p>
            <p>
              Our role is advisory and strategic. We help organizations
              structure treasury operations around the realities of
              international trade, supply chain movement, currency exposure,
              and multi-entity operations.
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
      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src="/images/trade-infrastructure.jpg"
          alt="International trade infrastructure"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Treasury infrastructure built around global trade
            </h2>
            <div className="mt-8 space-y-5 text-base leading-7 text-white/80 md:text-lg">
              <p>
                International trade creates operational complexity that extends
                beyond payments alone.
              </p>
              <p>
                Supplier networks, procurement cycles, cross-border settlement,
                currency exposure, and intercompany funding all interact across
                jurisdictions and supply chains.
              </p>
              <p>
                Effective treasury structures support the movement of both
                capital and commerce, helping organizations reduce friction,
                improve visibility, and strengthen operational resilience across
                international operations.
              </p>
            </div>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-7 text-brand-ink hover:bg-slate-100"
              >
                <Link href="/contact">
                  Speak with us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicePageSection>
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Treasury as a strategic component of international trade
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Many organizations treat treasury as an administrative or
              operational function rather than a strategic component of
              international trade and supply chain operations.
            </p>
            <p>
              Currency exposure, settlement friction, supplier payment delays,
              and working capital inefficiencies are often managed reactively
              rather than structurally.
            </p>
            <p>
              We believe treasury operations should be designed with the same
              level of rigor applied to trade, legal, and commercial
              arrangements across international business operations.
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

      <ServicePageCta description="Speak with our team about structuring your international treasury and trade finance operations." />
    </main>
  );
}
