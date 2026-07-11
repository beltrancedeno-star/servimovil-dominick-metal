import { Inbox } from "lucide-react";

import { Card } from "../ui/Card";
import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { spacing } from "../../lib/design/spacing";

type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Card
      variant="glass"
      className="p-8 text-center"
      style={{ borderRadius: radius.xl, backgroundColor: "rgba(255,255,255,0.04)", padding: spacing.xl }}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#FF6B00]/40 bg-[#121212] text-[#FF6B00]">
        <Inbox size={20} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/65">{description}</p>
    </Card>
  );
}
