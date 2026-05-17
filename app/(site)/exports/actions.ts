'use server';

import { z } from 'zod';
import { getDb } from '@/lib/db/drizzle';
import { leads, type NewLead } from '@/lib/db/schema';

export type ExportInquiryState = {
  error?: string;
  success?: string;
  leadId?: number;
  values?: Record<string, string>;
};

const exportInquirySchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Enter a valid email address').max(255),
  company: z.string().min(2, 'Organization name is required').max(150),
  product: z.string().min(2, 'Please describe your products or services').max(1000),
  targetMarket: z.string().min(2, 'Target market is required').max(150),
  challenge: z.string().min(10, 'Please provide a brief description of how we can support your team').max(2000)
});

function formValues(formData: FormData) {
  return Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      typeof value === 'string' ? value : ''
    ])
  ) as Record<string, string>;
}

export async function submitExportInquiry(
  _prevState: ExportInquiryState,
  formData: FormData
): Promise<ExportInquiryState> {
  const values = formValues(formData);
  const parsed = exportInquirySchema.safeParse(values);

  if (!parsed.success) {
    return {
      error: parsed.error.errors[0].message,
      values
    };
  }

  try {
    const db = getDb();
    const lead: NewLead = {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      product: parsed.data.product,
      targetMarket: parsed.data.targetMarket,
      challenge: parsed.data.challenge,
      website: null,
      currentStage: null,
      timeline: null,
      message: null
    };
    const [createdLead] = await db.insert(leads).values(lead).returning();

    return {
      success: "Thank you. Our team will review your submission and be in touch within 1 business day.",
      leadId: createdLead.id
    };
  } catch (error) {
    console.error('Export inquiry submission failed:', error);
    return {
      error: 'We could not submit your inquiry at this time. Please try again.',
      values
    };
  }
}
