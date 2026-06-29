# Moderor.ai Website

A professional, enterprise-grade marketing website for **moderor.ai**, inspired by the [Kore.ai Agent Platform](https://www.kore.ai/ai-agent-platform) design language — dark theme, scroll animations, tabbed sections, and bracket-style typography.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router, SSR, SEO |
| **React 19** | UI components |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Styling |
| **Framer Motion** | Scroll reveals, tab transitions, hover animations |
| **Lucide React** | Icons |

## Why React / Next.js?

Yes — this is built in **React** (via Next.js). This is the right choice for a site like Kore.ai because:

- **Component reusability** — sections, cards, tabs are modular
- **Smooth animations** — Framer Motion integrates natively with React
- **SEO & performance** — Next.js server-renders content for search engines
- **Easy content updates** — all copy lives in one config file
- **Scalable** — add more pages (About, Docs, Blog) without rewriting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Updating Content

All website copy is centralized in:

```
src/content/site.ts
```

Edit this file to update headlines, descriptions, stats, tabs, footer links, and CTAs for Moderor — no need to touch component code.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme, grid background, scrollbar
│   ├── layout.tsx       # Fonts, metadata, root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # Reusable UI (buttons, scroll reveal, bracket text)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── OutcomeCards.tsx
│   ├── LifecycleTabs.tsx
│   ├── NineWaysTabs.tsx
│   └── ...
└── content/
    └── site.ts          # ← Edit all content here
```

## Sections (Kore.ai-inspired)

1. **Hero** — animated headline, gradient glow, scroll indicator
2. **Outcome Cards** — 3 stat cards with hover lift
3. **Certainty** — large typography statement
4. **Demo Break** — split layout CTA
5. **Metrics** — centered value proposition
6. **Enterprise Advantage** — 3-column benefits
7. **Pillars** — ABL™ & Arch™ feature cards
8. **Lifecycle Tabs** — Build / Scale / Optimize / Performance / Foundation
9. **Nine Ways** — animated tab carousel
10. **CTA** — final conversion section
11. **Footer** — links and legal

## Build for Production

```bash
npm run build
npm start
```

## Notes on Kore.ai Parity

This recreates the **structure, animations, and visual language** of the Kore.ai reference site. Some Kore.ai-specific assets (custom videos, 3D graphics, proprietary fonts) are replaced with CSS gradients and placeholder visuals. You can swap in Moderor brand assets (logo, videos, images) as they become available.

## Next Steps

- [ ] Add Moderor logo and brand colors
- [ ] Replace placeholder content with final Moderor copy
- [ ] Add additional pages (About, Contact, Documentation)
- [ ] Connect demo/booking CTAs to your form or Calendly
- [ ] Deploy to Vercel, AWS, or your preferred host
