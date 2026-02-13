# Change: Redesign Email Timers Marketing Site

## Why
The current emailtimers.com site is outdated — it uses an older design language that doesn't match the modern, polished aesthetic of DuoCircle's other properties (InboxIssue, OutboundSMTP). Competitor sites like MailTimers.com have raised the bar with clean layouts, transparent pricing, and strong social proof. A redesign will improve brand perception, conversion rates, and competitive positioning.

## What Changes
- Build a complete Next.js 15 marketing site from scratch (static export, Netlify deployment)
- Adopt InboxIssue-inspired design direction: vibrant gradients, warm neutrals, hover-lift cards, modern typography
- Fresh brand color palette (moving away from the existing green)
- New pages: Home (landing), Pricing, Features, Integrations, Setup Guides, Contact, legal pages (Privacy, Terms, Cookie)
- Responsive mobile-first design with shadcn/ui component library
- SEO optimization with structured data, OpenGraph tags, and sitemap
- Analytics integration via Google Tag Manager
- All CTAs link to the existing timer builder app (external)

## Impact
- Affected specs: All new (greenfield project — no existing specs)
- Affected code: Entire `src/` directory (new codebase)
- Design reference: InboxIssue (~/Documents/git/inboxissue-web) for visual style, OutboundSMTP (~/Documents/git/outboundsmtp) for Next.js + shadcn/ui patterns
- Competitive reference: MailTimers.com — match or exceed their feature presentation, pricing transparency, and social proof
