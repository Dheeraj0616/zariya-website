export const brand = {
  name: "Zariya",

  colors: {
    navy: "#012745",
    red: "#BE2E14",
    gold: "#DA8F0E",
    cream: "#E7E4DC",
  },

  logo: {
    src: "/assets/brand/zariya-logo.jpg",
    alt: "Zariya logo",
  },

  verticals: {
    consulting: {
      name: "Consulting",
      accent: "#012745",
    },

    architecture: {
      name: "Architecture",
      accent: "#DA8F0E",
    },

    academy: {
      name: "Academy",
      accent: "#BE2E14",
    },
  },
} as const;