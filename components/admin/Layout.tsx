"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { Container } from "../ui/Container";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

const titleMap: Record<string, string> = {
  dashboard: "Dashboard",
  services: "Servicios",
  projects: "Proyectos",
  gallery: "Galería",
  testimonials: "Testimonios",
  blog: "Blog",
  quotes: "Cotizaciones",
  clients: "Clientes",
  settings: "Configuración",
};

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const routeSegment = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const adminIndex = parts.findIndex((part) => part === "admin");
    const segment = parts[adminIndex + 1] ?? "dashboard";
    return segment;
  }, [pathname]);

  const title = titleMap[routeSegment] ?? "Dashboard";
  const breadcrumbs = ["Admin", title];

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <div className="flex min-h-screen">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((value) => !value)} />
        <div className="flex-1">
          <Topbar breadcrumbs={breadcrumbs} title={title} />
          <main className="min-h-screen bg-[#090909]">
            <Container className="py-8">{children}</Container>
          </main>
        </div>
      </div>
    </div>
  );
}
