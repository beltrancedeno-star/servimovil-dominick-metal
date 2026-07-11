import { colors } from "../../lib/design/colors";
import { typography } from "../../lib/design/typography";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em]" style={{ color: colors.naranja }}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="text-3xl font-semibold sm:text-4xl lg:text-5xl"
        style={{ color: colors.white, fontFamily: typography.fontFamily.sans }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7" style={{ color: "rgba(255,255,255,0.68)" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
