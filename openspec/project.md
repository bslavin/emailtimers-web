# Project Context

## Purpose
Email Timers (www.emailtimers.com) — a SaaS platform that enables marketers to create animated countdown timers for email campaigns. Timers are GIF-based, refresh on each email open, and integrate with 12+ email platforms.

This repository contains the **public-facing marketing website** only. The timer builder app, API, and backend are separate systems.

## Tech Stack
- Next.js 15 (App Router, static export)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 3
- shadcn/ui component library (Radix UI primitives)
- Lucide React icons
- Deployment: Netlify (static export to `/out`)

## Project Conventions

### Code Style
- TypeScript strict mode
- Tailwind utility classes (no custom CSS except CSS variables in globals.css)
- `cn()` utility for class composition (clsx + tailwind-merge)
- Component files: PascalCase (e.g., `HeroSection.tsx`)
- Page files: `page.tsx` in route directories

### Architecture Patterns
- Next.js App Router with static export (`output: 'export'`)
- shadcn/ui components in `src/components/ui/`
- Page-level components in `src/components/`
- CSS variables for theming (HSL format in globals.css)
- Mobile-first responsive design
- Suspense boundaries for heavy components

### Testing Strategy
- Visual review via dev server
- Lighthouse audits for performance/accessibility
- Manual cross-browser testing

### Git Workflow
- Feature branches, squash merges to main
- Descriptive branch names (e.g., `feature/redesign-hero`)

## Domain Context
- Email countdown timers increase urgency and drive conversions in email marketing
- Timers are animated GIFs that update server-side on each email open
- Key timer types: Fixed date, Evergreen (per-recipient), Cyclic (repeating)
- Competitor landscape: MailTimers.com, Sendtric, CountdownMail
- Target audience: Email marketers, e-commerce teams, SaaS companies

## Important Constraints
- Marketing site only — no timer builder or dashboard in this repo
- Static export — no server-side rendering or API routes
- Must work on Netlify free tier
- Images must be unoptimized (static export limitation)

## External Dependencies
- Timer builder app (separate system, linked via CTA buttons)
- Netlify for hosting and deployment
- Google Tag Manager for analytics
- Google Fonts (Inter)
