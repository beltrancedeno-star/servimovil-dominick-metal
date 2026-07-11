"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "Mantenimiento predictivo para continuidad operativa",
    description:
      "Cómo anticipar tareas y reducir paros no planificados en entornos con alta exigencia industrial.",
  },
  {
    title: "Coordinación de campo y logística técnica",
    description:
      "Estrategias para alinear personal, materiales y tiempos en intervenciones críticas de servicio.",
  },
  {
    title: "Seguridad y estándares de ejecución en obras móviles",
    description:
      "Buenas prácticas para mantener un trabajo seguro, ordenado y alineado con la operación del cliente.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="mb-8"
      >
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
          Blog
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Reflexiones para mejorar la operación y la respuesta técnica.
        </h2>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-4 h-28 rounded-2xl border border-white/10 bg-[#111111]" />
            <h3 className="mb-3 text-xl font-semibold text-white">{post.title}</h3>
            <p className="text-sm leading-6 text-white/68">{post.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
