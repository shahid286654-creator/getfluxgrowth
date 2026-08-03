export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500",
    cadence: "/month",
    description:
      "For businesses ready to automate their first workflow or launch a focused lead-gen system.",
    features: [
      "One automated workflow or lead engine",
      "Up to 500 leads sourced / month",
      "Basic CRM integration",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,500",
    cadence: "/month",
    description:
      "For teams that need multiple automations working together across sales and operations.",
    features: [
      "Up to 3 automated workflows or AI agents",
      "Up to 2,000 leads sourced / month",
      "Full CRM and tool-stack integration",
      "Personalized outreach with A/B testing",
      "Bi-weekly optimization reviews",
      "Priority support",
    ],
    highlighted: true,
    cta: "Book a Strategy Call",
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    description:
      "For companies automating end-to-end operations across multiple teams or locations.",
    features: [
      "Unlimited workflows and AI agents",
      "Custom lead volume and enrichment pipelines",
      "Dedicated automation engineer",
      "Custom model fine-tuning and guardrails",
      "Weekly reporting and roadmap planning",
      "24/7 priority support",
    ],
    cta: "Talk to Us",
  },
];
