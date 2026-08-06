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
      "We map your current workflows, website, and search presence to find where automation and SEO will move the needle fastest.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Plan",
    description:
      "We design the blueprint — systems, integrations, and site architecture — and review it with you before anything is built.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Build",
    description:
      "Our engineers build and integrate your automation, website, or SEO system, tested against real data before launch.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Grow",
    description:
      "We launch with monitoring in place, then keep iterating — expanding what's working as your business grows.",
  },
];
