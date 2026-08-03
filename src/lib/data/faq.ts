export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What exactly does an AI automation agency do?",
    answer:
      "We design, build, and maintain custom AI systems that take over repetitive or manual work — like finding new leads, auditing websites, writing outreach, or moving data between tools — so your team can focus on higher-value work.",
  },
  {
    question: "Do I need any technical knowledge to work with GetFluxGrowth?",
    answer:
      "No. We handle the architecture, integrations, and ongoing maintenance. You'll get a clear rollout plan, simple dashboards, and regular reporting in plain language — no engineering background required.",
  },
  {
    question: "How long does it take to launch an automation?",
    answer:
      "Most single-workflow projects launch within 2-4 weeks of kickoff, from discovery through testing. Larger multi-system builds typically take 6-10 weeks depending on integration complexity.",
  },
  {
    question: "Which tools and platforms do you integrate with?",
    answer:
      "We regularly integrate with popular CRMs (HubSpot, Salesforce, Pipedrive), email and calendar platforms, spreadsheets, and custom internal tools via API. If your stack isn't listed, we can almost always still connect to it.",
  },
  {
    question: "Will the AI actually sound like our brand?",
    answer:
      "Yes. Every outreach and chatbot system is trained on your existing voice, documentation, and past communications, then reviewed by our team before launch to make sure it matches how your business actually talks to customers.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every plan includes ongoing monitoring and optimization. We track performance, retrain and adjust prompts as needed, and meet with you regularly to identify the next highest-impact automation opportunity.",
  },
  {
    question: "Is my business's data secure?",
    answer:
      "Yes. We use encrypted connections for every integration, scope access to only what each automation needs, and never use your business data to train models for anyone outside your organization.",
  },
];
