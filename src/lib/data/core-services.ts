import { Bot, Globe, Search, type LucideIcon } from "lucide-react";

export interface CoreService {
  slug: string;
  icon: LucideIcon;
  title: string;
  outcome: string;
  items: string[];
}

export const coreServices: CoreService[] = [
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    outcome: "Cut manual work and free your team to focus on revenue.",
    items: [
      "AI Agents",
      "Workflow Automation",
      "CRM Automation",
      "Business Process Automation",
    ],
  },
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    outcome: "A fast, modern site built to convert visitors into leads.",
    items: [
      "Business Websites",
      "Landing Pages",
      "E-commerce",
      "Portfolio Websites",
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    outcome: "Rank higher and get found by customers actively searching.",
    items: [
      "Technical SEO",
      "Local SEO",
      "AI Search Optimization",
      "Content Strategy",
    ],
  },
];
