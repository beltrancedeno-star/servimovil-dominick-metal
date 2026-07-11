"use client";

import { motion } from "framer-motion";

import { DashboardCard } from "./DashboardCard";

const projects = [
  { name: "Portón industrial premium", manager: "Jhoan Pérez", progress: "78%" },
  { name: "Escalera metálica residencial", manager: "Laura Gómez", progress: "63%" },
  { name: "Baranda exterior", manager: "Rodrigo Silva", progress: "91%" },
];

export function RecentProjects() {
  return (
    <DashboardCard title="Últimos proyectos" subtitle="Cronología de ejecución y avance">
      <div className="space-y-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: index * 0.04 }}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-white">{project.name}</p>
              <span className="text-sm text-[#FF6B00]">{project.progress}</span>
            </div>
            <p className="mt-1 text-sm text-white/60">Responsable: {project.manager}</p>
          </motion.div>
        ))}
      </div>
    </DashboardCard>
  );
}
