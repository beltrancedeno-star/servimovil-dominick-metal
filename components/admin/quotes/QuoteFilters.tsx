import { Filter, Search } from "lucide-react";

import { colors } from "@/lib/design/colors";
import type { QuotePriority, QuoteStatus } from "./quote.types";

type QuoteFiltersProps = {
  search: string;
  status: QuoteStatus | "Todos";
  priority: QuotePriority | "Todas";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: QuoteStatus | "Todos") => void;
  onPriorityChange: (value: QuotePriority | "Todas") => void;
};

export function QuoteFilters({
  search,
  status,
  priority,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: QuoteFiltersProps) {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition focus-within:border-[#FF6B00]">
        <Search size={16} className="text-white/60" />
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar cotización, cliente o servicio"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/45"
          aria-label="Buscar cotización"
        />
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <Filter size={16} className="text-white/60" />
        <select
          aria-label="Filtrar por estado"
          className="w-full bg-transparent text-sm text-white outline-none"
          value={status}
          onChange={(event) => onStatusChange(event.target.value as QuoteStatus | "Todos")}
        >
          <option className="bg-[#111111]" value="Todos">
            Todos los estados
          </option>
          <option className="bg-[#111111]" value="Pendiente">
            Pendiente
          </option>
          <option className="bg-[#111111]" value="Contactado">
            Contactado
          </option>
          <option className="bg-[#111111]" value="En proceso">
            En proceso
          </option>
          <option className="bg-[#111111]" value="Aprobado">
            Aprobado
          </option>
          <option className="bg-[#111111]" value="Rechazado">
            Rechazado
          </option>
          <option className="bg-[#111111]" value="Instalado">
            Instalado
          </option>
        </select>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
        <Filter size={16} className="text-white/60" />
        <select
          aria-label="Filtrar por prioridad"
          className="w-full bg-transparent text-sm text-white outline-none"
          value={priority}
          onChange={(event) => onPriorityChange(event.target.value as QuotePriority | "Todas")}
        >
          <option className="bg-[#111111]" value="Todas">
            Todas las prioridades
          </option>
          <option className="bg-[#111111]" value="Alta">
            Alta
          </option>
          <option className="bg-[#111111]" value="Media">
            Media
          </option>
          <option className="bg-[#111111]" value="Baja">
            Baja
          </option>
        </select>
      </div>
    </div>
  );
}
