import type { Currency } from "@/lib/currency";

export interface PricingTier {
  name: string;
  price: Record<Currency, string>;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
  whatsappMessage: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Google Maps Fix",
    price: { MUR: "Rs 3,500", INR: "₹2,999", USD: "$79" },
    cadence: "one-time",
    description:
      "Get found on Google Maps and turn searches into calls. Ideal if you don't need a full website yet.",
    features: [
      "Google Business Profile set up or fixed",
      "Right categories, hours and services",
      "10 photos uploaded and optimised",
      "WhatsApp and call buttons added",
      "Review link + printable QR card",
      "Done in 3 days",
    ],
    cta: "Fix My Google Listing",
    whatsappMessage: "Hi Shahid, I'd like the Google Maps Fix",
  },
  {
    name: "Starter Website",
    price: { MUR: "Rs 19,900", INR: "₹14,999", USD: "$449" },
    cadence: "one-time",
    description:
      "A fast, mobile-first website that brings you WhatsApp messages, calls and bookings. Live in 7 days.",
    features: [
      "1–3 page mobile-first website",
      "WhatsApp, call and map buttons",
      "Menu, price list or services page",
      "Contact form sent to your phone",
      "Domain + hosting for 1 year included",
      "Basic Google SEO setup",
      "Live in 7 days",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Start My Website",
    whatsappMessage: "Hi Shahid, I'd like the Starter Website",
  },
  {
    name: "Website + Bookings",
    price: { MUR: "Rs 34,900", INR: "₹27,999", USD: "$799" },
    cadence: "one-time",
    description:
      "Everything in Starter, plus online bookings or orders and an instant WhatsApp auto-reply so you never miss a customer.",
    features: [
      "Everything in Starter Website",
      "Online booking or order form",
      "Instant WhatsApp / email auto-reply",
      "Booking notifications to your phone",
      "Google Maps Fix included",
      "Up to 6 pages",
    ],
    cta: "Get Bookings Online",
    whatsappMessage: "Hi Shahid, I'd like the Website + Bookings package",
  },
];

export const carePlan: PricingTier = {
  name: "Care Plan",
  price: { MUR: "Rs 2,500", INR: "₹1,999", USD: "$59" },
  cadence: "/month",
  description:
    "I look after your website and Google listing every month, so you can focus on your business. Cancel anytime.",
  features: [
    "Text, price and photo updates",
    "4 Google posts per month",
    "Replies to your Google reviews",
    "Simple monthly report on calls and visits",
  ],
  badge: "Optional add-on",
  cta: "Add the Care Plan",
  whatsappMessage: "Hi Shahid, I'd like the Care Plan",
};

export const customQuoteMessage =
  "Hi Shahid, I need AI automation or a bigger project. Can you give me a custom quote?";

export const paymentMethods: Record<Currency, string> = {
  MUR: "MCB Juice or bank transfer",
  INR: "UPI or bank transfer",
  USD: "Secure card payment link or international bank transfer",
};

export const currencyLabels: Record<Currency, string> = {
  MUR: "Rs (Mauritius)",
  INR: "₹ (India)",
  USD: "$ (International)",
};
