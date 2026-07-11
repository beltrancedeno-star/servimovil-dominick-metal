import { FileCog } from "lucide-react";

import { PageHeader } from "@/components/admin/PageHeader";
import { EmptyState } from "@/components/admin/EmptyState";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Servicios"
        title="Gestión de servicios"
        subtitle="Estructura base para administrar servicios, paquetes y contenido asociado."
      />
      <EmptyState
        title="Sin servicios creados todavía"
        description="Aquí aparecerá la lista editorial de servicios del CMS cuando se conecte la administración definitiva."
      />
    </div>
  );
}
