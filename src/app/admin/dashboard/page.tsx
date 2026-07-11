import { ArrowUpRight, FileText, FolderKanban, MessageSquareQuote, TrendingUp, Users } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChartCard } from "@/components/admin/ChartCard";
import { DashboardCard } from "@/components/admin/DashboardCard";
import { PageHeader } from "@/components/admin/PageHeader";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { RecentProjects } from "@/components/admin/RecentProjects";
import { RecentQuotes } from "@/components/admin/RecentQuotes";
import { StatCard } from "@/components/admin/StatCard";

const kpis = [
  { label: "Cotizaciones abiertas", value: "24", trend: "+12%", icon: <FileText size={18} /> },
  { label: "Proyectos activos", value: "08", trend: "+5%", icon: <FolderKanban size={18} /> },
  { label: "Reseñas nuevas", value: "16", trend: "+9%", icon: <MessageSquareQuote size={18} /> },
  { label: "Ingresos estimados", value: "$48.2K", trend: "+18%", icon: <TrendingUp size={18} /> },
];

const monthlyQuotes = [
  { month: "ENE", value: 38 },
  { month: "FEB", value: 44 },
  { month: "MAR", value: 53 },
  { month: "ABR", value: 49 },
  { month: "MAY", value: 66 },
  { month: "JUN", value: 71 },
];

const serviceDemand = [
  { service: "Portones industriales", value: 88, amount: "$18.6K" },
  { service: "Estructuras metálicas", value: 72, amount: "$14.9K" },
  { service: "Barandas y escaleras", value: 63, amount: "$11.3K" },
  { service: "Reparaciones y mantenimiento", value: 46, amount: "$8.7K" },
];

const recentClients = [
  { name: "Inmobiliaria Delta", status: "Prospecto", project: "Acceso principal" },
  { name: "MetalWorks Plaza", status: "En revisión", project: "Cubierta metálica" },
  { name: "Grupo Rivas", status: "Aprobado", project: "Portón premium" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dashboard"
        title="Resumen general del negocio"
        subtitle="Vista consolidada para monitorear operaciones, contenido y rendimiento del CMS."
        actions={
          <Button href="#" variant="primary" className="gap-2">
            Crear nueva cotización
          </Button>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} icon={kpi.icon} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_1fr]">
        <ChartCard title="Cotizaciones por mes" subtitle="Ritmo mensual de demanda en el pipeline">
          <div className="grid h-64 grid-cols-6 items-end gap-3">
            {monthlyQuotes.map((item) => (
              <div key={item.month} className="flex h-full flex-col items-center gap-3">
                <div className="flex h-full w-full items-end rounded-2xl bg-white/5 p-1">
                  <div
                    className="w-full rounded-xl bg-gradient-to-t from-[#FF6B00] to-[#FF9C4A]"
                    style={{ height: `${item.value}%` }}
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/55">{item.month}</span>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Servicios más demandados" subtitle="Distribución actual de la operación">
          <div className="space-y-4">
            {serviceDemand.map((item) => (
              <div key={item.service} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-white/80">{item.service}</span>
                  <span className="text-[#FF6B00]">{item.amount}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF9C4A]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.9fr]">
        <RecentActivity />
        <RecentQuotes />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <RecentProjects />

        <DashboardCard title="Clientes recientes" subtitle="Prospectos y cuentas en seguimiento">
          <div className="space-y-3">
            {recentClients.map((client) => (
              <div key={client.name} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#FF6B00]">
                    <Users size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{client.name}</p>
                    <p className="text-sm text-white/60">{client.project}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/70">
                    {client.status}
                  </span>
                  <ArrowUpRight size={14} className="text-white/45" />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </section>
    </div>
  );
}
