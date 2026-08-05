# Blog & CMS (Sanity)

## Architecture

Two independent apps live in this repo:

- **`/` (repo root)** — the Next.js site. Reads *published* blog content from Sanity
  at build/request time via `@sanity/client`. It never writes to Sanity and has no
  admin UI of its own.
- **`/studio`** — the Sanity Studio (the CMS admin UI). A completely separate app
  with its own `package.json`/`node_modules`, deployed independently to Sanity's own
  hosting (`*.sanity.studio`), not part of the Next.js build or the Coolify deploy.

Project: `getfluxgrowth` — Project ID `5exkp2or`, dataset `production`.

## Running the Studio locally

```
cd studio
npm install        # first time only
npx sanity login    # first time only — opens a browser to authenticate
npm run dev          # starts the Studio at http://localhost:3333
```

## Deploying the Studio

The Studio is hosted by Sanity, separate from the website:

```
cd studio
npx sanity deploy
```

The first time, it'll ask you to choose a `<your-name>.sanity.studio` hostname.
After that, running `npx sanity deploy` again re-publishes your latest schema/UI
changes to that same URL.

## How to add a blog post

1. Open your deployed Studio URL (or `localhost:3333` in dev).
2. If this is your first post, create an **Author** and a **Category** first
   (Content → Author / Category → `+ Create`) — a post requires both.
3. Go to **Blog Post → Create new**, fill in:
   - **Title**, **Slug** (auto-generated from the title, click the "Generate" button
     if you change the title after the slug is set)
   - **Featured Image** (required — include alt text, it's required for SEO/accessibility)
   - **Excerpt** — short summary shown on the blog listing cards
   - **Content** — the article body (rich text: headings, bold/italic, links, lists,
     inline images)
   - **Category**, **Author**, **Tags** (optional, free-form)
   - **Publish Date** (defaults to now)
4. Under the **SEO** tab (top of the document):
   - **Meta Title** / **Meta Description** — optional; fall back to the title/excerpt
     if left blank
   - **Canonical URL** — only set this if the article is also published elsewhere
   - **OG Image** — optional; falls back to the Featured Image if left blank
5. Click **Publish** (top right). The article appears on the live site within about
   a minute — see "How updates go live" below.
6. If you edit an already-published article later, also update **Updated Date** so
   the change is reflected in its schema.org metadata (`dateModified`) and its
   sitemap `lastmod`.

## How updates go live (no redeploy needed)

The Next.js site uses **ISR (Incremental Static Regeneration)** with a 60-second
revalidation window on `/blog` and every `/blog/[slug]` page. That means:

- Publishing, editing, or unpublishing a post in Sanity does **not** require a
  redeploy of the website.
- The change is picked up automatically the next time someone visits that page,
  at most ~60 seconds after publishing.
- New posts that didn't exist at the last `next build` are still rendered on
  first visit (`dynamicParams` is on by default) and then cached like any other
  ISR page.

## How the sitemap updates automatically

`src/app/sitemap.ts` fetches every published post from Sanity and adds a
`/blog/<slug>` entry for each, using the post's Updated Date (or Publish Date if
never updated) as `lastmod`. It regenerates on the same schedule as any other
dynamic Next.js route — no manual step required. If Sanity is unreachable when
the sitemap is generated, it silently falls back to just the static pages rather
than failing the whole build.

## SEO / schema on each article

Every `/blog/[slug]` page automatically emits:

- `<title>`, meta description, canonical link, Open Graph + Twitter Card metadata
  (via `generateMetadata`, using the SEO tab fields with fallbacks described above)
- `Article` JSON-LD (headline, image, author, publish/modified dates)
- `BreadcrumbList` JSON-LD (Home → Blog → Article)

## Environment variables

Defined in `.env.local` (gitignored) / `.env.example`:

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | `5exkp2or` |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Yes | API version pin, e.g. `2024-01-01` |
| `SANITY_API_READ_TOKEN` | Only if the dataset is private | Generate at sanity.io/manage → project → API → Tokens (Viewer role) |

The dataset was created with the default **public** visibility, so reads work
without a token. If you ever switch it to private, generate a read token and set
`SANITY_API_READ_TOKEN` in your deploy environment (Coolify) and in `.env.local`
for local dev.

## Deploying the website

Unrelated to the Studio deploy above — this is the existing flow:

```
git add -A
git commit -m "..."
git push origin main
```

Pushing to `main` triggers Coolify's auto-deploy of the Next.js app (unchanged
from before this integration). The Studio is never part of this deploy.

## Not yet built

Scoped out of this pass, listed here so it isn't lost: category/tag archive
pages, on-site search, newsletter signup, RSS feed, and share buttons. These
are natural follow-ups on top of this foundation.
