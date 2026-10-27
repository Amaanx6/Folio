"use server";

import { createClient } from "@/lib/supabase/server";
import { signInSchema, signUpSchema } from "@/lib/validations/auth";
import { redirect } from "next/navigation";

// Define the state type for our forms
export type AuthState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: string;
} | null;

export async function signInAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 1. Validate with Zod
  const validated = signInSchema.safeParse({ email, password });
  if (!validated.success) {
    return { fieldErrors: validated.error.flatten().fieldErrors };
  }

  // 2. Authenticate with Supabase
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) {
    // Return generic error to prevent email enumeration attacks
    return { error: "Invalid email or password." };
  }

  // 3. Redirect on success (must be outside try/catch in Server Actions)
  redirect("/dashboard");
}

export async function signUpAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validated = signUpSchema.safeParse({ name, email, password });
  if (!validated.success) {
    return { fieldErrors: validated.error.flatten().fieldErrors };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        full_name: validated.data.name, // Save the name in Supabase user metadata
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  // If Supabase requires email confirmation, session will be null
  if (data.session === null) {
    return { success: "Check your email to confirm your account." };
  }

  redirect("/dashboard");
}