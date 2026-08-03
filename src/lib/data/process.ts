import {
  SearchCheck,
  PenTool,
  Cpu,
  FlaskConical,
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
    title: "Discover & Audit",
    description:
      "We map your current workflows, tools, and data sources to find where AI automation will save the most time and create the most revenue impact.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design the System",
    description:
      "We architect the automation blueprint — data flow, model selection, integrations, and guardrails — and review it with your team before a line of code is written.",
  },
  {
    step: "03",
    icon: Cpu,
    title: "Build & Integrate",
    description:
      "Our engineers build the custom AI agents and connect them to your existing stack — CRM, email, calendars, and internal tools — with no disruption to daily operations.",
  },
  {
    step: "04",
    icon: FlaskConical,
    title: "Test & Optimize",
    description:
      "Every system is stress-tested against real data, with prompts, thresholds, and edge cases tuned until outputs are consistently accurate and on-brand.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We deploy with monitoring and reporting in place, then keep iterating — expanding automation coverage as your business grows.",
  },
];
