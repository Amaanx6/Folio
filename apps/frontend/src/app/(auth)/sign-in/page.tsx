"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signInAction } from "../actions";
import { GoogleButton } from "@/components/auth/google-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(signInAction, null);

  return (
    <main className="mx-auto w-full max-w-[384px]">
      <div className="mb-7">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E7DEFF] bg-[#F4F0FF] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7852D6]" aria-hidden="true" />
          <span className="font-['Space_Grotesk'] text-[10px] font-semibold uppercase tracking-[1.25px] text-[#644ABB]">
            Workspace access
          </span>
        </div>

        <h1 className="font-['Newsreader'] text-[40px] font-normal leading-[1.04] tracking-[-1.1px] text-[#1B1C18] sm:text-[44px]">
          Welcome back.
        </h1>
        <p className="mt-3 max-w-[330px] font-['Space_Grotesk'] text-[13px] leading-[21px] text-[#747878] sm:text-[14px]">
          Sign in to pick up where your team left off.
        </p>
        <div className="mt-4 flex items-center gap-2 font-['Space_Grotesk'] text-[11px] font-medium text-[#747878]">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-[#7852D6]" fill="none" aria-hidden="true">
            <path d="M4.2 7V5.2a3.8 3.8 0 0 1 7.6 0V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            <rect x="2.7" y="7" width="10.6" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          Secure access to your Foolioo workspace
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

      <form action={formAction} className="mt-6 flex flex-col gap-[18px]">
        <Input
          id="email"
          name="email"
          type="email"
          label="Work email"
          placeholder="you@company.com"
          error={state?.fieldErrors?.email?.[0]}
          required
        />
        <div className="flex flex-col gap-2">
          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            error={state?.fieldErrors?.password?.[0]}
            required
          />
          <div className="-mt-0.5 flex justify-end">
            <Link
              href="/forgot-password"
              className="font-['Space_Grotesk'] text-[11px] font-medium text-[#747878] underline decoration-transparent underline-offset-4 transition-colors hover:text-[#7852D6] hover:decoration-[#7852D6]"
            >
              Forgot password?
            </Link>
          </div>
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
            Sign in
          </Button>
        </div>
      </form>

      <div className="mt-7 border-t border-[#E9E8E1] pt-5">
        <p className="text-center font-['Space_Grotesk'] text-[12px] leading-5 text-[#747878] sm:text-[13px]">
          New to Foolioo?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-[#1B1C18] underline decoration-[#B8B5AA] underline-offset-4 transition-colors hover:text-[#7852D6] hover:decoration-[#7852D6]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
