import { PageHeader } from "@/components/admin/PageHeader";
import { EmptyState } from "@/components/admin/EmptyState";

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Blog"
        title="Contenido del blog"
        subtitle="Base para publicar artículos, noticias y contenidos de marca corporativa."
      />
      <EmptyState
        title="Sin publicaciones disponibles"
        description="La lista editorial del blog quedará preparada para futuras publicaciones y edición de contenido."
      />
    </div>
  );
}
