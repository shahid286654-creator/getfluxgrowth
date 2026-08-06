import {
  Bot,
  Globe,
  Search,
  Clock,
  TrendingUp,
  ShieldCheck,
  LineChart,
  Sprout,
  SearchCheck,
  PenTool,
  Cpu,
  Rocket,
  Gauge,
  Zap,
  Target,
  Smartphone,
  ArrowUpRight,
  MapPin,
  Sparkles,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface ServicePageBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServicePageProblemPoint {
  title: string;
  description: string;
}

export interface ServicePageProcessStep {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  slug: string;
  icon: LucideIcon;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    eyebrow: string;
    prefix: string;
    highlight: string;
    subheadline: string;
    trustPoints: string[];
  };
  /** Short, direct definitional answer used for the AI Search Optimization block (quotable by AI Overviews, ChatGPT, Perplexity). */
  aiQuickAnswer: string;
  problem: {
    eyebrow: string;
    title: string;
    description: string;
    points: ServicePageProblemPoint[];
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  benefits: ServicePageBenefit[];
  process: ServicePageProcessStep[];
  deliverables: string[];
  faqs: ServicePageFaq[];
}

export const servicePages: ServicePageContent[] = [
  {
    slug: "ai-automation",
    icon: Bot,
    title: "AI Automation",
    metaTitle: "AI Automation Services for Growing Businesses",
    metaDescription:
      "Cut manual work with custom AI automation. GetFluxGrowth builds AI agents, workflow automation, and CRM systems that save time and grow revenue. Book a free audit.",
    keywords: [
      "AI Automation Services",
      "AI Agents",
      "Workflow Automation",
      "Business Process Automation",
      "CRM Automation",
    ],
    hero: {
      eyebrow: "AI Automation",
      prefix: "Stop doing the work ",
      highlight: "AI should be doing for you",
      subheadline:
        "We design and build custom AI systems that take repetitive, manual work off your team's plate — so you spend time closing deals, not chasing them.",
      trustPoints: [
        "Free automation audit, no obligation",
        "Live in 2-4 weeks for most workflows",
        "Built around the tools you already use",
      ],
    },
    aiQuickAnswer:
      "AI automation is the use of AI agents and workflow software to handle repetitive business tasks — lead research, data entry, follow-ups, reporting — without manual effort. GetFluxGrowth designs, builds, and maintains custom AI automation systems that connect to your existing tools, typically saving teams 10-20 hours per week within the first month.",
    problem: {
      eyebrow: "The Problem",
      title: "Your team is buried in work that shouldn't need a human",
      description:
        "Every hour spent on manual research, data entry, or repetitive follow-ups is an hour not spent selling, building, or serving customers.",
      points: [
        {
          title: "Manual lead research eats your week",
          description:
            "Reps spend hours a day finding and qualifying prospects instead of talking to them.",
        },
        {
          title: "Data lives in five different tools",
          description:
            "Nothing syncs automatically, so someone has to copy-paste it between your CRM, spreadsheets, and inbox.",
        },
        {
          title: "Follow-ups fall through the cracks",
          description:
            "Without a system, leads go cold because nobody remembered to send the next email.",
        },
        {
          title: "Reporting takes a day to pull together",
          description:
            "By the time the numbers are ready, they're already out of date.",
        },
      ],
    },
    solution: {
      eyebrow: "The Solution",
      title: "Custom AI systems that run your busywork for you",
      description:
        "We don't sell off-the-shelf bots. We map your actual workflow, then design and build AI agents and automations that plug directly into how your team already operates.",
      points: [
        "AI agents that research, qualify, and prioritize leads automatically",
        "Workflow automation that connects your CRM, email, and internal tools",
        "Chatbots trained on your business that qualify visitors and book meetings",
        "Automated reporting that keeps your team looking at real-time numbers",
      ],
    },
    benefits: [
      {
        icon: Clock,
        title: "Get Hours Back",
        description:
          "Automate the repetitive work so your team spends its time on revenue-generating activity, not admin.",
      },
      {
        icon: TrendingUp,
        title: "More Qualified Pipeline",
        description:
          "AI agents surface and prioritize leads that match your ideal customer profile, every single day.",
      },
      {
        icon: ShieldCheck,
        title: "Built-In Guardrails",
        description:
          "Every system includes accuracy checks and human-in-the-loop escalation, so automation never means losing control.",
      },
      {
        icon: LineChart,
        title: "Reporting You Can Trust",
        description:
          "Live dashboards replace the day spent pulling numbers together by hand.",
      },
      {
        icon: Sprout,
        title: "Scales With You",
        description:
          "Systems are built to expand as your business grows, not to be rebuilt every time it does.",
      },
      {
        icon: Bot,
        title: "Nothing Falls Through the Cracks",
        description:
          "Automated follow-ups and handoffs mean leads never go cold from a missed step.",
      },
    ],
    process: [
      {
        step: "01",
        icon: SearchCheck,
        title: "Audit",
        description:
          "We map your workflows, tools, and data to find where automation will save the most time and money.",
      },
      {
        step: "02",
        icon: PenTool,
        title: "Design",
        description:
          "We design the automation blueprint — logic, integrations, and guardrails — and review it with you before building.",
      },
      {
        step: "03",
        icon: Cpu,
        title: "Build & Test",
        description:
          "Our engineers build the AI agents and automations, then test them against real data before anything goes live.",
      },
      {
        step: "04",
        icon: Rocket,
        title: "Launch & Optimize",
        description:
          "We launch with monitoring in place, train your team, and keep refining performance every month.",
      },
    ],
    deliverables: [
      "Workflow audit and automation roadmap",
      "Custom AI agents and chatbots trained on your business",
      "Workflow and CRM automation, fully integrated",
      "Guardrails, error handling, and human-in-the-loop approvals",
      "Live performance dashboard",
      "Ongoing monitoring, retraining, and optimization",
    ],
    faqs: [
      {
        question: "What is AI automation and how does it work?",
        answer:
          "AI automation uses AI agents and workflow software to handle repetitive tasks — like lead research, data entry, and follow-ups — without manual effort. We connect these systems directly to the tools you already use, so work moves forward automatically.",
      },
      {
        question: "How long does it take to launch an automation?",
        answer:
          "Most single-workflow projects launch within 2-4 weeks of kickoff, from discovery through testing. Larger multi-system builds typically take 6-10 weeks depending on integration complexity.",
      },
      {
        question: "Will I lose control once a process is automated?",
        answer:
          "No. Every system we build includes accuracy checks and human-in-the-loop approval steps for anything sensitive, so you always have oversight and can adjust the automation at any time.",
      },
      {
        question: "Which tools and platforms do you integrate with?",
        answer:
          "We regularly integrate with popular CRMs (HubSpot, Salesforce, Pipedrive), email and calendar platforms, spreadsheets, and custom internal tools via API. If your stack isn't listed, we can almost always still connect to it.",
      },
      {
        question: "What does AI automation cost?",
        answer:
          "Plans start at $1,500/month for a single automated workflow or lead engine. Pricing depends on the number of workflows and integrations involved — book a free audit and we'll scope an exact quote.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Every plan includes ongoing monitoring and optimization. We track performance, retrain and adjust as needed, and meet with you regularly to identify the next highest-impact automation opportunity.",
      },
    ],
  },
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    metaTitle: "Website Development Services That Convert",
    metaDescription:
      "Custom, high-performance websites built to turn visitors into leads. GetFluxGrowth designs and develops fast, SEO-ready sites for growing businesses. Book a free audit.",
    keywords: [
      "Website Development",
      "Business Website Design",
      "Landing Page Development",
      "Next.js Developer",
      "Conversion-Focused Web Design",
    ],
    hero: {
      eyebrow: "Website Development",
      prefix: "A website that ",
      highlight: "actually converts visitors into customers",
      subheadline:
        "We design and build fast, modern websites engineered around one goal — turning traffic into leads and leads into revenue.",
      trustPoints: [
        "Free website audit, no obligation",
        "Built on modern, fast-loading tech",
        "Designed around conversion, not just looks",
      ],
    },
    aiQuickAnswer:
      "Website development is the process of designing, building, and launching a website that supports a business's goals — usually generating leads or sales. GetFluxGrowth builds custom, conversion-focused websites using modern frameworks like Next.js, optimized for speed, SEO, and mobile, so every visitor has the best possible chance of becoming a customer.",
    problem: {
      eyebrow: "The Problem",
      title: "Your website is costing you customers, not creating them",
      description:
        "Most business websites look fine but quietly leak leads — slow load times, unclear messaging, and no real path to conversion.",
      points: [
        {
          title: "Slow load times send visitors to a competitor",
          description:
            "Every extra second of load time measurably increases bounce rate, especially on mobile.",
        },
        {
          title: "Visitors don't know what to do next",
          description:
            "Without a clear path to action, even interested visitors leave without contacting you.",
        },
        {
          title: "It doesn't rank, so nobody finds it",
          description:
            "A site that isn't built with SEO in mind stays invisible to the customers actively searching for you.",
        },
        {
          title: "It's outdated and hard to update",
          description:
            "Old templates and clunky CMS platforms mean every change takes a developer and a week.",
        },
      ],
    },
    solution: {
      eyebrow: "The Solution",
      title: "A fast, modern website built around conversion",
      description:
        "We design every page around a single question: what does this visitor need to see to take the next step? Then we build it on technology that's fast, secure, and easy to maintain.",
      points: [
        "Custom design built around your brand and your customer's journey",
        "Built on modern, high-performance frameworks (Next.js, React)",
        "SEO-ready structure, schema, and page speed from day one",
        "Clear calls-to-action and conversion paths on every page",
      ],
    },
    benefits: [
      {
        icon: Zap,
        title: "Loads in a Blink",
        description:
          "Performance-first builds that score high on Core Web Vitals, so visitors never bounce over slow load times.",
      },
      {
        icon: Target,
        title: "Built to Convert",
        description:
          "Every layout, headline, and CTA is designed around turning visitors into booked calls or sales.",
      },
      {
        icon: Smartphone,
        title: "Looks Great Everywhere",
        description:
          "Fully responsive design that works flawlessly on phones, tablets, and desktops.",
      },
      {
        icon: Search,
        title: "SEO-Ready From Day One",
        description:
          "Technical SEO, schema, and clean structure are built in, not bolted on afterward.",
      },
      {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        description:
          "Modern hosting and clean code mean less downtime and fewer security headaches.",
      },
      {
        icon: Sprout,
        title: "Easy to Grow",
        description:
          "A flexible foundation you can add pages, features, and content to as your business grows.",
      },
    ],
    process: [
      {
        step: "01",
        icon: SearchCheck,
        title: "Discover",
        description:
          "We learn your business, your customers, and your goals to define what the website needs to achieve.",
      },
      {
        step: "02",
        icon: PenTool,
        title: "Design",
        description:
          "We design every page around your brand and your customer's journey, and review it with you before we build.",
      },
      {
        step: "03",
        icon: Cpu,
        title: "Build",
        description:
          "We develop the site on a fast, modern stack, testing performance and functionality against real devices.",
      },
      {
        step: "04",
        icon: Rocket,
        title: "Launch & Grow",
        description:
          "We launch, monitor performance, and keep optimizing pages for speed and conversion.",
      },
    ],
    deliverables: [
      "Custom-designed, fully responsive website",
      "Built on a fast, modern framework (Next.js/React)",
      "On-page SEO setup: schema, meta tags, sitemap",
      "Conversion-focused copy and calls-to-action",
      "Analytics and lead-tracking setup",
      "30 days of post-launch support",
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Most business websites launch within 3-6 weeks from kickoff, depending on the number of pages and features. Larger e-commerce or custom builds typically take 8-12 weeks.",
      },
      {
        question: "What platform do you build on?",
        answer:
          "We build primarily on Next.js and React for speed and flexibility, and can also work within WordPress or Shopify if that fits your team better.",
      },
      {
        question: "Will my website be optimized for SEO?",
        answer:
          "Yes. Every site we build includes clean semantic structure, schema markup, fast load times, and an XML sitemap — the technical foundation SEO depends on.",
      },
      {
        question: "Can I update the website myself after launch?",
        answer:
          "Yes. We set you up with an easy-to-use content system so your team can update text, images, and blog posts without touching code.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "Every project is scoped and quoted individually based on pages, features, and complexity. Book a free strategy call and we'll give you a fixed quote before any work begins.",
      },
      {
        question: "Do you also handle ongoing maintenance?",
        answer:
          "Yes, we offer ongoing maintenance and optimization plans so your site keeps performing after launch.",
      },
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "SEO",
    metaTitle: "SEO Services That Drive Organic Growth",
    metaDescription:
      "Rank higher and get found by customers actively searching for you. GetFluxGrowth delivers technical SEO, content, and AI search optimization built for growth. Book a free audit.",
    keywords: [
      "SEO Services",
      "Technical SEO",
      "Local SEO",
      "AI Search Optimization",
      "Search Engine Optimization Agency",
    ],
    hero: {
      eyebrow: "SEO",
      prefix: "Get found by customers ",
      highlight: "who are already searching for you",
      subheadline:
        "We combine technical SEO, content, and AI search optimization to help your business rank higher on Google — and show up in AI answers like ChatGPT and AI Overviews.",
      trustPoints: [
        "Free SEO audit, no obligation",
        "Built for Google and AI search engines",
        "Transparent, plain-language reporting",
      ],
    },
    aiQuickAnswer:
      "SEO (search engine optimization) is the practice of improving a website so it ranks higher in search results and gets found by more of the right customers. GetFluxGrowth's SEO service covers technical fixes, content strategy, local SEO, and AI search optimization — so your business shows up not just on Google, but in AI-generated answers from tools like ChatGPT, Perplexity, and Google AI Overviews.",
    problem: {
      eyebrow: "The Problem",
      title: "Your customers are searching — but finding your competitors",
      description:
        "Every day, people actively search for what you offer. If your site isn't optimized, that traffic goes straight to a competitor who is.",
      points: [
        {
          title: "Your site isn't ranking for the terms that matter",
          description:
            "Without the right technical and content foundation, Google has no reason to rank you above competitors.",
        },
        {
          title: "Technical issues are quietly blocking your rankings",
          description:
            "Slow pages, broken links, and missing schema hold back sites that otherwise deserve to rank.",
        },
        {
          title: "You're invisible in AI search results",
          description:
            "ChatGPT, Perplexity, and AI Overviews are becoming a real source of traffic — and most sites aren't structured to be cited by them.",
        },
        {
          title: "Local customers can't find you nearby",
          description:
            "Without proper local SEO, your business gets skipped over in map results and local search.",
        },
      ],
    },
    solution: {
      eyebrow: "The Solution",
      title: "An SEO system built for Google and AI search",
      description:
        "We fix the technical foundation, build content that answers real customer questions, and structure your site so it can be cited by both search engines and AI assistants.",
      points: [
        "Technical SEO audit and fixes: speed, crawlability, schema",
        "Content strategy built around real search intent",
        "Local SEO for map pack and 'near me' visibility",
        "AI search optimization for ChatGPT, Perplexity, and AI Overviews",
      ],
    },
    benefits: [
      {
        icon: ArrowUpRight,
        title: "Higher Rankings",
        description:
          "Technical and content SEO built to move your key pages up the results, not just maintain where you are.",
      },
      {
        icon: Search,
        title: "More Organic Traffic",
        description:
          "Get found by the customers already searching for what you offer, without paying for every click.",
      },
      {
        icon: MapPin,
        title: "Local Visibility",
        description:
          "Show up in map results and 'near me' searches where local customers are looking.",
      },
      {
        icon: Sparkles,
        title: "Show Up in AI Answers",
        description:
          "Structured, citable content built to be pulled into ChatGPT, Perplexity, and Google AI Overviews.",
      },
      {
        icon: Gauge,
        title: "A Faster, Healthier Site",
        description:
          "Technical fixes improve both rankings and the experience for every visitor who lands on your site.",
      },
      {
        icon: BarChart3,
        title: "Clear Reporting",
        description:
          "Plain-language monthly reports that show exactly what moved and why.",
      },
    ],
    process: [
      {
        step: "01",
        icon: SearchCheck,
        title: "Audit",
        description:
          "We run a full technical, content, and competitive audit to find exactly what's holding your rankings back.",
      },
      {
        step: "02",
        icon: PenTool,
        title: "Strategy",
        description:
          "We build a prioritized roadmap targeting the keywords and pages with the fastest path to results.",
      },
      {
        step: "03",
        icon: Cpu,
        title: "Implement",
        description:
          "We fix technical issues, optimize existing pages, and build new content targeting real search intent.",
      },
      {
        step: "04",
        icon: Rocket,
        title: "Track & Grow",
        description:
          "We monitor rankings and traffic monthly, doubling down on what's working and adjusting what isn't.",
      },
    ],
    deliverables: [
      "Full technical and competitive SEO audit",
      "On-page optimization across priority pages",
      "Content and keyword strategy roadmap",
      "Schema markup and AI search optimization",
      "Local SEO and Google Business Profile optimization",
      "Monthly ranking and traffic reports",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Most sites start seeing measurable movement within 8-12 weeks, with significant ranking and traffic growth building over 4-6 months. SEO compounds — early wins keep growing over time.",
      },
      {
        question: "What is AI search optimization?",
        answer:
          "It's the practice of structuring your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews can understand, trust, and cite it in their answers — using clear structure, direct answers, and structured data.",
      },
      {
        question: "Do you guarantee a #1 ranking?",
        answer:
          "No ethical SEO agency can guarantee a specific ranking — anyone who does is misleading you. We focus on the technical and content fundamentals that reliably drive rankings and traffic up over time.",
      },
      {
        question: "Is SEO better than paid ads?",
        answer:
          "They serve different purposes. SEO builds compounding, long-term traffic that keeps working after you stop actively investing in it; ads stop the moment you stop paying. Most businesses benefit from both.",
      },
      {
        question: "Do you handle local SEO too?",
        answer:
          "Yes. We optimize your Google Business Profile, build local citations, and structure location pages so you show up in map results and 'near me' searches.",
      },
      {
        question: "What does SEO cost?",
        answer:
          "Pricing depends on your site's current state, competition, and goals. Book a free SEO audit and we'll give you a clear, fixed quote before any work begins.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
