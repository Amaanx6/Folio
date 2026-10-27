import { Suspense } from "react";
import Link from "next/link"; // <-- Import Link
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { connection } from "next/server";

async function AuthCheck() {
  await connection();
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/sign-in");
  return null;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBF9F2]">
      <header className="flex h-16 items-center justify-between border-b border-[#E9E8E1] bg-white px-6">
        
        {/* Wrapped in Link to go home */}
        <Link 
          href="/" 
          className="font-['Space_Grotesk'] text-[16px] font-semibold text-[#1B1C18] transition-opacity hover:opacity-70"
        >
          foolioo
        </Link>

      </header>
      
      <main className="p-6">
        <Suspense fallback={<div className="text-center mt-10 text-[#747878]">Loading...</div>}>
          <AuthCheck />
          {children}
        </Suspense>
      </main>
    </div>
  );
}