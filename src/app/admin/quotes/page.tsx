"use client";

import { motion } from "framer-motion";
import { FilePlus2, LoaderCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/admin/EmptyState";
import { PageHeader } from "@/components/admin/PageHeader";
import { QuoteDrawer } from "@/components/admin/quotes/QuoteDrawer";
import { QuoteFilters } from "@/components/admin/quotes/QuoteFilters";
import { QuoteForm } from "@/components/admin/quotes/QuoteForm";
import { QuoteStats } from "@/components/admin/quotes/QuoteStats";
import { QuoteTable } from "@/components/admin/quotes/QuoteTable";
import { mockQuotes } from "@/components/admin/quotes/quote.mock";
import type { QuotePriority, QuoteRecord, QuoteStatus } from "@/components/admin/quotes/quote.types";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";

type SortField = "id" | "client" | "phone" | "service" | "city" | "status" | "priority" | "date" | "amount";

const pageSize = 4;

export default function QuotesPage() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<QuoteStatus | "Todos">("Todos");
  const [priority, setPriority] = useState<QuotePriority | "Todas">("Todas");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<QuoteRecord | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredQuotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = mockQuotes.filter((quote) => {
      const matchesQuery =
        query.length === 0 ||
        [quote.id, quote.client, quote.phone, quote.service, quote.city]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesStatus = status === "Todos" || quote.status === status;
      const matchesPriority = priority === "Todas" || quote.priority === priority;

      return matchesQuery && matchesStatus && matchesPriority;
    });

    result.sort((left, right) => {
      const direction = sortDirection === "asc" ? 1 : -1;
      const leftValue = left[sortField];
      const rightValue = right[sortField];

      if (sortField === "amount") {
        return (left.amount - right.amount) * direction;
      }

      return String(leftValue).localeCompare(String(rightValue)) * direction;
    });

    return result;
  }, [priority, search, sortDirection, sortField, status]);

  const totalPages = Math.max(1, Math.ceil(filteredQuotes.length / pageSize));

  const paginatedQuotes = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredQuotes.slice(start, start + pageSize);
  }, [filteredQuotes, page]);

  const toggleSelect = (id: string) => {
    setSelectedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  const toggleSelectAll = () => {
    const ids = paginatedQuotes.map((quote) => quote.id);
    const allVisibleSelected = ids.every((id) => selectedIds.includes(id));

    setSelectedIds((current) => {
      if (allVisibleSelected) {
        return current.filter((id) => !ids.includes(id));
      }

      return [...current, ...ids.filter((id) => !current.includes(id))];
    });
  };

  const handleSortChange = (field: SortField) => {
    if (sortField === field) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortField(field);
    setSortDirection(field === "amount" || field === "date" ? "desc" : "asc");
  };

  const handleOpenQuote = (quote: QuoteRecord) => {
    setSelectedQuote(quote);
    setDrawerOpen(true);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
  };

  useEffect(() => {
    setPage(1);
  }, [search, status, priority]);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Cotizaciones"
        title="Gestión de cotizaciones"
        subtitle="Sistema profesional mock para seguimiento, aprobación y operación comercial."
        actions={
          <Button type="button" variant="primary" className="gap-2" onClick={() => setShowForm((value) => !value)}>
            <FilePlus2 size={16} />
            Nueva cotización
          </Button>
        }
      />

      {loading ? (
        <section className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Card
                key={`skeleton-${index}`}
                variant="default"
                className="p-4"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
              >
                <div className="flex items-center justify-between">
                  <div className="h-9 w-9 animate-pulse rounded-full bg-white/10" />
                  <div className="h-3 w-14 animate-pulse rounded-full bg-white/10" />
                </div>
                <div className="mt-4 h-8 w-20 animate-pulse rounded-full bg-white/10" />
                <div className="mt-3 h-3 w-28 animate-pulse rounded-full bg-white/10" />
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-3 text-white/75">
              <LoaderCircle size={18} className="animate-spin text-[#FF6B00]" />
              <span>Cargando bandeja de cotizaciones…</span>
            </div>
          </motion.div>
        </section>
      ) : (
        <>
          <QuoteStats quotes={mockQuotes} />

          <div className="space-y-4">
            <QuoteFilters
              search={search}
              status={status}
              priority={priority}
              onSearchChange={setSearch}
              onStatusChange={setStatus}
              onPriorityChange={setPriority}
            />

            {showForm ? <QuoteForm onCancel={() => setShowForm(false)} /> : null}

            {filteredQuotes.length === 0 ? (
              <EmptyState
                title="No hay cotizaciones con esos filtros"
                description="Prueba con otra búsqueda o elimina los filtros para volver a ver el flujo completo."
              />
            ) : (
              <QuoteTable
                quotes={paginatedQuotes}
                selectedIds={selectedIds}
                sortField={sortField}
                sortDirection={sortDirection}
                page={page}
                totalPages={totalPages}
                onSelectAll={toggleSelectAll}
                onSelectRow={toggleSelect}
                onOpenQuote={handleOpenQuote}
                onSortChange={handleSortChange}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}

      <QuoteDrawer quote={selectedQuote} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
