import type { ReactNode } from "react";

import { DashboardCard } from "./DashboardCard";

type ChartCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
};

export function ChartCard({ title, subtitle, children, action }: ChartCardProps) {
  return (
    <DashboardCard title={title} subtitle={subtitle} action={action}>
      {children}
    </DashboardCard>
  );
}
