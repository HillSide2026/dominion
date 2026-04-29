CREATE TABLE "case_transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"description" text NOT NULL,
	"origin_market" varchar(120) DEFAULT 'Canada' NOT NULL,
	"destination_market" varchar(150) NOT NULL,
	"estimated_value" integer,
	"currency" varchar(3) DEFAULT 'CAD' NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cases" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer NOT NULL,
	"lead_id" integer,
	"created_by" integer,
	"assigned_to" integer,
	"title" varchar(180) NOT NULL,
	"client_name" varchar(150) NOT NULL,
	"client_email" varchar(255),
	"company" varchar(150) NOT NULL,
	"product" text NOT NULL,
	"origin_market" varchar(120) DEFAULT 'Canada' NOT NULL,
	"target_market" varchar(150) NOT NULL,
	"status" varchar(30) DEFAULT 'intake' NOT NULL,
	"summary" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "deliverables" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"created_by" integer,
	"title" varchar(180) NOT NULL,
	"summary" text DEFAULT '' NOT NULL,
	"risks" text DEFAULT '' NOT NULL,
	"recommendations" text DEFAULT '' NOT NULL,
	"next_steps" text DEFAULT '' NOT NULL,
	"status" varchar(30) DEFAULT 'draft' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "diagnostic_assessments" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"created_by" integer,
	"monthly_outbound" integer DEFAULT 0 NOT NULL,
	"monthly_inbound" integer DEFAULT 0 NOT NULL,
	"corridors" integer DEFAULT 1 NOT NULL,
	"urgent_share" integer DEFAULT 0 NOT NULL,
	"manual_hours" integer DEFAULT 0 NOT NULL,
	"index" integer DEFAULT 0 NOT NULL,
	"priority" varchar(30) DEFAULT 'Baseline' NOT NULL,
	"estimated_review_hours" integer DEFAULT 0 NOT NULL,
	"observations" text,
	"pressure_points" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "follow_ups" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"assigned_to" integer,
	"title" varchar(180) NOT NULL,
	"notes" text,
	"status" varchar(30) DEFAULT 'open' NOT NULL,
	"due_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"company" varchar(150) NOT NULL,
	"website" varchar(255),
	"product" text NOT NULL,
	"target_market" varchar(150) NOT NULL,
	"current_stage" varchar(100),
	"challenge" text NOT NULL,
	"timeline" varchar(100),
	"message" text,
	"status" varchar(30) DEFAULT 'new' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "market_reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"case_id" integer NOT NULL,
	"created_by" integer,
	"market_summary" text DEFAULT '' NOT NULL,
	"buyer_fit" text DEFAULT '' NOT NULL,
	"compliance_questions" text DEFAULT '' NOT NULL,
	"route_considerations" text DEFAULT '' NOT NULL,
	"payment_considerations" text DEFAULT '' NOT NULL,
	"risk_summary" text DEFAULT '' NOT NULL,
	"recommendations" text DEFAULT '' NOT NULL,
	"internal_notes" text DEFAULT '' NOT NULL,
	"client_ready" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "case_transactions" ADD CONSTRAINT "case_transactions_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_lead_id_leads_id_fk" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cases" ADD CONSTRAINT "cases_assigned_to_users_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deliverables" ADD CONSTRAINT "deliverables_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD CONSTRAINT "diagnostic_assessments_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD CONSTRAINT "diagnostic_assessments_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follow_ups" ADD CONSTRAINT "follow_ups_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "follow_ups" ADD CONSTRAINT "follow_ups_assigned_to_users_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "market_reviews" ADD CONSTRAINT "market_reviews_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "market_reviews" ADD CONSTRAINT "market_reviews_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;