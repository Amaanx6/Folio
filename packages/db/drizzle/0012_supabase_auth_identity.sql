ALTER TABLE "users" RENAME COLUMN "firebase_uid" TO "auth_user_id";--> statement-breakpoint
ALTER TABLE "users" RENAME CONSTRAINT "users_firebase_uid_unique" TO "users_auth_user_id_unique";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "auth_provider" SET DEFAULT 'email';
