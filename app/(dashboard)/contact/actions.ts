'use server';

import { z } from 'zod';
import { getDb } from '@/lib/db/drizzle';
import { leads, type NewLead } from '@/lib/db/schema';

export type ContactIntakeState = {
  error?: string;
  success?: string;
  leadId?: number;
  values?: Record<string, string>;
};

const contactIntakeSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Enter a valid email').max(255),
  company: z.string().min(2, 'Company is required').max(150),
  website: z.string().max(255).optional(),
  product: z.string().min(2, 'Tell us what you export').max(1000),
  targetMarket: z.string().min(2, 'Target market is required').max(150),
  currentStage: z.string().max(100).optional(),
  challenge: z.string().min(10, 'Share the export challenge in a little more detail').max(2000),
  timeline: z.string().max(100).optional(),
  message: z.string().max(2000).optional()
});

function formValues(formData: FormData) {
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === 'string' ? value : ''
    ])
  ) as Record<string, string>;
}

export async function submitContactIntake(
  _prevState: ContactIntakeState,
  formData: FormData
): Promise<ContactIntakeState> {
  const values = formValues(formData);
  const parsed = contactIntakeSchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: parsed.error.errors[0].message,
      values
    };
  }

  try {
    const db = getDb();
    const lead: NewLead = {
      ...parsed.data,
      website: parsed.data.website || null,
      currentStage: parsed.data.currentStage || null,
      timeline: parsed.data.timeline || null,
      message: parsed.data.message || null
    };
    const [createdLead] = await db.insert(leads).values(lead).returning();

    return {
      success: "Thanks. We'll review your details and respond within 1 business day.",
      leadId: createdLead.id
    };
  } catch (error) {
    console.error('Contact intake failed:', error);
    return {
      error: 'We could not submit the intake right now. Please try again.',
      values
    };
  }
}
