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
    <>
      <h1 className="font-['Newsreader'] text-[36px] font-normal leading-[1.12] tracking-[-0.8px] text-[#1B1C18]">
        Start your trial.
      </h1>
      <p className="mt-2 font-['Space_Grotesk'] text-[13px] text-[#747878]">
        7 days free. No credit card required.
      </p>

      <div className="mt-8">
        <GoogleButton />
      </div>

      <div className="relative mt-8 mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#E9E8E1]"></div>
        </div>
        <div className="relative flex justify-center text-[11px] font-medium uppercase tracking-wider">
          <span className="bg-white lg:bg-transparent px-2 text-[#747878] font-['Space_Grotesk']">
            Or continue with email
          </span>
        </div>
      </div>

      {state?.success ? (
        <div className="rounded-md border border-[#22A06B]/30 bg-[#E3FCEF] px-4 py-3 font-['Space_Grotesk'] text-[13px] text-[#22A06B]">
          {state.success}
        </div>
      ) : (
        <form action={formAction} className="flex flex-col gap-4">
          <Input
            name="name"
            label="Full Name"
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
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="At least 8 characters"
            error={state?.fieldErrors?.password?.[0]}
            required
          />

          {state?.error && (
            <div className="rounded-md border border-[#EF4444]/30 bg-[#FEE2E2] px-3 py-2 font-['Space_Grotesk'] text-[12px] text-[#EF4444]">
              {state.error}
            </div>
          )}

          <Button type="submit" loading={isPending}>
            Create account
          </Button>
        </form>
      )}

      <p className="mt-8 text-center font-['Space_Grotesk'] text-[13px] text-[#747878]">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-medium text-[#1B1C18] underline underline-offset-2"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}