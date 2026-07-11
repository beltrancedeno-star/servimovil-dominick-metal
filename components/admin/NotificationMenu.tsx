"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, CheckCheck } from "lucide-react";
import { useState } from "react";

import { colors } from "../../lib/design/colors";
import { radius } from "../../lib/design/radius";

const notifications = [
  { title: "Cotización aprobada", detail: "Grupo Rivas actualizó su pedido a aprobado." },
  { title: "Proyecto actualizado", detail: "Portón industrial premium avanzó al 78%." },
  { title: "Cliente nuevo", detail: "Inmobiliaria Delta se agregó como prospecto." },
];

export function NotificationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Abrir notificaciones"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#FF6B00]"
      >
        <Bell size={18} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-12 w-80 rounded-[22px] border border-white/10 bg-[#111111] p-3 shadow-2xl"
            style={{ borderRadius: radius.xl, boxShadow: "0 22px 50px rgba(0,0,0,0.45)" }}
          >
            <div className="mb-2 flex items-center justify-between px-2 pb-2 pt-1">
              <p className="text-sm font-semibold text-white">Notificaciones</p>
              <button type="button" className="inline-flex items-center gap-1 text-xs text-white/60">
                <CheckCheck size={14} />
                Marcar todo
              </button>
            </div>

            <div className="space-y-2">
              {notifications.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
