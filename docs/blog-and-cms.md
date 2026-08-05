# Blog & CMS (Sanity)

## Architecture

The CMS admin UI (Sanity Studio) is embedded directly in the Next.js app at
**`/studio`**, via `next-sanity`'s `NextStudio` component
(`src/app/studio/[[...tool]]/page.tsx`, configured by `sanity.config.ts` at the
repo root). It's a normal Next.js route, deployed as part of the same Coolify
build as the rest of the site — no separate deploy step for the Studio itself.

To keep it visually and structurally isolated from the marketing site (it's a
full third-party admin SPA, not something that should inherit the site's
Tailwind theme/fonts/nav), the app uses Next's multi-root-layout pattern:

- `src/app/(site)/` — every public page (home, about, services, portfolio,
  blog, contact, privacy, terms), with its own root layout
  (`src/app/(site)/layout.tsx`) carrying the site's fonts, global CSS, Navbar,
  and Footer. Route groups don't add a URL segment, so none of these URLs
  changed.
- `src/app/studio/` — its own independent root layout
  (`src/app/studio/layout.tsx`), a bare `<html><body>` with no site chrome,
  `robots: noindex/nofollow`, and `robots.txt` also disallows `/studio`.
- `src/app/global-not-found.tsx` — a branded 404 for paths that don't match
  either group (requires `experimental.globalNotFound: true` in
  `next.config.ts`).

The schema (Blog Post, Category, Author) lives at `src/sanity/schemaTypes/`
and is shared by both the Studio (via `sanity.config.ts`) and the read-side
GROQ queries in `src/sanity/queries.ts`.

Project: `getfluxgrowth` — Project ID `5exkp2or`, dataset `production`.

## Using the Studio

Visit `https://getfluxgrowth.com/studio` (or `localhost:3000/studio` in dev).
**First-time-only step**: Sanity requires you to explicitly authorize which
hostnames are allowed to connect to your project before the login screen
appears. The first time you open `/studio` on a new host, Sanity shows a
"Connect this studio to your project" screen — click **Register this studio**
(recommended for the production domain) or **Add development host** (for
`localhost`), which opens sanity.io and asks you to log in with your Sanity
account. This only has to be done once per hostname.

## How to add a blog post

1. Open `/studio` and log in with your Sanity account.
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

## Deploying

```
git add -A
git commit -m "..."
git push origin main
```

Pushing to `main` triggers Coolify's auto-deploy of the Next.js app, which now
includes `/studio` since it's just another route in the same build.

## Not yet built

Scoped out of this pass, listed here so it isn't lost: category/tag archive
pages, on-site search, newsletter signup, RSS feed, and share buttons. These
are natural follow-ups on top of this foundation.
