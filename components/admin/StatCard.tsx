import { ArrowUpRight } from "lucide-react";

import { Card } from "../ui/Card";
import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { spacing } from "../../lib/design/spacing";

type StatCardProps = {
  label: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
};

export function StatCard({ label, value, trend, icon }: StatCardProps) {
  return (
    <Card
      variant="default"
      className="p-5"
      style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.lg }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FF6B00]/40 bg-[#121212] text-[#FF6B00]">
          {icon}
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-white/60">
          {trend}
          <ArrowUpRight size={14} />
        </span>
      </div>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-white/65">{label}</div>
    </Card>
  );
}
