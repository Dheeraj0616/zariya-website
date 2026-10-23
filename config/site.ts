export interface VentureItem {
  code: string;
  series: string;
  name: string;
  shortName: string;
  discipline: string;
  category: "Studio" | "Academy" | "Aayaam" | "Collective";
  status: "Live";
  url: string;
  displayUrl: string;
  internalUrl?: string;
  accent: string;
}

export const ventures: readonly VentureItem[] = [
  {
    code: "DS",
    series: "Series DS",
    name: "Zariya Design Studio",
    shortName: "DS · Zariya Design Studio",
    discipline: "Architecture and design, with BIM and VR. Mindful, future-ready spaces.",
    category: "Studio",
    status: "Live",
    url: "https://studio.thezariya.com/",
    displayUrl: "studio.thezariya.com",
    accent: "#012745",
  },
  {
    code: "TBM · BL",
    series: "Series TBM · BL",
    name: "The Zariya Academy",
    shortName: "TBM · BL · The Zariya Academy",
    discipline: "Coffee education in Kolkata: The Barista Method course and Brew Lab workshops.",
    category: "Academy",
    status: "Live",
    url: "https://academy.thezariya.com/",
    displayUrl: "academy.thezariya.com",
    internalUrl: "/academy",
    accent: "#BE2E14",
  },
  {
    code: "AY",
    series: "Series AY",
    name: "Aayaam",
    shortName: "AY · Aayaam",
    discipline: "A BIM standard and object library for the Indian market (BIM objects and the AS 1:2026 standard).",
    category: "Aayaam",
    status: "Live",
    url: "https://aayaam.thezariya.com/",
    displayUrl: "aayaam.thezariya.com",
    accent: "#DA8F0E",
  },
  {
    code: "ZC",
    series: "Series ZC",
    name: "The Zariya Collective",
    shortName: "ZC · The Zariya Collective",
    discipline: "This register. The front door to every venture.",
    category: "Collective",
    status: "Live",
    url: "https://www.thezariya.com/",
    displayUrl: "www.thezariya.com",
    accent: "#012745",
  },
] as const;

export const siteConfig = {
  name: "The Zariya Collective",
  title: "The Zariya Collective | Studio, Academy and Aayaam",
  description:
    "A Kolkata group of three ventures, each with its own address and its own series of sheets: design, learning and standards for the built environment and the cup.",
  url: "https://www.thezariya.com",
  lastUpdated: "16 October 2026",

  revision: {
    code: "ZC-00",
    version: "Rev 01",
    date: "16 October 2026",
    lastUpdated: "16 October 2026",
  },

  founder: {
    name: "Shubham Jaiswal",
    role: "Architect & Founder",
    location: "Nazirabad, Kolkata, West Bengal, India",
  },

  contact: {
    whatsapp: {
      url: "https://wa.me/917439651029",
      label: "+91 74396 51029",
      number: "917439651029",
    },
    location: "Nazirabad, Kolkata, West Bengal, India",
    /** Contact email read from NEXT_PUBLIC_CONTACT_EMAIL. Hide if unset. */
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
  },

  ventures,
} as const;

export default siteConfig;
