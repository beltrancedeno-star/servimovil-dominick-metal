"use client";

import { motion } from "framer-motion";

const clientTypes = [
  "Operaciones logísticas",
  "Mantenimiento industrial",
  "Plantas y talleres",
  "Empresas de transporte",
  "Proyectos de infraestructura",
  "Sistemas críticos",
];

export default function Clients() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
      >
        <p className="mb-5 text-center text-[11px] uppercase tracking-[0.35em] text-white/55">
          Entidades que operan con continuidad
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {clientTypes.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-[#111111] px-4 py-2 text-sm text-white/75"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
