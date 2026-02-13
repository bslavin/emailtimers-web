## ADDED Requirements

### Requirement: Home Page Hero Section
The home page SHALL display a hero section with a gradient-accented headline, descriptive subtitle, dual CTA buttons (primary "Start Free" and secondary "See Pricing"), key metrics (e.g., emails delivered, customers, uptime), and a trust logos strip showing integration partner icons.

#### Scenario: Hero renders
- **WHEN** a visitor lands on the home page
- **THEN** they see a compelling headline with gradient text, a subtitle explaining the product value, and two clear call-to-action buttons

#### Scenario: Hero metrics
- **WHEN** the hero section renders
- **THEN** 3 key business metrics are displayed in a horizontal row with icons and dividers

### Requirement: Timer Demo Section
The home page SHALL include a visual timer demonstration showing an example countdown timer, demonstrating the product in action.

#### Scenario: Timer visual
- **WHEN** a visitor scrolls to the demo section
- **THEN** they see an animated countdown timer example with customization preview

### Requirement: Features Grid
The home page SHALL display a grid of 6 core features, each as a card with an icon, title, and description. Features include: Timer Types (Fixed, Evergreen, Cyclic), Customization, Global CDN, Real-time Analytics, Email Platform Integration, and Mobile Compatibility.

#### Scenario: Feature cards display
- **WHEN** the features section renders
- **THEN** 6 cards are displayed in a responsive grid (1 column mobile, 2 tablet, 3 desktop) with hover-lift effects

### Requirement: Integration Partners Section
The home page SHALL display a grid of 12+ email platform logos (MailChimp, HubSpot, Klaviyo, Gmail, Constant Contact, ConvertKit, ActiveCampaign, etc.) with labels.

#### Scenario: Integration logos
- **WHEN** the integrations section renders
- **THEN** platform logos are displayed in a responsive grid with labels

### Requirement: Testimonials Section
The home page SHALL display customer testimonials as cards with quote text, customer name, and company/role attribution.

#### Scenario: Testimonial display
- **WHEN** the testimonials section renders
- **THEN** 3-4 customer quotes are shown in a card layout

### Requirement: FAQ Section
The home page SHALL include an FAQ accordion with common questions and answers about the product.

#### Scenario: FAQ interaction
- **WHEN** a visitor clicks a question
- **THEN** the answer expands with a smooth animation, and the toggle icon rotates

### Requirement: Pricing Page
The pricing page SHALL display 4 plan tiers (Free $0/mo, Starter $9/mo, Active Marketer $29/mo, Professional $79/mo) in a card comparison layout with: plan name, monthly price, impression limits, feature checklist per tier, and sign-up CTA buttons linking to https://app.emailtimers.com/users/sign-up. The Active Marketer tier SHALL be visually highlighted as the recommended plan. Branding removal SHALL be prominently highlighted as the key differentiator between free and paid plans.

#### Scenario: Pricing cards
- **WHEN** a visitor views the pricing page
- **THEN** they see 4 tier cards with pricing, impression limits (1.25M, 125K, 700K, 1.5M), feature lists with checkmarks, and sign-up CTAs

#### Scenario: Branding removal emphasis
- **WHEN** paid tier cards render
- **THEN** "Branding Removed" is visually emphasized (e.g., bold, highlighted, or badge) as the primary paid feature

#### Scenario: Featured tier
- **WHEN** pricing cards render
- **THEN** the Active Marketer tier has a highlighted border, "Most Popular" badge, and slightly larger presentation

#### Scenario: Sign-up CTA
- **WHEN** a visitor clicks a plan's CTA button
- **THEN** they are directed to https://app.emailtimers.com/users/sign-up

### Requirement: Features Detail Page
The features page SHALL provide a detailed breakdown of all product features with larger visuals, deeper explanations, and supporting evidence (stats, comparisons).

#### Scenario: Feature detail
- **WHEN** a visitor views the features page
- **THEN** each feature is presented with an icon, title, detailed description, and supporting visual

### Requirement: Integrations Page
The integrations page SHALL list all supported email platforms with logos, brief descriptions, and links to setup guides.

#### Scenario: Integration cards
- **WHEN** a visitor views the integrations page
- **THEN** each platform is shown as a card with logo, name, and "View Guide" link

### Requirement: Setup Guides Page
The setup guides page SHALL provide per-platform embed instructions for 12 platforms: Infusionsoft, Mailchimp, HubSpot, AWeber, Exact Target, Gmail, Constant Contact, Drip, Mailshake, Woodpecker, ConvertKit, and Autopilot.

#### Scenario: Guide listing
- **WHEN** a visitor views the setup guides page
- **THEN** they see a grid of 12 platform cards with logos and names

#### Scenario: Guide content
- **WHEN** a visitor selects a platform guide
- **THEN** step-by-step instructions with code snippets are displayed

### Requirement: Contact Page
The site SHALL include a contact page with an embedded iframe contact form and a link to the Freshdesk support portal at https://emailtimers.freshdesk.com/support/home.

#### Scenario: Contact form
- **WHEN** a visitor views the contact page
- **THEN** they see an embedded iframe contact form and a link to the support portal

#### Scenario: Support link
- **WHEN** a visitor clicks the support portal link
- **THEN** they are directed to https://emailtimers.freshdesk.com/support/home

### Requirement: Legal Pages
The site SHALL include Privacy Policy, Terms of Service, and Cookie Notice pages with proper legal content.

#### Scenario: Legal page access
- **WHEN** a visitor clicks a legal link in the footer
- **THEN** they are navigated to the corresponding legal page with full legal text
