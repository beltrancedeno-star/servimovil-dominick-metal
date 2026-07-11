"use client";

import { motion } from "framer-motion";
import { Building2, Factory, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Operación industrial",
    description: "Trabajamos con enfoque de continuidad, disponibilidad y control de riesgo.",
    icon: Factory,
  },
  {
    title: "Alto estándar",
    description: "Mantenemos disciplina de atención, gestión de tiempos y cumplimiento de procedimiento.",
    icon: ShieldCheck,
  },
  {
    title: "Compromiso con el cliente",
    description: "Nos vinculamos con la operación para responder con rapidez, precisión y criterio técnico.",
    icon: Building2,
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
            Sobre SERVIMÓVIL DÓMINICK METAL
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            Un servicio pensado para la ejecución real.
          </h2>
          <p className="text-base leading-7 text-white/70">
            En SERVIMÓVIL DOMINICK METAL entendemos que la operación no se detiene por un solo incidente. Por eso diseñamos una atención orientada a resolver, coordinar y sostener el trabajo en sitio con criterio industrial y visión de empresa.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="rounded-full border border-[#b63a34]/50 bg-[#171717] p-3 text-[#d25d52]">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-white/68">{pillar.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
