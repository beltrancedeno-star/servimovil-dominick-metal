"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";
import { spacing } from "../../lib/design/spacing";
import { shadows } from "../../lib/design/shadows";
import { animation } from "../../lib/design/animations";

const testimonials = [
  {
    name: "Carlos Salazar",
    role: "Gerente de Operaciones",
    city: "Bogotá",
    project: "Portón industrial ejecutivo",
    date: "Junio 2025",
    text: "La ejecución fue impecable, ordenada y muy clara desde el primer contacto. Entregaron una solución robusta y con un acabado realmente profesional.",
  },
  {
    name: "María Fernanda Rojas",
    role: "Directora de Proyectos",
    city: "Medellín",
    project: "Escalera metálica residencial",
    date: "Abril 2025",
    text: "Se nota la experiencia en cada detalle. La coordinación en sitio fue excelente y el resultado superó nuestras expectativas técnicas y estéticas.",
  },
  {
    name: "José Quintero",
    role: "Supervisor de Planta",
    city: "Cali",
    project: "Baranda exterior premium",
    date: "Marzo 2025",
    text: "La calidad del trabajo y la atención personalizada marcaron la diferencia. Todo quedó bien estructurado, seguro y con un acabado muy superior.",
  },
  {
    name: "Laura García",
    role: "Administradora de Obras",
    city: "Cartagena",
    project: "Acero inoxidable para uso especial",
    date: "Febrero 2025",
    text: "Fue un equipo muy serio, atento y preciso. Los tiempos se cumplieron y la entrega final se vio con la calidad que necesitábamos.",
  },
  {
    name: "Andrés Moreno",
    role: "Jefe de Mantenimiento",
    city: "Barranquilla",
    project: "Estructura metálica para taller",
    date: "Enero 2025",
    text: "La propuesta fue muy sólida y la ejecución impecable. Trabajamos con confianza, respeto por los tiempos y rigor técnico en cada fase.",
  },
  {
    name: "Patricia López",
    role: "Coordinadora Comercial",
    city: "Pereira",
    project: "Fabricación de muebles metálicos",
    date: "Diciembre 2024",
    text: "El servicio fue muy profesional desde la cotización. El equipo entendió la visión del proyecto y entregó un resultado de alto nivel.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleTestimonial = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
  };

  const goNext = () => {
    setActiveIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
  };

  return (
    <Section id="testimonials" className="bg-[#0A0A0A]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: animation.duration.base }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <SectionHeading
            eyebrow="Testimonios"
            title="Lo que dicen nuestros clientes"
            subtitle="La confianza de nuestros clientes es el resultado de años de trabajo con calidad, precisión y compromiso."
            align="center"
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <motion.article
            key={visibleTestimonial.name}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: animation.duration.base }}
          >
            <Card
              variant="glass"
              className="p-6 sm:p-8"
              style={{
                borderRadius: radius.xl,
                backgroundColor: "rgba(255,255,255,0.04)",
                boxShadow: shadows.glass,
                padding: spacing.xl,
              }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border text-base font-semibold text-white"
                  style={{ borderColor: "rgba(255,107,0,0.5)", backgroundColor: colors.grafito }}
                >
                  {visibleTestimonial.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{visibleTestimonial.name}</h3>
                  <p className="text-sm text-white/65">{visibleTestimonial.role}</p>
                  <p className="text-sm text-white/50">{visibleTestimonial.city}</p>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-1 text-[#ffb166]">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-base leading-7 text-white/78">“{visibleTestimonial.text}”</p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  <span className="font-semibold text-white">Proyecto:</span> {visibleTestimonial.project}
                </span>
                <span>
                  <span className="font-semibold text-white">Fecha:</span> {visibleTestimonial.date}
                </span>
              </div>
            </Card>
          </motion.article>

          <div className="flex items-center gap-3 lg:flex-col">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Ver testimonio anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-white transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Ver siguiente testimonio"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-white transition hover:border-[#ff6b00] hover:text-[#ff6b00]"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Ir al testimonio ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index ? "w-8 bg-[#ff6b00]" : "w-2.5 bg-white/20"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "★★★★★ 4.9", value: "4.9" },
            { label: "+500 Proyectos", value: "500+" },
            { label: "98% Satisfacción", value: "98%" },
            { label: "15+ años", value: "15+" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: animation.duration.base, delay: index * 0.05 }}
            >
              <Card
                variant="default"
                className="p-5 text-center"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.lg }}
              >
                <div className="text-3xl font-semibold text-white">{item.value}</div>
                <div className="mt-2 text-sm text-white/65">{item.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: animation.duration.base }}
          className="mt-12"
        >
          <Card
            variant="default"
            className="p-8 text-center"
            style={{ borderRadius: radius["3xl"], backgroundColor: colors.grafito, padding: spacing["2xl"] }}
          >
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Únete a nuestros clientes satisfechos</h3>
            <Button href="#contact" variant="primary" className="mt-6 gap-2">
              Solicitar Cotización
              <ArrowRight size={16} />
            </Button>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
