import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { syncAndGetOnboardingState, type OnboardingSnapshot } from "../../lib/auth/backend";
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";

async function OnboardingContent() {
  await connection();

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

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FBF9F2]">
          <p className="text-sm text-[#747878]">Loading your workspace...</p>
        </div>
      }
    >
      <OnboardingContent />
    </Suspense>
  );
}
