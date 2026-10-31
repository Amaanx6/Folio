import Link from "next/link";
import { Suspense } from "react";

type AuthErrorPageProps = {
  searchParams: Promise<{ error?: string | string[] }>;
};

async function AuthErrorMessage({ searchParams }: AuthErrorPageProps) {
  const { error } = await searchParams;
  const message = typeof error === "string"
    ? error
    : "Sign-in could not be completed. Please try again.";

  return (
    <p className="mt-2 max-w-md font-['Space_Grotesk'] text-[14px] text-[#747878]">
      {message}
    </p>
  );
}

export default function AuthErrorPage({ searchParams }: AuthErrorPageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FBF9F2] p-6 text-center">
      <h1 className="font-['Newsreader'] text-[32px] font-normal text-[#1B1C18]">
        Sign-in could not be completed.
      </h1>
      <Suspense
        fallback={
          <p className="mt-2 font-['Space_Grotesk'] text-[14px] text-[#747878]">
            Please try again.
          </p>
        }
      >
        <AuthErrorMessage searchParams={searchParams} />
      </Suspense>
      <Link href="/sign-in" className="mt-6 rounded-md bg-[#1B1C18] px-6 py-2.5 font-['Space_Grotesk'] text-[13px] font-semibold text-white">
        Return to Sign In
      </Link>
    </div>
  );
}