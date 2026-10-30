'use client'
import Link from "next/link";
import { Suspense, type ReactNode } from "react";

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  effectiveDate: string;
  children: ReactNode;
};

function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}

export function LegalPageShell({
  eyebrow,
  title,
  description,
  effectiveDate,
  children,
}: LegalPageShellProps) {
  return (
    <main className="min-h-screen bg-[#FBF9F2] text-[#1B1C18]">
      <header className="border-b border-[#EAE8E0] bg-[#FCFBF7]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <Link
            href="/"
            aria-label="Foolioo home"
            className="font-['Space_Grotesk'] text-[18px] font-semibold lowercase tracking-[-0.7px] text-[#1B1C18]"
          >
            foolioo<span className="text-[#7852D6]">.</span>
          </Link>

          <nav className="flex items-center gap-4 font-['Space_Grotesk'] text-[12px] text-[#747878] sm:gap-6 sm:text-[13px]">
            <Link href="/sign-in" className="transition-colors hover:text-[#7852D6]">
              Sign in
            </Link>

            <Link
              href="/sign-up"
              className="rounded-lg bg-[#1B1C18] px-3.5 py-2 font-medium text-white transition-colors hover:bg-[#393A34] sm:px-4"
            >
              Start free trial
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-[760px]">
          <p className="font-['Space_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7852D6]">
            {eyebrow}
          </p>

          <h1 className="mt-3 font-['Newsreader'] text-[44px] font-normal leading-[1.02] tracking-[-1.1px] text-[#1B1C18] sm:text-[56px]">
            {title}
          </h1>

          <p className="mt-4 max-w-[650px] font-['Space_Grotesk'] text-[14px] leading-6 text-[#747878] sm:text-[15px]">
            {description}
          </p>

          <p className="mt-5 border-b border-[#EAE8E0] pb-7 font-['Space_Grotesk'] text-[11px] text-[#92938C]">
            Effective date: {effectiveDate}
          </p>

          <article className="legal-copy mt-8 font-['Space_Grotesk'] text-[13px] leading-[1.85] text-[#55574F] sm:text-[14px]">
            {children}
          </article>

          <div className="mt-12 rounded-2xl border border-[#E7E3D9] bg-white/70 p-5 sm:p-6">
            <p className="font-['Newsreader'] text-[23px] leading-tight text-[#1B1C18]">
              Need help with these terms?
            </p>

            <p className="mt-2 font-['Space_Grotesk'] text-[12px] leading-5 text-[#747878]">
              Contact the Foolioo team through the support channel provided in your workspace or customer agreement.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 font-['Space_Grotesk'] text-[12px] font-semibold">
              <Link
                href="/privacy"
                className="text-[#705AA8] underline underline-offset-4 hover:text-[#7852D6]"
              >
                Privacy policy
              </Link>

              <Link
                href="/sign-up"
                className="text-[#705AA8] underline underline-offset-4 hover:text-[#7852D6]"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-[#EAE8E0] bg-[#FCFBF7]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 font-['Space_Grotesk'] text-[10px] text-[#92938C] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>
            ©{' '}
            <Suspense fallback="2025">
              <CopyrightYear />
            </Suspense>{' '}
            Foolioo. All rights reserved.
          </span>

          <div className="flex gap-5">
            <Link href="/terms" className="transition-colors hover:text-[#7852D6]">
              Terms of Service
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-[#7852D6]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .legal-copy h2 {
          margin-top: 2.25rem;
          margin-bottom: 0.65rem;
          color: #1B1C18;
          font-family: "Newsreader", serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.35px;
        }

        .legal-copy p {
          margin-top: 0.65rem;
        }

        .legal-copy ul {
          margin-top: 0.75rem;
          margin-left: 1.25rem;
          list-style: disc;
        }

        .legal-copy li {
          margin-top: 0.35rem;
          padding-left: 0.2rem;
        }

        .legal-copy strong {
          color: #34362E;
          font-weight: 600;
        }

        .legal-copy a {
          color: #705AA8;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
    </main>
  );
}