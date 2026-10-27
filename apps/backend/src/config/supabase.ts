import { createClient, type User } from "@supabase/supabase-js";
import { env } from "./env.js";

const supabaseAuth =
  env.supabase.url && env.supabase.publishableKey
    ? createClient(env.supabase.url, env.supabase.publishableKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

export function isSupabaseAuthConfigured(): boolean {
  return supabaseAuth !== null;
}

export async function verifySupabaseToken(accessToken: string): Promise<User> {
  if (!supabaseAuth) {
    throw new Error("Supabase Auth is not configured");
  }

  const { data, error } = await supabaseAuth.auth.getUser(accessToken);
  if (error) {
    throw error;
  }
  if (!data.user) {
    throw new Error("Supabase Auth returned no user for the access token");
  }

  return data.user;
}
