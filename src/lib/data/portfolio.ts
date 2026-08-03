export interface PortfolioItem {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  results: { label: string; value: string }[];
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "vertex-logistics-lead-engine",
    client: "Vertex Logistics",
    industry: "Freight & Logistics",
    title: "AI Lead Engine for a Regional Freight Brokerage",
    summary:
      "Built a daily prospecting system that identifies shippers matching Vertex's ideal customer profile, audits their online presence, and drafts personalized outreach for the sales team.",
    results: [
      { label: "Qualified leads / month", value: "600+" },
      { label: "Time saved on prospecting", value: "35 hrs/week" },
      { label: "Reply rate on AI-drafted outreach", value: "18%" },
    ],
    tags: ["Lead Generation", "Outreach Automation"],
  },
  {
    slug: "brightside-realty-assistant",
    client: "Brightside Realty Group",
    industry: "Real Estate",
    title: "Always-On AI Assistant for Buyer Inquiries",
    summary:
      "Deployed a website and SMS assistant trained on listing data that qualifies buyer leads, schedules showings, and routes hot prospects directly to agents in real time.",
    results: [
      { label: "Inquiries handled automatically", value: "82%" },
      { label: "Faster first response time", value: "11x" },
      { label: "Showings booked / month", value: "140+" },
    ],
    tags: ["AI Agents", "Workflow Automation"],
  },
  {
    slug: "lumen-dental-crm-cleanup",
    client: "Lumen Dental Group",
    industry: "Healthcare",
    title: "CRM Enrichment & Recall Automation",
    summary:
      "Rebuilt Lumen's patient CRM pipeline to auto-enrich contact records, flag overdue recall appointments, and trigger personalized reminder sequences across six locations.",
    results: [
      { label: "Duplicate records removed", value: "9,400" },
      { label: "Recall booking rate", value: "+41%" },
      { label: "Admin hours saved / month", value: "60+" },
    ],
    tags: ["Data & CRM", "Workflow Automation"],
  },
  {
    slug: "northwind-saas-audit-reports",
    client: "Northwind Analytics",
    industry: "B2B SaaS",
    title: "Automated Website Audits for Outbound Sales",
    summary:
      "Gave Northwind's SDR team an on-demand audit tool that scores any prospect's website in under a minute and generates a branded report to open every cold outreach conversation.",
    results: [
      { label: "Audits generated / month", value: "1,200+" },
      { label: "Meeting booked rate", value: "+27%" },
      { label: "Report turnaround", value: "< 60 sec" },
    ],
    tags: ["Website Audits", "Outreach Automation"],
  },
  {
    slug: "solstice-retail-support-bot",
    client: "Solstice Home Goods",
    industry: "E-Commerce",
    title: "Support Agent Trained on Product Catalog",
    summary:
      "Built a customer support agent that resolves order, shipping, and product questions using Solstice's live catalog and order data, escalating only complex cases to humans.",
    results: [
      { label: "Tickets auto-resolved", value: "68%" },
      { label: "Avg. response time", value: "< 15 sec" },
      { label: "CSAT score", value: "4.8 / 5" },
    ],
    tags: ["AI Agents", "Customer Support"],
  },
  {
    slug: "harborline-financial-outreach",
    client: "Harborline Financial",
    industry: "Financial Services",
    title: "Compliant Outreach Automation for Advisor Teams",
    summary:
      "Designed a lead scoring and outreach system with built-in compliance guardrails, giving Harborline's advisors a steady stream of qualified, pre-audited prospects.",
    results: [
      { label: "Advisor pipeline growth", value: "+54%" },
      { label: "Lead qualification accuracy", value: "93%" },
      { label: "Manual review time cut", value: "70%" },
    ],
    tags: ["Lead Generation", "Compliance-Aware AI"],
  },
];
