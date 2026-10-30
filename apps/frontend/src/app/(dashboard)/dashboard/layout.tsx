
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getOnboardingState } from "../../../lib/auth/backend";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { Suspense } from "react";

async function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();

  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) redirect("/sign-in");

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) redirect("/sign-in");

  // The backend is authoritative.
  // Incomplete users cannot enter dashboard routes.
  const onboarding = await getOnboardingState(session.access_token);

  if (!onboarding || onboarding.status !== "completed") {
    redirect("/onboarding");
  }

  return (
    <div className="min-h-screen bg-[#FBF9F2]">
      <header className="flex h-16 items-center justify-between border-b border-[#E9E8E1] bg-white px-6">
        <Link
          href="/"
          className="font-['Space_Grotesk'] text-[16px] font-semibold text-[#1B1C18] transition-opacity hover:opacity-70"
        >
          foolioo
        </Link>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FBF9F2]">
          <p className="text-sm text-[#747878]">Loading your workspace...</p>
        </div>
      }
    >
      <DashboardContent>{children}</DashboardContent>
    </Suspense>
  );
}
