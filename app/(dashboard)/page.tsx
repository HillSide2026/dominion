import Link from 'next/link';
import {
  ArrowRight,
  FileSearch,
  Route,
  FileText,
  Globe,
  Package,
  Truck,
  CreditCard,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const whatWeDo = [
  {
    title: 'Transaction Review',
    intro: 'Break down the transaction:',
    items: [
      'parties and roles',
      'timing and sequencing',
      'documentation and dependencies',
      'exposure across jurisdictions'
    ],
    icon: FileSearch
  },
  {
    title: 'Route Analysis',
    intro: 'Evaluate how the transaction can move across:',
    items: [
      'banking pathways',
      'intermediaries and correspondents',
      'FX conversion points'
    ],
    secondaryIntro: 'Identify:',
    secondaryItems: [
      'where risk sits',
      'where delays occur',
      'where failure is most likely'
    ],
    icon: Route
  },
  {
    title: 'Advisory Outputs',
    intro: 'Deliver structured materials for:',
    items: [
      'internal decision-making',
      'client communication',
      'coordination with legal, tax, or compliance advisors'
    ],
    icon: FileText
  }
];

const scope = [
  {
    title: 'Trade',
    text: 'Review trade structure, counterparty terms, and supporting documentation.',
    icon: Globe
  },
  {
    title: 'Customs',
    text: 'Assess classification, valuation, and cross-border compliance exposure.',
    icon: Package
  },
  {
    title: 'Supply Chain',
    text: 'Evaluate movement of goods, timing dependencies, and operational constraints.',
    icon: Truck
  },
  {
    title: 'Payments',
    text: 'Map payment corridors, intermediaries, conversion points, and settlement timing.',
    icon: CreditCard
  },
  {
    title: 'Investment',
    text: 'Assess capital flows, intercompany structures, and cross-border movement of funds.',
    icon: TrendingUp
  }
];

const steps = [
  {
    title: 'Define the transaction',
    text: 'Client provides transaction details or scenario.'
  },
  {
    title: 'Structured review',
    text: 'Dominion analyzes structure, constraints, and dependencies.'
  },
  {
    title: 'Route and risk analysis',
    text: 'We identify viable pathways and where risk concentrates.'
  },
  {
    title: 'Advisory output',
    text: 'Structured materials delivered for decision and execution.'
  }
];

const clientTypes = [
  {
    title: 'Corporate Treasury',
    text: 'Teams managing cross-border payments, liquidity, and settlement.'
  },
  {
    title: 'Accounting Practices',
    text: 'Teams preparing client-facing analysis and transaction support.'
  },
  {
    title: 'Advisory Firms',
    text: 'Used before engaging legal, tax, or specialist advisors.'
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-[#0614b8] uppercase">
              Cross-border advisory
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Consulting for cross-border trade and payments
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              Dominion advises on trade, customs, supply chain, investment, and
              payments by structuring and evaluating cross-border transactions.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#0614b8] text-white hover:bg-[#07108f]"
              >
                <Link href="/sign-up">
                  Request a review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/sign-in">Member login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-gray-950">
              Transaction review before execution
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Dominion works at the transaction layer, where trade, payments,
              settlement, and regulatory constraints intersect.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whatWeDo.map((item) => (
              <article key={item.title} className="bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center bg-[#0614b8] text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium text-gray-700">
                  {item.intro}
                </p>
                <ul className="mt-2 space-y-1">
                  {item.items.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                    >
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#0584c7]" />
                      {point}
                    </li>
                  ))}
                </ul>
                {'secondaryIntro' in item && (
                  <>
                    <p className="mt-4 text-sm font-medium text-gray-700">
                      {(item as typeof item & { secondaryIntro: string }).secondaryIntro}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {(item as typeof item & { secondaryItems: string[] }).secondaryItems.map(
                        (point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                          >
                            <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-[#0584c7]" />
                            {point}
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory scope */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-gray-950">
              Where Dominion concentrates its work
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Dominion advises across the components that determine whether a
              cross-border transaction succeeds or fails.
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {scope.map((area) => (
              <article key={area.title} className="bg-white p-6">
                <div className="flex h-9 w-9 items-center justify-center bg-[#0614b8] text-white">
                  <area.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-950">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {area.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-950">
            How engagements work
          </h2>
          <div className="mt-10 grid gap-0 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative border-l border-gray-200 pl-6 py-4 lg:border-l-0 lg:border-t-2 lg:border-t-[#0614b8] lg:pl-0 lg:pt-6 lg:pr-6"
              >
                <span className="text-xs font-semibold text-[#0614b8] uppercase tracking-wide">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-base font-semibold text-gray-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clarity before execution */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-gray-950">
              Clarity before execution
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {[
              'Identify where risk sits in the transaction.',
              'Separate operational issues from regulatory or tax questions.',
              'Clarify timing, dependencies, and counterparties.',
              'Prepare materials for internal and external review.',
              'Reduce uncertainty before funds or goods move.'
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0584c7]" />
                <p className="text-sm leading-6 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-gray-950">
              Who we work with
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Dominion works with teams responsible for the accuracy and
              execution of cross-border transactions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {clientTypes.map((client) => (
              <article key={client.title} className="bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-950">
                  {client.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {client.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global collaboration */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-950">
              Global collaboration
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Dominion is a collaborating firm of Andersen Global. Where
              required, engagements can be coordinated with tax, legal, and
              trade specialists across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Request a transaction review
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Submit a transaction or scenario for structured analysis before
              execution.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-white text-gray-950 hover:bg-gray-100">
              <Link href="/sign-up">
                Request a review
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <Link href="/sign-in">Member login</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
