# TheyLore V1 — SaaS marketing site

A B2B SaaS landing page for TheyLore, structured after the standard product-marketing pattern (hero → social proof → features → value props → case study → roadmap → final CTA) with original copy and visuals built specifically for outdoor/adventure operators. This is a **separate project** from the narrative "chapters" storytelling site — that one is parked for a future brand activation, while the V2/V3 roadmap story now lives directly on this site instead.

## Design direction

- **Hybrid theme**: dark hero (and final CTA + footer, bookending the page) in the established TheyLore "dawn" palette, light paper body for the product/feature content — matching SaaS-site conventions while keeping TheyLore's brand identity.
- **Signature element**: three mock product-UI cards (a weekly booking calendar, a payouts panel with a live split breakdown, a bookings/CRM card) float across the seam where the dark hero meets the light body, anchoring the transition instead of a hard cut. These are real HTML/CSS mockups of TheyLore's actual product surface (booking calendar, Razorpay Route payouts, WhatsApp confirmations) rather than generic screenshots.
- **Roadmap as a dusk bridge**: the V1/V2/V3 story (`Vision.tsx`) sits where a pricing section would normally go, and its background is a single gradient that runs from the light paper body down into the same dark tone the closing CTA opens with — so scrolling through it visually reads as dusk falling, turning the page itself into a day-cycle (dawn hero → daylight product → dusk roadmap → night close).
- **Palette**: `ink` (#0a1411) for dark sections, `paper` (#fbf8f1) / `paper-soft` (#f1ead9) for the body, `graphite` (#1f2a25) for body text, `tide` / `ember` as accents (with `-dim` variants for AA-safe text on light backgrounds).
- **Type**: Fraunces (display), Inter (body), IBM Plex Mono (labels/data) — consistent with the rest of the TheyLore brand system.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        — fonts, metadata, grain overlay
  page.tsx           — assembles all sections
  globals.css        — shared tokens, reveal/float/marquee animations
components/
  SiteNav.tsx          — nav that switches dark→light styling once scrolled past the hero
  Hero.tsx              — dark hero band + floating mock dashboard cards (signature element)
  Marquee.tsx           — auto-scrolling operator-category pill strip
  Customise.tsx         — "built around how you run sessions" 3-point list + sample payout rule
  Features.tsx          — 12-feature grid
  WhyTabs.tsx            — 3-tab value-prop panel (payouts / built-by-operators / your brand)
  CaseStudy.tsx          — Mumbai Surf Club founding-partner spotlight
  Vision.tsx              — V1 / V2 / V3 roadmap story, gradient bridge into the closing CTA
  FinalCTA.tsx            — closing dark CTA band
  Footer.tsx              — dark footer, bookends the hero
  Reveal.tsx              — IntersectionObserver fade-up wrapper (shared utility)
```

## Customizing

- **CTA links**: "Book a demo" / "Talk to a founder" currently point to `#` — wire these to your real contact flow or booking form.
- **Roadmap**: the three phase cards in `Vision.tsx` (Infrastructure / Discovery / Community) tell the V1→V2→V3 story — update the copy as the actual roadmap and trigger conditions (e.g. "10+ operators live") evolve.
- **Case study**: `CaseStudy.tsx` has placeholder stats for Mumbai Surf Club — swap in real numbers and, once you have one, a real quote (the current copy avoids inventing one on their behalf).
- **Features**: the 12 cards in `Features.tsx` map to the locked V1 scope (admin panel, microsites, split payouts, WhatsApp, CRM, etc.) — add/remove as scope shifts.

## Possible next steps

- Replace the mock dashboard cards with real product screenshots once the admin panel UI is further along.
- Wire up an actual demo-booking form (Calendly-style embed or a custom form) behind "Book a demo."
- Add a simple FAQ section above the final CTA if early operator conversations surface common objections.
- Connect analytics and a proper OG image for link previews.
