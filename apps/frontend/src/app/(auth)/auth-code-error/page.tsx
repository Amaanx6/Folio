import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FBF9F2] p-6 text-center">
      <h1 className="font-['Newsreader'] text-[32px] font-normal text-[#1B1C18]">
        Authentication failed.
      </h1>
      <p className="mt-2 font-['Space_Grotesk'] text-[14px] text-[#747878]">
        The login link is invalid or has expired.
      </p>
      <Link href="/sign-in" className="mt-6 rounded-md bg-[#1B1C18] px-6 py-2.5 font-['Space_Grotesk'] text-[13px] font-semibold text-white">
        Return to Sign In
      </Link>
    </div>
  );
}