import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore GetFluxGrowth's AI automation services: lead generation, website audits, personalized outreach, workflow automation, AI agents, and CRM enrichment.",
  alternates: { canonical: `${siteConfig.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="AI automation, built around your business"
            description="Every engagement starts with a free audit of your current workflow. From there, we design and build the exact automation systems that will move the needle fastest."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="space-y-6">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.05}>
              <div
                id={service.slug}
                className="glass-card grid scroll-mt-24 grid-cols-1 gap-8 rounded-3xl p-8 sm:p-10 lg:grid-cols-5"
              >
                <div className="lg:col-span-2">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                    <service.icon className="size-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground text-pretty">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 gap-2 border-white/15 bg-white/5 hover:bg-white/10"
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
                <div className="lg:col-span-3">
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-300" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
