'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { and, eq } from 'drizzle-orm';
import { getDb } from '@/lib/db/drizzle';
import { getTeamForUser, getUser } from '@/lib/db/queries';
import {
  ActivityType,
  activityLogs,
  caseTransactions,
  cases,
  deliverables,
  diagnosticAssessments,
  followUps,
  marketReviews,
  type NewCase,
  type NewCaseTransaction,
  type NewDeliverable,
  type NewDiagnosticAssessment,
  type NewFollowUp,
  type NewMarketReview
} from '@/lib/db/schema';

export type CaseActionState = {
  error?: string;
  success?: string;
  values?: Record<string, string>;
};

const requiredText = (message: string) => z.string().min(1, message);
const optionalText = z.string().optional();

const createCaseSchema = z.object({
  title: requiredText('Case title is required').max(180),
  clientName: requiredText('Client name is required').max(150),
  clientEmail: z.string().email('Enter a valid client email').optional().or(z.literal('')),
  company: requiredText('Company is required').max(150),
  product: requiredText('Product is required').max(1000),
  originMarket: z.string().max(120).optional(),
  targetMarket: requiredText('Target market is required').max(150),
  summary: optionalText,
  transactionDescription: optionalText,
  estimatedValue: optionalText,
  currency: z.string().max(3).optional()
});

const diagnosticSchema = z.object({
  caseId: z.coerce.number().int().positive(),
  estimatedExportValue: z.coerce.number().int().min(0).default(0),
  destinationCount: z.coerce.number().int().min(1).default(1),
  buyerReadiness: z.coerce.number().int().min(0).max(100).default(0),
  documentationReadiness: z.coerce.number().int().min(0).max(100).default(0),
  regulatoryClarity: z.coerce.number().int().min(0).max(100).default(0),
  logisticsReadiness: z.coerce.number().int().min(0).max(100).default(0)
});

const optionalId = z.preprocess(
  (value) => (value === '' || value === undefined ? undefined : value),
  z.coerce.number().int().positive().optional()
);

const marketReviewSchema = z.object({
  caseId: z.coerce.number().int().positive(),
  marketReviewId: optionalId,
  marketSummary: optionalText,
  buyerFit: optionalText,
  complianceQuestions: optionalText,
  routeConsiderations: optionalText,
  paymentConsiderations: optionalText,
  riskSummary: optionalText,
  recommendations: optionalText,
  internalNotes: optionalText,
  clientReady: z.string().optional()
});

const deliverableSchema = z.object({
  caseId: z.coerce.number().int().positive(),
  deliverableId: optionalId,
  title: requiredText('Deliverable title is required').max(180),
  summary: optionalText,
  risks: optionalText,
  recommendations: optionalText,
  nextSteps: optionalText,
  status: z.enum(['draft', 'ready']).default('draft')
});

const caseStatusSchema = z.object({
  caseId: z.coerce.number().int().positive(),
  status: z.enum(['intake', 'in_review', 'waiting_on_client', 'delivered', 'closed'])
});

const followUpSchema = z.object({
  caseId: z.coerce.number().int().positive(),
  title: requiredText('Follow-up title is required').max(180),
  notes: optionalText,
  status: z.enum(['open', 'done']).default('open')
});

function formValues(formData: FormData) {
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === 'string' ? value : ''
    ])
  ) as Record<string, string>;
}

function cleanOptional(value?: string) {
  return value && value.trim().length > 0 ? value.trim() : null;
}

function calculateDiagnostic(data: z.infer<typeof diagnosticSchema>) {
  const valueScore = Math.min(20, data.estimatedExportValue / 25000);
  const marketComplexityScore = Math.min(18, data.destinationCount * 6);
  const readinessAverage =
    (data.buyerReadiness +
      data.documentationReadiness +
      data.regulatoryClarity +
      data.logisticsReadiness) /
    4;
  const readinessGapScore = Math.max(0, 100 - readinessAverage) * 0.62;
  const index = Math.min(
    100,
    Math.round(valueScore + marketComplexityScore + readinessGapScore)
  );
  const priority =
    index >= 70 ? 'High support need' : index >= 40 ? 'Moderate support need' : 'Export-ready baseline';
  const estimatedReviewHours = Math.round(
    data.destinationCount * 3 +
      (100 - data.documentationReadiness) / 8 +
      (100 - data.regulatoryClarity) / 8 +
      (100 - data.logisticsReadiness) / 12
  );
  const observations = [
    data.destinationCount > 1
      ? 'Multiple destination markets increase market-entry complexity'
      : 'Single-market focus keeps the first export review contained',
    data.buyerReadiness < 60
      ? 'Buyer/channel readiness needs more validation before execution'
      : 'Buyer/channel readiness appears workable for next-step planning',
    data.documentationReadiness < 70
      ? 'Export documentation should be tightened before shipment or quoting'
      : 'Documentation readiness appears relatively strong'
  ];
  const pressurePoints = [
    data.regulatoryClarity < 70 ? 'Regulatory and import requirements' : 'Market positioning',
    data.logisticsReadiness < 70 ? 'Logistics, customs, and fulfillment' : 'Buyer conversion',
    data.documentationReadiness < 70 ? 'Export documents and recordkeeping' : 'Commercial terms'
  ];

  return {
    index,
    priority,
    estimatedReviewHours,
    observations: observations.join('\n'),
    pressurePoints: pressurePoints.join('\n')
  };
}

async function getCurrentWorkspace() {
  const [user, team] = await Promise.all([getUser(), getTeamForUser()]);

  if (!user || !team) {
    throw new Error('User workspace not found');
  }

  return { user, team };
}

async function assertCaseAccess(caseId: number, teamId: number) {
  const db = getDb();
  const [caseRecord] = await db
    .select()
    .from(cases)
    .where(and(eq(cases.id, caseId), eq(cases.teamId, teamId)))
    .limit(1);

  if (!caseRecord) {
    throw new Error('Case not found');
  }

  return caseRecord;
}

async function logCaseActivity(
  teamId: number,
  userId: number,
  action: ActivityType,
  caseId?: number
) {
  const db = getDb();
  await db.insert(activityLogs).values({
    teamId,
    userId,
    caseId,
    action,
    ipAddress: ''
  });
}

export async function createCase(
  _prevState: CaseActionState,
  formData: FormData
): Promise<CaseActionState> {
  const values = formValues(formData);
  const parsed = createCaseSchema.safeParse(values);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message, values };
  }

  let redirectTo: string | null = null;

  try {
    const { user, team } = await getCurrentWorkspace();
    const db = getDb();
    const data = parsed.data;

    const created = await db.transaction(async (tx) => {
      const newCase: NewCase = {
        teamId: team.id,
        createdBy: user.id,
        title: data.title,
        clientName: data.clientName,
        clientEmail: cleanOptional(data.clientEmail),
        company: data.company,
        product: data.product,
        originMarket: data.originMarket || 'Canada',
        targetMarket: data.targetMarket,
        summary: cleanOptional(data.summary)
      };
      const [caseRecord] = await tx.insert(cases).values(newCase).returning();

      if (data.transactionDescription) {
        const transaction: NewCaseTransaction = {
          caseId: caseRecord.id,
          description: data.transactionDescription,
          originMarket: data.originMarket || 'Canada',
          destinationMarket: data.targetMarket,
          estimatedValue: data.estimatedValue
            ? Number(data.estimatedValue)
            : null,
          currency: data.currency || 'CAD'
        };
        await tx.insert(caseTransactions).values(transaction);
      }

      return caseRecord;
    });

    await logCaseActivity(team.id, user.id, ActivityType.CREATE_CASE, created.id);
    revalidatePath('/dashboard/cases');
    redirectTo = `/dashboard/cases/${created.id}`;
  } catch (error) {
    console.error('Create case failed:', error);
    return {
      error: 'Unable to create the case right now.',
      values
    };
  }

  if (redirectTo) {
    redirect(redirectTo);
  }

  return { success: 'Case created.' };
}

export async function saveDiagnostic(
  _prevState: CaseActionState,
  formData: FormData
): Promise<CaseActionState> {
  const values = formValues(formData);
  const parsed = diagnosticSchema.safeParse(values);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message, values };
  }

  try {
    const { user, team } = await getCurrentWorkspace();
    await assertCaseAccess(parsed.data.caseId, team.id);
    const calculated = calculateDiagnostic(parsed.data);
    const assessment: NewDiagnosticAssessment = {
      caseId: parsed.data.caseId,
      createdBy: user.id,
      estimatedExportValue: parsed.data.estimatedExportValue,
      destinationCount: parsed.data.destinationCount,
      buyerReadiness: parsed.data.buyerReadiness,
      documentationReadiness: parsed.data.documentationReadiness,
      regulatoryClarity: parsed.data.regulatoryClarity,
      logisticsReadiness: parsed.data.logisticsReadiness,
      monthlyOutbound: parsed.data.estimatedExportValue,
      monthlyInbound: 0,
      corridors: parsed.data.destinationCount,
      urgentShare: Math.max(0, 100 - parsed.data.regulatoryClarity),
      manualHours: Math.round((100 - parsed.data.documentationReadiness) / 10),
      ...calculated
    };

    const db = getDb();
    await Promise.all([
      db.insert(diagnosticAssessments).values(assessment),
      db
        .update(cases)
        .set({ status: 'in_review', updatedAt: new Date() })
        .where(eq(cases.id, parsed.data.caseId)),
      logCaseActivity(team.id, user.id, ActivityType.SAVE_DIAGNOSTIC, parsed.data.caseId)
    ]);

    revalidatePath(`/dashboard/cases/${parsed.data.caseId}`);
    return { success: 'Diagnostic saved to this case.' };
  } catch (error) {
    console.error('Save diagnostic failed:', error);
    return { error: 'Unable to save the diagnostic right now.', values };
  }
}

export async function saveMarketReview(
  _prevState: CaseActionState,
  formData: FormData
): Promise<CaseActionState> {
  const values = formValues(formData);
  const parsed = marketReviewSchema.safeParse(values);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message, values };
  }

  try {
    const { user, team } = await getCurrentWorkspace();
    await assertCaseAccess(parsed.data.caseId, team.id);
    const db = getDb();
    const review: NewMarketReview = {
      caseId: parsed.data.caseId,
      createdBy: user.id,
      marketSummary: parsed.data.marketSummary || '',
      buyerFit: parsed.data.buyerFit || '',
      complianceQuestions: parsed.data.complianceQuestions || '',
      routeConsiderations: parsed.data.routeConsiderations || '',
      paymentConsiderations: parsed.data.paymentConsiderations || '',
      riskSummary: parsed.data.riskSummary || '',
      recommendations: parsed.data.recommendations || '',
      internalNotes: parsed.data.internalNotes || '',
      clientReady: parsed.data.clientReady === 'on'
    };

    if (parsed.data.marketReviewId) {
      await db
        .update(marketReviews)
        .set({ ...review, updatedAt: new Date() })
        .where(
          and(
            eq(marketReviews.id, parsed.data.marketReviewId),
            eq(marketReviews.caseId, parsed.data.caseId)
          )
        );
    } else {
      await db.insert(marketReviews).values(review);
    }

    await Promise.all([
      db
        .update(cases)
        .set({ status: 'in_review', updatedAt: new Date() })
        .where(eq(cases.id, parsed.data.caseId)),
      logCaseActivity(team.id, user.id, ActivityType.UPDATE_MARKET_REVIEW, parsed.data.caseId)
    ]);

    revalidatePath(`/dashboard/cases/${parsed.data.caseId}`);
    return { success: 'Market review saved.' };
  } catch (error) {
    console.error('Save market review failed:', error);
    return { error: 'Unable to save the market review right now.', values };
  }
}

export async function saveDeliverable(
  _prevState: CaseActionState,
  formData: FormData
): Promise<CaseActionState> {
  const values = formValues(formData);
  const parsed = deliverableSchema.safeParse(values);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message, values };
  }

  try {
    const { user, team } = await getCurrentWorkspace();
    await assertCaseAccess(parsed.data.caseId, team.id);
    const db = getDb();
    const deliverable: NewDeliverable = {
      caseId: parsed.data.caseId,
      createdBy: user.id,
      title: parsed.data.title,
      summary: parsed.data.summary || '',
      risks: parsed.data.risks || '',
      recommendations: parsed.data.recommendations || '',
      nextSteps: parsed.data.nextSteps || '',
      status: parsed.data.status
    };

    if (parsed.data.deliverableId) {
      await db
        .update(deliverables)
        .set({ ...deliverable, updatedAt: new Date() })
        .where(
          and(
            eq(deliverables.id, parsed.data.deliverableId),
            eq(deliverables.caseId, parsed.data.caseId)
          )
        );
    } else {
      await db.insert(deliverables).values(deliverable);
    }

    await Promise.all([
      db
        .update(cases)
        .set({
          status: parsed.data.status === 'ready' ? 'delivered' : 'in_review',
          updatedAt: new Date()
        })
        .where(eq(cases.id, parsed.data.caseId)),
      logCaseActivity(team.id, user.id, ActivityType.CREATE_DELIVERABLE, parsed.data.caseId)
    ]);

    revalidatePath(`/dashboard/cases/${parsed.data.caseId}`);
    return { success: 'Deliverable saved.' };
  } catch (error) {
    console.error('Save deliverable failed:', error);
    return { error: 'Unable to save the deliverable right now.', values };
  }
}

export async function updateCaseStatus(
  _prevState: CaseActionState,
  formData: FormData
): Promise<CaseActionState> {
  const values = formValues(formData);
  const parsed = caseStatusSchema.safeParse(values);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message, values };
  }

  try {
    const { user, team } = await getCurrentWorkspace();
    await assertCaseAccess(parsed.data.caseId, team.id);
    const db = getDb();

    await Promise.all([
      db
        .update(cases)
        .set({ status: parsed.data.status, updatedAt: new Date() })
        .where(eq(cases.id, parsed.data.caseId)),
      logCaseActivity(team.id, user.id, ActivityType.UPDATE_CASE, parsed.data.caseId)
    ]);

    revalidatePath(`/dashboard/cases/${parsed.data.caseId}`);
    revalidatePath('/dashboard/cases');
    return { success: 'Case status updated.' };
  } catch (error) {
    console.error('Update case status failed:', error);
    return { error: 'Unable to update the case status right now.', values };
  }
}

export async function createFollowUp(
  _prevState: CaseActionState,
  formData: FormData
): Promise<CaseActionState> {
  const values = formValues(formData);
  const parsed = followUpSchema.safeParse(values);

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message, values };
  }

  try {
    const { user, team } = await getCurrentWorkspace();
    await assertCaseAccess(parsed.data.caseId, team.id);
    const db = getDb();
    const followUp: NewFollowUp = {
      caseId: parsed.data.caseId,
      assignedTo: user.id,
      title: parsed.data.title,
      notes: cleanOptional(parsed.data.notes),
      status: parsed.data.status
    };

    await Promise.all([
      db.insert(followUps).values(followUp),
      logCaseActivity(team.id, user.id, ActivityType.UPDATE_CASE, parsed.data.caseId)
    ]);

    revalidatePath(`/dashboard/cases/${parsed.data.caseId}`);
    return { success: 'Follow-up added.' };
  } catch (error) {
    console.error('Create follow-up failed:', error);
    return { error: 'Unable to add the follow-up right now.', values };
  }
}
