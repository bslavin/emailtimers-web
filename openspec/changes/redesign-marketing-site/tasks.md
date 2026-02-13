## 1. Project Scaffolding
- [ ] 1.1 Initialize Next.js 15 project with TypeScript and Tailwind CSS
- [ ] 1.2 Configure static export in `next.config.mjs` (`output: 'export'`, `images.unoptimized: true`)
- [ ] 1.3 Set up shadcn/ui with component library (`components.json`, `cn()` utility)
- [ ] 1.4 Install core shadcn/ui components (Button, Card, Accordion, NavigationMenu, Input, Label)
- [ ] 1.5 Configure Netlify deployment (`netlify.toml`, publish from `/out`)
- [ ] 1.6 Define CSS variables and brand color palette in `globals.css`
- [ ] 1.7 Set up Google Fonts (Inter) in root layout

## 2. Design System & Shared Components
- [ ] 2.1 Build `Navbar` component (fixed, glassmorphism, responsive, mobile hamburger menu)
- [ ] 2.2 Build `Footer` component (dark background, multi-column links, gradient top border)
- [ ] 2.3 Build `CTASection` component (full-width gradient background, dual buttons)
- [ ] 2.4 Create root `layout.tsx` with Navbar, Footer, metadata, and GTM script
- [ ] 2.5 Create `not-found.tsx` error page

## 3. Home Page
- [ ] 3.1 Build `HeroSection` — headline with gradient text, subtitle, dual CTA buttons, hero badge, key metrics
- [ ] 3.2 Build `TimerDemo` — embedded animated timer preview (image or live embed)
- [ ] 3.3 Build `FeaturesGrid` — 6 feature cards with icons, titles, descriptions, hover-lift effect
- [ ] 3.4 Build `IntegrationLogos` — grid of 12+ email platform logos with labels
- [ ] 3.5 Build `TestimonialCards` — customer quotes with attribution
- [ ] 3.6 Build pricing preview section with link to full pricing page
- [ ] 3.7 Build `FAQAccordion` — common questions with expand/collapse
- [ ] 3.8 Assemble home `page.tsx` with all sections in order

## 4. Pricing Page
- [ ] 4.1 Build `PricingCards` — tier comparison cards (free, paid tiers) with feature lists
- [ ] 4.2 Add annual/monthly toggle if applicable
- [ ] 4.3 Add pricing FAQ section
- [ ] 4.4 Assemble pricing `page.tsx`

## 5. Secondary Pages
- [ ] 5.1 Build Features page — detailed feature breakdown with visuals
- [ ] 5.2 Build Integrations page — platform cards with setup snippets
- [ ] 5.3 Build Setup Guides page — per-platform embed instructions
- [ ] 5.4 Build Contact page with contact form
- [ ] 5.5 Build Privacy Policy page
- [ ] 5.6 Build Terms of Service page
- [ ] 5.7 Build Cookie Notice page

## 6. SEO & Analytics
- [ ] 6.1 Add comprehensive metadata to root layout (title, description, canonical, OpenGraph, Twitter Cards)
- [ ] 6.2 Add unique, keyword-optimized metadata to every page route
- [ ] 6.3 Add JSON-LD structured data: Organization, WebSite with SearchAction, SoftwareApplication with pricing offers
- [ ] 6.4 Add FAQPage schema to pages with FAQ sections
- [ ] 6.5 Add BreadcrumbList schema to all non-home pages
- [ ] 6.6 Create `sitemap.ts` for dynamic sitemap generation with lastmod dates
- [ ] 6.7 Create `robots.txt` with Sitemap directive
- [ ] 6.8 Integrate Google Tag Manager script in layout (lazyOnload strategy)
- [ ] 6.9 Add GTM dataLayer event tracking on all CTA buttons
- [ ] 6.10 Verify semantic HTML: one h1 per page, logical heading hierarchy, landmark elements
- [ ] 6.11 Ensure all images have descriptive alt text, width/height, and lazy loading
- [ ] 6.12 Add internal cross-linking between related pages (Pricing↔Features, Guides↔Integrations)
- [ ] 6.13 Create Open Graph images (1200x630) for Home, Pricing, Features pages
- [ ] 6.14 Verify WCAG 2.1 AA: color contrast, keyboard navigation, focus indicators, skip-to-content link

## 7. Polish & Launch Prep
- [ ] 7.1 Responsive testing across breakpoints (mobile, tablet, desktop)
- [ ] 7.2 Lighthouse audit — target 90+ on all metrics
- [ ] 7.3 Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] 7.4 Verify all CTA links point to correct timer builder app URLs
- [ ] 7.5 Verify static export builds cleanly (`npm run build`)
- [ ] 7.6 Deploy to Netlify and verify production build

## Dependencies & Notes
- Tasks 1.x must complete before all other tasks
- Tasks 2.x must complete before 3.x–5.x (shared components needed first)
- Tasks 3.x and 4.x can run in parallel
- Tasks 5.x can run in parallel with each other
- Task 6.x can start after root layout exists (task 2.4)
- Pricing data: Free $0 (1.25M impressions), Starter $9 (125K), Active Marketer $29 (700K), Professional $79 (1.5M)
- Branding removal is the key paid differentiator — emphasize visually on pricing cards
- Sign-up CTA: https://app.emailtimers.com/users/sign-up
- Support portal: https://emailtimers.freshdesk.com/support/home
- Contact form: iframe embed
- GTM container ID: `GTM-MXHVLDQ5`
- **Still needed:** Customer testimonials/logos, contact form iframe URL
