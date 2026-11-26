import type { Currency } from "@/lib/currency";

export const siteConfig = {
  name: "GetFluxGrowth",
  tagline: "Websites & Google Maps for Local Businesses",
  title: "GetFluxGrowth | AI Automation, Website Development & Digital Marketing",
  description:
    "GetFluxGrowth helps businesses grow with AI Automation, Website Development, SEO, Digital Marketing, AI Chatbots and Workflow Automation.",
  keywords: [
    "AI Automation",
    "Website Development",
    "Next.js Developer",
    "Shopify Developer",
    "WordPress Developer",
    "SEO Expert",
    "Digital Marketing",
    "AI Chatbot",
    "Workflow Automation",
  ],
  url: "https://getfluxgrowth.com",
  email: "contact@fluxgrowth.io",
  whatsappNumber: "917701977003",
  whatsappDisplay: "+91 77019 77003",
  whatsappLink: "https://wa.me/917701977003",
  // WhatsApp Business message link: its greeting is set in the app and it ignores ?text=.
  whatsappMessageLink: "https://wa.me/message/FZ2G5PMPZ226F1",
  // TODO: set to a Mauritius WhatsApp number (digits only, e.g. "2305xxxxxxx") to use it for Rs visitors.
  whatsappNumberMU: null as string | null,
  social: {
    linkedin: "https://www.linkedin.com/in/shahid-anwar-5a3253324/",
    instagram: "https://www.instagram.com/learn.withshahid/?hl=en",
  },
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Shahid, I found you on getfluxgrowth.com. I'd like help getting more customers online.";

// No message → the business message link. A specific message (package + price) needs a
// number link, because only wa.me/<number> links can pre-fill text.
export function whatsappHref(message?: string, currency?: Currency) {
  const muNumber = currency === "MUR" ? siteConfig.whatsappNumberMU : null;
  if (!message && !muNumber) return siteConfig.whatsappMessageLink;
  const base = muNumber ? `https://wa.me/${muNumber}` : siteConfig.whatsappLink;
  return `${base}?text=${encodeURIComponent(message ?? DEFAULT_WHATSAPP_MESSAGE)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
