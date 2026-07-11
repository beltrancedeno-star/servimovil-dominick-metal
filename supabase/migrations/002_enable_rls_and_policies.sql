alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.categories enable row level security;
alter table public.services enable row level security;
alter table public.projects enable row level security;
alter table public.quotes enable row level security;
alter table public.quote_items enable row level security;
alter table public.gallery enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.settings enable row level security;

create policy "Authenticated admins can read all records"
on public.profiles
for select
to authenticated
using (true);

create policy "Authenticated admins can write all records"
on public.profiles
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read all clients"
on public.clients
for select
to authenticated
using (true);

create policy "Authenticated admins can manage clients"
on public.clients
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read categories"
on public.categories
for select
to authenticated
using (true);

create policy "Authenticated admins can manage categories"
on public.categories
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read services"
on public.services
for select
to authenticated
using (true);

create policy "Authenticated admins can manage services"
on public.services
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read projects"
on public.projects
for select
to authenticated
using (true);

create policy "Authenticated admins can manage projects"
on public.projects
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read quotes"
on public.quotes
for select
to authenticated
using (true);

create policy "Authenticated admins can manage quotes"
on public.quotes
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read quote items"
on public.quote_items
for select
to authenticated
using (true);

create policy "Authenticated admins can manage quote items"
on public.quote_items
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read gallery"
on public.gallery
for select
to authenticated
using (true);

create policy "Authenticated admins can manage gallery"
on public.gallery
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read testimonials"
on public.testimonials
for select
to authenticated
using (true);

create policy "Authenticated admins can manage testimonials"
on public.testimonials
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read blog posts"
on public.blog_posts
for select
to authenticated
using (true);

create policy "Authenticated admins can manage blog posts"
on public.blog_posts
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated admins can read settings"
on public.settings
for select
to authenticated
using (true);

create policy "Authenticated admins can manage settings"
on public.settings
for all
to authenticated
using (true)
with check (true);

create policy "Public can view published services"
on public.services
for select
to anon
using (active = true);

create policy "Public can view published projects"
on public.projects
for select
to anon
using (featured = true or status = 'published');

create policy "Public can view published gallery"
on public.gallery
for select
to anon
using (true);

create policy "Public can view published testimonials"
on public.testimonials
for select
to anon
using (true);

create policy "Public can view published blog posts"
on public.blog_posts
for select
to anon
using (published = true);
