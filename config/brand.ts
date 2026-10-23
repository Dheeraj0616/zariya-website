export const brand = {
  name: "The Zariya Collective",
  positioning: "One register. Three ventures. All live.",
  tagline: "One register. Three ventures. All live.",
  description:
    "A Kolkata group of three ventures, each with its own address and its own series of sheets: design, learning and standards for the built environment and the cup.",

  revision: {
    code: "ZC-00",
    version: "Rev 01",
    date: "16 October 2026",
    scale: "NTS",
  },

  colors: {
    navy: "#012745",
    red: "#BE2E14",
    gold: "#DA8F0E",
    cream: "#E7E4DC",
  },

  logo: {
    src: "/assets/brand/zariya-logo.png",
    alt: "The Zariya Collective logo",
  },

  founder: {
    name: "Shubham Jaiswal",
    role: "Architect & Founder",
    location: "Nazirabad, Kolkata, West Bengal, India",
  },

  ventures: {
    studio: {
      code: "DS",
      series: "Series DS",
      name: "Zariya Design Studio",
      shortName: "DS · Zariya Design Studio",
      discipline: "Architecture and design, with BIM and VR. Mindful, future-ready spaces.",
      category: "Studio",
      accent: "#012745",
      url: "https://studio.thezariya.com/",
      displayUrl: "studio.thezariya.com",
      status: "Live",
    },

    academy: {
      code: "TBM · BL",
      series: "Series TBM · BL",
      name: "The Zariya Academy",
      shortName: "TBM · BL · The Zariya Academy",
      discipline: "Coffee education in Kolkata: The Barista Method course and Brew Lab workshops.",
      category: "Academy",
      accent: "#BE2E14",
      url: "https://academy.thezariya.com/",
      displayUrl: "academy.thezariya.com",
      internalUrl: "/academy",
      status: "Live",
    },

    aayaam: {
      code: "AY",
      series: "Series AY",
      name: "Aayaam",
      shortName: "AY · Aayaam",
      discipline: "A BIM standard and object library for the Indian market (BIM objects and the AS 1:2026 standard).",
      category: "Aayaam",
      accent: "#DA8F0E",
      url: "https://aayaam.thezariya.com/",
      displayUrl: "aayaam.thezariya.com",
      status: "Live",
    },

    collective: {
      code: "ZC",
      series: "Series ZC",
      name: "The Zariya Collective",
      shortName: "ZC · The Zariya Collective",
      discipline: "This register. The front door to every venture.",
      category: "Collective",
      accent: "#012745",
      url: "https://www.thezariya.com/",
      displayUrl: "www.thezariya.com",
      status: "Live",
    },
  },

  /** Alias for backwards compatibility */
  get verticals() {
    return this.ventures;
  },
} as const;
