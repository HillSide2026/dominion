ALTER TABLE "activity_logs" ADD COLUMN "case_id" integer;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD COLUMN "estimated_export_value" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD COLUMN "destination_count" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD COLUMN "buyer_readiness" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD COLUMN "documentation_readiness" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD COLUMN "regulatory_clarity" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "diagnostic_assessments" ADD COLUMN "logistics_readiness" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE no action ON UPDATE no action;