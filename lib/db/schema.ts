import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: varchar('role', { length: 20 }).notNull().default('member'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const teams = pgTable('teams', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  role: varchar('role', { length: 50 }).notNull(),
  joinedAt: timestamp('joined_at').notNull().defaultNow(),
});

export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  userId: integer('user_id').references(() => users.id),
  caseId: integer('case_id').references(() => cases.id),
  action: text('action').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
  ipAddress: varchar('ip_address', { length: 45 }),
});

export const invitations = pgTable('invitations', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  email: varchar('email', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull(),
  invitedBy: integer('invited_by')
    .notNull()
    .references(() => users.id),
  invitedAt: timestamp('invited_at').notNull().defaultNow(),
  status: varchar('status', { length: 20 }).notNull().default('pending'),
});

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 150 }).notNull(),
  website: varchar('website', { length: 255 }),
  product: text('product').notNull(),
  targetMarket: varchar('target_market', { length: 150 }).notNull(),
  currentStage: varchar('current_stage', { length: 100 }),
  challenge: text('challenge').notNull(),
  timeline: varchar('timeline', { length: 100 }),
  message: text('message'),
  status: varchar('status', { length: 30 }).notNull().default('new'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const cases = pgTable('cases', {
  id: serial('id').primaryKey(),
  teamId: integer('team_id')
    .notNull()
    .references(() => teams.id),
  leadId: integer('lead_id').references(() => leads.id),
  createdBy: integer('created_by').references(() => users.id),
  assignedTo: integer('assigned_to').references(() => users.id),
  title: varchar('title', { length: 180 }).notNull(),
  clientName: varchar('client_name', { length: 150 }).notNull(),
  clientEmail: varchar('client_email', { length: 255 }),
  company: varchar('company', { length: 150 }).notNull(),
  product: text('product').notNull(),
  originMarket: varchar('origin_market', { length: 120 }).notNull().default('Canada'),
  targetMarket: varchar('target_market', { length: 150 }).notNull(),
  status: varchar('status', { length: 30 }).notNull().default('intake'),
  summary: text('summary'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const caseTransactions = pgTable('case_transactions', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.id),
  description: text('description').notNull(),
  originMarket: varchar('origin_market', { length: 120 }).notNull().default('Canada'),
  destinationMarket: varchar('destination_market', { length: 150 }).notNull(),
  estimatedValue: integer('estimated_value'),
  currency: varchar('currency', { length: 3 }).notNull().default('CAD'),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const diagnosticAssessments = pgTable('diagnostic_assessments', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.id),
  createdBy: integer('created_by').references(() => users.id),
  monthlyOutbound: integer('monthly_outbound').notNull().default(0),
  monthlyInbound: integer('monthly_inbound').notNull().default(0),
  corridors: integer('corridors').notNull().default(1),
  urgentShare: integer('urgent_share').notNull().default(0),
  manualHours: integer('manual_hours').notNull().default(0),
  index: integer('index').notNull().default(0),
  priority: varchar('priority', { length: 30 }).notNull().default('Baseline'),
  estimatedReviewHours: integer('estimated_review_hours').notNull().default(0),
  observations: text('observations'),
  pressurePoints: text('pressure_points'),
  estimatedExportValue: integer('estimated_export_value').notNull().default(0),
  destinationCount: integer('destination_count').notNull().default(1),
  buyerReadiness: integer('buyer_readiness').notNull().default(0),
  documentationReadiness: integer('documentation_readiness').notNull().default(0),
  regulatoryClarity: integer('regulatory_clarity').notNull().default(0),
  logisticsReadiness: integer('logistics_readiness').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const marketReviews = pgTable('market_reviews', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.id),
  createdBy: integer('created_by').references(() => users.id),
  marketSummary: text('market_summary').notNull().default(''),
  buyerFit: text('buyer_fit').notNull().default(''),
  complianceQuestions: text('compliance_questions').notNull().default(''),
  routeConsiderations: text('route_considerations').notNull().default(''),
  paymentConsiderations: text('payment_considerations').notNull().default(''),
  riskSummary: text('risk_summary').notNull().default(''),
  recommendations: text('recommendations').notNull().default(''),
  internalNotes: text('internal_notes').notNull().default(''),
  clientReady: boolean('client_ready').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const deliverables = pgTable('deliverables', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.id),
  createdBy: integer('created_by').references(() => users.id),
  title: varchar('title', { length: 180 }).notNull(),
  summary: text('summary').notNull().default(''),
  risks: text('risks').notNull().default(''),
  recommendations: text('recommendations').notNull().default(''),
  nextSteps: text('next_steps').notNull().default(''),
  status: varchar('status', { length: 30 }).notNull().default('draft'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const followUps = pgTable('follow_ups', {
  id: serial('id').primaryKey(),
  caseId: integer('case_id')
    .notNull()
    .references(() => cases.id),
  assignedTo: integer('assigned_to').references(() => users.id),
  title: varchar('title', { length: 180 }).notNull(),
  notes: text('notes'),
  status: varchar('status', { length: 30 }).notNull().default('open'),
  dueAt: timestamp('due_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const teamsRelations = relations(teams, ({ many }) => ({
  teamMembers: many(teamMembers),
  activityLogs: many(activityLogs),
  invitations: many(invitations),
  cases: many(cases),
}));

export const usersRelations = relations(users, ({ many }) => ({
  teamMembers: many(teamMembers),
  invitationsSent: many(invitations),
  createdCases: many(cases),
  diagnosticAssessments: many(diagnosticAssessments),
  marketReviews: many(marketReviews),
  deliverables: many(deliverables),
}));

export const invitationsRelations = relations(invitations, ({ one }) => ({
  team: one(teams, {
    fields: [invitations.teamId],
    references: [teams.id],
  }),
  invitedBy: one(users, {
    fields: [invitations.invitedBy],
    references: [users.id],
  }),
}));

export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.id],
  }),
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
  }),
}));

export const activityLogsRelations = relations(activityLogs, ({ one }) => ({
  team: one(teams, {
    fields: [activityLogs.teamId],
    references: [teams.id],
  }),
  user: one(users, {
    fields: [activityLogs.userId],
    references: [users.id],
  }),
  case: one(cases, {
    fields: [activityLogs.caseId],
    references: [cases.id],
  }),
}));

export const casesRelations = relations(cases, ({ one, many }) => ({
  team: one(teams, {
    fields: [cases.teamId],
    references: [teams.id],
  }),
  lead: one(leads, {
    fields: [cases.leadId],
    references: [leads.id],
  }),
  creator: one(users, {
    fields: [cases.createdBy],
    references: [users.id],
  }),
  transactions: many(caseTransactions),
  diagnosticAssessments: many(diagnosticAssessments),
  marketReviews: many(marketReviews),
  deliverables: many(deliverables),
  followUps: many(followUps),
}));

export const caseTransactionsRelations = relations(caseTransactions, ({ one }) => ({
  case: one(cases, {
    fields: [caseTransactions.caseId],
    references: [cases.id],
  }),
}));

export const diagnosticAssessmentsRelations = relations(
  diagnosticAssessments,
  ({ one }) => ({
    case: one(cases, {
      fields: [diagnosticAssessments.caseId],
      references: [cases.id],
    }),
    creator: one(users, {
      fields: [diagnosticAssessments.createdBy],
      references: [users.id],
    }),
  })
);

export const marketReviewsRelations = relations(marketReviews, ({ one }) => ({
  case: one(cases, {
    fields: [marketReviews.caseId],
    references: [cases.id],
  }),
  creator: one(users, {
    fields: [marketReviews.createdBy],
    references: [users.id],
  }),
}));

export const deliverablesRelations = relations(deliverables, ({ one }) => ({
  case: one(cases, {
    fields: [deliverables.caseId],
    references: [cases.id],
  }),
  creator: one(users, {
    fields: [deliverables.createdBy],
    references: [users.id],
  }),
}));

export const followUpsRelations = relations(followUps, ({ one }) => ({
  case: one(cases, {
    fields: [followUps.caseId],
    references: [cases.id],
  }),
  assignee: one(users, {
    fields: [followUps.assignedTo],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Team = typeof teams.$inferSelect;
export type NewTeam = typeof teams.$inferInsert;
export type TeamMember = typeof teamMembers.$inferSelect;
export type NewTeamMember = typeof teamMembers.$inferInsert;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type NewActivityLog = typeof activityLogs.$inferInsert;
export type Invitation = typeof invitations.$inferSelect;
export type NewInvitation = typeof invitations.$inferInsert;
export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
export type Case = typeof cases.$inferSelect;
export type NewCase = typeof cases.$inferInsert;
export type CaseTransaction = typeof caseTransactions.$inferSelect;
export type NewCaseTransaction = typeof caseTransactions.$inferInsert;
export type DiagnosticAssessment = typeof diagnosticAssessments.$inferSelect;
export type NewDiagnosticAssessment = typeof diagnosticAssessments.$inferInsert;
export type MarketReview = typeof marketReviews.$inferSelect;
export type NewMarketReview = typeof marketReviews.$inferInsert;
export type Deliverable = typeof deliverables.$inferSelect;
export type NewDeliverable = typeof deliverables.$inferInsert;
export type FollowUp = typeof followUps.$inferSelect;
export type NewFollowUp = typeof followUps.$inferInsert;
export type TeamDataWithMembers = Team & {
  teamMembers: (TeamMember & {
    user: Pick<User, 'id' | 'name' | 'email'>;
  })[];
};

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_TEAM = 'CREATE_TEAM',
  REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
  INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
  CREATE_LEAD = 'CREATE_LEAD',
  CREATE_CASE = 'CREATE_CASE',
  UPDATE_CASE = 'UPDATE_CASE',
  SAVE_DIAGNOSTIC = 'SAVE_DIAGNOSTIC',
  UPDATE_MARKET_REVIEW = 'UPDATE_MARKET_REVIEW',
  CREATE_DELIVERABLE = 'CREATE_DELIVERABLE',
}
