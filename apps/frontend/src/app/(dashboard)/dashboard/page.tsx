"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="font-['Newsreader'] text-[36px] font-normal text-[#1B1C18]">
        Dashboard is coming soon.
      </h1>
      <p className="mt-2 font-['Space_Grotesk'] text-[14px] text-[#747878]">
        We are currently building your voice operations command center.
      </p>

      <button
        onClick={handleSignOut}
        disabled={loading}
        className="mt-8 rounded-md border border-[#E9E8E1] bg-white px-6 py-2.5 font-['Space_Grotesk'] text-[13px] font-semibold text-[#1B1C18] shadow-xs transition-colors hover:bg-[#F5F3EC] disabled:opacity-50"
      >
        {loading ? "Signing out..." : "Sign out"}
      </button>
    </div>
  );
}