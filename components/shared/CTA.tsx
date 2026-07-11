"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="rounded-[32px] border border-[#b63a34]/40 bg-[#111111] p-8 sm:p-10"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
              Acción directa
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Requiere atención técnica en sitio con criterio y rapidez.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#b63a34] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#8c271f]"
          >
            Solicitar coordinación
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
