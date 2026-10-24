export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  /** Omit for projects with no public live demo (e.g. internal/concept builds). */
  url?: string;
  thumbnail: string;
  tech: string[];
  challenge: string;
  solution: string;
  features: string[];
  businessImpact: string;
  /** Overrides the default "Demo Project" badge, e.g. "Concept Build". */
  badge?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "orient-flame",
    title: "Orient Flame",
    category: "Business Website",
    tagline: "Modern business website with premium UI/UX.",
    url: "https://orientflame.netlify.app/",
    thumbnail: "/portfolio/orient-flame.jpg",
    tech: ["React", "Vite", "Tailwind CSS"],
    challenge:
      "Most small business websites look generic and dated, so visitors bounce before they ever understand what the business actually offers or why they should trust it.",
    solution:
      "We designed and built a premium, modern business website with a clear visual hierarchy, strong brand presence, and fast page loads — built to earn trust in the first few seconds.",
    features: [
      "Custom UI/UX design system",
      "Fully responsive, mobile-first layout",
      "Fast-loading, lightweight architecture",
      "Clear service structure with guided calls-to-action",
    ],
    businessImpact:
      "A premium first impression built to build trust immediately and guide visitors toward contacting the business, rather than bouncing to a competitor.",
  },
  {
    slug: "beyond-gym",
    title: "Beyond Gym",
    category: "Fitness & Gym",
    tagline: "High-converting fitness and gym website.",
    url: "https://beyondgym.netlify.app/",
    thumbnail: "/portfolio/beyond-gym.jpg",
    tech: ["React", "Vite", "Tailwind CSS"],
    challenge:
      "Gyms lose potential members when their website doesn't sell the experience or make it effortless to see plans, classes, and how to get started.",
    solution:
      "We built a bold, high-energy gym website that showcases membership plans and class schedules clearly, with conversion-focused calls-to-action at every scroll stop.",
    features: [
      "Membership and pricing plan showcase",
      "Class schedule layout",
      "Bold, high-energy visual identity",
      "Mobile-optimized sign-up flow",
    ],
    businessImpact:
      "A conversion-focused layout designed to turn first-time visitors into trial memberships, with pricing and next steps never more than a scroll away.",
  },
  {
    slug: "the-x-gyms",
    title: "The X Gyms",
    category: "Fitness & Gym",
    tagline: "Professional fitness brand website with responsive design.",
    url: "https://thexgyms.netlify.app/",
    thumbnail: "/portfolio/the-x-gyms.jpg",
    tech: ["React", "Vite", "Tailwind CSS"],
    challenge:
      "A fitness brand needs a site that reflects its intensity and identity while staying fast and easy to navigate on any device a prospective member picks up.",
    solution:
      "We built a fully responsive fitness brand website with a consistent design system, strong brand-driven visuals, and a navigation structure that stays clear at every screen size.",
    features: [
      "Custom, brand-driven visual design",
      "Fully responsive across phone, tablet, and desktop",
      "Fast page loads",
      "Simple, consistent navigation structure",
    ],
    businessImpact:
      "A responsive, brand-consistent experience that keeps the site fast and usable whether a prospective member finds it on a phone or a desktop.",
  },
  {
    slug: "falah-chicken",
    title: "Falah Chicken",
    category: "Restaurant & Food",
    tagline:
      "Restaurant website with modern layout and online ordering experience.",
    url: "https://falahchicken.netlify.app/",
    thumbnail: "/portfolio/falah-chicken.jpg",
    tech: ["React", "Vite", "Tailwind CSS"],
    challenge:
      "Restaurants lose orders when a website makes ordering food feel like a chore, especially on mobile, where most hungry customers are searching.",
    solution:
      "We designed and built a modern restaurant website with a streamlined menu and online ordering experience, optimized first for mobile.",
    features: [
      "Streamlined online ordering flow",
      "Visual menu showcase",
      "Mobile-first design",
      "Fast load times for on-the-go customers",
    ],
    businessImpact:
      "A mobile-first ordering experience built to remove friction between a hungry visitor and a placed order.",
  },
  {
    slug: "ai-automation-suite",
    title: "AI Automation for Business",
    category: "AI Automation",
    tagline: "Concept build: AI lead qualification & CRM automation system.",
    thumbnail: "/portfolio/ai-automation-suite.png",
    tech: ["n8n", "OpenAI API", "CRM Integration", "Zapier"],
    badge: "Concept Build",
    challenge:
      "Sales teams lose deals when new leads sit untouched for hours — nobody is qualifying them, logging them to the CRM, or sending a timely follow-up while the lead is still warm.",
    solution:
      "A self-directed concept system showing how we'd wire an AI agent to qualify inbound leads in real time, sync the result straight to the CRM, and trigger a personalized follow-up — no manual handoffs.",
    features: [
      "Real-time lead qualification powered by an AI agent",
      "Automatic CRM sync with no manual data entry",
      "Personalized, instant follow-up sequencing",
      "Dashboard showing leads processed and time saved",
    ],
    businessImpact:
      "This is the kind of system we build as the paid AI Automation add-on — a one-time project that replaces hours of manual lead handling with a workflow that runs itself.",
  },
  {
    slug: "real-estate-speed-to-lead",
    title: "Real Estate Speed-to-Lead AI",
    category: "AI Automation",
    tagline: "Concept build: instant AI response and showing scheduler for property inquiries.",
    thumbnail: "/portfolio/real-estate-speed-to-lead.png",
    tech: ["OpenAI API", "Twilio", "CRM Integration", "Calendar API"],
    badge: "Concept Build",
    challenge:
      "Real estate agents routinely take hours to respond to a new inquiry — audits of major brokerages have found most leads go unanswered on the first contact attempt, and industry research (MIT/InsideSales) shows leads contacted within 5 minutes are roughly 21x more likely to qualify than those contacted after 30 minutes. Every hour of delay is a lead drifting to a faster-responding agent.",
    solution:
      "A self-directed concept system showing how we'd wire an AI agent to reply to a new property inquiry within seconds, ask the qualifying questions a human would (budget, timeline, financing), and book a showing directly on the agent's calendar — with the full conversation logged to the CRM automatically.",
    features: [
      "Sub-minute AI response to new inquiries, 24/7",
      "Automated budget and timeline qualification",
      "Direct showing scheduling, synced to the agent's calendar",
      "Full conversation history logged to the CRM, no manual entry",
    ],
    businessImpact:
      "Built to close the response-time gap that costs agents deals before a human ever sees the lead — this is the shape of the one-time AI Automation add-on when speed-to-lead is the bottleneck.",
  },
  {
    slug: "home-services-missed-call-recovery",
    title: "Home Services Missed-Call Recovery",
    category: "AI Automation",
    tagline: "Concept build: AI text-back and booking system for missed service calls.",
    thumbnail: "/portfolio/home-services-missed-call-recovery.png",
    tech: ["OpenAI API", "Twilio", "Scheduling API", "CRM Integration"],
    badge: "Concept Build",
    challenge:
      "Field service businesses — plumbers, HVAC, electricians — miss a meaningful share of inbound calls while technicians are on a job, and industry survey data (CallRail) finds most consumers won't call back after an unanswered call, with many abandoning the business entirely. Each missed call is a job that quietly goes to a competitor.",
    solution:
      "A self-directed concept system showing how we'd wire an AI agent to instantly text back every missed call, answer basic questions, and offer real appointment slots — booking the job straight into the technician schedule without anyone picking up a phone.",
    features: [
      "Instant auto-text-back on every missed call",
      "AI-handled Q&A on services, pricing ranges, and availability",
      "Direct appointment booking into the technician schedule",
      "Dashboard tracking missed-call recovery rate and jobs booked",
    ],
    businessImpact:
      "Built to recover revenue that currently disappears the moment a call goes unanswered — this is the shape of the one-time AI Automation add-on for appointment-driven service businesses.",
  },
];
