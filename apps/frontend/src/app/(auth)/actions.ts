"use server";

import { createClient } from "@/lib/supabase/server";
import { signInSchema, signUpSchema, resetPasswordSchema } from "@/lib/validations/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Upstash Rate Limiter (5 requests per minute per IP)
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});

export type AuthState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: string;
} | null;

export async function signInAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  // 1. Rate Limiting
  const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(`signin_${ip}`);
  if (!success) {
    return { error: "Too many login attempts. Please try again in a minute." };
  }

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 2. Validate
  const validated = signInSchema.safeParse({ email, password });
  if (!validated.success) {
    return { fieldErrors: validated.error.flatten().fieldErrors };
  }

  // 3. Authenticate
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) {
    // Return generic error to prevent email enumeration
    return { error: "Invalid email or password." };
  }

  redirect("/dashboard");
}

export async function signUpAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  // 1. Rate Limiting
  const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(`signup_${ip}`);
  if (!success) {
    return { error: "Too many sign-up attempts. Please try again in a minute." };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // 2. Validate
  const validated = signUpSchema.safeParse({ name, email, password });
  if (!validated.success) {
    return { fieldErrors: validated.error.flatten().fieldErrors };
  }

  // 3. Create User
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        full_name: validated.data.name,
      },
    },
  });

  if (error) {
    // SECURITY FIX: Log the real error server-side, but don't leak it to the client
    console.error("Supabase Signup Error:", error.message);
    
    if (error.message.toLowerCase().includes("already registered") || error.message.toLowerCase().includes("already exists")) {
      return { error: "An account with this email already exists." };
    }
    return { error: "Could not create account. Please try again." };
  }

  if (data.session === null) {
    return { success: "Check your email to confirm your account." };
  }

  redirect("/dashboard");
}

export async function forgotPasswordAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  // 1. Rate Limiting
  const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(`forgot_${ip}`);
  if (!success) {
    return { error: "Too many requests. Please try again in a minute." };
  }

  const email = formData.get("email") as string;

  if (!email || !email.includes("@")) {
    return { fieldErrors: { email: ["Please enter a valid email address."] } };
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?next=/reset-password`,
  });

  return { success: "If an account exists with this email, a reset link has been sent." };
}

export async function resetPasswordAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const password = formData.get("password") as string;

  const validated = resetPasswordSchema.safeParse({ password });
  if (!validated.success) {
    return { fieldErrors: validated.error.flatten().fieldErrors };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ 
    password: validated.data.password 
  });

  if (error) {
    return { error: "Failed to update password. Your session may have expired." };
  }
  
  redirect("/dashboard");
}