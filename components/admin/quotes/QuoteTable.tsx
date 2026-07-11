"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, ListFilter, Square } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";

import { PriorityBadge } from "./PriorityBadge";
import { StatusBadge } from "./StatusBadge";
import type { QuotePriority, QuoteRecord, QuoteStatus } from "./quote.types";

type SortField = "id" | "client" | "phone" | "service" | "city" | "status" | "priority" | "date" | "amount";

type QuoteTableProps = {
  quotes: QuoteRecord[];
  selectedIds: string[];
  sortField: SortField;
  sortDirection: "asc" | "desc";
  page: number;
  totalPages: number;
  onSelectAll: () => void;
  onSelectRow: (id: string) => void;
  onOpenQuote: (quote: QuoteRecord) => void;
  onSortChange: (field: SortField) => void;
  onPageChange: (page: number) => void;
};

const tableHeaders: Array<{ key: SortField; label: string }> = [
  { key: "id", label: "ID" },
  { key: "client", label: "Cliente" },
  { key: "phone", label: "Teléfono" },
  { key: "service", label: "Servicio" },
  { key: "city", label: "Ciudad" },
  { key: "status", label: "Estado" },
  { key: "priority", label: "Prioridad" },
  { key: "date", label: "Fecha" },
  { key: "amount", label: "Monto estimado" },
  { key: "id", label: "Acciones" },
];

export function QuoteTable({
  quotes,
  selectedIds,
  sortField,
  sortDirection,
  page,
  totalPages,
  onSelectAll,
  onSelectRow,
  onOpenQuote,
  onSortChange,
  onPageChange,
}: QuoteTableProps) {
  const allSelected = quotes.length > 0 && quotes.every((quote) => selectedIds.includes(quote.id));

  return (
    <div className="space-y-4">
      <Card
        variant="default"
        className="overflow-hidden"
        style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-[920px] w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white/60">
                <th className="px-3 py-3">
                  <button
                    type="button"
                    onClick={onSelectAll}
                    className="inline-flex h-5 w-5 items-center justify-center rounded border border-white/15 bg-white/5"
                    aria-label="Seleccionar todas"
                  >
                    <Square size={12} className={allSelected ? "text-[#FF6B00]" : "text-white/25"} />
                  </button>
                </th>
                {tableHeaders.map((header) => (
                  <th key={header.label} className="px-3 py-3 font-medium">
                    {header.label === "Acciones" ? (
                      <span className="flex items-center gap-2">
                        <ListFilter size={14} />
                        {header.label}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSortChange(header.key)}
                        className="flex items-center gap-2 text-left transition hover:text-white"
                      >
                        {header.label}
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                          {sortField === header.key ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}
                        </span>
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote, index) => {
                const selected = selectedIds.includes(quote.id);
                return (
                  <motion.tr
                    key={quote.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, delay: index * 0.03 }}
                    className="border-b border-white/10 text-white/75 transition hover:bg-white/5"
                  >
                    <td className="px-3 py-3 align-top">
                      <button
                        type="button"
                        onClick={() => onSelectRow(quote.id)}
                        className="inline-flex h-5 w-5 items-center justify-center rounded border border-white/15 bg-white/5"
                        aria-label={`Seleccionar ${quote.id}`}
                      >
                        <Square size={12} className={selected ? "text-[#FF6B00]" : "text-white/25"} />
                      </button>
                    </td>
                    <td className="px-3 py-3 font-semibold text-white">{quote.id}</td>
                    <td className="px-3 py-3">{quote.client}</td>
                    <td className="px-3 py-3">{quote.phone}</td>
                    <td className="px-3 py-3">{quote.service}</td>
                    <td className="px-3 py-3">{quote.city}</td>
                    <td className="px-3 py-3"><StatusBadge status={quote.status} /></td>
                    <td className="px-3 py-3"><PriorityBadge priority={quote.priority} /></td>
                    <td className="px-3 py-3">{quote.date}</td>
                    <td className="px-3 py-3 font-semibold text-[#FF6B00]">${quote.amount.toLocaleString("es-CL")}</td>
                    <td className="px-3 py-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="gap-2 px-3 py-2"
                        onClick={() => onOpenQuote(quote)}
                      >
                        <Eye size={14} />
                        Ver
                      </Button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-white/60">Página {page} de {totalPages}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
