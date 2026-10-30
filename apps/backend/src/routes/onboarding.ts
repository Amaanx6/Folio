import type { Request, Response } from "express";
import { eq, sql } from "drizzle-orm";
import { db } from "../config/db.js";
import { clients } from "@repo/db";

const GOALS = [
  "increase_reach",
  "qualify_enquiries",
  "improve_follow_ups",
  "complete_campaigns",
  "reduce_manual_calling",
  "improve_consistency",
  "other",
] as const;

const CHANNELS = ["phone", "whatsapp", "sms", "email", "other"] as const;
const YES_NO = ["yes", "no"] as const;
const TEAM_OPTIONS = ["yes", "no", "not_yet"] as const;
const CONTACT_VOLUMES = [
  "0_250",
  "250_1000",
  "1000_15000",
  "15000_50000",
  "50000_plus",
  "not_sure",
] as const;
const LAUNCH_TIMELINES = ["0_1_month", "1_3_months", "3_6_months", "6_12_months", "not_sure"] as const;

export type OnboardingAnswers = {
  primaryGoals?: (typeof GOALS)[number][];
  usesCrmOrDialer?: (typeof YES_NO)[number];
  channels?: (typeof CHANNELS)[number][];
  monthlyContacts?: (typeof CONTACT_VOLUMES)[number];
  managesOutboundTeam?: (typeof TEAM_OPTIONS)[number];
  launchTimeline?: (typeof LAUNCH_TIMELINES)[number];
};

type OnboardingRecord = {
  version: 1;
  status: "not_started" | "in_progress" | "completed";
  currentStep: number;
  hasSeenWelcome: boolean;
  answers: OnboardingAnswers;
  skippedSteps: number[];
  completedAt: string | null;
  updatedAt: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAllowedArray(value: unknown, allowed: readonly string[]): value is string[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === "string" && allowed.includes(entry));
}

function validateAnswers(value: unknown): { ok: true; answers: OnboardingAnswers } | { ok: false; error: string } {
  if (!isRecord(value)) return { ok: false, error: "Answers must be an object" };

  const answers: OnboardingAnswers = {};

  if (value.primaryGoals !== undefined) {
    if (!isAllowedArray(value.primaryGoals, GOALS)) return { ok: false, error: "Invalid primary goals" };
    answers.primaryGoals = [...new Set(value.primaryGoals)] as OnboardingAnswers["primaryGoals"];
  }

  if (value.usesCrmOrDialer !== undefined) {
    if (typeof value.usesCrmOrDialer !== "string" || !YES_NO.includes(value.usesCrmOrDialer as (typeof YES_NO)[number])) {
      return { ok: false, error: "Invalid CRM or dialer selection" };
    }
    answers.usesCrmOrDialer = value.usesCrmOrDialer as (typeof YES_NO)[number];
  }

  if (value.channels !== undefined) {
    if (!isAllowedArray(value.channels, CHANNELS)) return { ok: false, error: "Invalid channel selection" };
    answers.channels = [...new Set(value.channels)] as OnboardingAnswers["channels"];
  }

  if (value.monthlyContacts !== undefined) {
    if (typeof value.monthlyContacts !== "string" || !CONTACT_VOLUMES.includes(value.monthlyContacts as (typeof CONTACT_VOLUMES)[number])) {
      return { ok: false, error: "Invalid monthly contact volume" };
    }
    answers.monthlyContacts = value.monthlyContacts as (typeof CONTACT_VOLUMES)[number];
  }

  if (value.managesOutboundTeam !== undefined) {
    if (typeof value.managesOutboundTeam !== "string" || !TEAM_OPTIONS.includes(value.managesOutboundTeam as (typeof TEAM_OPTIONS)[number])) {
      return { ok: false, error: "Invalid outbound team selection" };
    }
    answers.managesOutboundTeam = value.managesOutboundTeam as (typeof TEAM_OPTIONS)[number];
  }

  if (value.launchTimeline !== undefined) {
    if (typeof value.launchTimeline !== "string" || !LAUNCH_TIMELINES.includes(value.launchTimeline as (typeof LAUNCH_TIMELINES)[number])) {
      return { ok: false, error: "Invalid launch timeline" };
    }
    answers.launchTimeline = value.launchTimeline as (typeof LAUNCH_TIMELINES)[number];
  }

  return { ok: true, answers };
}

function normalizeOnboarding(value: unknown): OnboardingRecord {
  const record = isRecord(value) ? value : {};
  const rawAnswers = isRecord(record.answers) ? record.answers : {};
  const validated = validateAnswers(rawAnswers);
  const status = record.status === "completed" || record.status === "in_progress" ? record.status : "not_started";
  const currentStep = Number.isInteger(record.currentStep)
    ? Math.min(6, Math.max(0, Number(record.currentStep)))
    : 0;
  const skippedSteps = Array.isArray(record.skippedSteps)
    ? [...new Set(record.skippedSteps.filter((step): step is number => Number.isInteger(step) && step >= 0 && step <= 5))]
    : [];

  return {
    version: 1,
    status,
    currentStep,
    hasSeenWelcome: record.hasSeenWelcome === true,
    answers: validated.ok ? validated.answers : {},
    skippedSteps,
    completedAt: typeof record.completedAt === "string" ? record.completedAt : null,
    updatedAt: typeof record.updatedAt === "string" ? record.updatedAt : new Date(0).toISOString(),
  };
}

/**
 * GET /api/onboarding
 * Returns the authenticated workspace's saved onboarding state.
 */
export async function getOnboardingRoute(req: Request, res: Response) {
  try {
    const [client] = await db
      .select({ metadata: clients.metadata })
      .from(clients)
      .where(eq(clients.id, req.clientId!))
      .limit(1);

    if (!client) {
      return res.status(404).json({ ok: false, error: "Workspace not found" });
    }

    const metadata = isRecord(client.metadata) ? client.metadata : {};
    const onboarding = normalizeOnboarding(metadata.onboarding);

    return res.status(200).json({ ok: true, onboarding });
  } catch (err: unknown) {
    console.error("[onboarding/get] Unexpected error:", err);
    return res.status(500).json({ ok: false, error: "Unable to load onboarding progress" });
  }
}

/**
 * PUT /api/onboarding
 * Saves questionnaire progress in clients.metadata.onboarding.
 * The authenticated workspace ID comes only from requireWorkspace middleware.
 */
export async function saveOnboardingRoute(req: Request, res: Response) {
  try {
    const body = isRecord(req.body) ? req.body : {};
    const [client] = await db
      .select({ metadata: clients.metadata })
      .from(clients)
      .where(eq(clients.id, req.clientId!))
      .limit(1);

    if (!client) {
      return res.status(404).json({ ok: false, error: "Workspace not found" });
    }

    const metadata = isRecord(client.metadata) ? client.metadata : {};
    const previous = normalizeOnboarding(metadata.onboarding);

    const currentStep = body.currentStep === undefined ? previous.currentStep : body.currentStep;
    if (!Number.isInteger(currentStep) || Number(currentStep) < 0 || Number(currentStep) > 6) {
      return res.status(400).json({ ok: false, error: "currentStep must be an integer between 0 and 6" });
    }
    const normalizedCurrentStep = Number(currentStep);

    const incomingAnswers = body.answers === undefined ? {} : body.answers;
    if (!isRecord(incomingAnswers)) {
      return res.status(400).json({ ok: false, error: "Answers must be an object" });
    }

    const validatedIncoming = validateAnswers(incomingAnswers);
    if (!validatedIncoming.ok) {
      return res.status(400).json({ ok: false, error: validatedIncoming.error });
    }

    const mergedAnswers = { ...previous.answers, ...validatedIncoming.answers };
    const incomingSkipped = body.skippedSteps === undefined ? previous.skippedSteps : body.skippedSteps;
    if (!Array.isArray(incomingSkipped) || !incomingSkipped.every((step) => Number.isInteger(step) && step >= 0 && step <= 5)) {
      return res.status(400).json({ ok: false, error: "skippedSteps must contain question indexes from 0 to 5" });
    }

    if (body.hasSeenWelcome !== undefined && typeof body.hasSeenWelcome !== "boolean") {
      return res.status(400).json({ ok: false, error: "hasSeenWelcome must be a boolean" });
    }
    if (body.completed !== undefined && typeof body.completed !== "boolean") {
      return res.status(400).json({ ok: false, error: "completed must be a boolean" });
    }

    const isCompleted = body.completed === true || previous.status === "completed";
    const now = new Date().toISOString();
    const onboarding: OnboardingRecord = {
      version: 1,
      status: isCompleted ? "completed" : normalizedCurrentStep > 0 || body.hasSeenWelcome === true || previous.status === "in_progress" ? "in_progress" : "not_started",
      currentStep: isCompleted ? 6 : normalizedCurrentStep,
      hasSeenWelcome: body.hasSeenWelcome === true || previous.hasSeenWelcome,
      answers: mergedAnswers,
      skippedSteps: [...new Set(incomingSkipped as number[])].sort((a, b) => a - b),
      completedAt: isCompleted ? previous.completedAt ?? now : null,
      updatedAt: now,
    };

    // Atomic JSONB update preserves unrelated client metadata.
    await db
      .update(clients)
      .set({
        metadata: sql`jsonb_set(COALESCE(${clients.metadata}, '{}'::jsonb), '{onboarding}', ${JSON.stringify(onboarding)}::jsonb, true)`,
        updatedAt: new Date(),
      })
      .where(eq(clients.id, req.clientId!));

    return res.status(200).json({ ok: true, onboarding });
  } catch (err: unknown) {
    console.error("[onboarding/save] Unexpected error:", err);
    return res.status(500).json({ ok: false, error: "Unable to save onboarding progress" });
  }
}
