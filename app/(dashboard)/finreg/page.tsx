import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ServicePageCta,
  ServicePageHero,
  ServicePageSection
} from '@/components/marketing/service-page';

const serviceAreas = [
  {
    title: 'Licensing & Registration Strategy',
    text: 'Assessing licensing requirements, registration pathways, jurisdictional exposure, and regulator engagement strategies.',
    items: [
      'Licensing requirements',
      'Registration pathways',
      'Regulator engagement strategies'
    ]
  },
  {
    title: 'Regulatory Perimeter Analysis',
    text: 'Evaluating how products, services, transaction flows, and operational models intersect with payment services regulation.',
    items: [
      'Product and service analysis',
      'Transaction flow review',
      'Operational model assessment'
    ]
  },
  {
    title: 'Compliance Program Design',
    text: 'Designing practical compliance frameworks aligned with operational realities, growth objectives, and regulatory expectations.',
    items: [
      'Compliance framework design',
      'Operational controls',
      'Growth-aligned regulatory expectations'
    ]
  },
  {
    title: 'Cross-Border Regulatory Structuring',
    text: 'Supporting organizations managing multi-jurisdictional payment operations, entity structures, and international compliance obligations.',
    items: [
      'Multi-jurisdictional payment operations',
      'Entity structure coordination',
      'International compliance obligations'
    ]
  }
];

const differentiators = [
  'Independent and institution-agnostic advisory',
  'Senior-level strategic and operational regulatory guidance',
  'Practical implementation awareness across payment operations',
  'Experience supporting regulator-facing processes and engagements',
  'Business-model-aware advisory tailored to fintech and payment ecosystems',
  'Structured support designed for scaling organizations, not static compliance environments'
];

const idealClients = [
  'Neo-banks operating across multiple jurisdictions',
  'Fintech platforms managing regulated payment flows',
  'Payment service providers scaling operational compliance programs',
  'Organizations preparing for licensing or registration requirements',
  'Businesses launching embedded finance or payment products',
  'Companies navigating cross-border payment and settlement obligations'
];

const pricingOptions = [
  {
    title: 'Regulatory Advisory Retainer',
    price: 'Speak with our team',
    description:
      'Ongoing embedded advisory support for leadership and compliance teams.',
    items: [
      'Recurring advisory access',
      'Operational and regulatory guidance',
      'Strategic compliance support',
      'Cross-functional coordination'
    ]
  },
  {
    title: 'Licensing & Structuring Engagements',
    price: 'Discuss your licensing strategy',
    description:
      'Project-based support for licensing, registration, and regulatory structuring initiatives.',
    items: [
      'Jurisdictional analysis',
      'Regulatory pathway assessments',
      'Documentation support',
      'Regulator engagement preparation'
    ]
  },
  {
    title: 'Embedded Compliance Resources',
    price: 'Explore embedded support options',
    description:
      'Integrated compliance support designed to extend internal operational capacity.',
    items: [
      'Embedded advisory resources',
      'Compliance program support',
      'Policy and control development',
      'Scalable operational guidance'
    ]
  }
];

export const metadata: Metadata = {
  title:
    'Embedded Compliance Resources for Payment Service Providers and Neo-Banks | Dominion Partners',
  description:
    'Embedded regulatory and compliance advisory for payment service providers, fintechs, and neo-banks navigating licensing, registration, operational compliance, and cross-border regulatory complexity.'
};

export default function FinregPage() {
  return (
    <main className="bg-white">
      <ServicePageHero
        eyebrow="PAYMENT SERVICES REGULATORY"
        title="Embedded Compliance Resources for Payment Service Providers and Neo-Banks"
        description="Embedded regulatory and compliance advisory for payment service providers, fintechs, and neo-banks navigating licensing, registration, operational compliance, and cross-border regulatory complexity."
      />

      <ServicePageSection>
        <div className="max-w-[700px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Payment services regulation is increasingly complex across
              jurisdictions, business models, and operational structures.
            </p>
            <p>
              Many payment firms and neo-banks face growing regulatory
              obligations while scaling products, entering new markets,
              onboarding partners, and managing evolving compliance
              expectations.
            </p>
            <p>
              Dominion provides embedded regulatory advisory designed to support
              operational decision-making, regulatory structuring, licensing
              strategy, and compliance program development. Our approach is
              practical, implementation-aware, and aligned with how modern
              payment businesses actually operate.
            </p>
            <p>
              We work alongside leadership, legal, operations, compliance, and
              product teams to help organizations build scalable regulatory
              infrastructure that supports growth without creating unnecessary
              operational friction.
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
              Payment services regulation as business infrastructure
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-white/82">
              <p>
                Modern payment infrastructure businesses operate at the
                intersection of technology, financial regulation, operational
                risk, and cross-border commerce.
              </p>
              <p>
                Regulatory expectations are no longer limited to formal
                licensing requirements. Governance structures, transaction
                monitoring, safeguarding arrangements, operational controls,
                outsourcing relationships, and reporting obligations
                increasingly shape how payment firms scale and operate
                internationally.
              </p>
              <p>
                We help organizations approach regulation as a structural
                business consideration rather than a reactive compliance
                exercise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicePageSection>
        <div className="max-w-[760px]">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Strategic context
          </h2>
          <div className="mt-8 space-y-7 text-lg leading-8 text-brand-text">
            <p>
              Modern payment infrastructure businesses operate at the
              intersection of technology, financial regulation, operational
              risk, and cross-border commerce.
            </p>
            <p>
              Regulatory expectations are no longer limited to formal licensing
              requirements. Governance structures, transaction monitoring,
              safeguarding arrangements, operational controls, outsourcing
              relationships, and reporting obligations increasingly shape how
              payment firms scale and operate internationally.
            </p>
            <p>
              We help organizations approach regulation as a structural business
              consideration rather than a reactive compliance exercise.
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
              Engagements are structured around the regulatory issue,
              jurisdictional footprint, operational model, and level of
              embedded support required.
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

      <ServicePageCta description="Speak with our team about structuring your payment services regulatory strategy." />
    </main>
  );
}
