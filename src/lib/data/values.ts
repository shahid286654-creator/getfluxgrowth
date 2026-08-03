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
      "We measure success by hours saved and pipeline generated, not by how many workflows we ship.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails by default",
    description:
      "Every AI system we build includes accuracy checks and human-in-the-loop escalation, so automation never means losing control.",
  },
  {
    icon: Gauge,
    title: "Move fast, stay transparent",
    description:
      "You get a clear rollout timeline, plain-language reporting, and a direct line to the engineers building your system.",
  },
  {
    icon: Users2,
    title: "Built around your team",
    description:
      "We design automation that fits how your team already works, not the other way around.",
  },
];
