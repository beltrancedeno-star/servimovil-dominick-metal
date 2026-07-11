"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    title: "Contacto",
    detail: "Atención operativa y coordinación comercial",
    icon: Phone,
  },
  {
    title: "Correo",
    detail: "servimovil.dominickmetal@correo.com",
    icon: Mail,
  },
  {
    title: "Ubicación",
    detail: "Cobertura nacional y atención en campo",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8"
      >
        <div className="mb-6">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#d28b85]">
            Contacto
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Solicita coordinación para tu operación.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-[#111111] p-5"
              >
                <div className="mb-4 inline-flex rounded-full border border-[#b63a34]/50 bg-[#171717] p-3 text-[#d25d52]">
                  <Icon size={18} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-white/68">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
