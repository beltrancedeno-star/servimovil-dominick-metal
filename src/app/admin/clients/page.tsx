import { PageHeader } from "@/components/admin/PageHeader";
import { EmptyState } from "@/components/admin/EmptyState";

export default function ClientsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Clientes"
        title="Base de clientes"
        subtitle="Panel base para gestionar clientes, perfiles de empresa y relaciones comerciales."
      />
      <EmptyState
        title="Sin clientes registrados"
        description="La base de clientes quedará preparada para futuras integraciones y listados empresariales."
      />
    </div>
  );
}
