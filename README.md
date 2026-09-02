# Intervolve Wellness

A one-page site for Eileen Silot's hypnotherapy practice, built with
[Astro](https://astro.build) and deployed to GitHub Pages.

**Live:** https://intervolve-wellness.com

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

Save the portrait as **`public/images/portrait.jpg`** — the exact path matters.
The dashed placeholder in the About section disappears on its own once the file
exists; nothing else needs changing, and `about.portraitAlt` is already written.

The easiest route without a local clone is GitHub's web uploader: open
[`public/images/`](https://github.com/GitSteveLozano/intervolvewellness/upload/main/public/images),
drag the file in, name it `portrait.jpg`, and commit to `main`. The deploy runs
by itself.

Before uploading, resize it. Phone and camera exports are often 3–8 MB, which
is the single easiest way to make a fast site feel slow on mobile. Aim for
**about 1200 px wide and under 300 kB** — any image tool will do it, and the
frame only ever renders about 600 px wide.

The frame is 4:5 and crops from the sides, so centre her in the original. If a
crop sits badly, add `object-position` to `.about__figure img` in
`src/components/About.astro`.

## Connecting the booking calendar

In `src/content/site.ts`, find the `booking` block and set:

It is already wired to her Calendly:

```ts
export const booking = {
  provider: 'calendly',
  url: 'https://calendly.com/intervolvewellness',
  ...
};
```

The embed shows her scheduling page, which lists both event types. Each card in
the Sessions section also links straight to its own event, so someone who has
already decided lands on the right one. Those per-card links live in
`offerings.items[].href`.

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
npm run dev      # http://localhost:4321/
npm run build    # writes dist/
npm run preview  # serve the built site
```

Node 22 or newer.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Nothing to do by hand.

**One-time setup, and it cannot be automated:** go to
[*Settings → Pages*](https://github.com/GitSteveLozano/intervolvewellness/settings/pages)
and set **Source** to **GitHub Actions**.

Creating a Pages site needs repository-admin rights, which the workflow's
`GITHUB_TOKEN` does not have — `actions/configure-pages` fails with
*"Resource not accessible by integration"* until a human flips that switch.
Every run after that is automatic.

## The domain

The site is served from `intervolve-wellness.com`. Three pieces make that work,
and all three are already in place:

| Piece | Where | Value |
|---|---|---|
| `CNAME` file | `public/CNAME` | `intervolve-wellness.com` |
| Apex DNS | registrar | four `A` records to `185.199.108–111.153` |
| `www` DNS | registrar | `CNAME` to `gitstevelozano.github.io` |

GitHub redirects `www` and the old `gitstevelozano.github.io/intervolvewellness/`
address to the apex automatically, so old links keep working.

If HTTPS ever shows a certificate warning, open *Settings → Pages*, confirm the
custom domain is entered there, and tick **Enforce HTTPS**. GitHub reissues the
certificate whenever the domain changes, which can take up to an hour.

Note the hyphen. `intervolvewellness.com` (no hyphen) is a **different domain**
and is not hers — her Instagram handle and Calendly slug have no hyphen, the
domain and the email address do. Getting this wrong silently breaks every
`mailto:` on the page.

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
