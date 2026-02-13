## ADDED Requirements

### Requirement: Fixed Navigation Bar
The site SHALL display a fixed navigation bar at the top of every page with glassmorphism effect (`bg-white/80 backdrop-blur-md`), the Email Timers logo with gradient text, navigation links (Home, Features, Pricing, Integrations, Guides, Contact), and a primary CTA button ("Start Free").

#### Scenario: Desktop navigation
- **WHEN** viewport is 1024px or above
- **THEN** all navigation links are visible horizontally with hover underline effects

#### Scenario: Mobile navigation
- **WHEN** viewport is below 1024px
- **THEN** a hamburger menu icon is shown, which opens a slide-in menu panel

#### Scenario: Scroll behavior
- **WHEN** user scrolls past 50px
- **THEN** the navbar gains a subtle box-shadow for visual separation

### Requirement: Site Footer
The site SHALL display a dark footer (`#1a1a1a` background) on every page with a gradient top border, multi-column link grid (Product, Support, Legal, Company), social media links, and copyright notice.

#### Scenario: Footer content
- **WHEN** any page is rendered
- **THEN** the footer displays with product links, support links, legal links, and a copyright year that auto-updates

#### Scenario: Footer responsiveness
- **WHEN** viewport is below 768px
- **THEN** footer columns stack vertically
