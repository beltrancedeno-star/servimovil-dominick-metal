"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

import { Badge } from "../ui/Badge";
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

const filters = [
  "Todos",
  "Portones",
  "Escaleras",
  "Barandas",
  "Acero Inoxidable",
  "Estructuras",
];

const projects = [
  {
    category: "Portones",
    title: "Portón Industrial Premium",
    city: "Bogotá",
    description:
      "Estructura metálica de alto impacto para acceso controlado con acabado refinado y alto desempeño funcional.",
    material: "Acero galvanizado y pintura industrial",
    status: "Proyecto Finalizado",
    gradient: "from-[#ff6b00]/40 via-white/10 to-transparent",
  },
  {
    category: "Escaleras",
    title: "Escalera Metálica Residencial",
    city: "Medellín",
    description:
      "Solución a medida para vivienda con limpieza visual, resistencia y proporciones de precisión.",
    material: "Perfil estructural y acero refinado",
    status: "Proyecto Finalizado",
    gradient: "from-[#8a8a8a]/35 via-white/5 to-transparent",
  },
  {
    category: "Barandas",
    title: "Baranda Exterior de Diseño",
    city: "Cali",
    description:
      "Baranda con lineamientos modernos que combina seguridad, proporción y presencia estética en fachada.",
    material: "Acero y acabado satinado",
    status: "Proyecto Finalizado",
    gradient: "from-[#ff6b00]/30 via-white/8 to-transparent",
  },
  {
    category: "Acero Inoxidable",
    title: "Riel y Accesorio Inoxidable",
    city: "Barranquilla",
    description:
      "Fabricación en acero inoxidable para áreas de alto estándar, limpieza y continuidad visual.",
    material: "Acero inoxidable AISI 304",
    status: "Proyecto Finalizado",
    gradient: "from-white/20 via-[#b63a34]/20 to-transparent",
  },
  {
    category: "Estructuras",
    title: "Estructura Comercial Modular",
    city: "Cartagena",
    description:
      "Estructura metálica para operación comercial con capacidad, orden y desempeño técnico asegurado.",
    material: "Perfil metálico y montaje estructural",
    status: "Proyecto Finalizado",
    gradient: "from-[#ff6b00]/35 via-[#ffffff]/5 to-transparent",
  },
  {
    category: "Portones",
    title: "Portón Duplex de Acceso",
    city: "Tunja",
    description:
      "Proyecto premium con composición elegante, cierre seguro y mejor experiencia de uso en acceso principal.",
    material: "Acero estructural y acabado metálico",
    status: "Proyecto Finalizado",
    gradient: "from-[#b63a34]/30 via-white/10 to-transparent",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-[#111111]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: animation.duration.base }}
          className="mb-8"
        >
          <SectionHeading
            eyebrow="Proyectos"
            title="Proyectos Destacados"
            subtitle="Conoce algunos de nuestros trabajos en carpintería metálica, acero inoxidable y estructuras metálicas."
          />
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full border border-white/10 bg-[#1a1a1a] px-4 py-2 text-sm text-white/70 transition hover:border-[#ff6b00] hover:text-white"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: animation.duration.base, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <Card
                variant="default"
                className="group h-full overflow-hidden"
                style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, boxShadow: shadows.card }}
              >
                <div
                  className={`h-52 bg-gradient-to-br ${project.gradient} p-4`}
                  aria-hidden="true"
                >
                  <div className="h-full rounded-[22px] border border-white/10 bg-black/25 backdrop-blur-sm" />
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <Badge className="px-3 py-1 text-[11px] uppercase tracking-[0.25em]">{project.category}</Badge>
                    <span className="text-xs text-white/50">{project.status}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
                      <MapPin size={14} />
                      {project.city}
                    </div>
                  </div>

                  <p className="text-sm leading-6 text-white/68">{project.description}</p>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/70">
                    <span className="font-semibold text-white">Material:</span> {project.material}
                  </div>

                  <Button variant="ghost" className="gap-2 border border-white/10 px-4 py-2 text-white/80 hover:border-[#ff6b00] hover:text-[#ff6b00]">
                    Ver Proyecto
                    <ArrowUpRight size={15} />
                  </Button>
                </div>
              </Card>
            </motion.article>
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
            <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#ff6b00]">Cotización</p>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">¿Quieres un proyecto como estos?</h3>
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
