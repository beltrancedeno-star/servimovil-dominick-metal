import type { QuotePriority } from "./quote.types";

const priorityClasses: Record<QuotePriority, string> = {
  Alta: "border-rose-400/50 bg-rose-500/10 text-rose-200",
  Media: "border-amber-400/50 bg-amber-500/10 text-amber-200",
  Baja: "border-emerald-400/50 bg-emerald-500/10 text-emerald-200",
};

type PriorityBadgeProps = {
  priority: QuotePriority;
};

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${priorityClasses[priority]}`}
    >
      {priority}
    </span>
  );
}
