insert into storage.buckets (id, name, public)
values
  ('projects', 'projects', true),
  ('gallery', 'gallery', true),
  ('quotes', 'quotes', true),
  ('avatars', 'avatars', true)
on conflict (id) do nothing;

create policy "Authenticated admins can manage projects bucket"
on storage.objects
for all
to authenticated
using (bucket_id = 'projects')
with check (bucket_id = 'projects');

create policy "Authenticated admins can manage gallery bucket"
on storage.objects
for all
to authenticated
using (bucket_id = 'gallery')
with check (bucket_id = 'gallery');

create policy "Authenticated admins can manage quotes bucket"
on storage.objects
for all
to authenticated
using (bucket_id = 'quotes')
with check (bucket_id = 'quotes');

create policy "Authenticated admins can manage avatars bucket"
on storage.objects
for all
to authenticated
using (bucket_id = 'avatars')
with check (bucket_id = 'avatars');

create policy "Public can read projects objects"
on storage.objects
for select
to anon
using (bucket_id = 'projects');

create policy "Public can read gallery objects"
on storage.objects
for select
to anon
using (bucket_id = 'gallery');

create policy "Public can read quotes objects"
on storage.objects
for select
to anon
using (bucket_id = 'quotes');

create policy "Public can read avatars objects"
on storage.objects
for select
to anon
using (bucket_id = 'avatars');
