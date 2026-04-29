import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Boxes, BriefcaseBusiness, Globe2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getCasesForCurrentTeam } from '@/lib/db/queries';

function clientSlug(name: string) {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));
}

function formatStatus(status: string) {
  return status.replaceAll('_', ' ');
}

export default async function ClientDashboardPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cases = await getCasesForCurrentTeam();
  const clientCases = cases.filter((caseRecord) => {
    return clientSlug(caseRecord.company) === slug;
  });

  if (!clientCases.length) {
    notFound();
  }

  const clientName = clientCases[0].company;
  const products = Array.from(
    clientCases.reduce((map, caseRecord) => {
      const existing = map.get(caseRecord.product);
      map.set(caseRecord.product, {
        product: caseRecord.product,
        targetMarkets: new Set([
          ...(existing?.targetMarkets || []),
          caseRecord.targetMarket
        ]),
        cases: [...(existing?.cases || []), caseRecord]
      });
      return map;
    }, new Map<string, { product: string; targetMarkets: Set<string>; cases: typeof clientCases }>())
  ).map(([, product]) => product);

  const openCases = clientCases.filter(
    (caseRecord) =>
      caseRecord.status !== 'delivered' && caseRecord.status !== 'closed'
  );

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-primary">
            Client workspace
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-950">
            {clientName}
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            SKU and product-specific export dashboard for active market-entry
            work, diagnostics, deliverables, and follow-up.
          </p>
        </div>
        <Button asChild className="bg-brand-primary text-white hover:bg-brand-primary-hover">
          <Link href="/dashboard/cases">
            New export case
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <BriefcaseBusiness className="h-4 w-4 text-brand-primary" />
              Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-950">
              {clientCases.length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Boxes className="h-4 w-4 text-brand-primary" />
              SKUs / Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-950">
              {products.length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Globe2 className="h-4 w-4 text-brand-primary" />
              Open work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-950">
              {openCases.length}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>SKU / Product Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {products.map((product) => (
                <div key={product.product} className="py-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        {product.product}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Target markets:{' '}
                        {Array.from(product.targetMarkets).join(', ')}
                      </p>
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {product.cases.length} case
                      {product.cases.length === 1 ? '' : 's'}
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {product.cases.map((caseRecord) => (
                      <Link
                        key={caseRecord.id}
                        href={`/dashboard/cases/${caseRecord.id}`}
                        className="flex items-center justify-between gap-3 rounded-md border border-gray-200 p-3 transition hover:bg-gray-50"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-950">
                            {caseRecord.title}
                          </p>
                          <p className="mt-1 text-xs capitalize text-gray-500">
                            {formatStatus(caseRecord.status)} ·{' '}
                            {caseRecord.targetMarket}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Next Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm leading-6 text-gray-600">
              <p>
                Use each SKU/product case to complete export readiness,
                market review, deliverable, and follow-up.
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="font-medium text-gray-950">
                  Recommended next layer
                </p>
                <p className="mt-2">
                  Add a dedicated SKU table when you are ready to track SKU
                  codes, HS codes, target markets, documentation, and resource
                  recommendations independently of cases.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
