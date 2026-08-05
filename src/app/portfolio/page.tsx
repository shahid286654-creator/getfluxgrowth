import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { ProjectCard } from "@/components/shared/project-card";
import { JsonLd } from "@/components/shared/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { portfolioProjects } from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Featured demo projects showcasing GetFluxGrowth's web development and design work.",
  path: "/portfolio",
  keywords: ["Website Development", "Next.js Developer", "Web Design Portfolio"],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
        ])}
      />
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Featured Projects"
            description="A selection of demo projects showcasing my web development and design work."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {portfolioProjects.map((project) => (
              <FadeInStaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
