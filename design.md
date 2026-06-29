# Moderor.ai — Design System

A reference for the visual language, tokens, components, and motion of the **moderor.ai** marketing site. Distilled from `src/app/globals.css`, `src/app/layout.tsx`, the UI primitives in `src/components/ui/`, and the content model in `src/content/site.ts`.

> **Design DNA:** Enterprise-grade, governed-AI marketing site. Light-on-white base with a single warm **ember orange** accent, dramatic dark "stage" panels (hero, domain outcomes), heavy use of layered gradients, noise/grain textures, glassmorphism cards, and restrained scroll-reveal motion. Inspired by the Kore.ai Agent Platform design language.

---

## 1. Brand & Voice

| Attribute | Value |
|-----------|-------|
| Product | moderor.ai |
| Tagline | **Governed Outcomes** |
| Positioning | "Everyone is Building Agents. We Deliver Governed Outcomes." |
| Tone | Authoritative, regulated-enterprise, outcome-driven. Short declarative claims ("Detection is automatic. Judgment is not."). |
| Audience | Regulated enterprises — compliance, risk, GRC, security, engineering leadership. |

---

## 2. Color

All colors are defined as CSS custom properties in `:root` (`globals.css`) and re-exported to Tailwind v4 via `@theme inline`.

### Core tokens

| Token | Value | Role |
|-------|-------|------|
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#0a0a0a` | Primary text |
| `--surface` | `#ffffff` | Card / panel surface |
| `--surface-muted` | `#fafafa` | Alternating section bg (`.section-alt`) |
| `--surface-subtle` | `#f5f5f5` | Subtle fills, thumbnails |
| `--border` | `#e8e8e8` | Default border / rule |
| `--border-subtle` | `#f0f0f0` | Hairline dividers |

### Neutrals (charcoal → grey scale)

| Token | Value | Role |
|-------|-------|------|
| `--charcoal` / `--ash` | `#0a0a0a` | Headings, dark buttons |
| `--grey` / `--stone` | `#555555` | Body text, nav links |
| `--grey-light` / `--dim` | `#888888` | Secondary / muted text |
| `--grey-muted` | `#bbbbbb` | Disabled / placeholder |

### Accent — "Ember" (the single brand color)

| Token | Value | Role |
|-------|-------|------|
| `--ember` | `#ff7a00` | **Primary accent** — CTAs, links, highlights, icons |
| `--ember-dark` | `#e06d00` | Hover state for ember surfaces |
| `--ember-light` | `#fff4eb` | Tinted backgrounds, icon chips |
| `--ember-glow` | `rgba(255, 122, 0, 0.15)` | Glow / shadow tint |

Supporting warm shades used inside gradients (not tokenized): `#ffb878`, `#ff9838`, `#ffa03c`, `#ff5c00`, `#ffb347`, `#e86800`.

### Accent gradient

```css
.text-accent-gradient {
  background: linear-gradient(92deg, #ffb878 0%, #ff7a00 100%);
  -webkit-background-clip: text;
  color: transparent;
}
```
Used for highlighted words in headlines (e.g. "We Deliver **Governed Outcomes**").

### Usage rules
- **One accent only.** Ember orange is the sole brand color; everything else is neutral. Do not introduce secondary hues.
- Dark "stage" panels use a near-black warm base (`#0c0600`, `#0a0502`, `#12100e`) rather than pure black.
- Selection + scrollbar are ember-tinted (`::selection` = `rgba(255,122,0,0.2)`; scrollbar thumb = `rgba(255,122,0,0.35)`).

---

## 3. Typography

Fonts loaded via `next/font/google` in `layout.tsx`:

| Family | Variable | Tailwind | Usage |
|--------|----------|----------|-------|
| **Inter** | `--font-inter` | `font-sans` | All UI and body text (default on `body`) |
| **JetBrains Mono** | `--font-jetbrains` | `font-mono` | Code/bracket accents, mono details |

Body default: `font-family: var(--font-inter), system-ui, sans-serif;` with `antialiased`.

### Type scale & patterns

| Element | Pattern |
|---------|---------|
| Hero H1 | `text-[clamp(1.35rem,4.6vw,3.85rem)]` · `leading-[1.08]` · line 1 `font-light`, highlight line `font-bold` |
| Section title (dark card) | `clamp(1.65rem, 2.8vw, 2.35rem)` · `font-weight: 700` · `letter-spacing: -0.035em` |
| Content headline | `clamp(1.25rem, 2vw, 1.65rem)` · `700` · `-0.03em` |
| Body / description | `14px`–`17px` · `line-height: 1.5–1.65` · color `--grey` / `#6b6b6b` |
| Section label (eyebrow) | `text-[11px]` · `font-semibold` · `uppercase` · `tracking-[0.12em]` · `text-ember` |
| Metric number | `clamp(1.35rem, 2vw, 1.75rem)` · `700` · `color: #ff7a00` · `font-variant-numeric: tabular-nums` |
| Badge / micro-label | `10px` · `600` · `uppercase` · `letter-spacing: 0.06–0.14em` |

**Conventions**
- Large headings use **negative letter-spacing** (`-0.02em` to `-0.035em`) for a tight, modern feel.
- Eyebrows / labels use **positive tracking** + uppercase.
- Numeric metrics use `tabular-nums`.
- Hero pairs a **light** weight line with a **bold** highlight line for contrast.

---

## 4. Spacing, Layout & Radius

### Layout tokens
- `--site-header-height: 4.25rem` — fixed header offset; `main` is padded `pt-[var(--site-header-height)]`; `html` has `scroll-padding-top` set to it.
- `html { scroll-behavior: smooth }`, `body { overflow-x: hidden }`.

### Section rhythm
- Hero outer padding: `px-5 pt-5 pb-40` → `sm:px-[50px]` → `lg:pb-48`.
- Sections alternate white (`#ffffff`) and muted (`--surface-muted` via `.section-alt`).
- The dark "outcomes" panel uses a **sticky scroll track**: `.domain-outcomes-sticky { position: sticky; top: 0; min-height: 100vh }`.

### Grid patterns
- Two-column split (dark aside + white card): `grid-template-columns: minmax(0, 0.58fr) minmax(0, 1.42fr)` at `≥1024px`.
- Feature cards: `repeat(3, minmax(0, 1fr))` at `≥1024px`, `gap: 1.5rem`.
- Metric grids: `repeat(auto-fit, minmax(148px, 1fr))`.

### Border radius scale
| Size | Value | Use |
|------|-------|-----|
| Pill | `9999px` / `rounded-full` | Buttons, tags, chips |
| Card large | `28px`–`36px` | Hero stage panel |
| Card | `20px`–`24px` | Feature / white content cards |
| Card small | `14px`–`16px` | Inner stages, graphics |
| Tile | `10px`–`12px` | Metric tiles, nodes, icon chips |
| Sharp | `rounded-none` | `GradientButton` variants (deliberate squared CTA) |

### Breakpoints (Tailwind defaults)
`sm: 640px` · `md: 768px` · `lg: 1024px` · `xl: 1280px`. Custom CSS media queries primarily target `768`, `1024`, `1280`, plus a `1100px` mega-menu collapse.

---

## 5. Elevation & Surface Treatments

Shadows are soft, large-radius, and often ember-tinted on hover.

| Pattern | Value |
|---------|-------|
| Card resting | `0 8px 32px rgba(10,10,10,0.05)` |
| Card hover (ember) | `0 20px 48px rgba(255,122,0,0.12)` |
| Floating panel | `0 24px 64px rgba(0,0,0,0.32)` |
| Deep panel | `0 32px 80px rgba(0,0,0,0.18)` |
| Orange glow utility | `.orange-glow` → `0 0 0 1px rgba(255,122,0,0.08), 0 8px 32px rgba(255,122,0,0.08)` |

**Glassmorphism** is used heavily on light cards: `background: rgba(255,255,255,0.94)` + `backdrop-filter: blur(6–20px)`.

**Dark "glossy" cards** (hero deploy card, etc.) combine: warm near-black gradient base, a `1px` gradient border drawn via `mask-composite`, multi-layer ember glow shadows, and an animated shine (`hero-border-shine`, `hero-glossy-pulse`).

### Texture layers (signature look)
The hero stage stacks multiple pointer-events-none layers (see `.hero-*` in `globals.css`):
1. `.hero-warm-base` — radial + linear warm-black gradient bed
2. `LightRays` WebGL component (ember rays, follows mouse)
3. `.hero-orange-mesh` — radial ember blobs + grid (screen blend)
4. `.hero-orange-noise` — SVG `feTurbulence` orange noise (soft-light)
5. `.hero-grain` / `.hero-grain-fine` — fractal-noise grain (overlay / soft-light)
6. `.hero-ribbed-columns` — perspective-warped vertical ribs

This **gradient + noise + grain + glow** stack is the defining texture motif; reuse it for any dark feature panel.

---

## 6. Components

### Buttons

**`PillButton`** (`ui/PillButton.tsx`) — primary rounded CTA. `h-12`, `rounded-full`, `text-sm font-medium`, optional trailing `ArrowRight`. Variants:
| Variant | Style |
|---------|-------|
| `dark` (default) | `bg-charcoal text-white` |
| `orange` | `bg-ember text-white hover:bg-ember-dark` |
| `white` / `light` | `bg-white text-charcoal shadow-sm` |
| `outline` | `border-white/25 bg-white/10 text-white backdrop-blur-sm` (for dark backgrounds) |

**`GradientButton`** (`ui/GradientButton.tsx`) — **squared** CTA (`rounded-none`), `px-6 py-3 text-sm font-semibold`. Variants `primary` (`bg-ember`), `outline`, `ghost` (border → ember on hover).

> Two button systems coexist: **pill** (hero/marketing) and **squared** (utility/inline). Pick per context — pills dominate hero and section CTAs.

### Section label / eyebrow
`SectionLabel` (`ui/SectionLabel.tsx`) — ember dot + uppercase tracked text; slides in from left on scroll (`x: -12 → 0`). The hero uses a richer `.hero-eyebrow-tag` variant with an animated shimmer sweep.

### Cards
- **Feature card** (`.outcome-feature-card`) — glass white, `radius 20px`, lifts shadow to ember on hover with `cubic-bezier(0.22, 1, 0.36, 1)`.
- **White content card** (`.domain-outcomes-white-card`) — `radius 22–24px`, min-height 420–600px, internal aside + body split with hairline divider.
- **Metric tile** (`.domain-outcomes-content-metric`) — `radius 10px`, `1px #ececec` border, blurred translucent fill, ember number.
- **Mega-menu suite cards** (`navbar.css`) — white, `radius 16px`, grid layout with media thumb + links; hover → ember border + soft ember shadow.

### Badges / chips / pills
- Suite badge (`.domain-outcomes-suite-badge`): ember-tint bg, `10px` uppercase ember text, `radius 5px`.
- Shuttle pills (`.outcome-shuttle-pill`): white, ember-hairline border, `radius 9999px`, soft ember shadow, with a glowing ember dot.

### Nav links
`.nav-link` — `15px`, `font-weight 500`, `--grey` → ember on hover; active state `600` ember. Mega menus (`nav-dropdown-panel--mega`) sit on a warm `#fffaf8` bed with gradient + noise background and ember-tinted shadows.

### Other primitives in `ui/`
`Logo`, `BracketText` (mono `{ … }` accent wrapper), `ScrollReveal`, `magic-card`.

---

## 7. Motion

Library: **Framer Motion** (`framer-motion`) + GSAP + bespoke CSS keyframes. WebGL backdrops via `ogl` / `@react-three/fiber` / `three`.

### Signature easing
`cubic-bezier(0.22, 1, 0.36, 1)` (an "ease-out-expo"-style curve) is used for both entrance transitions and hover shadow transitions — the house easing.

### Scroll reveals (Framer Motion)
- Common pattern: `initial={{ opacity: 0, y: 16–24 }}` → `whileInView / animate {{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, `duration 0.5–0.8`.
- Section labels slide from left (`x: -12 → 0`).
- Hero headline highlight animates word-by-word via custom `BlurText`.

### Hover micro-interactions
- Buttons: `whileHover={{ scale: 1.02–1.03 }}`, `whileTap={{ scale: 0.98 }}`; primary also raises ember box-shadow.
- Cards: shadow deepens to ember tint over `0.4s`.

### Ambient CSS keyframes (`globals.css`)
| Animation | Effect |
|-----------|--------|
| `outcomes-section-glow-drift` | Slow drifting background glow blobs (16–18s) |
| `hero-bottom-glow-pulse` / `hero-glow-pulse` | Pulsing ember glow under hero (5s) |
| `hero-border-shine` / `hero-glossy-pulse` | Animated gradient borders on dark cards |
| `hero-eyebrow-shuttle` / `hero-ai-shimmer` | Sweeping shimmer highlights |
| `hero-card-float` (+ slow/delay) | Gentle floating cards (6–7.5s) |
| `hero-ai-orbit` / `outcome-orbit-spin` | Orbiting nodes/dots (14–22s linear) |
| `ticker` | Marquee logo/stat ticker (35s linear, pause on hover) |
| `domain-grain-shift` | Subtle grain jitter (steps(10)) |

### Reduced motion
`@media (prefers-reduced-motion: reduce)` disables glow drift, orbit spins, and shimmer. **Honor this** when adding new motion.

---

## 8. Iconography & Imagery

- **Icons:** `lucide-react` (e.g. `ArrowRight`), plus inline Unicode glyphs for decorative orbit/node labels (`◎ ◈ △ ◉ ✦ ⬡ ⇄ ✓ ◐`).
- **Compliance framework logos** live in `public/frameworks/` (RBI, HIPAA, ISO 27001, GDPR, SOX), arranged on an explicit CSS grid.
- **Domain imagery** in `public/images/domain-outcomes/` (compliance, identity, engineering, risk).
- **Brand logo:** `public/moderor-logo.svg`.
- Decorative visuals are largely **CSS/SVG-generated** (orbit radars, BOM meshes, node graphs, ripple layers) rather than raster assets — keep this procedural approach for new sections.

---

## 9. Page Structure

Composition order (`src/app/page.tsx`):

1. `Navbar` (fixed, mega-menus)
2. `Hero` — dark stage panel, animated headline, dual pill CTAs, floating platform card
3. `OutcomesSection` — 3 feature cards (GRC / BOM / APPcelerate) with procedural visuals
4. `DomainOutcomesSection` — sticky-scroll dark panel + white tabbed content card
5. `ProblemSection` — large-type narrative + 3 problem cards
6. `GovernanceSection` — 4 governed-by-design pillars
7. `InfrastructureSection` — 4 deployment cards (Azure / WSO2 / GCP / On-prem)
8. `FrameworksSection` — compliance framework grid
9. `HumanControlSection` — human-in-the-loop 4-step flow
10. `PilotSection` — 60-day pilot timeline (Week 0 → Week 6)
11. `ProofSection` — animated metric counters
12. `FinalCTA` (also exported as `Footer`) — closing conversion + footer links

**Content is fully centralized** in `src/content/site.ts` — all copy, metrics, nav, tabs, and card data. Edit content there, never in components.

---

## 10. Tech & Conventions

| Area | Choice |
|------|--------|
| Framework | Next.js 16 (App Router, `--webpack`), React 19, TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`) + scoped component `.css` files |
| Animation | Framer Motion, GSAP, CSS keyframes |
| 3D / WebGL | `three`, `@react-three/fiber`, `ogl` (LightRays, backdrops) |
| Icons | `lucide-react` |
| Deploy | Cloudflare Pages via Wrangler (`pages:deploy`) |

### Conventions to preserve
- **Token-first:** use the `--ember` / neutral CSS variables (or Tailwind `text-ember`, `bg-charcoal`, etc.), never hard-coded hexes for brand color.
- **One accent:** ember orange only.
- **Dark stage = layered texture:** gradient bed + noise + grain + glow, never flat black.
- **House easing:** `cubic-bezier(0.22, 1, 0.36, 1)` for transitions.
- **Scroll-reveal once:** `viewport={{ once: true }}`, subtle `y`/`opacity` rise.
- **Respect `prefers-reduced-motion`.**
- **Content in `site.ts`**, presentation in components.
- Heavy decorative visuals are **client components** (`"use client"`) and often dynamically imported with `ssr: false` (e.g. `LightRays`).
</content>
</invoke>
