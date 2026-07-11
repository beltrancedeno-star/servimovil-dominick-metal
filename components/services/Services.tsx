"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  DoorOpen,
  Factory,
  Grid2x2,
  Layers3,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquareStack,
  Star,
  Warehouse,
  Wrench,
} from "lucide-react";

import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { colors } from "../../lib/design/colors";
import { spacing } from "../../lib/design/spacing";
import { radius } from "../../lib/design/radius";
import { shadows } from "../../lib/design/shadows";
import { animation } from "../../lib/design/animations";

const services = [
  {
    title: "Puertas Metálicas",
    description:
      "Soluciones robustas para viviendas, comercios y espacios industriales con acabado cuidado y alta resistencia.",
    icon: DoorOpen,
    features: ["Personalización", "Aislamiento", "Durabilidad", "Seguridad"],
  },
  {
    title: "Portones",
    description:
      "Portones automáticos y manuales diseñados para máxima funcionalidad, seguridad y estética moderna.",
    icon: Factory,
    features: ["Automatización", "Diseño premium", "Resistencia", "Alta seguridad"],
  },
  {
    title: "Escaleras",
    description:
      "Escaleras metálicas de precisión con estructura sólida, limpieza visual y cumplimiento técnico.",
    icon: Layers3,
    features: ["Medición exacta", "Estructura sólida", "Acabado premium", "Escala personalizada"],
  },
  {
    title: "Barandas",
    description:
      "Barandas metálicas para edificios, viviendas y proyectos comerciales con un diseño elegante y seguro.",
    icon: ShieldCheck,
    features: ["Estética", "Seguridad", "Refuerzo estructural", "Acabado superior"],
  },
  {
    title: "Ventanas Metálicas",
    description:
      "Ventanas con resistencia, buen rendimiento y presencia visual sofisticada para cualquier proyecto.",
    icon: SquareStack,
    features: ["Hermeticidad", "Durabilidad", "Ajuste preciso", "Fácil mantenimiento"],
  },
  {
    title: "Techos Metálicos",
    description:
      "Techos metálicos funcionales, dragados y estéticos para ampliar la vida útil y rendimiento de la estructura.",
    icon: Building2,
    features: ["Impermeabilidad", "Soporte estructural", "Longevidad", "Instalación limpia"],
  },
  {
    title: "Soldadura MIG",
    description:
      "Ejecución de soldadura MIG para piezas y estructuras con velocidad, precisión y buena apariencia final.",
    icon: Wrench,
    features: ["Alta productividad", "Piezas limpias", "Uniformidad", "Resistencia"],
  },
  {
    title: "Soldadura TIG",
    description:
      "Soldadura TIG de alta precisión para trabajos con exigencia estética, control y calidad exacta.",
    icon: Sparkles,
    features: ["Precisión", "Acabado fino", "Control térmico", "Calidad visual"],
  },
  {
    title: "Soldadura SMAW",
    description:
      "Soluciones de soldadura para procesos robustos, resistentes y adecuados a necesidad industrial.",
    icon: SlidersHorizontal,
    features: ["Robustez", "Versatilidad", "Soporte estructural", "Ejecución confiable"],
  },
  {
    title: "Acero Inoxidable",
    description:
      "Fabricación y montaje en acero inoxidable para requerimientos donde la resistencia y la limpieza son fundamentales.",
    icon: Star,
    features: ["Anticorrosión", "Apariencia premium", "Limpieza", "Longevidad"],
  },
  {
    title: "Muebles Metálicos",
    description:
      "Muebles metálicos industriales y comerciales con disposición funcional, estética dura y alta durabilidad.",
    icon: Grid2x2,
    features: ["Funcionalidad", "Resistencia", "Ajuste modular", "Acabado profesional"],
  },
  {
    title: "Estanterías Industriales",
    description:
      "Estanterías para almacenes, talleres y espacios de trabajo con capacidad, orden y resistencia.",
    icon: Warehouse,
    features: ["Capacidad", "Orden", "Optimización de espacio", "Seguridad"],
  },
  {
    title: "Fabricaciones Especiales",
    description:
      "Trabajos a medida para proyectos con detalles particulares, estructura compleja o demanda de innovación.",
    icon: Factory,
    features: ["Diseño a medida", "Altas especificaciones", "Flexibilidad", "Diseño técnico"],
  },
  {
    title: "Melamina + Metal",
    description:
      "Combinación funcional entre metal y melamina para soluciones versátiles, modernas y de gran presencia.",
    icon: Layers3,
    features: ["Estética moderna", "Versatilidad", "Durabilidad", "Diseño adaptable"],
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-[#0A0A0A]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: animation.duration.base }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <SectionHeading
            eyebrow="Servicios"
            title="Nuestros Servicios Especializados"
            subtitle="Cada proyecto es único. Fabricamos soluciones metálicas con altos estándares de calidad, precisión y durabilidad."
            align="center"
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: animation.duration.base, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <Card
                  variant="default"
                  className="group h-full p-5 transition-all duration-300 hover:border-[#ff6b00]/70 hover:shadow-[0_0_30px_rgba(255,107,0,0.12)]"
                  style={{
                    boxShadow: shadows.card,
                    borderRadius: radius.xl,
                    border: `1px solid rgba(255,255,255,0.1)`,
                    backgroundColor: colors.grafito,
                    padding: spacing.lg,
                  }}
                >
                  <div
                    className="mb-4 inline-flex rounded-full border p-3 transition group-hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                    style={{
                      borderColor: "rgba(255,107,0,0.4)",
                      backgroundColor: colors.blackMate,
                      color: colors.naranja,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mb-4 text-sm leading-6 text-white/68">{service.description}</p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-5 gap-2 border border-white/10 px-4 py-2 text-white/80 hover:border-[#ff6b00] hover:text-white">
                    Ver Detalles
                    <ArrowRight size={15} />
                  </Button>
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
          className="mt-12 flex justify-center"
        >
          <Button href="#contact" variant="primary" className="gap-2">
            Solicitar Cotización
            <ArrowRight size={16} />
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
