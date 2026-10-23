
/**
 * Academy page content for The Barista Method.
 *
 * Facts (prices, dates, module names, seat counts) come from the client's live
 * Academy site as it stood on 13 October 2026. The wording is original.
 * Re-check every number against the client's site before launch.
 *
 * `openQuestions` at the bottom is for you and the client only. Never render it.
 */

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  // Read the public WhatsApp contact number from the project-root .env.local.
  // Store digits only, including the country code (e.g. 91...).
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917439651029").replace(/\D/g, ""),
  whatsappDisplay: "+91 74396 51029",
  instagramHandle: "@the_barista_method",
  instagramUrl: "https://www.instagram.com/the_barista_method/",
  locality: "Nazirabad, Kolkata, West Bengal",
  // The exact pin is shared on WhatsApp after the enquiry. Do not publish it.
} as const;

/* -------------------------------------------------------------------------- */
/* Batch and money                                                            */
/* -------------------------------------------------------------------------- */

export const batch = {
  startDate: "2026-11-08",
  startLabel: "8 November 2026",
  seats: 10,
  /** Set only when the number is real (for example 3). null hides any "seats left" UI. */
  seatsTaken: null as number | null,
  fee: 20000,
  extraSession: 2000,
  advancedFee: 30000,
  currency: "INR",
  lastUpdated: "13 October 2026",
} as const;

export function formatINR(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Whole days until the batch starts (never negative). */
export function daysUntilBatch(now: Date = new Date()) {
  const start = new Date(`${batch.startDate}T00:00:00+05:30`);
  const ms = start.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / 86_400_000));
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: "The Zariya Academy · Nazirabad, Kolkata",
  title: "The Barista Method.",
  promise: "Coffee, taught like a design problem: one variable at a time.",
  summary:
    "A hands-on barista course in Kolkata. Two weeks of classes, then ten one-hour sessions one-on-one with a mentor. Ten students a batch, finished with a test and the ZEBC certificate.",
  primaryCta: "Enquire on WhatsApp",
  secondaryCta: "See the course",
  // One facts line only. Do not repeat it in a second stats row.
  factsLine: `Next batch ${batch.startLabel} · ${batch.seats} seats · ${formatINR(batch.fee)}`,
} as const;

/* -------------------------------------------------------------------------- */
/* The facts                                                                  */
/* -------------------------------------------------------------------------- */

export const facts = [
  { label: "Course", value: "The Barista Method", note: "A barista course by The Zariya Academy." },
  { label: "Provider", value: "The Zariya Academy", note: "Part of The Zariya Collective." },
  { label: "Location", value: "Nazirabad, Kolkata", note: "The exact pin arrives on WhatsApp." },
  { label: "Format", value: "In person, hands-on", note: "Classes and practice both happen in the lab." },
  { label: "Length", value: "2 weeks + 10 hours", note: "Six classes, then ten one-hour sessions you book yourself." },
  { label: "Batch size", value: "10 students at most", note: "Small enough for every student to use the machine." },
  { label: "Next batch", value: batch.startLabel, note: "Dates for later batches are shared on WhatsApp." },
  { label: "Fee", value: formatINR(batch.fee), note: "Paid upfront. Covers classes, sessions, test and certificate." },
  { label: "Extra practice", value: `${formatINR(batch.extraSession)} per session`, note: "Add more one-on-one hours any time." },
  { label: "Certificate", value: "ZEBC", note: "Zariya Elite Barista Certificate, awarded after the test." },
  { label: "Enquire", value: contact.whatsappDisplay, note: "WhatsApp, usually the fastest way." },
  { label: "Last updated", value: batch.lastUpdated, note: "Dates and fees are checked on this day." },
] as const;

/* -------------------------------------------------------------------------- */
/* Modules: M1 is the ground floor, the roof is the certificate               */
/* -------------------------------------------------------------------------- */

export const modules = [
  {
    id: "M1",
    level: "±0.00",
    name: "Coffee Unlocked",
    summary: "Where coffee comes from, and how that shapes what lands in the cup.",
    topics: [
      "How coffee was discovered",
      "Botany and varietals",
      "Processing methods and their effect on flavour",
    ],
  },
  {
    id: "M2",
    level: "+3.00",
    name: "Barista's Palate",
    summary: "Taste with intent, and learn the language to describe it.",
    topics: [
      "Cupping protocols",
      "Tasting notes and regional profiles",
      "Spotting defects",
    ],
  },
  {
    id: "M3",
    level: "+6.00",
    name: "Brewing Mastery",
    summary: "Every brew method has its own chemistry. Learn which variables you control.",
    topics: [
      "V60, AeroPress and French press",
      "Brew ratios and water chemistry",
      "Extraction principles and advanced technique",
    ],
  },
  {
    id: "M4",
    level: "+9.00",
    name: "The Espresso Code",
    summary: "The make-or-break module: the machine, the shot, the milk and the art.",
    topics: [
      "Equipment and dialling in",
      "Milk texturing and latte art",
      "Espresso variations",
    ],
  },
  {
    id: "M5",
    level: "+12.00",
    name: "The Barista's Edge",
    summary: "The people skills that turn a good barista into a leader.",
    topics: [
      "Talking with customers",
      "Staying calm under pressure",
      "Fixing brewing problems on the spot",
    ],
  },
] as const;

export const roof = {
  id: "ZEBC",
  level: "+15.00",
  name: "Test and certificate",
  summary: "The course closes with a test. Pass it and you receive ZEBC.",
} as const;

/* -------------------------------------------------------------------------- */
/* Structure: classes first, then one-on-one                                  */
/* -------------------------------------------------------------------------- */

export const stages = [
  {
    id: "01",
    level: "±0.00",
    title: "Two weeks of classes",
    detail: "Six classes mix theory and practice and cover all five modules. No more than ten students.",
  },
  {
    id: "02",
    level: "+3.00",
    title: "Ten one-on-one hours",
    detail: "You choose the slot. A mentor stands beside you while you practise what you need. Included in the fee.",
  },
  {
    id: "03",
    level: "+6.00",
    title: "The test",
    detail: "A test closes the course. Its fee is already included.",
  },
  {
    id: "04",
    level: "+9.00",
    title: "ZEBC",
    detail: "The Zariya Elite Barista Certificate, issued by The Zariya Academy.",
  },
] as const;

export const compare = {
  group: {
    title: "In a group class",
    body: "Ten students share one mentor and one machine. It is the best format for ideas: why coffee tastes the way it does, and how extraction works. You also learn from the nine other people's questions.",
  },
  oneToOne: {
    title: "In a one-on-one hour",
    body: "The machine and the mentor are yours for the full hour. Dosing, tamping and milk texture need many repeats and quick feedback, and every shot you pull gets it straight away.",
  },
  closing: "Classes explain why. One-on-one hours train your hands.",
} as const;

/* -------------------------------------------------------------------------- */
/* Fee                                                                        */
/* -------------------------------------------------------------------------- */

export const fee = {
  amount: batch.fee,
  basis: "Paid upfront to hold one of the ten seats.",
  includes: [
    "Two weeks of classes: six classes, five modules",
    "Ten one-on-one sessions of one hour each (a promotional inclusion)",
    "The test",
    "The Zariya Elite Barista Certificate (ZEBC)",
  ],
  extra: `Need more practice? Extra sessions are ${formatINR(batch.extraSession)} each.`,
  policyNote: "Instalments are not offered at the moment. If we cancel a batch you can move to a later one or take a full refund. Read the full fees and policies page.",
} as const;

export const zebc = {
  title: "The Zariya Elite Barista Certificate",
  body: "ZEBC is issued by The Zariya Academy after the test. It is a named, test-backed qualification you can show when you apply for work. We are talking with cafés and hospitality businesses so they recognise it when hiring, and partner names will be listed as they confirm.",
} as const;

/* -------------------------------------------------------------------------- */
/* Who it is for, and the learning path                                       */
/* -------------------------------------------------------------------------- */

export const whoFor = [
  {
    title: "You want to work as a barista",
    body: "Build what a café needs from you: consistent shots, clean milk and calm service.",
  },
  {
    title: "You want to open or run a café",
    body: "Understand every drink on the menu so you can train your own team with confidence.",
  },
  {
    title: "You want to take coffee seriously",
    body: "Learn to taste, brew and explain coffee, for yourself and for the people you serve.",
  },
] as const;

export const path = [
  {
    step: "Start here",
    title: "Brew Lab",
    body: "Short stand-alone workshops, one skill each.",
    price: "From ₹299",
    href: "/academy/brew-lab",
  },
  {
    step: "The course",
    title: "The Barista Method",
    body: "Two weeks of classes and ten one-on-one hours.",
    price: formatINR(batch.fee),
    href: "/academy#course",
  },
  {
    step: "Go deeper",
    title: "Advanced follow-on",
    body: "For graduates who want more. Ask about content and dates when you enquire.",
    price: `${formatINR(batch.advancedFee)} per seat`,
    href: "/academy#enquire",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Brew Lab: five numbered workshop sheets                                    */
/* -------------------------------------------------------------------------- */

export const brewLab = [
  { sheet: "BL-01", name: "Brew Lab", topic: "Pour-over", aim: "Taste blind, then brew a pour-over you would happily serve.", seats: 10, price: 299, priceNote: "founding price" },
  { sheet: "BL-02", name: "Pull", topic: "Espresso", aim: "Change one variable, pull again, and learn why the shot changed.", seats: 8, price: 499, priceNote: "each" },
  { sheet: "BL-03", name: "Pour", topic: "Milk and latte art", aim: "Steam silky milk and pour your first clean heart.", seats: 8, price: 499, priceNote: "each" },
  { sheet: "BL-04", name: "Drink Lab", topic: "Cold drinks and tonics", aim: "Build a cold drink layer by layer, with a local twist.", seats: 10, price: 499, priceNote: "each" },
  { sheet: "BL-05", name: "Palate Plan", topic: "Cupping", aim: "Taste eight unlabelled cups and find the words for what you notice.", seats: 10, price: 599, priceNote: "each" },
] as const;

/* -------------------------------------------------------------------------- */
/* Enquiry                                                                    */
/* -------------------------------------------------------------------------- */

export const steps = [
  { id: "01", title: "Send an enquiry", body: "Tell us your goal and your experience. It takes about a minute." },
  { id: "02", title: "We reply on WhatsApp", body: "You get batch details and the location pin." },
  { id: "03", title: "Confirm your seat", body: `Pay the ${formatINR(batch.fee)} fee upfront to hold one of the ten seats.` },
] as const;

export const enquiryOptions = {
  interest: [
    "The Barista Method (next batch)",
    "Brew Lab workshops",
    "Both",
    "Not sure yet",
  ],
  goal: ["Work as a barista", "Open or run a café", "Learn for myself", "Something else"],
  experience: ["None yet", "Some, at home", "Some, in a café", "Professional"],
} as const;

export type EnquiryValues = {
  name: string;
  city: string;
  interest: string;
  goal: string;
  experience: string;
  note?: string;
};

/** Opens WhatsApp with the message ready. Nothing is stored or sent by the site. */
export function buildWhatsAppUrl(
  values: EnquiryValues,
  number: string = contact.whatsappNumber,
) {
  const text = [
    "Hi, I would like to know more about The Barista Method.",
    `Name: ${values.name}`,
    values.city ? `City: ${values.city}` : "",
    `Interested in: ${values.interest}`,
    `Goal: ${values.goal}`,
    `Experience: ${values.experience}`,
    values.note ? `Note: ${values.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** A plain one-tap link for the "message us now" button and the no-JS fallback. */
export const whatsappQuickUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I would like to know more about The Barista Method.",
)}`;

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faq = [
  {
    q: "How much does The Barista Method cost?",
    a: `${formatINR(batch.fee)}, paid upfront. It covers the two-week classes, ten one-on-one sessions, the test and the ZEBC certificate. The ten sessions are a promotional inclusion.`,
  },
  {
    q: "When does the next batch start?",
    a: `${batch.startLabel}. Ten seats are available in a batch.`,
  },
  {
    q: "How is the course structured?",
    a: "Six classes over two weeks cover all five modules. After that you book ten one-hour sessions one-on-one with a mentor, then take the test.",
  },
  {
    q: "How do the one-on-one sessions work?",
    a: "Each session is one hour. You pick a slot from the open times, come in, and practise what you need with a mentor beside you. You book them at your own pace.",
  },
  {
    q: "Can I buy more practice sessions?",
    a: `Yes. Extra one-on-one sessions cost ${formatINR(batch.extraSession)} each.`,
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. After the test you receive the Zariya Elite Barista Certificate (ZEBC), issued by The Zariya Academy.",
  },
  {
    q: "Will the certificate get me a job?",
    a: "We cannot promise a job. ZEBC is a test-backed qualification you can show employers, and we are working with cafés and hospitality businesses so they recognise it.",
  },
  {
    q: "Do I need experience?",
    // CONFIRM with the client before publishing a firmer answer.
    a: "Tell us your experience when you enquire, even if it is none. We will talk it through with you on WhatsApp.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Not at the moment. The fee is paid upfront. If you need an instalment plan, write to us and the founder will review your request.",
  },
  {
    q: "Can I get a refund?",
    a: "Fees are not normally refunded. If we cancel a batch, everyone booked in it can move to a later batch or take a full refund.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* In the lab and founder                                                     */
/* -------------------------------------------------------------------------- */

/** Ask the client for the original photos. Do not hotlink their site. */
export const gallery = [
  { file: "/assets/academy/lab-v60.webp", alt: "Water poured from a gooseneck kettle into a V60 dripper on a scale during a brewing class.", caption: "Module 3 · Manual brewing" },
  { file: "/assets/academy/lab-layered.webp", alt: "Layered coffee tonics in ribbed glasses on the lab counter.", caption: "Module 4 · Drink building" },
  { file: "/assets/academy/lab-latte.webp", alt: "A layered latte in a ribbed glass beside the espresso machine.", caption: "Module 4 · Milk and espresso" },
  { file: "/assets/academy/lab-bar.webp", alt: "The instructor at the lab bar holding up a glass of espresso.", caption: "At the bar" },
] as const;

export const founder = {
  name: "Shubham Jaiswal",
  role: "Architect and founder of The Zariya Collective",
  facts: [
    "In coffee since 2022, when he founded Nen Roasting Company",
    "Trained barista and specialty coffee practitioner",
    "Working towards the Q Grader (Arabica) certification",
  ],
  // Short pull quote in your own words after he approves it.
  note: "Learning a craft should go beyond following instructions. It should help you understand why things work and build the judgement to find your own answers.",
} as const;

/* -------------------------------------------------------------------------- */
/* SEO                                                                        */
/* -------------------------------------------------------------------------- */

export const seo = {
  title: "Barista Course in Kolkata | The Barista Method",
  description: `A hands-on barista course in Kolkata: six classes, ten one-on-one sessions, a test and the ZEBC certificate. ${formatINR(batch.fee)}. Next batch ${batch.startLabel}.`,
  locale: "en_IN",
  themeColor: "#E7E4DC",
} as const;

export function courseJsonLd(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "The Barista Method",
    description: seo.description,
    url: `${siteUrl}/academy`,
    provider: {
      "@type": "EducationalOrganization",
      name: "The Zariya Academy",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      price: batch.fee,
      priceCurrency: batch.currency,
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      startDate: batch.startDate,
      location: contact.locality,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Ask the client. Never render this.                                         */
/* -------------------------------------------------------------------------- */

export const openQuestions = [
  "Full street address and the correct spelling (Nazirabad) for the footer and structured data.",
  "Is prior experience required for The Barista Method, or are beginners welcome?",
  "What does the test involve, and what is the pass mark? What happens on a fail?",
  "How is the course fee paid (UPI, bank transfer, cash) and by when?",
  "How far ahead can the ten one-on-one sessions be booked, and do they expire?",
  "Can we show real seats left? If so, who updates the number?",
  "Which photos can we use, and can we have the originals and the TBM logo as SVG?",
  "Are partner cafés ready to be named, or should the ZEBC note stay as it is?",
  "Is the founder note and biography approved for the page?",
  "Should the Academy page keep the word 'selective'? The client's own site describes an open enquiry.",
] as const;
