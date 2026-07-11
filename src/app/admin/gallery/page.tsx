import { PageHeader } from "@/components/admin/PageHeader";
import { EmptyState } from "@/components/admin/EmptyState";

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Galería"
        title="Administrar galería multimedia"
        subtitle="Espacio base para gestionar imágenes, proyectos y recursos visuales del negocio."
      />
      <EmptyState
        title="Sin contenido multimedia todavía"
        description="La colección de imágenes y materiales visuales aparecerá aquí al activar la gestión editorial."
      />
    </div>
  );
}
