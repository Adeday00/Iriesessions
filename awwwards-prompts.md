# Irie Sessions — UX/UI Upgrade Prompts (v2, merged)

A set of self-contained, copy-pasteable prompts for leveling up the site. Each prompt is
written to be actionable cold (real file paths, tokens, and constraints baked in).

> **v2 note:** Re-ordered and rescoped after a review pass. The north star is **cultural,
> fast, easy to buy from, and unmistakably Irie** — Awwwards-level craft is the quality
> *bar*, not the goal. Decorative/showy items (custom cursor, page transitions) are
> intentionally deferred. Do 1→3 first for the biggest real-world impact.

**Stack context:** Next.js 16 (App Router, Turbopack), React 19, Tailwind v4
(`@import "tailwindcss"` + `@theme inline` in `src/app/globals.css`).
**Core tokens:** background `#090909`, foreground `#f4efe5`, acid-green accent `#b9ff3b`,
cream section `#e9e2d5`.

## Brand fidelity (read first)

Irie Sessions / Irie Global is a real culture company — a hybrid **record label + merch
shop + event promoter + content archive**, "rooted in love," built on **People /
Togetherness / Giving Back**. Verified-real and must stay: tagline "Think Global. Create
Local.", those three pillars, and the catalog (Borders, Lust on the Coast). Keep every
change inside these guardrails:

- **Aesthetic:** cultural archive + shop with taste and speed — NOT a motion-heavy
  agency demo. Photography-forward, editorial, fast.
- **Color:** acid-green `#b9ff3b` is the owner-approved signature accent — keep it, but
  use it as **punctuation, not a coat of paint** (key headlines, primary CTAs, kicker
  labels), against the black/white/neutral base.
- **Voice:** the brand is warm — "love, togetherness, good vibes." Keep the archive
  *structure* but warm the *tone*; avoid drifting colder/more brutalist than it already
  is. (Copy is out of scope for these UX/UI prompts, but don't let the design fight the
  warmth.)

## Priority order

| #  | Prompt                                         | Why it ranks here                          |
|----|------------------------------------------------|--------------------------------------------|
| 1  | Interior page layout & art direction           | Improves the actual site, not decoration   |
| 2  | Type system                                    | Foundational identity; Arial is the #1 tell|
| 3  | Shop & checkout UX                             | It's a commerce site — buying must be easy  |
| 4  | Accessibility, focus, contrast, reduced-motion | Table stakes; do before heavier animation  |
| 5  | Media performance                              | First impression + mobile usability        |
| 6  | Subtle motion (smooth scroll + reveals)        | Premium feel — only if restrained           |
| 7  | Hover-vocabulary variety + easing              | Polish; do after layout/content settle     |
| 8  | Footer logo sizing & placement                 | Small, quick intentionality win            |
| —  | *Deferred:* custom cursor, page transitions    | "Portfolio" tropes; risk > reward for now  |

---

## Prompt 1 — Interior page layout & art direction

```
On the Irie Sessions site, interior pages are visually weaker than the homepage. At
1440px, /music ("RELEASES WITH A FULL PAPER TRAIL.") jams its heading and content into
the left ~25% with a large empty black void on the right — it reads as unfinished layout.

Audit all interior routes (src/app/music, journal, sessions, shop, opportunities, about,
and the detail pages in src/components/detail/DetailPage.tsx). Apply the same art
direction the homepage uses: a consistent max-width container + responsive grid,
intentional use of the hairline-bordered (border-white/15) sections, oversized uppercase
headlines, and proper use of horizontal space on wide screens. No accidental dead voids.
Keep pages consistent with each other and with the homepage.

Show me before/after screenshots of /music and one detail page at 1440px.
```

---

## Prompt 2 — Real type system

```
The Irie Sessions site (Next.js 16, React 19, Tailwind v4) currently uses system Arial
for headings and Consolas/SFMono for labels — see src/app/globals.css lines 11-12
(--font-sans and --font-mono inside @theme inline). Replace this with a distinctive,
self-hosted type system using next/font.

Requirements:
- ONE display/heading face — clean and contemporary with quiet character. The documented
  Irie identity uses clean modern type, so favor a refined grotesque, NOT a loud
  festival/brutalist display. Candidates: "PP Neue Montreal", "TWK Everett", "Suisse
  Int'l", or free options like "Geist" / "Inter Tight" / "Bricolage Grotesque" (used
  sparingly). Avoid heavy display faces like Anton/Archivo Expanded. Used by all
  `font-black uppercase` headlines (hero h1 in src/app/page.tsx:64, section h2s,
  signal/pillar titles).
- A restrained mono for the kicker labels (the `font-mono uppercase tracking-[0.22em]`
  labels used everywhere): replace Consolas with "Space Mono" / "JetBrains Mono".
- Wire both into Tailwind v4 by setting the next/font CSS variables on the <html>/<body>
  in src/app/layout.tsx and pointing --font-sans / --font-mono (and add a --font-display
  if needed) at them inside the @theme inline block in globals.css.
- Zero CLS, self-hosted, preload the display face.
- Keep the existing color tokens (#090909 / #f4efe5 / #b9ff3b) unchanged.

Show me before/after on the homepage hero and one interior page. Pick a face with
character — the goal is "unmistakably Irie," not "every agency site."
```

---

## Prompt 3 — Shop & checkout UX

```
Improve the commerce flow on the Irie Sessions site. It sells real products via a
localStorage basket (src/components/commerce/basketStorage.ts) that creates a Shopify
cart and redirects to Shopify-hosted checkout (netlify/functions/create-shopify-cart.mjs).
Key files: shop listing src/app/shop/page.tsx; product detail src/app/shop/[slug]/page.tsx
-> src/components/detail/DetailPage.tsx with src/components/commerce/ShopifyBasketButton.tsx
per variant; basket page src/app/shop/basket/page.tsx -> src/components/commerce/
ShopifyBasket.tsx; post-purchase src/app/checkout/success/page.tsx.

Current gaps to fix (keep the dark editorial aesthetic and #b9ff3b accent throughout):

1. Running subtotal. The basket summary (ShopifyBasket.tsx) shows only an item count and
   says totals are "calculated in Shopify checkout." Parse the per-line `price` strings
   and show an estimated subtotal + per-line line totals, clearly labeled "estimated;
   shipping/tax/discounts finalized at checkout."

2. Product detail (ShopifyBasketButton.tsx) currently adds one unit at a time via a stack
   of variant buttons. Add a proper variant/size selector + a quantity stepper before
   "Add to basket," so a user can choose size and qty in one action.

3. Add-to-basket feedback. The button sets `added=true` permanently with no reset. Replace
   with a transient confirmation (toast or inline "Added — View basket" that auto-resets
   after a few seconds) and live-update the header Basket count.

4. Mini-cart. Clicking Basket in src/components/SiteHeader.tsx does a full-page nav.
   Add a slide-over mini-cart (line items, qty controls, subtotal, Checkout) that opens
   in place, with the full basket page kept as a fallback/route.

5. Polish the empty, error, and "opening checkout" states in ShopifyBasket.tsx — they
   exist but should feel intentional (clear empty-state CTA, friendly error copy, a real
   loading state on the Checkout button).

6. PDP trust/clarity: surface availability, a short shipping/returns note, and (if data
   exists) sizing info, so users aren't surprised at Shopify checkout.

Keep everything keyboard-accessible and mobile-first. Don't change the Shopify cart
creation contract in basketStorage.ts / the netlify function.
```

---

## Prompt 4 — Accessibility, focus states, contrast & reduced-motion

```
Accessibility/polish pass for the Irie Sessions site.

1. Add a branded :focus-visible style globally (acid-green #b9ff3b outline/ring with
   offset) for all links, buttons, and inputs — there's currently no visible keyboard
   focus state.
2. Audit color contrast against WCAG AA: the muted body tones (#bdb3a5, #a9a095, #847b70)
   on #090909, and especially text-black/70 + small mono labels on the cream section
   (#e9e2d5) in src/app/page.tsx:164-185. Fix anything that fails.
3. Ensure prefers-reduced-motion is honored everywhere (and ahead of any motion work):
   reveals, hover transforms, smooth scroll.
4. Verify the hero video has aria-hidden (it does) and that all decorative images use
   empty alt while meaningful ones are described. Check basket qty controls and the
   mobile menu for proper labels/roles.

Report what failed and what you changed.
```

---

## Prompt 5 — Compress hero video + optimize imagery

```
Performance pass for the Irie Sessions site.

1. The homepage hero (src/app/page.tsx:43-54) autoplays public/media/irie-trailer.mp4,
   which is ~16MB. Re-encode it to ~2-4MB: 1080p max, H.264 CRF ~28 for the MP4, and
   also produce a WebM (VP9). Add both <source> entries (WebM first). Keep the poster
   (irie-paris.jpg) and only autoplay where sensible (consider not autoplaying on small
   screens or save-data; show the poster otherwise).
2. Convert the heavy source images in public/media to WebP/AVIF — notably
   iforgot-cover.jpg (~1.7MB), irie-paris.jpg (~1MB), alte-cover.jpg (~690KB),
   borders-cover.jpg (~680KB). Update references; keep next/image usage intact.
3. Report the before/after total transfer weight for the homepage.

Give me the exact ffmpeg/conversion commands you ran.
```

---

## Prompt 6 — Subtle motion: smooth scroll + restrained reveals

```
Add a LIGHT motion layer to the Irie Sessions site (Next.js 16 App Router, React 19).
No animation libraries are installed. Keep it subtle — premium, not a showreel.

1. Smooth/inertia scrolling with Lenis, initialized once in a client wrapper so it
   applies site-wide without breaking App Router navigation or anchor links (homepage
   uses #journal, #shop, #opportunities). Gentle settings, not heavy/laggy.
2. A reusable <Reveal> client component (Framer Motion) that does a small fade + short
   translate-up on scroll-into-view, with a light stagger. Apply once per section in
   src/app/page.tsx: the signalItems grid (~101), pillars grid (~118), archive-wall rows
   (~140), commerce block (~164), newsletter block (~188). Headlines slightly before body.
3. Standardize easing on cubic-bezier(0.16,1,0.3,1); short durations (~300-500ms).
4. Respect prefers-reduced-motion: disable Lenis smoothing and reveal transforms,
   render content statically.

Err on the side of restraint — if it draws attention to itself, it's too much.
```

---

## Prompt 7 — Hover-vocabulary variety + custom easing

```
Across the Irie Sessions site, nearly every interactive element does the same thing on
hover: fills its whole background with #b9ff3b (e.g. src/app/page.tsx:106, 152, 181;
SiteHeader nav; SiteFooter links). It's bold but repetitive. Do this AFTER layout and
content are settled.

Guiding principle: acid-green #b9ff3b is the signature, but treat it as PUNCTUATION, not
a coat of paint. Reduce the number of full-background green fills overall; let green mark
key moments (the "Create Local." line, primary CTAs, kicker labels) so it stays loud
without reading as a tech/agency template.

Diversify the hover vocabulary while keeping the acid-green identity:
- Nav links: animated underline draw-on instead of color change.
- Buttons/CTAs: a clipped color-wipe (left-to-right) instead of an instant fill, plus a
  subtle arrow nudge where appropriate.
- List rows / cards: keep some fills but add label slide/swap or metadata reveal so it's
  not all identical.
- Standardize ALL transitions on cubic-bezier(0.16,1,0.3,1), ~300-500ms, replacing
  Tailwind's default ease.

Keep it tasteful and consistent — variety, not chaos.
```

---

## Prompt 8 — Footer logo: sizing & placement first

```
In the Irie Sessions footer (src/components/SiteFooter.tsx), the real colorful
irie-logo.png can feel pasted-on against the pure-black footer. Do NOT immediately
de-color or knock it out — it's a real brand asset.

First pass = make the mark feel INTENTIONAL: get the size right (not oversized, not tiny),
fix its alignment/placement relative to the tagline and link columns, give it appropriate
surrounding space, and ensure it's crisp on retina with good alt text and a home link.
Only IF it genuinely clashes with the surrounding palette after that, propose (and show
me) an optional monochrome/knockout variant as a separate step — don't apply it by default.
```

---

## Deferred (intentionally not now)

These are "portfolio-site" flourishes. They can look great but risk making the site feel
gimmicky or slower, and they don't help someone read, navigate, or buy. Revisit only after
1–8 land and the site feels solid.

### Deferred A — Custom cursor

```
(Deferred.) A global custom cursor: a small ring that trails the pointer and grows/labels
itself over interactive elements, with native-cursor fallback on touch and reduced-motion.
Only build if there's a clear reason it strengthens the Irie identity — otherwise skip;
it reads "portfolio site" more than "cultural platform."
```

### Deferred B — Branded page transitions

```
(Deferred.) Acid-green (#b9ff3b) wipe/overlay route transitions via Framer Motion
AnimatePresence (App Router compatible), ~400-600ms, reduced-motion-safe. Risk: can make
navigation feel slower. Revisit only if the rest of the site is fast and the effect is
genuinely quick.
```
