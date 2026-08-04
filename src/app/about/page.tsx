import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { FounderPhoto } from "@/components/shared/founder-photo";
import { LinkedinIcon } from "@/components/shared/social-icons";
import { CtaSection } from "@/components/sections/cta-section";
import { companyValues } from "@/lib/data/values";
import { founder } from "@/lib/data/founder";
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
                <FounderPhoto src="/images/shahid-anwar.jpg" alt={founder.name} />
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
                    className="gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white hover:opacity-90"
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

      <CtaSection />
    </>
  );
}
