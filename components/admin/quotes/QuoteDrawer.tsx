"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, FilePenLine, Image as ImageIcon, Trash2, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";

import { PriorityBadge } from "./PriorityBadge";
import { StatusBadge } from "./StatusBadge";
import type { QuoteRecord } from "./quote.types";

type QuoteDrawerProps = {
  quote: QuoteRecord | null;
  open: boolean;
  onClose: () => void;
};

export function QuoteDrawer({ quote, open, onClose }: QuoteDrawerProps) {
  return (
    <AnimatePresence>
      {open && quote ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-30 bg-black/55"
          />

          <motion.aside
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed right-0 top-0 z-40 h-full w-full max-w-[460px] overflow-y-auto border-l border-white/10 bg-[#0B0B0B] p-4 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">Detalle</p>
                <h2 className="text-xl font-semibold text-white">{quote.id}</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar detalle"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <Card
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{quote.client}</p>
                    <p className="text-xs text-white/55">{quote.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={quote.status} />
                    <PriorityBadge priority={quote.priority} />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Servicio</p>
                    <p className="mt-1 text-sm text-white/80">{quote.service}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Ciudad</p>
                    <p className="mt-1 text-sm text-white/80">{quote.city}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Fecha</p>
                    <p className="mt-1 text-sm text-white/80">{quote.date}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Monto estimado</p>
                    <p className="mt-1 text-sm font-semibold text-[#FF6B00]">${quote.amount.toLocaleString("es-CL")}</p>
                  </div>
                </div>
              </Card>

              <Card
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <p className="text-sm font-semibold text-white">Descripción</p>
                <p className="mt-2 text-sm text-white/65">{quote.description}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Medidas</p>
                    <p className="mt-1 text-sm text-white/80">{quote.measures}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/45">Material</p>
                    <p className="mt-1 text-sm text-white/80">{quote.material}</p>
                  </div>
                </div>
              </Card>

              <Card
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <p className="text-sm font-semibold text-white">Fotos mock</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {quote.photos.map((photo) => (
                    <div key={photo} className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-[10px] text-white/60">
                      <ImageIcon size={16} />
                    </div>
                  ))}
                </div>
              </Card>

              <Card
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <p className="text-sm font-semibold text-white">Historial mock</p>
                <ul className="mt-3 space-y-2 text-sm text-white/65">
                  {quote.history.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <p className="text-sm font-semibold text-white">Notas internas</p>
                <p className="mt-2 text-sm text-white/65">{quote.notes}</p>
              </Card>

              <Card
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <p className="text-sm font-semibold text-white">Timeline</p>
                <div className="mt-3 space-y-2">
                  {quote.timeline.map((item) => (
                    <div key={`${item.label}-${item.time}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-3 py-2">
                      <div>
                        <p className="text-sm font-medium text-white">{item.label}</p>
                        <p className="text-xs text-white/50">{item.time}</p>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-2">
                <Button type="button" variant="outline" className="gap-2">
                  <FilePenLine size={14} />
                  Editar
                </Button>
                <Button type="button" variant="secondary" className="gap-2">
                  <Copy size={14} />
                  Duplicar
                </Button>
                <Button type="button" variant="outline" className="gap-2">
                  <X size={14} />
                  Cambiar estado
                </Button>
                <Button type="button" variant="ghost" className="gap-2 text-rose-300">
                  <Trash2 size={14} />
                  Eliminar
                </Button>
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
