import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ClipboardCheck,
  FileText,
  Gauge,
  Globe2
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CaseStatusForm,
  DeliverableForm,
  DiagnosticForm,
  FollowUpForm,
  MarketReviewForm
} from '@/components/dashboard/case-forms';
import { getCaseForCurrentTeam } from '@/lib/db/queries';

function lines(value?: string | null) {
  return value?.split('\n').filter(Boolean) || [];
}

function activityLabel(action: string) {
  return action
    .toLowerCase()
    .replaceAll('_', ' ')
    .replace(/^\w/, (letter) => letter.toUpperCase());
}

export default async function CaseDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseId = Number(id);

  if (!Number.isInteger(caseId)) {
    notFound();
  }

  const data = await getCaseForCurrentTeam(caseId);

  if (!data) {
    notFound();
  }

  const {
    case: caseRecord,
    latestDiagnostic,
    marketReview,
    latestDeliverable,
    followUps,
    activity
  } = data;

  return (
    <section className="flex-1 p-4 lg:p-8">
      <Button asChild variant="ghost" className="mb-6 px-0 text-gray-600">
        <Link href="/dashboard/cases">
          <ArrowLeft className="h-4 w-4" />
          Cases
        </Link>
      </Button>

      <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-primary">
            Case #{caseRecord.id}
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-950">
            {caseRecord.title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            {caseRecord.company} is preparing to export {caseRecord.product}{' '}
            from {caseRecord.originMarket} into {caseRecord.targetMarket}.
          </p>
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
          {caseRecord.status.replaceAll('_', ' ')}
        </span>
      </div>

      <div className="mb-6 grid gap-4 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Client</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium text-gray-950">
              {caseRecord.clientName}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {caseRecord.clientEmail || 'No email recorded'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Diagnostic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-brand-primary">
              {latestDiagnostic?.priority || 'Not saved'}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {latestDiagnostic
                ? `Export support index ${latestDiagnostic.index}`
                : 'Run the export readiness diagnostic below'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Market Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium text-gray-950">
              {marketReview?.clientReady ? 'Client-ready' : 'Draft'}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Buyer/channel fit, compliance questions, logistics, payments, and
              risk context.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Deliverable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium text-gray-950">
              {latestDeliverable?.status || 'Not started'}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Branded report output for client follow-up.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-brand-primary" />
              Export Readiness Diagnostic
            </CardTitle>
          </CardHeader>
          <CardContent>
            {latestDiagnostic && (
              <div className="mb-6 rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                <p className="font-medium text-gray-950">
                  {latestDiagnostic.priority}, index{' '}
                  {latestDiagnostic.index}
                </p>
                <p className="mt-1">
                  Estimated preparation load:{' '}
                  {latestDiagnostic.estimatedReviewHours} hours per month.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {[
                    ['Buyer', latestDiagnostic.buyerReadiness],
                    ['Docs', latestDiagnostic.documentationReadiness],
                    ['Regulatory', latestDiagnostic.regulatoryClarity],
                    ['Logistics', latestDiagnostic.logisticsReadiness]
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-md bg-white p-3">
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="mt-1 text-lg font-semibold text-gray-950">
                        {value}/100
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-500">
                      Observations
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {lines(latestDiagnostic.observations).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-500">
                      Pressure points
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {lines(latestDiagnostic.pressurePoints).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <DiagnosticForm
              caseRecord={caseRecord}
              latestDiagnostic={latestDiagnostic}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-brand-primary" />
              Market Review Builder
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MarketReviewForm
              caseRecord={caseRecord}
              marketReview={marketReview}
            />
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-brand-primary" />
              Branded Deliverable
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DeliverableForm
              caseRecord={caseRecord}
              deliverable={latestDeliverable}
            />
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-brand-primary" />
              Follow-up Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FollowUpForm caseRecord={caseRecord} followUps={followUps} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Case Operations</CardTitle>
          </CardHeader>
          <CardContent>
            <CaseStatusForm caseRecord={caseRecord} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Trail</CardTitle>
          </CardHeader>
          <CardContent>
            {activity.length ? (
              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {activity.map((item) => (
                  <div key={item.id} className="py-3">
                    <p className="text-sm font-medium text-gray-950">
                      {activityLabel(item.action)}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.userName || item.userEmail || 'Team member'} ·{' '}
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm leading-6 text-gray-600">
                Activity will appear here as this case moves through intake,
                diagnostic, market review, deliverable, and follow-up.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
