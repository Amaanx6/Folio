"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUpAction } from "../actions";
import { GoogleButton } from "@/components/auth/google-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [state, formAction, isPending] = useActionState(signUpAction, null);

  return (
    <main className="mx-auto w-full max-w-[384px]">
      <div className="mb-7">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E7DEFF] bg-[#F4F0FF] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7852D6]" aria-hidden="true" />
          <span className="font-['Space_Grotesk'] text-[10px] font-semibold uppercase tracking-[1.25px] text-[#644ABB]">
            Create your workspace
          </span>
        </div>

        <h1 className="font-['Newsreader'] text-[40px] font-normal leading-[1.04] tracking-[-1.1px] text-[#1B1C18] sm:text-[44px]">
          Start your trial.
        </h1>
        <p className="mt-3 max-w-[330px] font-['Space_Grotesk'] text-[13px] leading-[21px] text-[#747878] sm:text-[14px]">
          Set up your Foolioo account and bring your voice operations into one workspace.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-['Space_Grotesk'] text-[11px] font-medium text-[#747878]">
          <span className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#7852D6]" fill="none" aria-hidden="true">
              <path d="M8 1.8 13 4v3.7c0 3.1-2 5.3-5 6.5-3-1.2-5-3.4-5-6.5V4l5-2.2Z" stroke="currentColor" strokeWidth="1.25" />
              <path d="m5.7 7.8 1.5 1.5 3.1-3.2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            7-day free trial
          </span>
          <span className="text-[#C7C5BC]" aria-hidden="true">/</span>
          <span>No credit card required</span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="[&_button]:!min-h-[46px] [&_button]:!w-full [&_button]:!rounded-lg [&_button]:!border [&_button]:!border-[#E6E4DC] [&_button]:!bg-white [&_button]:!font-['Space_Grotesk'] [&_button]:!text-[13px] [&_button]:!font-semibold [&_button]:!text-[#1B1C18] [&_button]:!shadow-[0_1px_2px_rgba(24,24,20,0.04)] [&_button]:transition-colors [&_button:hover]:!bg-[#F8F7F2]">
          <GoogleButton />
        </div>

        <div className="flex items-center gap-3" aria-hidden="true">
          <div className="h-px flex-1 bg-[#E9E8E1]" />
          <span className="font-['Space_Grotesk'] text-[10px] font-medium uppercase tracking-[1.1px] text-[#92938D]">
            Or use your work email
          </span>
          <div className="h-px flex-1 bg-[#E9E8E1]" />
        </div>
      </div>

      {state?.success ? (
        <div
          role="status"
          className="mt-5 rounded-xl border border-[#22A06B]/25 bg-[#EAF8F1] px-4 py-4 font-['Space_Grotesk'] text-[13px] leading-5 text-[#18794E]"
        >
          <div className="mb-1 flex items-center gap-2 font-semibold">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="m4.5 10.2 3.4 3.4 7.6-7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Account request received
          </div>
          {state.success}
        </div>
      ) : (
        <form action={formAction} className="mt-6 flex flex-col gap-[18px]">
          <Input
            name="name"
            label="Full name"
            placeholder="Aarav Sharma"
            error={state?.fieldErrors?.name?.[0]}
            required
          />
          <Input
            name="email"
            type="email"
            label="Work email"
            placeholder="you@company.com"
            error={state?.fieldErrors?.email?.[0]}
            required
          />
          <div className="flex flex-col gap-2">
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="At least 8 characters"
              error={state?.fieldErrors?.password?.[0]}
              required
            />
            <p className="-mt-0.5 font-['Space_Grotesk'] text-[11px] leading-4 text-[#92938D]">
              Use at least 8 characters. You can configure your workspace after creating your account.
            </p>
          </div>

          {state?.error && (
            <div
              role="alert"
              className="rounded-lg border border-[#EF4444]/25 bg-[#FFF1F0] px-3.5 py-3 font-['Space_Grotesk'] text-[12px] leading-5 text-[#B42318]"
            >
              {state.error}
            </div>
          )}

          <div className="pt-1">
            <Button type="submit" loading={isPending}>
              Create account
            </Button>
          </div>
        </form>
      )}

      <div className="mt-7 border-t border-[#E9E8E1] pt-5">
        <p className="text-center font-['Space_Grotesk'] text-[12px] leading-5 text-[#747878] sm:text-[13px]">
          Already have a Foolioo account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-[#1B1C18] underline decoration-[#B8B5AA] underline-offset-4 transition-colors hover:text-[#7852D6] hover:decoration-[#7852D6]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
