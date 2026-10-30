import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { syncAndGetOnboardingState, type OnboardingSnapshot } from "../../lib/auth/backend";
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";

export const dynamic = "force-dynamic";

export default async function OnboardingPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/sign-in");

  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.access_token) redirect("/sign-in");

  let onboarding: OnboardingSnapshot;
  try {
    onboarding = await syncAndGetOnboardingState(session.access_token);
  } catch (err) {
    console.error("[onboarding/page] Unable to load onboarding:", err);
    throw new Error("We couldn't load your Foolioo workspace. Please refresh and try again.");
  }

  if (onboarding.status === "completed") redirect("/dashboard");

  return <OnboardingFlow initialOnboarding={onboarding} />;
}
