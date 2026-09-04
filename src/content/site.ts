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
  /** Optional line under the hero. Hidden while empty. e.g. 'Sessions held online'. */
  location: '',
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

  /**
   * The events that belong on the public site, and nothing else.
   *
   * Embedding her Calendly *profile* page instead would list every event type
   * on the account — including private ones like personal or trade sessions.
   * Naming the events explicitly means a new private event can never appear
   * here by accident. Anything added to this array is public.
   *
   * This does not hide those events on calendly.com itself. Mark them "Secret"
   * in Calendly so they stay off her public booking page everywhere.
   */
  events: [
    {
      label: 'Hypno session',
      meta: '90 minutes · $200',
      url: 'https://calendly.com/intervolvewellness/new-meeting',
    },
    {
      label: 'Clarity call',
      meta: '15 minutes · Free',
      url: 'https://calendly.com/intervolvewellness/discovery-call',
    },
  ],

  /** Used by the cal.com and acuity providers, which embed a single URL. */
  url: '',
  calLink: '',

  heading: 'Book a session',
  body: 'Choose a full session, or start with a free clarity call if you are not sure yet.',
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
    'Most people arrive here having already tried a great deal. That effort was not wasted — it is often what makes this next part possible.',
  items: [
    'You have done the talk therapy, the breathwork, the journalling — and something still has not shifted.',
    'You understand your patterns intellectually, but they keep running anyway.',
    'A feeling lives in your body that talking has never quite reached.',
    'You are ready to meet what is underneath, gently and with support.',
  ],
  close: 'You are not here to be fixed. You are here to meet what has been waiting.',
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
  close: 'These are not three separate offerings. What a session needs — steadiness, movement, or depth — is what it receives.',
} as const;

/**
 * The mentor's site carries a long, scannable list of presenting issues. It is
 * one of the strongest things on that page: people scan for their own thing and
 * feel seen. This list must be Eileen's own — only what she actually works with.
 */
export const helpsWith = {
  eyebrow: 'What it can help with',
  heading: 'What people bring to a session.',
  intro: 'People rarely arrive with only one thing. If what brought you here is not listed, it is still worth asking about.',
  /**
   * Her actual presenting issues, and only hers — this is the section people
   * scan for their own thing, so a borrowed list would be worse than none.
   * The whole section hides itself while this is empty.
   */
  items: [] as string[],
} as const;

/**
 * Session offerings.
 *   featured : draws the accent border and the filled button
 *   flag     : optional small badge above the name. Left empty on purpose —
 *              a claim like "Most booked" is not true of a practice that has
 *              only just opened. Fill it in once it is.
 *
 * Only what Calendly can actually sell lives here. A multi-session package was
 * drafted and removed for that reason: Calendly bills single events and cannot
 * take one payment across four bookings, so the card would have been a price
 * with no way to pay it. `git log` has the full card if it comes back — it
 * needs a Stripe payment link, or a Calendly event collecting the whole sum up
 * front, before it belongs on the page.
 *
 * The layout follows the count: two cards centre in a narrower grid, three or
 * more spread across the full width.
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
      ],
      flag: '',
      cta: 'Book a session',
      href: 'https://calendly.com/intervolvewellness/new-meeting',
      featured: true,
    },
  ],
} as const;

export const journey = {
  eyebrow: 'What to expect',
  heading: 'A session, step by step.',
  steps: [
    {
      title: 'We talk first',
      body: 'We begin with what brought you here, and shape it into a clear intention for the session.',
    },
    {
      title: 'You settle',
      body: 'I guide you into a relaxed, focused state. You stay awake and aware the whole time — most people describe it as deeply settled rather than asleep.',
    },
    {
      title: 'We go to the root',
      body: 'From there we follow what surfaces, working with limiting beliefs and the emotional blocks holding them in place. We stay in conversation throughout, so you are never somewhere I cannot reach you.',
    },
    {
      title: 'Something is offered back',
      body: 'Where something is released, something is anchored in its place — new patterns that support who you are becoming.',
    },
    {
      title: 'You return, slowly',
      body: 'We come back gently, and leave time to talk through what came up before you go.',
    },
  ],
} as const;

export const about = {
  eyebrow: 'About',
  heading: 'Eileen Silot',
  paragraphs: [
    'I came to this work through my own health. At nineteen I survived a near-death experience that split my life into before and after, and for years I numbed what it opened in me with alcohol — not because I didn’t want to face it, but because I didn’t yet have the resources to. My health suffered for it. So did my relationships: I was so reactive and dysregulated that I kept hurting myself and the people closest to me without understanding why.',
    'Eventually I got tired of feeling sick and cycling through specialists with no real answers. What I didn’t understand yet was that my body was storing all of it, waiting for someone to address the root instead of the symptom. That exhaustion is what made me start saying yes to healing — and it led me, eventually, to hypnotherapy, where I found a way to rewire the patterns willpower alone could not touch, and build new ones that actually held.',
    'My training gave me a way to work at that level, meeting the nervous system where it actually lives instead of managing symptoms one body part at a time. Carrying an RN background into this room changes what happens in it. I know what dysregulation looks like physiologically, not just anecdotally. I know when something needs a referral rather than a session. And I know how to hold someone through real, sometimes destabilizing change without either of us losing the thread of safety.',
    'At Intervolve, every part of you is met with care. In a space rooted in safety and intention, healing unfolds at your own pace, allowing true evolution to emerge.',
  ],
  /**
   * Drop a photo at public/images/portrait.jpg and the dashed placeholder is
   * replaced automatically — the file's presence is checked at build time.
   * The frame is 4:5 and crops from the sides, so centre her in the original.
   */
  portrait: '/images/portrait.jpg',
  portraitAlt:
    'Eileen Silot seated on a sofa in a white lace blouse and jeans, one arm resting along the cushions, smiling gently at the camera.',
  credentials: ['Registered Nurse', 'Trauma-informed practice'],
} as const;

export const testimonials = {
  eyebrow: 'In their words',
  heading: 'What people carry away.',
  /**
   * The whole section hides itself while this is empty, which is the right
   * default: three placeholder quotes read worse than no testimonials at all,
   * and invented ones are not an option. Add real quotes, with permission and
   * a first name, and the section reappears.
   */
  items: [] as { quote: string; attribution: string }[],
} as const;

export const faq = {
  eyebrow: 'Questions',
  heading: 'Before you book.',
  items: [
    {
      q: 'Will I be unconscious or out of control?',
      a: 'No. Hypnosis is a state of focused attention, not sleep, and you keep every bit of your own judgement. You will be awake, aware, able to speak, and able to stop at any point. We talk to each other the whole way through — that is what makes the work yours rather than something done to you.',
    },
    {
      q: 'What if I cannot be hypnotized?',
      a: 'It is a state most people move into readily, and it is closer to ordinary experience than it sounds — losing an hour in a book, or arriving somewhere without remembering the drive. You are not required to produce anything. I guide, and we work with whatever comes.',
    },
    {
      q: 'Do I have to relive something painful?',
      a: 'No. Trauma-informed practice means we go at the pace your system allows, not the pace the story wants. You choose what we approach and how close we get, you can say stop at any moment, and we can work with something without moving back into the middle of it.',
    },
    {
      q: 'Is this therapy? Is it medical care?',
      a: 'Neither. Hypnotherapy is a complementary practice; it is not psychotherapy, and a session is not nursing or medical care. My clinical background shapes how safely a session is held, but I am not acting as your nurse and nothing here replaces treatment from your doctor or therapist. Where something belongs with one of them, I will say so.',
      // TODO — confirm this wording matches what her insurer and certifying body require.
    },
  ],
} as const;

export const legal = {
  /**
   * Scope-of-practice note in the footer. Hidden while empty.
   *
   * Removed for now by request. Worth revisiting: she is a licensed RN
   * offering a complementary therapy, and several certifying bodies and
   * professional-liability insurers require a note on the website saying a
   * session is not nursing or medical care. If hers does, they usually
   * specify the wording — put theirs here rather than a paraphrase.
   */
  disclaimer: '',

  /** Optional credit line in About. Hidden while empty. */
  lineage: '',
} as const;

/**
 * Follows the order of the page itself, so the scroll-spy reads correctly.
 * Sections that hide themselves when empty are dropped from the nav too, so a
 * link can never point at nothing.
 */
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'The work', href: '#work' },
  { label: 'What it helps', href: '#helps' },
  { label: 'Sessions', href: '#offerings' },
  { label: 'Questions', href: '#faq' },
].filter((item) => item.href !== '#helps' || helpsWith.items.length > 0);
