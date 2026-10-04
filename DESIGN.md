---
name: GrowMate
description: Plant care and a local cash-on-delivery plant market for the Philippines, shown as the real app standing on forest green.
colors:
  primary: "#185a38"
  forest: "#0a2e1c"
  forest-raised: "#123d27"
  stage-glow: "#1e6a43"
  leaf-signal: "#9fe0b8"
  canvas: "#f7faf4"
  sage: "#eff6e9"
  white: "#ffffff"
  body: "#4d5f54"
  muted: "#8a978e"
  on-dark-soft: "#b9d2c0"
  hairline: "#e6eeda"
  hairline-strong: "#ccd9bf"
  hairline-dark: "#22503a"
  wash-sky: "#d8ecfb"
  wash-leaf: "#e0ebd3"
  bezel: "#111312"
  screen-paper: "#f6f7f2"
typography:
  display:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(2.25rem, 5.8vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title-serif:
    fontFamily: "Literata, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, -apple-system, system-ui, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, system-ui, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  lede:
    fontFamily: "Inter, -apple-system, system-ui, Segoe UI, sans-serif"
    fontSize: "clamp(16px, 1.6vw, 18px)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, -apple-system, system-ui, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1
  figure:
    fontFamily: "Inter, -apple-system, system-ui, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 600
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
rounded:
  md: "8px"
  lg: "12px"
  stage: "24px"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  section: "96px"
  section-compact: "64px"
  head-gap: "48px"
  grid-gap: "16px"
  card: "24px"
  panel: "28px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.forest}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
    height: "44px"
  button-secondary-sm:
    backgroundColor: "{colors.white}"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "8px 14px"
    height: "40px"
  play-plate-pending:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "8px 18px 8px 14px"
    height: "52px"
  play-plate-pending-lg:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "10px 24px 10px 18px"
    height: "60px"
  play-plate-pending-on-forest:
    backgroundColor: "{colors.forest-raised}"
    textColor: "{colors.white}"
  nav-link:
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  nav-link-hover:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.forest}"
  chip:
    textColor: "{colors.forest}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "40px"
  chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  card-icon:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    size: "36px"
  fare-receipt:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-dark-soft}"
    rounded: "{rounded.lg}"
    padding: "{spacing.panel}"
  device-stage:
    backgroundColor: "{colors.forest}"
    rounded: "{rounded.stage}"
  band-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.on-dark-soft}"
    padding: "{spacing.section} 0"
---

# Design System: GrowMate

## Overview

**Creative North Star: "The Forest Stage"**

A quiet cream product page on which the real GrowMate app stands on forest green. The grammar is borrowed from a calm developer-product site: a near-white canvas, a single soft wash behind the hero, centered headlines, 8px buttons, 12px hairline cards, a 96px section rhythm and a device composite as the hero's chrome. The identity is GrowMate's own, lifted from the app itself: its forest and leaf greens, its cream and sage surfaces, its hairline colours, and its Literata serif for the voice of the page.

Forest green is the ground the product stands on. The three hero phones sit full and uncropped on a rounded forest stage; the local-economy section inverts into a forest band; the fare receipt is a forest panel; and the page closes on a forest band before a cream footer. Everything else is cream, sage and white, divided by thin green-grey hairlines rather than shadows.

Density is relaxed and editorial: centered section heads capped at 680px, story content in plain hairline rows, cards only where a sequence of steps needs a container. Motion is limited to colour transitions on controls, a soft shadow on card hover, and one autoplaying phone that slides between three real screens; under reduced motion it holds on the first screen.

Provenance: the layout grammar is adapted from the Expo design-language analysis in VoltAgent/awesome-design-md (MIT); the Android device frame is adapted from open-design's Pixel 8 Pro frame (nexu-io/open-design, Apache-2.0, credited in `web/styles.css` and `THIRD_PARTY_NOTICES.md`). The palette and Literata come from the GrowMate app (`native/src/theme/colors.ts`). Never imitate Expo's own site or assets.

**Key Characteristics:**
- Cream canvas, sage alternate bands, white hairline cards; one sky-to-leaf wash behind the hero only.
- Forest green as the stage: device stage, one inversion band, fare receipt, closing band.
- Literata 600 for page and section headlines and story titles; Inter for everything functional.
- Real app screens in a scaled Pixel frame, full and uncropped.
- Real numbers in tabular figures; the fare calculator works the production delivery-fee formula.

## Colors

The GrowMate app's own palette: two forest greens, a cream-and-sage ground, green-grey hairlines, and one sky tint that lives only in the hero wash.

### Primary
- **Primary Green** (`primary`): the action colour. Primary buttons (once the Play Store link exists), selected price chips, the range track fill and thumb ring, the focus outline, inline links, card icon glyphs and editorial row icons.
- **Forest** (`forest`): the app's deepest green, doing three jobs. It is the ink for every heading and strong label on light grounds; the pressed/hover state of the primary button; and the ground of the device stage, the economy band, the fare receipt and the closing band.
- **Forest Raised** (`forest-raised`): the pending Play plate when it sits on a forest band.
- **Stage Glow** (`stage-glow`): a radial highlight at the top centre of the device stage, so the phones read as lit from above.
- **Leaf Signal** (`leaf-signal`): row icons on the forest band, where Primary Green would disappear.

### Neutral
- **Cream Canvas** (`canvas`): the page, the top bar (88% mix with blur), the footer, the range thumb fill.
- **Sage** (`sage`): alternate bands, nav-link hover, card icon tiles, numbered-list markers, the pending Play plate.
- **White** (`white`): cards and secondary buttons on cream; text on Primary Green and headings on forest.
- **Body Green-Grey** (`body`): all running text on light grounds (6.5:1 on canvas), step numbers, footer links.
- **Muted** (`muted`): hover border on secondary buttons and chips only. Never text (2.9:1 on canvas).
- **Forest Mist** (`on-dark-soft`): running text and receipt labels on forest grounds (9.2:1).
- **Hairline** (`hairline`): band edges, top bar and footer rules.
- **Hairline Strong** (`hairline-strong`): card, chip, button and screen borders; editorial row and list rules; the unfilled range track; the scrollbar thumb.
- **Hairline Dark** (`hairline-dark`): rules inside forest grounds (receipt rows, economy rows).
- **Sky Wash / Leaf Wash** (`wash-sky`, `wash-leaf`): the two radial gradients behind the hero copy. Leaf Wash is also the text-selection colour and the range thumb's focus ring.
- **Bezel / Screen Paper** (`bezel`, `screen-paper`): the phone frame body and the light status/nav bars and screen backgrounds inside it, plus the flow screen tiles.

### Named Rules
**The App Palette Rule.** Every colour on the page comes from the GrowMate app's palette or is a tint of it. Sky Wash is the only non-green hue and it lives only behind the hero. No Expo black, no accent hues, no red.

**The Forest Ground Rule.** Forest is a ground in exactly four roles: the device stage, one mid-page inversion band, the fare receipt, and the closing band. Everything else sits on cream, sage or white.

## Typography

**Display Font:** Literata (Google Fonts, optical sizes 7–72, weights 500–700; falls back to Georgia, serif)
**Body Font:** Inter (400–700; falls back to -apple-system, system-ui, Segoe UI)

**Character:** Literata is the app's own reading serif and carries the page's voice in short, tightly tracked headlines; Inter does all the work of reading, labelling and counting.

### Hierarchy
- **Display** (Literata 600, `display`): the hero headline only, centered, max 26ch, each sentence held together on its own line where it fits.
- **Headline** (Literata 600, `headline`): one per section, centered in the section head or left-aligned in split sections. The closing call runs a larger step (`clamp(2rem, 4.6vw, 3.25rem)`, 1.08, max 18ch).
- **Serif Title** (Literata 600, 1.25rem; 1.375rem for the problem rows): story titles in the problem rows, the Learn/Grow/Share/Trade flow and the "who it helps" rows.
- **Title** (Inter 600, `title`): functional headings: step cards, digital-agriculture and economy rows, seller steps, the calculator heading.
- **Body** (Inter 400, `body`): descriptions at 15px inside cards and rows, 16px elsewhere.
- **Lede** (Inter 400, `lede`): the hero lede (max 60ch); section-head paragraphs run at 17px.
- **Label** (Inter 500, `label`): buttons at 15px, nav links and chips at 14px; field labels at 15px/600.
- **Figure** (Inter 600, `figure`): the fare total. Step and list numbers are Inter 500 at 13px in tabular figures.

### Named Rules
**The Serif Voice Rule.** Literata is for headlines and story titles only. Body copy, labels, controls, step numbers and every money figure are Inter.

**The Tabular Money Rule.** Every peso, kilometre and fee figure is set in tabular numerals so values do not jitter as the calculator updates.

## Layout

A single centered column capped at 1200px with `gutter` side padding. Sections are full-bleed bands (cream, sage, or forest) with `section` vertical padding, dropping to `section-compact` under 720px. Section heads are centered, max 680px, with `head-gap` below; split sections use a left-aligned head.

Grids: step cards four-up (two-up under 1024px, one under 640px) with a 16px gap; the flow four-up (two-up under 1024px and still two-up under 520px, with smaller titles); editorial rows two- or three-up with 40–48px column gaps (one column under 900/640px); split sections 1.45fr copy to 1fr phone (one column under 900px, phone after copy). The fare block is 1.2fr calculator to 1fr receipt, one column under 860px.

The hero stacks centered copy, actions and the device composite: a 300px main phone between two 250px side phones that overlap it by 28px and sit 24px higher, all on the forest stage, which starts 42% down the composite (35% under 720px). Under 720px only the main phone remains. The top bar is 64px and sticky; nav links hide under 860px and the CTA label shortens under 480px. Anchors clear the bar with an 80px scroll padding. Touch targets are at least 40px (chips, small CTA) and 44px elsewhere.

## Elevation & Depth

Flat by default. Bands are separated by colour and 1px hairlines; cards and rows sit flat with hairline borders. Shadows exist in only two places: the phones, which carry a deep diffuse drop so they stand on the stage, and step cards, which gain a faint ambient shadow on hover.

### Shadow Vocabulary
- **Phone on stage** (`box-shadow: 0 0 0 1px rgba(10, 46, 28, 0.25), 0 30px 50px -22px rgba(4, 26, 15, 0.55)`): every phone in the hero composite.
- **Phone in section** (`box-shadow: 0 0 0 1px #ccd9bf, 0 24px 48px -20px rgba(17, 33, 26, 0.35)`): phones in split sections.
- **Soft** (`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04)`): card hover and the range thumb.

### Named Rules
**The Hairline-First Rule.** Structure comes from 1px hairlines and band colour. Only phones cast real shadows; nothing else floats.

## Shapes

Gently rounded rectangles in a short, size-ordered ladder: 8px for buttons, chips, nav links, icon tiles, list markers and the logo; 12px for cards, the calculator, the receipt and flow screen tiles; 24px for the device stage. The phone frame scales as one object: all of its radii and insets are expressed in `cqi` of a 412-wide device (outer radius 10.7cqi, screen radius 8.25cqi). Circles appear only for the range thumb and the camera dot. Rules are straight 1px lines; there are no dashed or thick dividers.

## Components

### Buttons
Calm and rectangular, 8px radius, Inter 500.
- **Primary:** Primary Green with white text, 44px tall, 10px 18px; hover deepens to Forest (0.2s). Rendered only when the Play Store URL is set; the script swaps the pending plate and the top-bar CTA to this style.
- **Secondary:** white with Forest text and a Hairline Strong border; hover darkens the border to Muted. The small variant (40px, 14px text) is the top-bar CTA.
- **Play plate (pending):** while there is no store URL, the Google Play action is a non-interactive status plate in Sage with a Forest label, a Hairline Strong border, the inline Play mark at 22px and a two-line label ("Coming soon to / Google Play"). 52px tall in the hero, 60px in the closing band, where it switches to Forest Raised with a Hairline Dark border and white text.

### Chips
- **Style:** price radios as 40px rectangles, 8px radius, Hairline Strong border, Forest text in tabular figures.
- **State:** hover darkens the border to Muted; selected fills Primary Green with white text; keyboard focus draws a 2px Primary Green outline at 2px offset.

### Cards / Containers
- **Step cards:** white, 12px radius, Hairline Strong border, 24px padding; a 36px Sage icon tile with a Primary Green 20px stroke icon (1.75 stroke), a title, then body; the step number sits top-right in 13px tabular Body. Soft shadow on hover.
- **Editorial rows:** the default story container. No box: a Hairline Strong top rule, 22–28px vertical padding, a title (optionally led by a 20px Primary Green stroke icon) and body. On forest the rule is Hairline Dark, titles are white, icons Leaf Signal, text Forest Mist.
- **Numbered list:** seller steps as rows with a 32px Sage tile carrying the Primary Green number.

### Inputs / Fields
- **Range slider:** 44px hit area, 6px track filled Primary Green up to the value over Hairline Strong; a 22px Canvas thumb with a 2px Primary Green ring and the Soft shadow. Focus replaces the outline with a 4px Leaf Wash ring on the thumb. Labels carry the live value at the right in tabular figures.

### Navigation
- Sticky 64px top bar on Canvas at 88% with a saturating 12px backdrop blur and a Hairline bottom rule. Logo (8px radius) and "GrowMate" in Inter 600 at 17px on the left; links in Body Inter 500 14px with 8px radius, hovering to Forest text on Sage; the secondary CTA at the right.

### Device Stage (signature)
The hero's chrome: three real app screens (My Garden, Plant Library in front, Seller Center) in the Pixel frame, standing full and uncropped on a 24px-radius Forest panel that fills the lower part of the composite inside the gutters, lit by a Stage Glow radial at its top centre.

### Phone frame
Adapted from open-design's Pixel 8 Pro frame (412×900). A Bezel body with a 2.43cqi inset, Screen Paper status bar (9:41, signal, wifi, battery) and three-button nav bar, and a camera dot. Max 300px wide. Screens are captured from the current app build against the local stack, never production, and never show test listings or invented data. In the digital-agriculture section one phone autoplays Scan → My Garden → Discover: each screen slides in 22% from the right over 0.7s (`cubic-bezier(0.16, 1, 0.3, 1)`), dwells 3.2s, and advances only while the phone is on screen; under reduced motion it holds on Scan.

### Flow tiles
The Learn/Grow/Share/Trade row: each step shows its real screen in a 4:5 tile cropped from the top (12px radius, Hairline Strong border, Screen Paper ground), then a Literata title led by its 13px step number.

### Fare calculator and receipt (signature)
A hairline calculator panel (28px padding) beside a Forest receipt panel. The calculator works the production delivery fee: road km = straight-line km × 1.25, fee = max(₱50, round(₱40 + ₱6 × road km)). The receipt shows "You pay the rider" as the Figure total in white, then plant price and delivery fee rows divided by Hairline Dark rules, figures in white Inter 600 tabular. The receipt shows only what PRODUCT.md allows the public site to show.

## Do's and Don'ts

### Do:
- **Do** take every colour from the app palette in the frontmatter, and keep Sky Wash behind the hero only.
- **Do** use Forest as a ground only for the device stage, one inversion band, the fare receipt and the closing band.
- **Do** set h1, h2 and story titles in Literata 600 with -0.01 to -0.02em tracking, and everything functional in Inter.
- **Do** separate content with 1px hairlines and band colour; keep cards to sequences of steps.
- **Do** show real, current app screens in the Pixel frame, full and uncropped in the hero.
- **Do** compute any shown fee from the real formula and set every figure in tabular numerals.
- **Do** keep touch targets at 40px or more and the focus outline 2px Primary Green at 2px offset.

### Don't:
- **Don't** introduce colours outside the app palette (no black grounds, no accent hues).
- **Don't** set body copy, labels, controls or money figures in Literata.
- **Don't** add shadows to cards at rest, rows, chips or text; only phones cast real shadows.
- **Don't** use Muted as a text colour; it fails contrast on Canvas.
- **Don't** place a Primary Green control on a Forest ground without a light edge; the pair is only 1.8:1.
- **Don't** put a mocked, outdated or test-data screen inside the phone frame; recapture from the current build.
- **Don't** add eyebrows or kicker labels above headings, or hard offset shadows; headlines stand alone.
