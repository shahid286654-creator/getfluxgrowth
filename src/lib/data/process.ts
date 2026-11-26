import {
  SearchCheck,
  PenTool,
  Cpu,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: SearchCheck,
    title: "Discover",
    description:
      "I look at your current website, Google listing and social pages to find what's stopping customers from contacting you.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Plan",
    description:
      "I plan the pages, buttons and features you need, agree a fixed price with you, and only start once you're happy with the plan.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Build",
    description:
      "I build your website or system myself and share a private preview link, so you can ask for changes before anything goes live.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Grow",
    description:
      "I launch it on your domain, set up Google, and stay on hand for updates as your business grows.",
  },
];
