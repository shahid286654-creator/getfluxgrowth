import { Target, ShieldCheck, Gauge, Users2, type LucideIcon } from "lucide-react";

export interface CompanyValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const companyValues: CompanyValue[] = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "I measure success by the calls, messages and bookings your website brings in — not by how it looks in a portfolio.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed prices, no surprises",
    description:
      "You know the full price before I start. Pay 50% upfront and the rest only when you're happy.",
  },
  {
    icon: Gauge,
    title: "Move fast, stay transparent",
    description:
      "Most websites go live in 7 days, and you can WhatsApp me directly — no account managers, no middlemen.",
  },
  {
    icon: Users2,
    title: "Built around your business",
    description:
      "Everything fits how your customers already reach you — WhatsApp, calls, Google Maps and social media.",
  },
];
