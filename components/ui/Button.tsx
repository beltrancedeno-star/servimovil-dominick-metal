import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

import { colors } from "../../lib/design/colors";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">;

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: colors.naranja,
    color: colors.blackMate,
    borderColor: colors.naranja,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.blackMate,
    borderColor: colors.white,
  },
  outline: {
    backgroundColor: "transparent",
    color: colors.white,
    borderColor: "rgba(255,255,255,0.15)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,0.82)",
    borderColor: "transparent",
  },
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  type = "button",
  target,
  rel,
  style,
  ...props
}: ButtonProps) {
  const mergedStyle: CSSProperties = {
    ...variantStyles[variant],
    ...style,
    borderWidth: 1,
    borderStyle: "solid",
  };

  const sharedClassName = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:opacity-90 ${className}`;

  if (href) {
    return (
      <a href={href} className={sharedClassName} style={mergedStyle} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={sharedClassName} style={mergedStyle} {...props}>
      {children}
    </button>
  );
}
