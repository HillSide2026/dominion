import Link from 'next/link';
import { BriefcaseBusiness, PlusCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreateCaseForm } from '@/components/dashboard/case-forms';
import { getCasesForCurrentTeam } from '@/lib/db/queries';

function formatStatus(status: string) {
  return status.replaceAll('_', ' ');
}

export default async function CasesPage() {
  const cases = await getCasesForCurrentTeam();
  const statusCounts = {
    intake: cases.filter((item) => item.status === 'intake').length,
    inReview: cases.filter((item) => item.status === 'in_review').length,
    waiting: cases.filter((item) => item.status === 'waiting_on_client').length,
    delivered: cases.filter((item) => item.status === 'delivered').length
  };

  return (
    <section className="flex-1 p-4 lg:p-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold text-brand-primary">
          Export advisory operating system
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-gray-950">
          Export Cases
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Turn Canadian product export questions into structured cases:
          intake, export readiness, market review, branded deliverable, and
          follow-up work.
        </p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['Intake', statusCounts.intake],
          ['In review', statusCounts.inReview],
          ['Waiting on client', statusCounts.waiting],
          ['Delivered', statusCounts.delivered]
        ].map(([label, value]) => (
          <Card key={label}>
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-gray-950">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-brand-primary" />
              Active cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cases.length ? (
              <div className="divide-y divide-gray-200 border-y border-gray-200">
                {cases.map((caseRecord) => (
                  <Link
                    key={caseRecord.id}
                    href={`/dashboard/cases/${caseRecord.id}`}
                    className="block py-4 transition hover:bg-gray-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-950">
                          {caseRecord.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          {caseRecord.company} → {caseRecord.targetMarket}
                        </p>
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
                        {formatStatus(caseRecord.status)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-gray-300 p-6 text-sm leading-6 text-gray-600">
                No export cases yet. Create the first engagement from an
                intake, referral, or client conversation.
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlusCircle className="h-5 w-5 text-brand-primary" />
              New case
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CreateCaseForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
