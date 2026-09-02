# Intervolve Wellness

A one-page site for the Intervolve Wellness practice, built with
[Astro](https://astro.build) and deployed to GitHub Pages.

**Live:** https://gitstevelozano.github.io/intervolvewellness/

---

## Editing the site

**Almost every change you want to make is in one file: [`src/content/site.ts`](src/content/site.ts).**

Every headline, paragraph, price, FAQ answer, link and email address on the
site lives in that file. Change the text there, save, and the site updates.
You do not need to touch HTML or CSS.

Anything still reading `TODO` is a placeholder. Those show up on the page with
a hatched highlight so nothing unfinished ships by accident — the highlight
disappears the moment you replace the text.

### The things that most need real words

| Where | Why it matters |
|---|---|
| `hero.body` | The first paragraph anyone reads. Her voice, not marketing copy. |
| `about.paragraphs` | How she came to the work. People book a person, not a modality. |
| `offerings.items[].price` | Placeholder prices are worse than no prices. |
| `site.description` | This is what shows up in Google results and link previews. |
| `faq.items[].a` | Answers only get FAQ rich-results in Google once the `TODO`s are gone. |

## Adding her photo

Save a portrait as `public/images/portrait.jpg` — roughly 900×1125 (4:5), under
400 kB. The dashed placeholder in the About section disappears on its own once
the file exists. Then write a real `about.portraitAlt` description for screen
readers.

## Connecting the booking calendar

In `src/content/site.ts`, find the `booking` block and set:

```ts
export const booking = {
  provider: 'cal',                      // 'cal' | 'calendly' | 'acuity' | 'none'
  url: 'https://cal.com/her-name',
  calLink: 'her-name/90min',            // Cal.com only: the "user/event" slug
  ...
};
```

While `provider` is `'none'`, the booking section shows an email button instead
and loads no third-party scripts at all.

- **Cal.com** — set `provider: 'cal'` and `calLink` to the `user/event-slug`.
- **Calendly** — set `provider: 'calendly'` and `url` to the full event URL.
- **Acuity** — set `provider: 'acuity'` and `url` to the `schedule.php?owner=…` URL.

## The social share image

`public/og.png` is what appears when the link is pasted into Instagram DMs,
WhatsApp, iMessage or Slack. Regenerate it after changing the practice name or
tagline:

```sh
npm run og
```

---

## Running it locally

```sh
npm install
npm run dev      # http://localhost:4321/intervolvewellness/
npm run build    # writes dist/
npm run preview  # serve the built site
```

Node 22 or newer.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Nothing to do by hand.

**One-time setup:** in the repository's *Settings → Pages*, set **Source** to
**GitHub Actions**.

## Moving to a custom domain

When she buys a domain (say `intervolvewellness.com`):

1. Create `public/CNAME` containing just `intervolvewellness.com`.
2. In `src/content/site.ts` set `url: 'https://intervolvewellness.com'` and
   `base: ''`.
3. At the domain registrar, point the apex `A` records at GitHub's four
   Pages IPs and add a `CNAME` for `www` → `gitstevelozano.github.io`.
4. In *Settings → Pages*, enter the domain and tick **Enforce HTTPS**.

## How it is put together

```
src/
  content/site.ts     ← all copy and links (edit this)
  pages/index.astro   ← the page, assembled from sections
  components/         ← one file per section of the page
  layouts/Base.astro  ← <head>, fonts, header, footer, scroll reveals
  styles/global.css   ← colour, type scale, spacing tokens
  lib/text.ts         ← the TODO highlighter and {emphasis} parser
public/               ← images, favicon, og.png — copied as-is
scripts/make-og.mjs   ← regenerates the social card
```

Design notes worth knowing before changing the CSS:

- Colour, type and spacing are all CSS custom properties at the top of
  `global.css`. Change the palette there and the whole site follows.
- Dark mode is automatic, driven by the visitor's OS setting.
- `prefers-reduced-motion` is respected — the scroll reveals, the hero's
  breathing gradient and the smooth scrolling all switch off for anyone who
  has asked for less movement.
- Fonts come from Google Fonts (Fraunces + Karla). If that ever becomes a
  privacy concern, self-host them and drop the `<link>` in `Base.astro`.
