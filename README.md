# EVIO Elevators — Website (Next.js)

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 rebuild of the Figma home page.

## Folder structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata
    page.tsx           Home page — composes all sections in order
    globals.css         Design tokens (colors) + base styles
  components/
    layout/
      Header.tsx        Sticky nav + logo + CTA
      Footer.tsx        Link columns, newsletter, bottom bar
    sections/           One file per numbered block in the Figma
      Hero.tsx                    01
      TrustedBrands.tsx           02
      WhyChooseUs.tsx             03
      LiftCollection.tsx          04
      AboutEvio.tsx              05
      ExperienceCarousel.tsx      06
      LiftModels.tsx              08
      Technology.tsx              09
      InstallationProcess.tsx     10
      Gallery.tsx                 11
      SafetyStandards.tsx         12
      VideoExperience.tsx         14 (placeholder — see note below)
      Projects.tsx                14
      CustomerReviews.tsx         15
      Consultation.tsx            18
      ContactUs.tsx               19
      BlogInsights.tsx            20
    ui/                 Small reusable primitives
      Button.tsx
      SectionLabel.tsx  Numbered eyebrow used at the top of each section
  data/
    site.ts             All copy/content as typed arrays — edit here, not in components
  types/
    index.ts            Shared TypeScript interfaces for the content above
public/
  images/               Drop real photography/renders here (see Images below)
```

## Why it's split this way

- **One component per section** so each block from the Figma maps 1:1 to a file — easy to find, easy to hand off.
- **`data/site.ts`** holds all text/labels/prices as data, not hardcoded JSX — swap in real copy or wire up a CMS later without touching layout code.
- **`ui/`** holds only the two primitives reused everywhere (buttons, the numbered section eyebrow) to keep the visual language consistent.

## Video / slider sections

Per your note, the hero media and the "Life Changing Experiences" block are left as clearly marked placeholder slots (`Hero.tsx`, `ExperienceCarousel.tsx`, `VideoExperience.tsx`) — drop in your slider library or video player there. Everything else matches the reference design.

## Images

All imagery is currently a styled placeholder `div` (`bg-surface border border-border`) so the layout is verifiable without assets. To wire in real images:

1. Add files to `public/images/` (paths already referenced in `src/data/site.ts`, e.g. `/images/category-home.jpg`).
2. Replace the placeholder `<div>` in the relevant section component with Next.js `<Image src={...} alt={...} fill />` inside a `relative` wrapper.

## Fonts

The build in this sandbox has no internet access, so `next/font/google` (Playfair Display + Inter) was swapped for system-font fallbacks in `globals.css`. To restore the intended luxury serif/sans pairing, re-add in `layout.tsx`:

```tsx
import { Playfair_Display, Inter } from "next/font/google";
```

and reference `--font-playfair` / `--font-inter` in `globals.css` once you have normal network access.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
```
"# final_lift" 
