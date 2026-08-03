# GetFluxGrowth

Premium AI Automation Agency & Portfolio Website.

Phase 1: a marketing site for the agency. Later phases evolve this codebase into an AI-powered lead generation platform (daily prospecting, website audits, personalized outreach, and a lead management dashboard).

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com)
- Framer Motion
- Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/                # Routes: /, /services, /portfolio, /about, /contact
  components/
    layout/            # Navbar, Footer
    sections/          # Hero, Services, Process, Portfolio, Testimonials, Pricing, FAQ, CTA
    shared/             # Container, SectionHeading, FadeIn, social icons
    ui/                 # shadcn/ui primitives
  lib/
    data/               # Site content (services, portfolio, pricing, FAQ, team, etc.)
    site.ts             # Site config and nav links
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project
