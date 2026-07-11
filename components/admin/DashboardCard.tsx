import type { ReactNode } from "react";

import { Card } from "../ui/Card";
import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { spacing } from "../../lib/design/spacing";

type DashboardCardProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function DashboardCard({ title, subtitle, action, children, className = "" }: DashboardCardProps) {
  return (
    <Card
      variant="default"
      className={`p-5 ${className}`}
      style={{
        borderRadius: radius.xl,
        backgroundColor: colors.grafito,
        padding: spacing.lg,
      }}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          {subtitle ? <p className="mt-1 text-sm text-white/60">{subtitle}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </Card>
  );
}
