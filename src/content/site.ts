/**
 * ─────────────────────────────────────────────────────────────
 *  EVERY piece of text and every link on the site lives here.
 *  Edit this file to change the site. Nothing else needs touching.
 *  Anything marked  TODO  is a placeholder awaiting real content
 *  and renders on the page with a hatched highlight.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Intervolve Wellness',
  practitioner: 'Eileen Silot',
  /** Post-nominals shown under the wordmark. Leave '' to hide. */
  credentials: 'RN',
  tagline: 'Trauma-informed hypnotherapy for whole-body healing',
  description:
    'Eileen Silot, RN and hypnotherapist. Trauma-informed care, yoga guidance and hypnotherapy, blended for deep holistic healing and whole-body transformation.',
  url: 'https://intervolve-wellness.com',
  /** Served from the domain root, so no path prefix. */
  base: '',
  /** TODO — confirm: are sessions online only, or also in person? */
  location: 'TODO — e.g. Sessions held online',
} as const;

export const contact = {
  /**
   * Custom address on her own domain. This mailbox has to actually exist before
   * launch — every "email me" CTA on the page points at it.
   */
  email: 'eileen@intervolve-wellness.com',
  instagram: 'https://www.instagram.com/intervolvewellness',
  instagramHandle: '@intervolvewellness',
  phone: '',
  legacyBio: 'https://bio.site/intervolvewellness',
} as const;

/**
 * Booking. She uses Calendry — the embed points at her scheduling page, which
 * lists both event types; the individual offerings below link straight to
 * their own event so a visitor lands on the right one.
 */
export const booking = {
  provider: 'calendly' as 'cal' | 'calendly' | 'acuity' | 'none',
  url: 'https://calendly.com/intervolvewellness',
  calLink: '',
  heading: 'Book a session',
  body: 'Start with a free clarity call if you are not sure, or go straight to a full session. Both open in the calendar below.',
} as const;

export const hero = {
  eyebrow: 'Trauma-informed hypnotherapy',
  /** The word in {braces} is set in italic display type. */
  heading: 'Every part of you is met with {care}.',
  body: 'I am Eileen — a registered nurse and hypnotherapist. In a space rooted in safety and intention, healing unfolds at your own pace, and true evolution emerges.',
  primaryCta: { label: 'Book a session', href: '#book' },
  secondaryCta: { label: 'How it works', href: '#work' },
} as const;

export const resonance = {
  heading: 'You have done the work. Something still has not moved.',
  intro:
    'TODO — a short lead-in in her voice, acknowledging where someone is when they find this page.',
  items: [
    'You have done the talk therapy, the breathwork, the journalling — and something still has not shifted.',
    'You understand your patterns intellectually, but they keep running anyway.',
    'A feeling lives in your body that talking has never quite reached.',
    'You are ready to meet what is underneath, gently and with support.',
  ],
  close: 'TODO — one sentence turning towards hope.',
} as const;

export const work = {
  eyebrow: 'The work',
  heading: 'Where clinical care meets deeper work.',
  body: 'The practice blends clinical experience with integrative therapies to offer deep holistic healing.',
  /**
   * Her three modalities, in her own words. The descriptions are deliberately
   * hedged — "intended to assist with", "aimed at" — because she is a licensed
   * nurse and these sit next to health claims. Do not sharpen them into
   * promises of outcome.
   */
  pillars: [
    {
      title: 'Trauma-informed care',
      body: 'Grounded in nursing principles to provide safe, regulated healing spaces.',
    },
    {
      title: 'Yoga guidance',
      body: 'Somatic movement intended to assist with nervous system regulation and stress reduction.',
    },
    {
      title: 'Hypnotherapy',
      body: 'Subconscious mind reconditioning aimed at whole-body transformation and emotional release.',
    },
  ],
  /** TODO — one short paragraph on how the three combine inside a session. */
  close: 'TODO — how these three meet in practice, in her voice.',
} as const;

/**
 * The mentor's site carries a long, scannable list of presenting issues. It is
 * one of the strongest things on that page: people scan for their own thing and
 * feel seen. This list must be Eileen's own — only what she actually works with.
 */
export const helpsWith = {
  eyebrow: 'What it can help with',
  heading: 'What people bring to a session.',
  intro: 'TODO — one sentence introducing the list, and an invitation to ask about anything not on it.',
  items: [
    'TODO — her most-worked-with topic',
    'TODO — second most common',
    'TODO — anxiety, panic, sleep?',
    'TODO — grief and loss?',
    'TODO — chronic illness, pain, autoimmune?',
    'TODO — birth, fertility, pregnancy loss?',
    'TODO — self-criticism, guilt, shame?',
    'TODO — big life transitions',
    'TODO — feeling safe in your body again',
    'TODO — add or remove freely; keep only what she genuinely works with',
  ],
} as const;

/**
 * Session offerings.
 *   featured : draws the accent border and the filled button
 *   flag     : optional small badge above the name. Left empty on purpose —
 *              a claim like "Most booked" is not true of a practice that has
 *              only just opened. Fill it in once it is.
 */
export const offerings = {
  eyebrow: 'Ways to work together',
  heading: 'Start where you are.',
  items: [
    {
      name: 'Clarity call',
      duration: '15 minutes',
      price: 'Free',
      body: 'A focused, supportive space to get clear on where you are, what you’re navigating and what you’d like support with. We’ll explore your goals, any questions you may have and feel into whether working together is the right next step.',
      includes: [
        'Space to name what you’re navigating',
        'Your goals, and any questions you have',
        'A sense of whether we’re the right fit',
      ],
      flag: '',
      cta: 'Book a clarity call',
      href: 'https://calendly.com/intervolvewellness/discovery-call',
      featured: false,
    },
    {
      name: 'Hypno session',
      duration: '90 minutes',
      price: '$200',
      body: 'A deeply immersive session designed to create powerful, subconscious shifts. We’ll begin by clarifying your intention, then gently guide you into a relaxed, focused state where we can rewire limiting beliefs, release emotional blocks, and anchor in new patterns that support who you’re becoming.',
      includes: [
        'Clarifying your intention together',
        'A guided, deeply relaxed and focused state',
        'Releasing emotional blocks at the root',
        'TODO — is a recording included?',
      ],
      flag: '',
      cta: 'Book a session',
      href: 'https://calendly.com/intervolvewellness/new-meeting',
      featured: true,
    },
    {
      name: 'Deep work series',
      duration: 'Four × 90 minutes',
      /** $700 for four: $175 a session, $100 less than booking them singly. */
      price: '$700',
      body: 'TODO — her description of the series. What sustained work makes possible that a single session cannot, and who it suits.',
      includes: [
        'Four 90-minute sessions',
        'TODO — how the four are paced (weekly? fortnightly?)',
        'TODO — is there an arc across the series, or four separate intentions?',
        'TODO — anything between sessions',
      ],
      flag: '',
      cta: 'Enquire about the series',
      /**
       * Deliberately email, not Calendly: her Calendly sells single events and
       * cannot take payment for a package spread over four bookings. Point this
       * at a scheduling link only once there is a way to actually buy it.
       */
      href: 'mailto:eileen@intervolve-wellness.com?subject=Deep%20work%20series',
      featured: false,
    },
  ],
} as const;

export const journey = {
  eyebrow: 'What to expect',
  heading: 'A session, step by step.',
  steps: [
    { title: 'We talk first', body: 'TODO — what the opening conversation covers, and how an intention is set.' },
    { title: 'You settle', body: 'TODO — the induction, and what the state actually feels like.' },
    { title: 'We go to the root', body: 'TODO — the heart of the session. Note that you stay talking with her throughout.' },
    { title: 'Something is offered back', body: 'TODO — the repair, resource or release.' },
    { title: 'You return, slowly', body: 'TODO — coming back, and how integration is supported afterwards.' },
  ],
} as const;

export const about = {
  eyebrow: 'About',
  heading: 'Eileen Silot',
  paragraphs: [
    'TODO — how she came to this work. Personal, specific, first person. This is the paragraph people book on.',
    'TODO — her nursing background, and what carrying a clinical training into this room changes.',
    'TODO — her hypnotherapy training and lineage, including her teacher.',
    'At Intervolve, every part of you is met with care. In a space rooted in safety and intention, healing unfolds at your own pace, allowing true evolution to emerge.',
  ],
  /** Drop a photo at public/images/portrait.jpg and the placeholder disappears. */
  portrait: '/images/portrait.jpg',
  portraitAlt: 'TODO — describe the portrait for screen readers',
  credentials: [
    'Registered Nurse',
    'Trauma-informed practice',
    'TODO — hypnotherapy certification',
    'TODO — insurance or membership',
  ],
} as const;

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
    { q: 'Will I be unconscious or out of control?', a: 'TODO — no. Explain what the state is really like, and that you stay in conversation throughout.' },
    { q: 'What if I cannot be hypnotised?', a: 'TODO — reassure. Most people can; explain how it is guided.' },
    { q: 'Do I have to relive something painful?', a: 'TODO — explain pacing and consent within a session. This one matters most for trauma-informed work.' },
    { q: 'How many sessions will I need?', a: 'TODO — honest answer, with ranges.' },
    { q: 'Is this therapy? Is it medical care?', a: 'TODO — scope of practice, what her RN training does and does not mean here, and when she refers out.' },
    { q: 'How do online sessions work?', a: 'TODO — the platform, and what someone needs: a private space, wired headphones with a mic, a good connection.' },
  ],
} as const;

export const legal = {
  disclaimer:
    'TODO — a plain scope-of-practice note. Hypnotherapy is a complementary practice and is not a substitute for medical or psychological treatment. Sessions are not nursing care and do not create a nurse–patient relationship.',
  lineage: 'TODO — e.g. "Trained in the Restorative Hypnosis tradition." Confirm with her before publishing.',
} as const;

export const nav = [
  { label: 'The work', href: '#work' },
  { label: 'What it helps', href: '#helps' },
  { label: 'Sessions', href: '#offerings' },
  { label: 'About', href: '#about' },
  { label: 'Questions', href: '#faq' },
] as const;
