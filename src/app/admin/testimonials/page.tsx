import { PageHeader } from "@/components/admin/PageHeader";
import { EmptyState } from "@/components/admin/EmptyState";

export default function TestimonialsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Testimonios"
        title="Gestión de testimonios"
        subtitle="Sección base para revisar, editar y publicar opiniones de clientes."
      />
      <EmptyState
        title="Sin testimonios en el CMS"
        description="Aquí se administrarán los comentarios y experiencias de clientes cuando se habilite el flujo editorial."
      />
    </div>
  );
}
