import type { QuoteStatus } from "./quote.types";

const statusClasses: Record<QuoteStatus, string> = {
  Pendiente: "border-amber-400/50 bg-amber-500/10 text-amber-200",
  Contactado: "border-sky-400/50 bg-sky-500/10 text-sky-200",
  "En proceso": "border-violet-400/50 bg-violet-500/10 text-violet-200",
  Aprobado: "border-emerald-400/50 bg-emerald-500/10 text-emerald-200",
  Rechazado: "border-rose-400/50 bg-rose-500/10 text-rose-200",
  Instalado: "border-cyan-400/50 bg-cyan-500/10 text-cyan-200",
};

type StatusBadgeProps = {
  status: QuoteStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${statusClasses[status]}`}
    >
      {status}
    </span>
  );
}
