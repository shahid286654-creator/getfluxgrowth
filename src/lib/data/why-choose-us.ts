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
      "AI-driven prospecting and a website built to convert mean more qualified leads reaching your team.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description:
      "We automate the repetitive work — research, follow-ups, reporting — so your team spends time closing, not chasing.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Custom AI systems connect your existing tools, so work moves forward without manual handoffs.",
  },
  {
    icon: ArrowUpRight,
    title: "Higher Rankings",
    description:
      "Technical and content SEO built to get your business found by the customers already searching for you.",
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
      "We design systems that keep compounding — not one-off projects that stop working the day we ship.",
  },
];
