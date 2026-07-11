"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Qué tipo de atención ofrece SERVIMÓVIL DOMINICK METAL?",
    answer:
      "Atención técnica y operativa en campo, coordinación de mantenimiento y apoyo a procesos industriales con enfoque en continuidad y resultados concretos.",
  },
  {
    question: "¿La ejecución se adapta a distintas necesidades de operación?",
    answer:
      "Sí. Trabajamos con planificación por prioridad, infraestructura y urgencia para entregar una respuesta ajustada al contexto del cliente.",
  },
  {
    question: "¿La empresa trabaja con exigencias de seguridad y control?",
    answer:
      "Sí. La operación se desarrolla con procedimientos, supervisión y disciplina de ejecución para mantener altos estándares de seguridad y calidad.",
  },
];

export default function FAQ() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
          FAQ
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Preguntas frecuentes sobre nuestra operación.
        </h2>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-white">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-white/68">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
