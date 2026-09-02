/**
 * ─────────────────────────────────────────────────────────────
 *  EVERY piece of text and every link on the site lives here.
 *  Edit this file to change the site. Nothing else needs touching.
 *  Anything marked  TODO  is a placeholder awaiting real content.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Practice name, shown in the nav and the browser tab. */
  name: 'Intervolve Wellness',
  /** Practitioner's name. */
  practitioner: 'TODO — her full name',
  /** Post-nominals / credentials, e.g. "CHt, Reiki Master". Leave '' to hide. */
  credentials: 'TODO — credentials',
  /** Used for <title>, meta description and social share cards. */
  tagline: 'Restorative hypnotherapy for lasting inner change',
  description:
    'TODO — one or two sentences describing the practice, for search engines and link previews. Roughly 150 characters.',
  /** Where the site will live. Update when a custom domain is added. */
  url: 'https://gitstevelozano.github.io',
  base: '/intervolvewellness',
  /** Sessions are online, in person, or both — shown under the hero. */
  location: 'TODO — e.g. Online worldwide · In person in [city]',
} as const;

export const contact = {
  email: 'TODO@example.com',
  /** Leave any of these as '' and the icon disappears from the footer. */
  instagram: 'https://instagram.com/intervolvewellness',
  instagramHandle: '@intervolvewellness',
  phone: '',
  /** The old link-in-bio page — keep or clear once the new site replaces it. */
  legacyBio: 'https://bio.site/intervolvewellness',
} as const;

/**
 * Booking widget.
 *   provider : 'cal' | 'calendly' | 'acuity' | 'none'
 *   url      : the full public scheduling URL
 * While provider is 'none' the booking section shows a fallback card
 * with an email CTA instead of an embed — nothing third-party loads.
 */
export const booking = {
  provider: 'none' as 'cal' | 'calendly' | 'acuity' | 'none',
  url: 'TODO — full scheduler URL',
  /** For Cal.com only: the "namespace/event" slug, e.g. "her-name/discovery". */
  calLink: '',
  heading: 'Book your session',
  body: 'Pick a time that suits you. If nothing fits, send an email and we will find one.',
} as const;

/** Big statement at the top of the page. */
export const hero = {
  eyebrow: 'Restorative Hypnotherapy',
  /** Rendered as one line; the word wrapped in {} is emphasised in the accent colour. */
  heading: 'Come home to the {quiet} underneath everything.',
  body: 'TODO — two or three sentences in her voice. What she does, who it is for, and the feeling someone leaves with. This is the most important paragraph on the site.',
  primaryCta: { label: 'Book a session', href: '#book' },
  secondaryCta: { label: 'How it works', href: '#work' },
} as const;

/** The resonance block — names what the visitor is carrying. */
export const resonance = {
  heading: 'You have done the work. Something still has not moved.',
  intro:
    'TODO — a short lead-in acknowledging where someone is when they find this page.',
  items: [
    'You understand your patterns intellectually, but they keep running anyway.',
    'A feeling lives in your body that talking has never quite reached.',
    'Something from long ago still sets the terms of how you love, rest, or ask.',
    'You are ready to meet what is underneath, gently and with support.',
  ],
  close: 'TODO — one sentence turning towards hope.',
} as const;

/** What the modality actually is. */
export const work = {
  eyebrow: 'The work',
  heading: 'Hypnosis is not sleep. It is attention, turned inward.',
  body: 'TODO — explain restorative hypnotherapy plainly and without mysticism. What the state feels like, that the client stays aware and in control, and why the subconscious is where lasting change happens.',
  pillars: [
    {
      title: 'Parts work',
      body: 'TODO — meeting the protective parts that formed for good reason, and giving them something better to do.',
    },
    {
      title: 'Inner child',
      body: 'TODO — returning to the moment a belief was set, and offering it what it needed then.',
    },
    {
      title: 'Regression',
      body: 'TODO — tracing a feeling back to its root rather than managing it at the surface.',
    },
    {
      title: 'Somatic release',
      body: 'TODO — letting the body finish what it has been holding.',
    },
  ],
} as const;

/** Session offerings. Add or remove cards freely. */
export const offerings = {
  eyebrow: 'Ways to work together',
  heading: 'Choose the depth that fits where you are.',
  items: [
    {
      name: 'Discovery call',
      duration: '20 minutes',
      price: 'Free',
      body: 'TODO — a no-pressure conversation to see whether this is right for you.',
      includes: ['A short conversation about what brought you here', 'Space for every question', 'No obligation to book'],
      cta: 'Book a call',
      featured: false,
    },
    {
      name: 'Single session',
      duration: '90 minutes',
      price: 'TODO — $000',
      body: 'TODO — a complete standalone journey for one clear intention.',
      includes: ['Intention setting and intake', 'A full guided hypnosis journey', 'Integration notes afterwards', 'A recording to keep'],
      cta: 'Book a session',
      featured: true,
    },
    {
      name: 'Deep work series',
      duration: 'Six sessions',
      price: 'TODO — $000',
      body: 'TODO — sustained work for patterns that have been in place a long time.',
      includes: ['Six 90-minute sessions', 'A tailored arc across the series', 'Practices between sessions', 'Support by message throughout'],
      cta: 'Enquire',
      featured: false,
    },
  ],
} as const;

/** What actually happens, start to finish. */
export const journey = {
  eyebrow: 'What to expect',
  heading: 'A session, step by step.',
  steps: [
    { title: 'We talk first', body: 'TODO — what the opening conversation covers.' },
    { title: 'You settle', body: 'TODO — the induction, and what the state feels like.' },
    { title: 'We go to the root', body: 'TODO — the heart of the session.' },
    { title: 'Something is offered back', body: 'TODO — the repair or resource given.' },
    { title: 'You return, slowly', body: 'TODO — coming back and integrating.' },
  ],
} as const;

/** Her story. */
export const about = {
  eyebrow: 'About',
  heading: 'TODO — her name',
  /** Each string becomes its own paragraph. */
  paragraphs: [
    'TODO — how she came to this work. Personal, specific, first person.',
    'TODO — her training and lineage, including her teacher and the tradition she works in.',
    'TODO — how she holds a room, and what a client can count on from her.',
  ],
  /** Drop a photo at public/images/portrait.jpg and this appears. */
  portrait: '/images/portrait.jpg',
  portraitAlt: 'TODO — describe the portrait for screen readers',
  credentials: [
    'TODO — certification',
    'TODO — training',
    'TODO — membership or insurance',
  ],
} as const;

/** Client words. Delete the array to hide the section entirely. */
export const testimonials = {
  eyebrow: 'In their words',
  heading: 'What people carry away.',
  items: [
    { quote: 'TODO — a real client testimonial, used with permission.', attribution: 'TODO — first name, initial' },
    { quote: 'TODO — a second testimonial.', attribution: 'TODO — first name, initial' },
    { quote: 'TODO — a third testimonial.', attribution: 'TODO — first name, initial' },
  ],
} as const;

export const faq = {
  eyebrow: 'Questions',
  heading: 'Before you book.',
  items: [
    { q: 'Will I be unconscious or out of control?', a: 'TODO — no. Explain what the state is really like.' },
    { q: 'What if I cannot be hypnotised?', a: 'TODO — reassure. Most people can; explain how it is guided.' },
    { q: 'Do I have to relive something painful?', a: 'TODO — explain the pacing and consent within a session.' },
    { q: 'How many sessions will I need?', a: 'TODO — honest answer, with ranges.' },
    { q: 'Is this therapy?', a: 'TODO — the scope of practice, and when she refers out.' },
    { q: 'Do you work online?', a: 'TODO — how remote sessions run and what is needed.' },
  ],
} as const;

/** Small print in the footer. */
export const legal = {
  disclaimer:
    'TODO — a plain scope-of-practice note. Hypnotherapy is complementary and is not a substitute for medical or psychological treatment.',
  /** Set to '' to hide the credit line. */
  lineage: 'TODO — e.g. "Trained in the Restorative Hypnosis tradition."',
} as const;

/** Anchor nav. Remove an entry to drop it from the menu. */
export const nav = [
  { label: 'The work', href: '#work' },
  { label: 'Sessions', href: '#offerings' },
  { label: 'What to expect', href: '#journey' },
  { label: 'About', href: '#about' },
  { label: 'Questions', href: '#faq' },
] as const;
