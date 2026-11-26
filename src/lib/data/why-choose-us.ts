import {
  TrendingUp,
  Clock,
  Workflow,
  ArrowUpRight,
  Gauge,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: TrendingUp,
    title: "More Leads",
    description:
      "Clear WhatsApp, call and booking buttons on every page, so visitors become customers instead of leaving.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Instant auto-replies and online bookings answer customers for you, even when you're busy or closed.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Enquiries land straight on your phone, in WhatsApp or email — no complicated software to learn.",
  },
  {
    icon: ArrowUpRight,
    title: "Higher Rankings",
    description:
      "Google Maps and website SEO so you show up when nearby customers search for what you sell.",
  },
  {
    icon: Gauge,
    title: "Faster Website",
    description:
      "Modern, performance-first builds that load fast, rank well, and hold up under real traffic.",
  },
  {
    icon: Sprout,
    title: "Long-Term Growth",
    description:
      "I stay on hand after launch with updates, Google posts and review replies, so your listing keeps improving.",
  },
];
