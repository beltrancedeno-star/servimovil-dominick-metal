import { PageHeader } from "@/components/admin/PageHeader";
import { EmptyState } from "@/components/admin/EmptyState";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Configuración"
        title="Configuración del panel"
        subtitle="Módulo base para definir apariencia, contacto y ajustes generales del CMS."
      />
      <EmptyState
        title="Sin configuraciones definidas"
        description="Aquí se preparará la administración global de preferencias, contacto y ajustes del panel."
      />
    </div>
  );
}
