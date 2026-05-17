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

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  company: z.string().min(2, 'Organization name is required').max(150),
  email: z.string().email('Enter a valid email address').max(255),
  phone: z.string().max(50).optional(),
  challenge: z.string().min(5, 'Please describe how we can support your team').max(2000)
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
  const parsed = contactSchema.safeParse(values);

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
      product: 'General inquiry',
      targetMarket: 'General',
      challenge: parsed.data.challenge,
      website: null,
      currentStage: null,
      timeline: null,
      message: parsed.data.phone || null
    };
    const [createdLead] = await db.insert(leads).values(lead).returning();

    return {
      success: "Thank you. Our team will be in touch within 1 business day.",
      leadId: createdLead.id
    };
  } catch (error) {
    console.error('Contact submission failed:', error);
    return {
      error: 'We could not submit your inquiry at this time. Please try again.',
      values
    };
  }
}
