"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Search, ShieldCheck, Wrench } from "lucide-react";

const steps = [
  {
    title: "Diagnóstico",
    description: "Revisamos la necesidad, el contexto operativo y los riesgos de continuidad antes de ejecutar.",
    icon: Search,
  },
  {
    title: "Planificación",
    description: "Asignamos prioridad, recursos y secuencia para lograr respuesta rápida sin afectar la operación.",
    icon: ClipboardCheck,
  },
  {
    title: "Ejecución",
    description: "Ejecutamos con disciplina, control de calidad y coordinación en campo.",
    icon: Wrench,
  },
  {
    title: "Cierre y seguimiento",
    description: "Validamos resultados y dejamos la estructura lista para sostener la operación a futuro.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
          Proceso de trabajo
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Flujo claro para soluciones rápidas y sostenibles.
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-full border border-[#b63a34]/50 bg-[#171717] p-3 text-[#d25d52]">
                  <Icon size={18} />
                </div>
                <span className="text-sm text-white/45">0{index + 1}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-6 text-white/68">{step.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
