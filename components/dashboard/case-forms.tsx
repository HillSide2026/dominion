'use client';

import { useActionState } from 'react';
import { CheckCircle2, Loader2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type {
  Case,
  Deliverable,
  DiagnosticAssessment,
  FollowUp,
  MarketReview
} from '@/lib/db/schema';
import {
  createFollowUp,
  createCase,
  saveDeliverable,
  saveDiagnostic,
  saveMarketReview,
  updateCaseStatus,
  type CaseActionState
} from '@/app/(dashboard)/dashboard/cases/actions';

function ActionMessage({ state }: { state: CaseActionState }) {
  if (!state.error && !state.success) return null;

  return (
    <p className={state.error ? 'text-sm text-red-500' : 'text-sm text-green-600'}>
      {state.error || state.success}
    </p>
  );
}

function SubmitButton({
  pending,
  label
}: {
  pending: boolean;
  label: string;
}) {
  return (
    <Button
      type="submit"
      className="bg-brand-primary text-white hover:bg-brand-primary-hover"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Saving...
        </>
      ) : (
        <>
          <Save className="h-4 w-4" />
          {label}
        </>
      )}
    </Button>
  );
}

export function CreateCaseForm() {
  const [state, action, pending] = useActionState<CaseActionState, FormData>(
    createCase,
    {}
  );
  const values = state.values || {};

  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="title">Export case title</Label>
          <Input id="title" name="title" defaultValue={values.title} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            defaultValue={values.company}
            required
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="clientName">Client name</Label>
          <Input
            id="clientName"
            name="clientName"
            defaultValue={values.clientName}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientEmail">Client email</Label>
          <Input
            id="clientEmail"
            name="clientEmail"
            type="email"
            defaultValue={values.clientEmail}
          />
        </div>
      </div>
      <div className="space-y-2">
          <Label htmlFor="product">SKU / product being exported</Label>
        <Textarea
          id="product"
          name="product"
          defaultValue={values.product}
          required
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="originMarket">Origin</Label>
          <Input
            id="originMarket"
            name="originMarket"
            defaultValue={values.originMarket || 'Canada'}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetMarket">Destination market</Label>
          <Input
            id="targetMarket"
            name="targetMarket"
            defaultValue={values.targetMarket}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="currency">Expected deal currency</Label>
          <Input id="currency" name="currency" defaultValue={values.currency || 'CAD'} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="transactionDescription">Export situation</Label>
        <Textarea
          id="transactionDescription"
          name="transactionDescription"
          defaultValue={values.transactionDescription}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="summary">Internal case summary</Label>
        <Textarea id="summary" name="summary" defaultValue={values.summary} />
      </div>
      <ActionMessage state={state} />
      <SubmitButton pending={pending} label="Create case" />
    </form>
  );
}

export function DiagnosticForm({
  caseRecord,
  latestDiagnostic
}: {
  caseRecord: Case;
  latestDiagnostic: DiagnosticAssessment | null;
}) {
  const [state, action, pending] = useActionState<CaseActionState, FormData>(
    saveDiagnostic,
    {}
  );

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="caseId" value={caseRecord.id} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="estimatedExportValue">Estimated export value</Label>
          <Input
            id="estimatedExportValue"
            name="estimatedExportValue"
            inputMode="numeric"
            defaultValue={
              latestDiagnostic?.estimatedExportValue ||
              latestDiagnostic?.monthlyOutbound ||
              50000
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCount">Destination markets</Label>
          <Input
            id="destinationCount"
            name="destinationCount"
            inputMode="numeric"
            defaultValue={
              latestDiagnostic?.destinationCount ||
              latestDiagnostic?.corridors ||
              1
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyerReadiness">Buyer/channel readiness</Label>
          <Input
            id="buyerReadiness"
            name="buyerReadiness"
            inputMode="numeric"
            defaultValue={latestDiagnostic?.buyerReadiness || 40}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="documentationReadiness">Documentation readiness</Label>
          <Input
            id="documentationReadiness"
            name="documentationReadiness"
            inputMode="numeric"
            defaultValue={latestDiagnostic?.documentationReadiness || 35}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="regulatoryClarity">Regulatory clarity</Label>
          <Input
            id="regulatoryClarity"
            name="regulatoryClarity"
            inputMode="numeric"
            defaultValue={latestDiagnostic?.regulatoryClarity || 30}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="logisticsReadiness">Logistics readiness</Label>
          <Input
            id="logisticsReadiness"
            name="logisticsReadiness"
            inputMode="numeric"
            defaultValue={latestDiagnostic?.logisticsReadiness || 35}
          />
        </div>
      </div>
      <p className="text-xs leading-5 text-gray-500">
        Readiness fields use a 0-100 scale. Lower readiness creates a higher
        support need and flags the case for deeper advisory work.
      </p>
      <ActionMessage state={state} />
      <SubmitButton pending={pending} label="Save export diagnostic" />
    </form>
  );
}

export function MarketReviewForm({
  caseRecord,
  marketReview
}: {
  caseRecord: Case;
  marketReview: MarketReview | null;
}) {
  const [state, action, pending] = useActionState<CaseActionState, FormData>(
    saveMarketReview,
    {}
  );

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="caseId" value={caseRecord.id} />
      <input type="hidden" name="marketReviewId" value={marketReview?.id || ''} />
      {[
        ['marketSummary', 'Market summary', marketReview?.marketSummary],
        ['buyerFit', 'Buyer and channel fit', marketReview?.buyerFit],
        ['complianceQuestions', 'Compliance questions', marketReview?.complianceQuestions],
        ['routeConsiderations', 'Route considerations', marketReview?.routeConsiderations],
        ['paymentConsiderations', 'Payment considerations', marketReview?.paymentConsiderations],
        ['riskSummary', 'Risk summary', marketReview?.riskSummary],
        ['recommendations', 'Recommendations', marketReview?.recommendations],
        ['internalNotes', 'Internal notes', marketReview?.internalNotes]
      ].map(([name, label, value]) => (
        <div key={name} className="space-y-2">
          <Label htmlFor={name}>{label}</Label>
          <Textarea id={name} name={name} defaultValue={value || ''} />
        </div>
      ))}
      <label className="flex items-center gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          name="clientReady"
          defaultChecked={marketReview?.clientReady || false}
          className="h-4 w-4"
        />
        Mark review as client-ready
      </label>
      <ActionMessage state={state} />
      <SubmitButton pending={pending} label="Save market review" />
    </form>
  );
}

export function CaseStatusForm({ caseRecord }: { caseRecord: Case }) {
  const [state, action, pending] = useActionState<CaseActionState, FormData>(
    updateCaseStatus,
    {}
  );

  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="caseId" value={caseRecord.id} />
      <div className="space-y-2">
        <Label htmlFor="status">Case status</Label>
        <select
          id="status"
          name="status"
          defaultValue={caseRecord.status}
          className="border-input h-9 w-full rounded-md border bg-white px-3 text-sm shadow-xs"
        >
          <option value="intake">Intake</option>
          <option value="in_review">In review</option>
          <option value="waiting_on_client">Waiting on client</option>
          <option value="delivered">Delivered</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <ActionMessage state={state} />
      <SubmitButton pending={pending} label="Update status" />
    </form>
  );
}

export function FollowUpForm({
  caseRecord,
  followUps
}: {
  caseRecord: Case;
  followUps: FollowUp[];
}) {
  const [state, action, pending] = useActionState<CaseActionState, FormData>(
    createFollowUp,
    {}
  );
  const values = state.values || {};

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        {followUps.length ? (
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {followUps.map((item) => (
              <div key={item.id} className="py-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-gray-950">
                    {item.title}
                  </p>
                  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs capitalize text-gray-600">
                    {item.status}
                  </span>
                </div>
                {item.notes && (
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 p-5 text-sm leading-6 text-gray-600">
            No follow-up work has been added yet.
          </div>
        )}
      </div>

      <form action={action} className="space-y-4">
        <input type="hidden" name="caseId" value={caseRecord.id} />
        <input type="hidden" name="status" value="open" />
        <div className="space-y-2">
          <Label htmlFor="followUpTitle">Follow-up title</Label>
          <Input
            id="followUpTitle"
            name="title"
            defaultValue={values.title}
            placeholder="Book review call, request HS code, draft email..."
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="followUpNotes">Notes</Label>
          <Textarea
            id="followUpNotes"
            name="notes"
            defaultValue={values.notes}
          />
        </div>
        <ActionMessage state={state} />
        <SubmitButton pending={pending} label="Add follow-up" />
      </form>
    </div>
  );
}

export function DeliverableForm({
  caseRecord,
  deliverable
}: {
  caseRecord: Case;
  deliverable: Deliverable | null;
}) {
  const [state, action, pending] = useActionState<CaseActionState, FormData>(
    saveDeliverable,
    {}
  );

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="caseId" value={caseRecord.id} />
      <input type="hidden" name="deliverableId" value={deliverable?.id || ''} />
      <div className="space-y-2">
        <Label htmlFor="title">Deliverable title</Label>
        <Input
          id="title"
          name="title"
          defaultValue={deliverable?.title || `${caseRecord.company} export review`}
          required
        />
      </div>
      {[
        ['summary', 'Summary', deliverable?.summary],
        ['risks', 'Risks', deliverable?.risks],
        ['recommendations', 'Recommendations', deliverable?.recommendations],
        ['nextSteps', 'Next steps', deliverable?.nextSteps]
      ].map(([name, label, value]) => (
        <div key={name} className="space-y-2">
          <Label htmlFor={name}>{label}</Label>
          <Textarea id={name} name={name} defaultValue={value || ''} />
        </div>
      ))}
      <label className="flex items-center gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          name="status"
          value="ready"
          defaultChecked={deliverable?.status === 'ready'}
          className="h-4 w-4"
        />
        Mark deliverable as ready
      </label>
      <ActionMessage state={state} />
      <div className="flex flex-wrap items-center gap-3">
        <SubmitButton pending={pending} label="Save deliverable" />
        {deliverable && (
          <Button type="button" variant="outline" onClick={() => window.print()}>
            <CheckCircle2 className="h-4 w-4" />
            Print report
          </Button>
        )}
      </div>
    </form>
  );
}
