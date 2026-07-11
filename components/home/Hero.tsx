"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Star } from "lucide-react";

import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { colors } from "../../lib/design/colors";
import { spacing } from "../../lib/design/spacing";
import { shadows } from "../../lib/design/shadows";
import { animation } from "../../lib/design/animations";
import { typography } from "../../lib/design/typography";

const featureList = [
  "Carpintería metálica",
  "Soldadura MIG",
  "Soldadura TIG",
  "Soldadura SMAW",
  "Portones",
  "Escaleras",
  "Barandas",
  "Acero inoxidable",
];

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative isolate overflow-hidden bg-[#090909]"
      aria-label="Hero principal de SERVIMÓVIL DOMINICK METAL"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(181,58,52,0.22),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_25%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%,rgba(181,58,52,0.08)_100%)]" />

      <Container className="relative grid min-h-screen items-center gap-10 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: animation.duration.slow, ease: animation.easing.standard }}
          className="space-y-7"
        >
          <Badge>Metal, precisión y ejecución</Badge>

          <div className="space-y-4">
            <h1
              className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: typography.fontFamily.sans }}
            >
              Fabricamos Soluciones Metálicas de Alto Nivel
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Especialistas en carpintería metálica de precisión para proyectos residenciales, comerciales e industriales.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {featureList.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/85"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#b63a34] text-white">
                  <Check size={14} />
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="primary"
              aria-label="Cotizar servicio con SERVIMÓVIL DOMINICK METAL"
              className="shadow-lg shadow-[#8c271f]/35"
            >
              Cotizar Ahora
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              aria-label="Abrir WhatsApp para contactar con SERVIMÓVIL DOMINICK METAL"
            >
              <MessageCircle size={16} className="mr-2" />
              WhatsApp
            </Button>
          </div>

          <div className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-white">
              <span className="flex items-center gap-1 text-[#f9c15c]">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </span>
              <span className="font-semibold">4.9</span>
            </div>
            <div className="text-sm text-white/65">
              <span className="font-semibold text-white">+500 proyectos</span>
            </div>
            <div className="text-sm text-white/65">
              <span className="font-semibold text-white">15 años de experiencia</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: animation.duration.slow, ease: animation.easing.standard }}
          className="relative mx-auto flex h-[460px] w-full max-w-[520px] items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-sm"
          />

          <div className="absolute inset-8 rounded-[30px] border border-white/10 bg-black/45" />

          <motion.div
            animate={{ rotate: [0, 1.2, -1.2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[360px] w-[360px] rounded-[28px] border border-[#b63a34]/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(23,23,23,0.35))] p-5 shadow-[inset_0_0_25px_rgba(255,255,255,0.04)]"
          >
            <div className="absolute left-5 right-5 top-5 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#b63a34]/80 to-transparent" />

            <div className="absolute inset-5 rounded-[20px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />

            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b63a34]/40 bg-[radial-gradient(circle,_rgba(181,58,52,0.35),_transparent_65%)] blur-sm" />
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_rgba(0,0,0,0.1))]" />

            <div className="absolute left-8 top-14 h-44 w-px bg-gradient-to-b from-white/70 to-transparent" />
            <div className="absolute right-8 top-14 h-44 w-px bg-gradient-to-b from-white/70 to-transparent" />
            <div className="absolute left-1/2 top-12 h-44 w-px -translate-x-1/2 bg-gradient-to-b from-[#b63a34]/90 to-transparent" />

            <div className="absolute left-8 top-20 h-28 w-28 rounded-[16px] border border-white/10 bg-white/[0.03]" />
            <div className="absolute right-8 top-20 h-28 w-28 rounded-[16px] border border-white/10 bg-white/[0.03]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-white/[0.03]" />

            <div className="absolute bottom-12 left-10 right-10 grid grid-cols-3 gap-3">
              <div className="h-16 rounded-xl border border-white/10 bg-white/[0.03]" />
              <div className="h-16 rounded-xl border border-white/10 bg-white/[0.03]" />
              <div className="h-16 rounded-xl border border-white/10 bg-white/[0.03]" />
            </div>

            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border border-[#b63a34]/60 bg-[radial-gradient(circle,_rgba(181,58,52,0.45),_rgba(255,255,255,0.03)_70%)]"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
