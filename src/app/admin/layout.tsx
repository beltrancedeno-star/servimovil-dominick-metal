import type { Metadata } from "next";

import { AdminLayout } from "@/components/admin/Layout";

export const metadata: Metadata = {
  title: "Panel Administrativo | SERVIMÓVIL DOMINICK METAL",
  description: "Sistema administrativo profesional para gestionar contenido y operaciones del negocio.",
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
