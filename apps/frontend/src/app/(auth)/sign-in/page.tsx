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
    <>
      <h1 className="font-['Newsreader'] text-[36px] font-normal leading-[1.12] tracking-[-0.8px] text-[#1B1C18]">
        Welcome back.
      </h1>
      <p className="mt-2 font-['Space_Grotesk'] text-[13px] text-[#747878]">
        Sign in to your Foolioo workspace.
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

      <form action={formAction} className="flex flex-col gap-4">
        <Input
          id="email"
          name="email"
          type="email"
          label="Work email"
          placeholder="you@company.com"
          error={state?.fieldErrors?.email?.[0]}
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          error={state?.fieldErrors?.password?.[0]}
          required
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="font-['Space_Grotesk'] text-[12px] font-medium text-[#747878] hover:text-[#1B1C18]"
          >
            Forgot password?
          </Link>
        </div>

        {state?.error && (
          <div className="rounded-md border border-[#EF4444]/30 bg-[#FEE2E2] px-3 py-2 font-['Space_Grotesk'] text-[12px] text-[#EF4444]">
            {state.error}
          </div>
        )}

        <Button type="submit" loading={isPending}>
          Sign in
        </Button>
      </form>

      <p className="mt-8 text-center font-['Space_Grotesk'] text-[13px] text-[#747878]">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-[#1B1C18] underline underline-offset-2"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}