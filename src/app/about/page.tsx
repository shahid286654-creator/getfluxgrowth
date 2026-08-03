import type { Metadata } from "next";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { companyValues } from "@/lib/data/values";
import { teamMembers } from "@/lib/data/team";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "GetFluxGrowth is an AI automation agency helping businesses find leads, automate workflows, and scale without adding headcount.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="We build the AI systems your team wishes it had time to build"
            description="GetFluxGrowth was founded on a simple observation: most businesses don't have a lead problem, they have a time problem. We exist to give that time back."
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our story
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-pretty">
              <p>
                GetFluxGrowth started in 2026 after years of watching sales
                and operations teams drown in the same repetitive work:
                manually researching prospects, copy-pasting data between
                tools, and writing the same outreach messages over and over.
              </p>
              <p>
                We saw that large language models had finally gotten good
                enough to do that work reliably — not replace judgment, but
                remove the busywork standing between a team and its next
                customer.
              </p>
              <p>
                Today, we design and operate custom AI automation systems for
                businesses that want to grow without growing their headcount
                at the same rate — from freight brokerages to healthcare
                practices to SaaS sales teams.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-card grid grid-cols-2 gap-6 rounded-3xl p-8">
              <div>
                <div className="text-3xl font-semibold text-gradient">6+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Industries served
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gradient">10K+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Leads sourced monthly for clients
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gradient">500+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Hours of manual work automated weekly
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-gradient">100%</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Remote-first, worldwide delivery
                </div>
              </div>
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
          <SectionHeading eyebrow="Our Team" title="The people behind your automation" />
          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {teamMembers.map((member) => (
              <FadeInStaggerItem key={member.name}>
                <div className="glass-card flex h-full flex-col items-center gap-4 rounded-2xl p-8 text-center">
                  <Avatar className="size-16 border border-white/10">
                    <AvatarFallback className="bg-brand-500/20 text-lg text-brand-200">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-brand-300">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
