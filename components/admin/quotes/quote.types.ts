export type QuoteStatus =
  | "Pendiente"
  | "Contactado"
  | "En proceso"
  | "Aprobado"
  | "Rechazado"
  | "Instalado";

export type QuotePriority = "Alta" | "Media" | "Baja";

export type QuoteTimelineItem = {
  label: string;
  time: string;
  status: QuoteStatus;
};

export type QuoteRecord = {
  id: string;
  client: string;
  phone: string;
  service: string;
  city: string;
  status: QuoteStatus;
  priority: QuotePriority;
  date: string;
  amount: number;
  description: string;
  measures: string;
  material: string;
  photos: string[];
  history: string[];
  timeline: QuoteTimelineItem[];
  notes: string;
};
