import type { AuthError, Session, User } from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase/client";

export type AuthActionResult = {
  data: { session: Session | null; user: User | null } | null;
  error: AuthError | null;
};

export async function signInAdmin(email: string, password: string): Promise<AuthActionResult> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return {
    data,
    error,
  };
}

export async function signOutAdmin() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function requestPasswordReset(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/admin/reset-password`,
  });

  return { data, error };
}

export async function getCurrentSession() {
  return supabase.auth.getSession();
}

export async function getCurrentUser() {
  return supabase.auth.getUser();
}
