"use client";

import { motion } from "framer-motion";

import { DashboardCard } from "./DashboardCard";

const activity = [
  { title: "Cotización aprobada", detail: "Grupo Rivas paso a fase de producción", time: "Hace 3 min" },
  { title: "Proyecto actualizado", detail: "Portón industrial premium al 78%", time: "Hace 12 min" },
  { title: "Nuevo cliente prospectado", detail: "Inmobiliaria Delta fue agregado al CRM", time: "Hace 26 min" },
  { title: "Blog publicado", detail: "Se actualizó la nota de caso industrial", time: "Hace 48 min" },
];

export function RecentActivity() {
  return (
    <DashboardCard title="Actividad reciente" subtitle="Seguimiento del sistema y cambios de negocio">
      <div className="space-y-3">
        {activity.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, delay: index * 0.04 }}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-white/60">{item.detail}</p>
            </div>
            <span className="text-xs text-white/45">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </DashboardCard>
  );
}
