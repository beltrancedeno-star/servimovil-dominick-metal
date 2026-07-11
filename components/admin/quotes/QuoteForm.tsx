"use client";

import { UploadCloud } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { colors } from "@/lib/design/colors";
import { radius } from "@/lib/design/radius";
import { spacing } from "@/lib/design/spacing";

import type { QuotePriority, QuoteStatus } from "./quote.types";

type QuoteFormProps = {
  onCancel: () => void;
};

export function QuoteForm({ onCancel }: QuoteFormProps) {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <Card
      variant="default"
      className="p-4"
      style={{ borderRadius: radius.xl, backgroundColor: colors.grafito, padding: spacing.md }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/50">Nueva cotización</p>
          <h3 className="text-xl font-semibold text-white">Formulario mock</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/55">
          Modo demo
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 xl:grid-cols-2">
          <fieldset className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
            <legend className="px-1 text-sm font-semibold text-white">Información del cliente</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Cliente</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Constructora Aurora" />
              </label>
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Teléfono</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="+56 9 8301 2345" />
              </label>
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Ciudad</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Santiago" />
              </label>
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Correo</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="ventas@constructora.cl" />
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
            <legend className="px-1 text-sm font-semibold text-white">Información del proyecto</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Servicio</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Portón industrial" />
              </label>
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Urgencia</span>
                <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Alta">
                  <option className="bg-[#111111]" value="Alta">Alta</option>
                  <option className="bg-[#111111]" value="Media">Media</option>
                  <option className="bg-[#111111]" value="Baja">Baja</option>
                </select>
              </label>
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Estado</span>
                <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Pendiente">
                  <option className="bg-[#111111]" value="Pendiente">Pendiente</option>
                  <option className="bg-[#111111]" value="Contactado">Contactado</option>
                  <option className="bg-[#111111]" value="En proceso">En proceso</option>
                  <option className="bg-[#111111]" value="Aprobado">Aprobado</option>
                  <option className="bg-[#111111]" value="Rechazado">Rechazado</option>
                  <option className="bg-[#111111]" value="Instalado">Instalado</option>
                </select>
              </label>
              <label className="text-sm text-white/75">
                <span className="mb-1 block">Monto estimado</span>
                <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="$6.100" />
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
            <legend className="px-1 text-sm font-semibold text-white">Material</legend>
            <label className="text-sm text-white/75">
              <span className="mb-1 block">Material</span>
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Acero galvanizado y pintura industrial" />
            </label>
          </fieldset>

          <fieldset className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4">
            <legend className="px-1 text-sm font-semibold text-white">Dimensiones</legend>
            <label className="text-sm text-white/75">
              <span className="mb-1 block">Medidas</span>
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="4.20m x 2.80m · 2 hojas" />
            </label>
          </fieldset>

          <fieldset className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4 xl:col-span-2">
            <legend className="px-1 text-sm font-semibold text-white">Comentarios</legend>
            <textarea className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#FF6B00]" defaultValue="Necesitamos visita técnica para confirmar dimensiones exactas y cronograma de instalación." />
          </fieldset>

          <fieldset className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4 xl:col-span-2">
            <legend className="px-1 text-sm font-semibold text-white">Archivos (mock)</legend>
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-4 text-sm text-white/70">
              <UploadCloud size={18} className="text-[#FF6B00]" />
              <span>Plano_estructura.pdf · Foto_obra_01.jpg · Cotizacion_base.docx</span>
            </div>
          </fieldset>
        </div>

        {saved ? (
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Mock guardado en memoria. No se conecta a ninguna base de datos ni API.
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" variant="primary">Guardar</Button>
          <Button type="button" variant="outline" onClick={onCancel}>Cancelar</Button>
        </div>
      </form>
    </Card>
  );
}
