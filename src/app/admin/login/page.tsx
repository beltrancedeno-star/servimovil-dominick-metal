"use client";

import { LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";
import { signInAdmin } from "@/lib/supabase/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@servimovil.com");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await signInAdmin(email, password);

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090909] px-4 py-10 text-white">
      <Card
        variant="default"
        className="w-full max-w-lg p-6"
        style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.xl }}
      >
        <div className="mb-6">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">SERVIMÓVIL DOMINICK METAL</p>
          <h1 className="mt-2 text-2xl font-semibold text-white">Acceso al administrador</h1>
          <p className="mt-2 text-sm text-white/60">Login protegido por Supabase Auth. No se crea registro público.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-white/75">
            <span className="mb-2 flex items-center gap-2"><Mail size={16} /> Email</span>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-[#FF6B00]"
            />
          </label>

          <label className="block text-sm text-white/75">
            <span className="mb-2 flex items-center gap-2"><LockKeyhole size={16} /> Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none focus:border-[#FF6B00]"
            />
          </label>

          {message ? <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{message}</div> : null}

          <div className="flex flex-wrap items-center gap-3">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Ingresando..." : "Iniciar sesión"}
            </Button>
            <Button type="button" href="/admin/forgot-password" variant="outline">
              Recuperar contraseña
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
