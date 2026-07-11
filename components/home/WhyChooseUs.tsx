"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Factory,
  Handshake,
  Medal,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

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

const stats = [
  { label: "+500 Proyectos", value: "500+" },
  { label: "15+ Años de experiencia", value: "15+" },
  { label: "98% Clientes satisfechos", value: "98%" },
  { label: "Garantía de hasta 5 años", value: "5 años" },
];

const reasons = [
  {
    title: "Materiales certificados",
    description: "Trabajamos con especificaciones técnicas y estándares de calidad reconocidos.",
    icon: Medal,
  },
  {
    title: "Soldadores especializados",
    description: "Nuestro equipo combina experiencia real con rigor de ejecución en cada detalle.",
    icon: Wrench,
  },
  {
    title: "Diseño personalizado",
    description: "Cada solución se adapta al proyecto, al espacio y a la visión del cliente.",
    icon: Sparkles,
  },
  {
    title: "Entrega puntual",
    description: "Mantenemos coordinación y tiempos claros para proteger la operación del cliente.",
    icon: CalendarCheck2,
  },
  {
    title: "Garantía escrita",
    description: "La calidad y la confianza se respaldan con condiciones claras y responsables.",
    icon: BadgeCheck,
  },
  {
    title: "Atención personalizada",
    description: "Te acompañamos desde la cotización hasta la entrega final con atención cercana.",
    icon: Handshake,
  },
  {
    title: "Tecnología moderna",
    description: "Aplicamos procesos y herramientas orientadas a precisión, seguridad y rendimiento.",
    icon: Factory,
  },
  {
    title: "Servicio postventa",
    description: "La relación no termina con la entrega; también acompañamos la operación posterior.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-[#0A0A0A]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: animation.duration.base }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <SectionHeading
            eyebrow="Confianza"
            title="¿Por qué elegir SERVIMÓVIL DOMINICK METAL?"
            subtitle="Más de 15 años fabricando soluciones metálicas con calidad, precisión y compromiso."
            align="center"
          />
        </motion.div>

        <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                <div className="mb-3 text-3xl font-semibold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: animation.duration.base, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <Card
                  variant="premium"
                  className="group h-full p-5 transition-all duration-300"
                  style={{
                    borderRadius: radius.xl,
                    backgroundColor: colors.grafito,
                    boxShadow: shadows.glow,
                    padding: spacing.lg,
                  }}
                >
                  <div
                    className="mb-4 inline-flex rounded-full border p-3 transition group-hover:shadow-[0_0_20px_rgba(255,107,0,0.35)]"
                    style={{
                      borderColor: "rgba(255,107,0,0.4)",
                      backgroundColor: colors.blackMate,
                      color: colors.naranja,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="text-sm leading-6 text-white/68">{reason.description}</p>
                </Card>
              </motion.article>
            );
          })}
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
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">¿Listo para comenzar tu proyecto?</h3>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#contact" variant="primary" className="gap-2">
                Solicitar Cotización
                <ArrowRight size={16} />
              </Button>
              <Button
                href="https://wa.me/?text=Hola%20SERVIMÓVIL%20DOMINICK%20METAL%2C%20quiero%20hablar%20sobre%20mi%20proyecto."
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="gap-2"
              >
                <MessageCircle size={16} />
                Hablar por WhatsApp
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
