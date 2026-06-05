# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server (localhost:3000)
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # eslint
```

No test suite is configured.

## Architecture

**Stack**: Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · shadcn/ui (base-nova style) · Lucide icons

### Key patterns

**Page structure**: Each page imports `Navbar` and `Footer` directly — no shared layout wraps these. `app/template.tsx` provides a fade-in page transition via Framer Motion for all routes.

**Content data**: Services and realisations content is hardcoded as typed objects at the top of their respective dynamic route files (`app/services/[slug]/page.tsx`, `app/realisations/[slug]/page.tsx`). Both use `generateStaticParams` for static generation. Adding or editing services/realisations means editing these objects in those files.

**Animation primitives** (`components/animations/scroll-reveal.tsx`):
- `ScrollReveal` — fade+slide in on scroll, with `direction`, `delay`, `duration` props
- `StaggerContainer` + `StaggerItem` — coordinated stagger reveals for lists
- `PageTransition` — route-level AnimatePresence wrapper (unused; `template.tsx` handles this instead)

**Styling**: Tailwind v4 with CSS variables defined in `app/globals.css`. Brand colors: `primary` = `#F5A623` (orange), `secondary` = `#1a1a1a` (near-black). Use `cn()` from `lib/utils.ts` for conditional class merging.

**shadcn components**: Configured with `base-nova` style, alias `@/components/ui`. Add new components via `pnpm dlx shadcn@latest add <component>`.

### Notes

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true`
- Vercel Analytics loads only in production (`process.env.NODE_ENV === 'production'`)
- Site language is French (`lang="fr"`)
- Contact info: `+221 77 657 60 44` / `contact@ois.sn`
