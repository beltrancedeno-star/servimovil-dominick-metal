"use client";

import { motion } from "framer-motion";

import { DashboardCard } from "./DashboardCard";

const quotes = [
  { client: "Inmobiliaria Delta", status: "Pendiente", value: "$4.900" },
  { client: "MetalWorks Plaza", status: "En revisión", value: "$7.250" },
  { client: "Grupo Rivas", status: "Aprobada", value: "$5.600" },
];

export function RecentQuotes() {
  return (
    <DashboardCard title="Cotizaciones pendientes" subtitle="Solicitudes de negocio en curso">
      <div className="space-y-3">
        {quotes.map((quote, index) => (
          <motion.div
            key={quote.client}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: index * 0.04 }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <div>
              <p className="font-semibold text-white">{quote.client}</p>
              <p className="text-sm text-white/60">{quote.status}</p>
            </div>
            <span className="text-sm font-semibold text-[#FF6B00]">{quote.value}</span>
          </motion.div>
        ))}
      </div>
    </DashboardCard>
  );
}
