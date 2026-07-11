export type UUID = string;

export interface TimestampedRecord {
  id: UUID;
  created_at: string;
  updated_at: string;
}

export interface Profile extends TimestampedRecord {
  full_name: string | null;
  role: "admin" | "editor" | "viewer";
  avatar_url: string | null;
}

export interface Client extends TimestampedRecord {
  profile_id: UUID | null;
  full_name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  city: string | null;
  notes: string | null;
}

export interface Category extends TimestampedRecord {
  name: string;
  slug: string;
  description: string | null;
}

export interface Service extends TimestampedRecord {
  category_id: UUID | null;
  name: string;
  description: string | null;
  price: number | null;
  active: boolean;
}

export interface Project extends TimestampedRecord {
  service_id: UUID | null;
  client_id: UUID | null;
  title: string;
  description: string | null;
  status: string;
  featured: boolean;
}

export interface Quote extends TimestampedRecord {
  client_id: UUID | null;
  service_id: UUID | null;
  quote_number: string;
  status: string;
  priority: string;
  amount_estimated: number;
  due_date: string | null;
  notes: string | null;
}

export interface QuoteItem extends TimestampedRecord {
  quote_id: UUID;
  service_id: UUID | null;
  description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface GalleryItem extends TimestampedRecord {
  project_id: UUID | null;
  title: string | null;
  image_url: string;
  caption: string | null;
}

export interface Testimonial extends TimestampedRecord {
  client_id: UUID | null;
  name: string;
  title: string | null;
  content: string;
  featured: boolean;
}

export interface BlogPost extends TimestampedRecord {
  category_id: UUID | null;
  author_id: UUID | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  published: boolean;
}

export interface AppSetting extends TimestampedRecord {
  key: string;
  value: Record<string, unknown>;
}
