export const siteConfig = {
  name: "Zariya",
  description: "Zariya brings together Consulting, Architecture, and Academy.",

  contact: {
    whatsapp: {
      url: "https://wa.me/917439651029",
      label: "+91 74396 51029",
    },
    location: "Nazirabad, Kolkata, West Bengal, India",
    /** Contact email read from NEXT_PUBLIC_CONTACT_EMAIL. Undefined when unset. */
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
  },
} as const;
