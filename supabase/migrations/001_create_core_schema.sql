create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key default uuid_generate_v4(),
  full_name text,
  role text not null default 'admin' check (role in ('admin', 'editor', 'viewer')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references public.profiles(id) on delete set null,
  full_name text not null,
  email text,
  phone text,
  company text,
  city text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  description text,
  price numeric(12,2),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  service_id uuid references public.services(id) on delete set null,
  client_id uuid references public.clients(id) on delete set null,
  title text not null,
  description text,
  status text not null default 'draft',
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quotes (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete set null,
  service_id uuid references public.services(id) on delete set null,
  quote_number text not null unique,
  status text not null default 'pending',
  priority text not null default 'medium',
  amount_estimated numeric(12,2) not null default 0,
  due_date date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_items (
  id uuid primary key default uuid_generate_v4(),
  quote_id uuid not null references public.quotes(id) on delete cascade,
  service_id uuid references public.services(id) on delete set null,
  description text not null,
  quantity integer not null default 1,
  unit_price numeric(12,2) not null default 0,
  total_price numeric(12,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gallery (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete set null,
  title text,
  image_url text not null,
  caption text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references public.clients(id) on delete set null,
  name text not null,
  title text,
  content text not null,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references public.categories(id) on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.settings (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists profiles_role_idx on public.profiles(role);
create index if not exists clients_profile_id_idx on public.clients(profile_id);
create index if not exists clients_full_name_idx on public.clients(full_name);
create index if not exists services_category_id_idx on public.services(category_id);
create index if not exists projects_service_id_idx on public.projects(service_id);
create index if not exists projects_client_id_idx on public.projects(client_id);
create index if not exists quotes_client_id_idx on public.quotes(client_id);
create index if not exists quotes_service_id_idx on public.quotes(service_id);
create index if not exists quotes_status_idx on public.quotes(status);
create index if not exists quote_items_quote_id_idx on public.quote_items(quote_id);
create index if not exists gallery_project_id_idx on public.gallery(project_id);
create index if not exists testimonials_featured_idx on public.testimonials(featured);
create index if not exists blog_posts_category_id_idx on public.blog_posts(category_id);
create index if not exists blog_posts_slug_idx on public.blog_posts(slug);
create index if not exists settings_key_idx on public.settings(key);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at_profiles
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger set_updated_at_clients
before update on public.clients
for each row execute function public.set_updated_at();

create trigger set_updated_at_categories
before update on public.categories
for each row execute function public.set_updated_at();

create trigger set_updated_at_services
before update on public.services
for each row execute function public.set_updated_at();

create trigger set_updated_at_projects
before update on public.projects
for each row execute function public.set_updated_at();

create trigger set_updated_at_quotes
before update on public.quotes
for each row execute function public.set_updated_at();

create trigger set_updated_at_quote_items
before update on public.quote_items
for each row execute function public.set_updated_at();

create trigger set_updated_at_gallery
before update on public.gallery
for each row execute function public.set_updated_at();

create trigger set_updated_at_testimonials
before update on public.testimonials
for each row execute function public.set_updated_at();

create trigger set_updated_at_blog_posts
before update on public.blog_posts
for each row execute function public.set_updated_at();

create trigger set_updated_at_settings
before update on public.settings
for each row execute function public.set_updated_at();
