import type { HTMLAttributes, ReactNode } from "react";

import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { shadows } from "../../lib/design/shadows";

type CardVariant = "default" | "premium" | "glass";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
};

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  default: {
    borderRadius: radius.lg,
    border: "1px solid rgba(255,255,255,0.1)",
    backgroundColor: colors.grafito,
    boxShadow: shadows.card,
  },
  premium: {
    borderRadius: radius.xl,
    border: "1px solid rgba(255,107,0,0.35)",
    backgroundColor: colors.grafito,
    boxShadow: shadows.glow,
  },
  glass: {
    borderRadius: radius.xl,
    border: "1px solid rgba(255,255,255,0.1)",
    backgroundColor: "rgba(255,255,255,0.04)",
    boxShadow: shadows.glass,
    backdropFilter: "blur(12px)",
  },
};

export function Card({ children, variant = "default", className = "", ...props }: CardProps) {
  return (
    <div className={className} style={variantStyles[variant]} {...props}>
      {children}
    </div>
  );
}
