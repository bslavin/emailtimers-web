## ADDED Requirements

### Requirement: Comprehensive Page Metadata
Every page SHALL include unique, keyword-optimized metadata: title tag (under 60 chars), meta description (under 160 chars), canonical URL, OpenGraph tags (og:title, og:description, og:image, og:url, og:type, og:site_name), and Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image).

#### Scenario: Home page metadata
- **WHEN** a search engine crawls the home page
- **THEN** it finds a unique title (e.g., "Email Countdown Timers for Marketing Campaigns | Email Timers"), description, and full OpenGraph/Twitter markup

#### Scenario: Per-page unique metadata
- **WHEN** any page is crawled
- **THEN** it has page-specific title and description targeting that page's primary keywords, never duplicated from the home page

#### Scenario: Canonical URLs
- **WHEN** any page is crawled
- **THEN** it includes a canonical URL pointing to itself to prevent duplicate content issues

### Requirement: Structured Data (JSON-LD)
The site SHALL include JSON-LD structured data on every page: Organization schema (company name, URL, logo, contact, social profiles), WebSite schema with SearchAction, SoftwareApplication schema (product details, pricing, rating), and FAQPage schema on pages with FAQ sections.

#### Scenario: Organization schema
- **WHEN** a search engine processes any page
- **THEN** it finds Organization structured data with name, URL, logo, contactPoint, and sameAs social links

#### Scenario: SoftwareApplication schema
- **WHEN** the home or pricing page is crawled
- **THEN** it finds SoftwareApplication schema with applicationCategory, offers (pricing tiers), and operatingSystem

#### Scenario: FAQ schema
- **WHEN** a page with an FAQ section is crawled
- **THEN** FAQPage structured data is present with question/answer pairs matching the visible FAQ content

#### Scenario: BreadcrumbList schema
- **WHEN** any non-home page is crawled
- **THEN** BreadcrumbList structured data is present showing the navigation path (Home > Section > Page)

### Requirement: Semantic HTML Structure
Every page SHALL use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Each page SHALL have exactly one `<h1>`, with a logical heading hierarchy (h1 > h2 > h3) and no skipped levels.

#### Scenario: Heading hierarchy
- **WHEN** any page is rendered
- **THEN** there is exactly one h1 element, and all headings follow a logical descending order without gaps

#### Scenario: Semantic landmarks
- **WHEN** a screen reader or search engine parses the page
- **THEN** it finds proper landmark elements (header, nav, main, footer) for page structure

### Requirement: Performance-Optimized Loading
The site SHALL achieve Lighthouse Performance score of 95+ with: static pre-rendered HTML, lazy-loaded images below the fold, preloaded critical fonts, minimal JavaScript bundle, and no render-blocking resources.

#### Scenario: Core Web Vitals
- **WHEN** Lighthouse audits the site
- **THEN** LCP is under 1.5s, FID/INP under 100ms, CLS under 0.1

#### Scenario: Font loading
- **WHEN** the page loads
- **THEN** the Inter font is loaded via `next/font/google` with `display: 'swap'` to prevent FOIT

### Requirement: Image SEO
All images SHALL include descriptive `alt` attributes, use modern formats (WebP where possible), include `width` and `height` attributes to prevent layout shift, and use lazy loading for below-the-fold images.

#### Scenario: Alt text
- **WHEN** any image is rendered
- **THEN** it has a descriptive alt attribute that includes relevant keywords where natural

#### Scenario: Layout stability
- **WHEN** images load
- **THEN** no cumulative layout shift occurs because dimensions are specified

### Requirement: Sitemap and Robots
The site SHALL generate a `sitemap.xml` listing all public pages with lastmod dates, and include a `robots.txt` that allows full crawling and references the sitemap URL.

#### Scenario: Sitemap generation
- **WHEN** the site builds
- **THEN** a sitemap.xml is generated at the root with all page URLs and last-modified dates

#### Scenario: Robots.txt
- **WHEN** a crawler requests /robots.txt
- **THEN** it finds an allow-all policy and a Sitemap directive pointing to the sitemap.xml URL

### Requirement: Internal Linking Strategy
The site SHALL maintain strong internal linking: the home page links to all major sections (Pricing, Features, Integrations, Guides), each page links back to related pages, and CTAs use descriptive anchor text (not "click here").

#### Scenario: Home page linking
- **WHEN** the home page renders
- **THEN** it contains links to Pricing, Features, Integrations, and Setup Guides pages using keyword-rich anchor text

#### Scenario: Cross-page linking
- **WHEN** any secondary page renders
- **THEN** it includes contextual links to related pages (e.g., Pricing links to Features, Guides link to Integrations)

### Requirement: URL Structure
All page URLs SHALL be clean, keyword-descriptive, and lowercase with hyphens: `/pricing`, `/features`, `/integrations`, `/guides`, `/contact`. No trailing slashes, no query parameters for static content.

#### Scenario: Clean URLs
- **WHEN** any page is accessed
- **THEN** the URL is clean, descriptive, and contains no unnecessary parameters or trailing slashes

### Requirement: Accessibility as SEO Signal
The site SHALL meet WCAG 2.1 AA standards: proper color contrast ratios (4.5:1 for text), keyboard navigability, ARIA labels on interactive elements, focus indicators, and skip-to-content link.

#### Scenario: Color contrast
- **WHEN** text is rendered on any background
- **THEN** the contrast ratio meets WCAG AA (4.5:1 for normal text, 3:1 for large text)

#### Scenario: Keyboard navigation
- **WHEN** a user navigates with keyboard only
- **THEN** all interactive elements are reachable and have visible focus indicators

### Requirement: Analytics Integration
The site SHALL integrate Google Tag Manager loaded with `lazyOnload` strategy. CTA button clicks SHALL push GTM dataLayer events with action identifier and destination URL.

#### Scenario: GTM loading
- **WHEN** a page loads
- **THEN** GTM script loads after initial render without blocking the page

#### Scenario: CTA tracking
- **WHEN** a visitor clicks a CTA button
- **THEN** a GTM dataLayer event is pushed with the CTA identifier and destination URL

### Requirement: Open Graph Images
Each major page (Home, Pricing, Features) SHALL have a unique Open Graph image (1200x630px) that includes the page title and Email Timers branding for rich social media previews.

#### Scenario: Social sharing
- **WHEN** a page URL is shared on social media
- **THEN** a branded preview image, title, and description are displayed
