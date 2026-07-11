"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderKanban,
  Image,
  LayoutDashboard,
  LogOut,
  MessageSquareQuote,
  PanelLeftClose,
  PenLine,
  Settings,
  Users,
} from "lucide-react";

import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { spacing } from "../../lib/design/spacing";
import { shadows } from "../../lib/design/shadows";

const items = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Servicios", icon: BriefcaseBusiness },
  { href: "/admin/projects", label: "Proyectos", icon: FolderKanban },
  { href: "/admin/gallery", label: "Galería", icon: Image },
  { href: "/admin/testimonials", label: "Testimonios", icon: MessageSquareQuote },
  { href: "/admin/blog", label: "Blog", icon: PenLine },
  { href: "/admin/quotes", label: "Cotizaciones", icon: FileText },
  { href: "/admin/clients", label: "Clientes", icon: Users },
  { href: "/admin/settings", label: "Configuración", icon: Settings },
];

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className="flex h-screen flex-col border-r border-white/10 bg-[#0A0A0A] transition-all duration-300"
      style={{
        width: collapsed ? "88px" : "280px",
        boxShadow: shadows.soft,
      }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold text-white"
            style={{
              borderColor: "rgba(255,107,0,0.7)",
              backgroundColor: colors.grafito,
              borderRadius: radius.full,
            }}
          >
            SM
          </div>
          {!collapsed ? (
            <div className="min-w-0">
              <p className="truncate text-[10px] uppercase tracking-[0.35em] text-white/65">SERVIMÓVIL</p>
              <p className="truncate text-sm font-semibold text-white">DOMINICK METAL</p>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? "Expandir sidebar" : "Colapsar sidebar"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition"
              style={{
                backgroundColor: active ? "rgba(255,107,0,0.14)" : "transparent",
                color: active ? colors.white : "rgba(255,255,255,0.7)",
                border: active ? `1px solid ${"rgba(255,107,0,0.4)"}` : "1px solid transparent",
              }}
            >
              <Icon size={18} />
              {!collapsed ? <span>{item.label}</span> : null}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-3 py-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-white/80 transition hover:bg-white/5"
        >
          <LogOut size={18} />
          {!collapsed ? <span>Cerrar sesión</span> : null}
        </button>
      </div>
    </aside>
  );
}
