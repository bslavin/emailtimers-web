## ADDED Requirements

### Requirement: Brand Color System
The site SHALL use a CSS variable-based color system with the following palette:
- Primary: Coral/orange gradient (`#FF6B35` → `#FF8C42`) for CTAs and accent elements
- Accent: Electric blue (`#1E96FC`) for secondary interactive elements
- Secondary accent: Soft violet (`#8B5CF6`) for decorative gradients
- Neutrals: Warm off-white (`#FAFAF8`), warm beige (`#F7F6F3`), dark charcoal (`#1a1a1a`)
- Success: Emerald green (`#10B981`) for checkmarks and positive indicators

#### Scenario: CSS variables defined
- **WHEN** the site loads
- **THEN** all brand colors are available as CSS custom properties in HSL format in `globals.css`

#### Scenario: Color consistency
- **WHEN** any component renders a branded element
- **THEN** it uses CSS variables or Tailwind theme tokens, never hardcoded hex values

### Requirement: Typography System
The site SHALL use Inter as the primary font family, loaded via Google Fonts with `display: 'swap'` and weights 400, 500, 600, 700, 800.

#### Scenario: Font loading
- **WHEN** the page loads
- **THEN** Inter is applied via `next/font/google` with Latin subset and swap display

#### Scenario: Heading hierarchy
- **WHEN** content is rendered
- **THEN** headings follow a consistent scale: h1 (3.5rem hero), h2 (2.25rem sections), h3 (1.25rem subsections)

### Requirement: Responsive Layout System
The site SHALL use a mobile-first responsive design with breakpoints at sm (640px), md (768px), lg (1024px), and 2xl (1400px container max-width).

#### Scenario: Mobile layout
- **WHEN** viewport is below 768px
- **THEN** all multi-column grids collapse to single column, navigation shows hamburger menu

#### Scenario: Desktop layout
- **WHEN** viewport is 1024px or above
- **THEN** grids display in 2-3 columns, full navigation is visible

### Requirement: Component Interaction Patterns
The site SHALL use consistent hover and transition effects across all interactive elements: cards lift with `translateY(-4px)` and shadow intensification, buttons scale with `hover:scale-105`, all transitions use 200-300ms duration.

#### Scenario: Card hover
- **WHEN** user hovers over a feature card
- **THEN** the card lifts upward, border brightens, and shadow intensifies with a smooth transition

#### Scenario: Button hover
- **WHEN** user hovers over a CTA button
- **THEN** the button slightly scales up with intensified shadow
