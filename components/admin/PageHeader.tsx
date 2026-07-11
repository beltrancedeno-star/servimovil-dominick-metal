import type { ReactNode } from "react";

import { SectionHeading } from "../ui/SectionHeading";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

export function PageHeader({ eyebrow, title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
    </div>
  );
}
