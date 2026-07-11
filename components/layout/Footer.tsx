"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="border-t border-white/10 bg-[#090909]">
      <motion.footer
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
            SERVIMÓVIL DOMINICK METAL
          </p>
          <p className="mt-1">Atención técnica, logística y soporte industrial.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#services" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#about" className="transition hover:text-white">
            Nosotros
          </a>
          <a href="#process" className="transition hover:text-white">
            Proceso
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contacto
          </a>
        </div>
      </motion.footer>
    </section>
  );
}
