## Context
Email Timers is a DuoCircle SaaS product that needs a modern marketing site. The existing site at www.emailtimers.com is functional but visually dated. Two sibling DuoCircle sites serve as design references: InboxIssue (static HTML, vibrant gradients) and OutboundSMTP (Next.js, shadcn/ui). The competitor MailTimers.com sets the competitive bar.

The developer has chosen: Next.js + Tailwind + shadcn/ui stack, InboxIssue visual direction, fresh brand colors, marketing site only.

## Goals / Non-Goals
- **Goals:**
  - Modern, conversion-optimized marketing site
  - Visual parity with InboxIssue's design quality
  - Clear competitive differentiation from MailTimers.com
  - Fast static site with excellent Lighthouse scores
  - SEO-optimized with structured data
  - Mobile-first responsive design

- **Non-Goals:**
  - Timer builder app or dashboard (separate system)
  - User authentication or account management
  - Backend API or server-side logic
  - Blog or CMS integration (can be added later)

## Decisions

### Tech Stack: Next.js 15 + Tailwind + shadcn/ui
**Why:** Matches the OutboundSMTP codebase exactly. Static export to Netlify. Component-based architecture makes the site maintainable. shadcn/ui provides accessible, polished components out of the box.

**Alternatives considered:**
- Static HTML (like InboxIssue): Simpler but harder to maintain as the site grows. No component reuse.
- Astro: Good static-first framework but adds another tool to the DuoCircle stack without clear benefit.

### Design Direction: InboxIssue Style
**Why:** Vibrant gradient energy, warm neutrals, and modern card interactions create a premium feel that matches the product's value proposition. The indigo-purple gradient palette is distinctive and modern.

**Brand Color Palette:**
- Primary: Vibrant coral/orange gradient (`#FF6B35` → `#FF8C42`) — warm, energetic, conveys urgency (fitting for countdown timers)
- Accent: Electric blue (`#1E96FC`) — trust, technology, complementary to warm primary
- Secondary accent: Soft violet (`#8B5CF6`) — connects to the DuoCircle purple family
- Neutrals: Warm off-white (`#FAFAF8`), warm beige (`#F7F6F3`), dark charcoal (`#1a1a1a`)
- Success green: `#10B981` (for checkmarks, trust indicators)

**Rationale for orange/coral primary:** Countdown timers are about urgency and action. Orange/coral is the most action-oriented color in marketing — it drives clicks and conveys time-sensitivity. It also differentiates sharply from MailTimers.com (navy/blue) and the old green branding.

### Page Structure
1. **Home** — Hero + value prop, timer demo, features grid, integrations, social proof, pricing preview, CTA
2. **Pricing** — Transparent tier comparison, feature matrix, FAQ
3. **Features** — Detailed feature breakdown with visuals
4. **Integrations** — Platform logos + setup snippets
5. **Setup Guides** — Per-platform embed instructions
6. **Contact** — Form + support info
7. **Legal** — Privacy, Terms, Cookie policy

### Component Architecture
```
src/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout + metadata + GTM
│   ├── globals.css           # Tailwind + CSS variables
│   ├── pricing/page.tsx
│   ├── features/page.tsx
│   ├── integrations/page.tsx
│   ├── guides/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── cookie-notice/page.tsx
│   ├── not-found.tsx
│   └── sitemap.ts
├── components/
│   ├── ui/                   # shadcn/ui library
│   ├── Navbar.tsx            # Fixed nav with glassmorphism
│   ├── Footer.tsx            # Dark footer with links
│   ├── HeroSection.tsx       # Animated hero with timer demo
│   ├── FeaturesGrid.tsx      # Feature cards with hover effects
│   ├── PricingCards.tsx      # Tier comparison
│   ├── IntegrationLogos.tsx  # Platform grid
│   ├── TestimonialCards.tsx  # Customer quotes
│   ├── TimerDemo.tsx         # Embedded timer preview
│   ├── CTASection.tsx        # Full-width gradient CTA
│   ├── FAQAccordion.tsx      # Expandable Q&A
│   └── ContactForm.tsx       # Contact form
└── lib/
    └── utils.ts              # cn() helper
```

### Pricing Tiers (from current site)
| Plan | Price | Impressions/mo | Key Features |
|---|---|---|---|
| **Free** | $0/mo | 1,250,000 | Unlimited timers, CDN, unlimited domains (includes branding) |
| **Starter** | $9/mo | 125,000 | **Branding removed**, dynamic language |
| **Active Marketer** | $29/mo | 700,000 | **Branding removed**, dynamic language, expired custom message, webpage mirrored counter (soon) |
| **Professional** | $79/mo | 1,500,000 | **Branding removed**, all features included |

Note: Free tier has MORE impressions than Starter — this is the current structure. Preserve as-is. Branding removal is the primary value driver for paid plans — emphasize this visually in the pricing cards.

### External Links & Integrations
- **Sign-up CTA:** https://app.emailtimers.com/users/sign-up
- **Support/Knowledge Base:** https://emailtimers.freshdesk.com/support/home
- **Contact form:** Iframe embed (URL TBD from existing site)
- **GTM container ID:** `GTM-MXHVLDQ5`

### Setup Guides (12 platforms)
Infusionsoft, Mailchimp, HubSpot, AWeber, Exact Target, Gmail, Constant Contact, Drip, Mailshake, Woodpecker, ConvertKit, Autopilot

### Competitive Positioning vs MailTimers.com
| Aspect | MailTimers | Email Timers (new) |
|---|---|---|
| Free tier | 100K views/mo | 1.25M impressions/mo (massive advantage) |
| Design quality | Clean but generic | Premium, gradient-rich, InboxIssue-quality |
| Social proof | 50K+ companies, brand logos | Leverage existing customer base |
| Timer templates | 60+ shown | Showcase variety with live previews |
| Pricing transparency | Clear tier table | Match with better visual design |
| Integrations | 20+ platforms listed | 12 platforms with dedicated setup guides |

## Risks / Trade-offs
- **Risk:** Fresh brand colors may confuse existing customers
  - **Mitigation:** Update all touchpoints (app login page, emails) to match new brand gradually
- **Risk:** Static export means no server-side features
  - **Mitigation:** This is intentional — keeps hosting simple and fast. Dynamic features live in the separate app
- **Risk:** Large scope (7+ pages) could delay launch
  - **Mitigation:** Ship home + pricing first, add remaining pages iteratively

## Open Questions
- What customer testimonials/logos are available for social proof?
- What is the iframe URL for the contact form?
