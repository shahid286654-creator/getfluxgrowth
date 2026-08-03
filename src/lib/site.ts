export const siteConfig = {
  name: "GetFluxGrowth",
  tagline: "AI Automation for Growing Businesses",
  description:
    "GetFluxGrowth designs and builds custom AI automation systems — from intelligent lead generation to workflow agents — that help businesses save time, cut costs, and scale faster.",
  url: "https://getfluxgrowth.com",
  email: "hello@getfluxgrowth.com",
  phone: "+1 (415) 555-0134",
  location: "San Francisco, CA · Remote-first, serving clients worldwide",
  social: {
    twitter: "https://twitter.com/getfluxgrowth",
    linkedin: "https://linkedin.com/company/getfluxgrowth",
    instagram: "https://instagram.com/getfluxgrowth",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
