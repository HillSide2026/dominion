import Link from 'next/link';
import { ArrowRight, ClipboardList, FileCheck2, Users, BookOpen, Scale, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const useCases = [
  {
    title: 'Client intake',
    text: 'Collect the transaction facts needed before a cross-border discussion moves into specialist review.',
    icon: ClipboardList
  },
  {
    title: 'Advisory handoff',
    text: 'Summarize route assumptions, document gaps, and open questions for legal, tax, or treasury colleagues.',
    icon: Users
  },
  {
    title: 'Review records',
    text: 'Keep a consistent account of what was reviewed, what remains unresolved, and what should be revisited.',
    icon: FileCheck2
  }
];

const scenarios = [
  {
    title: 'Client asks about sending funds to a new jurisdiction',
    text: 'Use the intake template to collect corridor facts, counterparty details, business purpose, and document status before escalating to legal or compliance.'
  },
  {
    title: 'Trade finance mandate with layered counterparties',
    text: 'Map the full chain of parties — exporter, importer, issuing bank, confirming bank, freight forwarder — before the engagement letter is signed.'
  },
  {
    title: 'Intercompany transfers with multiple currency legs',
    text: 'Document each FX conversion point, approximate timing, and reporting date before preparing advice on the settlement structure.'
  },
  {
    title: 'Recurring payment program under regulatory review',
    text: 'Prepare a documentation record showing what was reviewed, which records were complete, and which questions were routed to specialist counsel.'
  }
];

export default function ForAccountantsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0614b8]">
              For accountants
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-950 sm:text-5xl">
              A cleaner way to prepare cross-border client conversations.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dominion gives accounting teams a neutral review layer for client
              transaction questions, with emphasis on facts, documentation, and
              clear handoffs to specialist teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#0614b8] text-white hover:bg-[#07108f]"
              >
                <Link href="/sign-in">
                  Open member workspace
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/insights">Read insights</Link>
              </Button>
            </div>
          </div>
          <div className="border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-semibold uppercase text-gray-500">
              Accountant workflow
            </p>
            <div className="mt-6 space-y-5">
              {[
                'Start with client transaction facts',
                'Identify document and route questions',
                'Prepare notes for specialist review',
                'Download checklists for repeat use',
                'Maintain records across engagements'
              ].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#0584c7] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm font-medium text-gray-800">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three use cases */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center bg-[#0614b8] text-white">
                <useCase.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-gray-950">
                {useCase.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {useCase.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Common scenarios */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0614b8]">
              Common situations
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-gray-950">
              Where accountants use Dominion most.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              These situations arise regularly in practices with international
              client bases. Dominion provides the review structure before
              specialist engagement begins.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {scenarios.map((scenario) => (
              <article
                key={scenario.title}
                className="border border-gray-200 p-6"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0584c7]" />
                  <div>
                    <h3 className="text-base font-semibold text-gray-950">
                      {scenario.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {scenario.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Limits and positioning */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <div className="flex h-10 w-10 items-center justify-center bg-[#0614b8] text-white">
              <Scale className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-gray-950">
              Built to sit beside existing professional judgment.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Dominion does not replace tax, legal, or compliance review. It
              helps accountants prepare clearer inputs so those reviews can be
              more focused and less dependent on scattered client documents.
            </p>
          </div>
          <div>
            <div className="flex h-10 w-10 items-center justify-center bg-[#0614b8] text-white">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-gray-950">
              Downloadable resources for repeat use.
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Member resources include intake question templates, route review
              checklists, and documentation maps. These are designed to work
              across multiple client situations without modification.
            </p>
            <Button
              asChild
              className="mt-6 bg-[#0614b8] text-white hover:bg-[#07108f]"
            >
              <Link href="/sign-in">
                Access resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Create member access for your practice.
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Workspace access includes the full tool set: transaction
              diagnostics, route review, client intake resources, and
              documentation templates.
            </p>
          </div>
          <Button asChild className="bg-white text-gray-950 hover:bg-gray-100">
            <Link href="/sign-up">
              Create access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
