"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";
import { requestPasswordReset } from "@/lib/supabase/auth";

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { error } = await requestPasswordReset(email);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Se envió el placeholder de recuperación de contraseña. Esto es un mock de flujo de auth.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090909] px-4 py-10 text-white">
      <Card
        variant="default"
        className="w-full max-w-lg p-6"
        style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.xl }}
      >
        <h1 className="text-2xl font-semibold text-white">Recuperar contraseña</h1>
        <p className="mt-2 text-sm text-white/60">Placeholder de flujo seguro para reset de acceso del administrador.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block text-sm text-white/75">
            <span className="mb-2 flex items-center gap-2"><Mail size={16} /> Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-[#FF6B00]"
            />
          </label>

          {message ? <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">{message}</div> : null}

          <Button type="submit" variant="primary">Enviar</Button>
        </form>
      </Card>
    </div>
  );
}
