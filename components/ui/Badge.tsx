import type { ReactNode } from "react";

import { colors } from "../../lib/design/colors";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.25em] ${className}`}
      style={{
        borderColor: "rgba(255,107,0,0.45)",
        backgroundColor: colors.grafito,
        color: "#ffb088",
      }}
    >
      {children}
    </span>
  );
}
