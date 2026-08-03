import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { portfolioItems } from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See how GetFluxGrowth's AI automation systems have driven measurable results for businesses in logistics, real estate, healthcare, SaaS, e-commerce, and financial services.",
  alternates: { canonical: `${siteConfig.url}/portfolio` },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Automation systems, proven in production"
            description="A selection of the AI systems we've designed and shipped for clients across industries — each one built to solve a specific, measurable business problem."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {portfolioItems.map((item) => (
              <FadeInStaggerItem key={item.slug}>
                <article className="glass-card flex h-full flex-col rounded-2xl p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="bg-brand-500/10 text-brand-300">
                      {item.industry}
                    </Badge>
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/15">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="mt-5 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand-300">
                    {item.client}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty">
                    {item.summary}
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                    {item.results.map((result) => (
                      <div key={result.label}>
                        <div className="text-xl font-semibold text-foreground">
                          {result.value}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
