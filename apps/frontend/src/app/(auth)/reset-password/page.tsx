"use client";
import { useActionState } from "react";
import { resetPasswordAction } from "../actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResetPasswordPage() {
  const [state, formAction, isPending] = useActionState(resetPasswordAction, null);

  return (
    <>
      <h1 className="font-['Newsreader'] text-[32px] font-normal text-[#1B1C18]">Set new password</h1>
      <form action={formAction} className="mt-8 flex flex-col gap-4">
        <Input name="password" type="password" label="New Password" placeholder="At least 8 characters" required />
        {state?.error && <p className="text-[12px] text-[#EF4444]">{state.error}</p>}
        <Button type="submit" loading={isPending}>Update password</Button>
      </form>
    </>
  );
}