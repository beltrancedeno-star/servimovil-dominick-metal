"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleUserRound, LogOut, Settings, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left transition hover:border-[#FF6B00]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white">
          <CircleUserRound size={18} />
        </div>
        <div className="hidden lg:block">
          <p className="text-sm font-semibold text-white">Ana García</p>
          <p className="text-xs text-white/55">Administradora</p>
        </div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-12 w-72 rounded-[22px] border border-white/10 bg-[#111111] p-3 shadow-2xl"
          >
            <div className="space-y-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
                <p className="text-sm font-semibold text-white">Ana García</p>
                <p className="text-xs text-white/55">admin@servimovil.com</p>
              </div>
              <button type="button" className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-white/75 transition hover:bg-white/5">
                <ShieldCheck size={16} />
                Perfil
              </button>
              <button type="button" className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-white/75 transition hover:bg-white/5">
                <Settings size={16} />
                Configuración
              </button>
              <button type="button" className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-red-300 transition hover:bg-white/5">
                <LogOut size={16} />
                Cerrar sesión
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
