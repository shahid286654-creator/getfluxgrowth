import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { FounderPhoto } from "@/components/shared/founder-photo";
import { LinkedinIcon } from "@/components/shared/social-icons";
import { JsonLd } from "@/components/shared/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { companyValues } from "@/lib/data/values";
import { founder } from "@/lib/data/founder";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "GetFluxGrowth is an AI automation agency helping businesses find leads, automate workflows, and scale without adding headcount.",
  path: "/about",
  keywords: ["AI Automation Agency", "About GetFluxGrowth", "Shahid Anwar"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />
      <JsonLd data={personSchema()} />
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-brand blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="About Us"
            title="We build the AI systems your team wishes it had time to build"
            description="GetFluxGrowth was founded on a simple observation: most businesses don't have a lead problem, they have a time problem. We exist to give that time back."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our story
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-pretty">
              <p>
                GetFluxGrowth started after years of watching sales and
                operations teams drown in the same repetitive work: manually
                researching prospects, copy-pasting data between tools, and
                writing the same outreach messages over and over.
              </p>
              <p>
                Large language models have finally gotten good enough to do
                that work reliably — not replace judgment, but remove the
                busywork standing between a team and its next customer.
              </p>
              <p>
                Today, GetFluxGrowth designs and builds custom AI automation
                systems for businesses that want to grow without growing
                their headcount at the same rate.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What guides how we build" />
          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <FadeInStaggerItem key={value.title}>
                <div className="glass-card flex h-full flex-col gap-4 rounded-2xl p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                    <value.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading eyebrow="Founder" title="The person behind your automation" />
          <FadeIn className="mt-14">
            <div className="glass-card grid grid-cols-1 items-center gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-5">
              <div className="flex justify-center lg:col-span-2">
                <FounderPhoto src="/media/images/shahid-anwar.jpg" alt={founder.name} />
              </div>
              <div className="text-center lg:col-span-3 lg:text-left">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-300">
                  {founder.role}
                </p>
                <p className="mt-5 text-muted-foreground text-pretty">
                  {founder.bio}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                  <Button
                    asChild
                    className="gap-2 bg-gradient-to-r from-brand-500 to-brand-300 text-brand-950 hover:opacity-90"
                  >
                    <Link href="/contact">
                      Work With Me <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-muted-foreground transition-colors hover:border-brand-400/40 hover:text-foreground"
                  >
                    <LinkedinIcon className="size-4.5" />
                  </a>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-muted-foreground transition-colors hover:border-brand-400/40 hover:text-foreground"
                  >
                    <MessageCircle className="size-4.5" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label="Email"
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-muted-foreground transition-colors hover:border-brand-400/40 hover:text-foreground"
                  >
                    <Mail className="size-4.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium tracking-widest text-brand-300 uppercase">
                  Proof, not promises
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  I grew my own site before I ever pitched yours
                </h2>
                <p className="mt-5 text-muted-foreground text-pretty">
                  Before offering SEO to clients, I tested every tactic on{" "}
                  <a
                    href="https://fluxgrowth.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline decoration-brand-400/50 underline-offset-4 hover:decoration-brand-300"
                  >
                    fluxgrowth.io
                  </a>
                  , my own site. Starting from zero, it now pulls in steady
                  organic traffic from Google — no ads, no shortcuts. The same
                  playbook is what I use for every business I work with.
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <dt className="text-xs text-muted-foreground">Search clicks</dt>
                    <dd className="mt-1 text-2xl font-semibold text-brand-300">10,133</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Timeframe</dt>
                    <dd className="mt-1 text-2xl font-semibold">3 mo</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Ad spend</dt>
                    <dd className="mt-1 text-2xl font-semibold">$0</dd>
                  </div>
                </dl>
              </div>
              <TrafficChart />
            </div>
          </FadeIn>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}

// shortcut: hand-traced from Google Search Console daily clicks (Aug–Nov 2026), update when numbers grow
const dailyClicks = [
  2, 4, 6, 10, 6, 8, 10, 6, 8, 5, 30, 15, 20, 28, 18, 25, 40, 42, 90, 230, 260,
  350, 280, 200, 170, 200, 150, 130, 180, 220, 150, 180, 140, 210, 190, 240,
  270, 300, 280, 265,
];

function TrafficChart() {
  const w = 400;
  const h = 220;
  const max = Math.max(...dailyClicks);
  const points = dailyClicks.map(
    (v, i) => `${(i / (dailyClicks.length - 1)) * w},${h - (v / max) * (h - 10)}`,
  );
  const line = `M${points.join(" L")}`;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium">fluxgrowth.io — organic clicks</p>
        <p className="text-xs text-muted-foreground">Google Search Console</p>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="mt-6 h-auto w-full text-brand-400"
        role="img"
        aria-label="Daily organic search clicks rising from near zero in August to around 300 per day by November 2026"
      >
        <defs>
          <linearGradient id="traffic-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${line} L${w},${h} L0,${h} Z`} fill="url(#traffic-fill)" />
        <path
          d={line}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <div className="mt-3 flex justify-between text-xs text-muted-foreground">
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
      </div>
    </div>
  );
}
