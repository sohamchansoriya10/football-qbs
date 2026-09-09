# QB Compass

QB Compass is a Vercel-ready Next.js site that compares all 32 projected NFL Week 1 starting quarterbacks for the 2026 season.

## What is included

- Shadcn-style UI components in `components/ui`
- Interactive search, division filter, sorting, and three-player comparison
- Local dataset in `lib/quarterbacks.ts`
- Supabase schema and seed file in `supabase/schema.sql`
- Source attribution to NFL.com QB Index, published September 9, 2026

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Load Supabase

1. Create a Supabase project.
2. Open SQL Editor.
3. Paste and run `supabase/schema.sql`.
4. The seeded table is `public.quarterbacks`.

The current app reads from the local TypeScript dataset so it works immediately for class review. To read from Supabase instead, add these environment variables in Vercel and locally:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Add Supabase environment variables if you wire the app to hosted Supabase.
6. Deploy.

## Dataset note

NFL.com provides the Week 1 starter list, rank, tier, team, and experience year. The mobility, pressure, style, and outlook fields are assignment-specific comparison labels created for this dashboard.
