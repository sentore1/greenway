-- Run this in your Supabase SQL Editor (https://app.supabase.com → SQL Editor)

create table if not exists public.blog_posts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  slug        text not null unique,
  excerpt     text,
  body        text not null,
  cover_image text,
  category    text default 'Impact',
  published   boolean default false,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Auto-update updated_at on row change
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute procedure public.set_updated_at();

-- Allow anyone to read published posts (public blog)
alter table public.blog_posts enable row level security;

create policy "Public can read published posts"
  on public.blog_posts for select
  using (published = true);

-- Allow anon key to insert posts (used by the admin form)
create policy "Anon can insert posts"
  on public.blog_posts for insert
  to anon
  with check (true);

-- Allow anon key to update posts
create policy "Anon can update posts"
  on public.blog_posts for update
  to anon
  using (true)
  with check (true);

-- Allow anon key to delete posts
create policy "Anon can delete posts"
  on public.blog_posts for delete
  to anon
  using (true);

-- -------------------------------------------------------
-- Seed: the three existing impact stories
-- -------------------------------------------------------
insert into public.blog_posts (title, slug, excerpt, body, category, published) values
(
  'Umubyeyi Mwiza',
  'umubyeyi-mwiza',
  'A community health programme serving rural families in southern Rwanda.',
  '## The Organisation

Umubyeyi Mwiza — a community health programme serving rural families in southern Rwanda.

## Our Role

Professional photography provided at no cost.

## The Impact

Images used in a fundraising campaign that secured two years of operating funding.',
  'Impact',
  true
),
(
  'Green Steps Rwanda',
  'green-steps-rwanda',
  'A reforestation programme replanting the slopes of the Virungas.',
  '## The Organisation

Green Steps Rwanda — a reforestation programme replanting the slopes of the Virungas.

## Our Role

Professional photography provided at no cost.

## The Impact

A visual story published internationally, bringing new volunteer applications and donor partnerships.',
  'Impact',
  true
),
(
  'Inararibonye Girls'' Education Trust',
  'inararibonye-girls-education-trust',
  'Keeping girls in secondary school across three provinces.',
  '## The Organisation

Inararibonye Girls'' Education Trust — keeping girls in secondary school across three provinces.

## Our Role

Professional photography provided at no cost.

## The Impact

Photography placed in four international publications and a successful grant submission.',
  'Impact',
  true
);
