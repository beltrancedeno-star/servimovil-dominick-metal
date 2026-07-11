import { ArrowUpRight, CircleDollarSign, Clock3, FileText, TrendingUp } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";

import type { QuoteRecord } from "./quote.types";

type QuoteStatsProps = {
  quotes: QuoteRecord[];
};

export function QuoteStats({ quotes }: QuoteStatsProps) {
  const total = quotes.length;
  const pending = quotes.filter((quote) => quote.status === "Pendiente").length;
  const approved = quotes.filter((quote) => quote.status === "Aprobado" || quote.status === "Instalado").length;
  const estimated = quotes.reduce((sum, quote) => sum + quote.amount, 0);
  const conversion = total === 0 ? 0 : Math.round((approved / total) * 100);

  const metrics = [
    {
      label: "Total cotizaciones",
      value: total.toString(),
      detail: `${pending} pendientes`,
      icon: <FileText size={18} />,
    },
    {
      label: "Pendientes",
      value: pending.toString(),
      detail: "Requieren respuesta",
      icon: <Clock3 size={18} />,
    },
    {
      label: "Aprobadas",
      value: approved.toString(),
      detail: "Con cierre visible",
      icon: <TrendingUp size={18} />,
    },
    {
      label: "Ingresos estimados",
      value: `$${estimated.toLocaleString("es-CL")}`,
      detail: "Monto acumulado",
      icon: <CircleDollarSign size={18} />,
    },
    {
      label: "Conversión",
      value: `${conversion}%`,
      detail: "Ratio de cierre",
      icon: <ArrowUpRight size={18} />,
    },
  ];

  return (
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          variant="default"
          className="p-4"
          style={{
            borderRadius: radius.xl,
            backgroundColor: colors.grafito,
            padding: spacing.md,
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF6B00]/40 bg-[#111111] text-[#FF6B00]">
              {metric.icon}
            </div>
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/50">Live</span>
          </div>
          <p className="mt-4 text-2xl font-semibold text-white">{metric.value}</p>
          <p className="mt-1 text-sm text-white/65">{metric.label}</p>
          <p className="mt-2 text-xs text-white/45">{metric.detail}</p>
        </Card>
      ))}
    </section>
  );
}
