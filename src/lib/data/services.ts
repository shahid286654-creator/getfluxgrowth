import {
  Bot,
  Workflow,
  Radar,
  DatabaseZap,
  MessagesSquare,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "ai-lead-generation",
    icon: Radar,
    title: "AI Lead Generation",
    summary: "Find and qualify new customers on autopilot.",
    description:
      "We build always-on AI systems that scan the web for businesses matching your ideal customer profile, score them against your criteria, and hand your sales team a daily list of ready-to-contact prospects — no manual list-building required.",
    features: [
      "Daily prospect discovery from public business data",
      "ICP-based lead scoring and qualification",
      "Automatic enrichment with firmographic and contact data",
      "Delivered straight into your CRM or dashboard",
    ],
  },
  {
    slug: "website-audits",
    icon: LineChart,
    title: "AI Website Audits",
    summary: "Turn every prospect's website into a conversation starter.",
    description:
      "Our audit engine automatically evaluates a prospect's website for performance, SEO, and conversion gaps, then packages the findings into a clear, branded report your team can use to open doors and prove value before the first call.",
    features: [
      "Automated technical, SEO, and UX scoring",
      "Branded, client-ready PDF and web reports",
      "Competitor benchmarking",
      "API access for bulk or on-demand audits",
    ],
  },
  {
    slug: "personalized-outreach",
    icon: MessagesSquare,
    title: "Personalized Outreach",
    summary: "AI-written messages that read like a human wrote them.",
    description:
      "We connect large language models to your lead and audit data to draft outreach emails and messages personalized to each prospect's business, pain points, and industry — so every message feels one-to-one, at scale.",
    features: [
      "Message drafts grounded in real prospect data",
      "Multi-channel sequencing (email, LinkedIn, SMS)",
      "Tone and brand-voice customization",
      "Built-in A/B testing and reply tracking",
    ],
  },
  {
    slug: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation",
    summary: "Eliminate the busywork between your tools.",
    description:
      "We map your team's repetitive processes — data entry, follow-ups, reporting, handoffs — and replace them with reliable automations that connect your existing software stack, so work moves forward without anyone touching a spreadsheet.",
    features: [
      "End-to-end process mapping and redesign",
      "Integrations across CRMs, email, and internal tools",
      "Error handling, logging, and human-in-the-loop approvals",
      "Ongoing monitoring and optimization",
    ],
  },
  {
    slug: "ai-agents-chatbots",
    icon: Bot,
    title: "AI Agents & Chatbots",
    summary: "Custom assistants for support, sales, and operations.",
    description:
      "From website chat to internal ops copilots, we design custom AI agents trained on your business data that can answer questions, qualify visitors, book meetings, and escalate to a human exactly when they should.",
    features: [
      "Trained on your docs, FAQs, and product data",
      "Website, WhatsApp, and Slack deployment",
      "Meeting booking and CRM handoff",
      "Guardrails for accuracy and escalation",
    ],
  },
  {
    slug: "data-and-crm",
    icon: DatabaseZap,
    title: "Data & CRM Enrichment",
    summary: "Keep your systems clean, current, and complete.",
    description:
      "We build pipelines that continuously enrich and de-duplicate your CRM records, fill in missing firmographic and contact details, and keep lead status in sync across every tool your team relies on.",
    features: [
      "Automated enrichment and deduplication",
      "Real-time sync across CRM and marketing tools",
      "Custom scoring and segmentation fields",
      "Audit trail for every data change",
    ],
  },
];
