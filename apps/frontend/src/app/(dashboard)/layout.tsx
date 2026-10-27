import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Protect the route
  if (!user) redirect("/sign-in");

  return (
    <div className="min-h-screen bg-[#FBF9F2]">
      <header className="flex h-16 items-center border-b border-[#E9E8E1] bg-white px-6">
        <span className="font-['Space_Grotesk'] text-[16px] font-semibold text-[#1B1C18]">foolioo</span>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}