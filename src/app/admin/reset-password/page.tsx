"use client";

import { LockKeyhole } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";

export default function AdminResetPasswordPage() {
  const [message] = useState("Placeholder para restablecimiento de contraseña con Supabase Auth.");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090909] px-4 py-10 text-white">
      <Card
        variant="default"
        className="w-full max-w-lg p-6"
        style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.xl }}
      >
        <h1 className="text-2xl font-semibold text-white">Restablecer contraseña</h1>
        <p className="mt-2 text-sm text-white/60">Este flujo queda preparado para Supabase Auth, sin crear usuarios públicos.</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75">
          <div className="mb-2 flex items-center gap-2 text-[#FF6B00]"><LockKeyhole size={16} /> Placeholder</div>
          {message}
        </div>

        <div className="mt-4">
          <Button type="button" variant="outline" href="/admin/login">Volver al login</Button>
        </div>
      </Card>
    </div>
  );
}
