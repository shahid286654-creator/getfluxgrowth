import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { ProjectCaseStudy } from "@/components/shared/project-case-study";
import { JsonLd } from "@/components/shared/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { portfolioProjects } from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Featured demo projects showcasing GetFluxGrowth's web development and design work — the challenge, solution, and business impact behind each build.",
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
            description="A selection of demo projects showcasing our web development and design work — the challenge, the build, and the business outcome each one was designed to drive."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <FadeIn className="glass-card mx-auto max-w-3xl rounded-2xl p-6 text-center sm:p-8">
            <p className="text-sm text-muted-foreground text-pretty">
              <span className="font-semibold text-foreground">
                A note on these projects:
              </span>{" "}
              every case study below is a self-directed demo build created to
              show how we design, build, and think about conversion — not
              paid client work. Client results are shared privately, with
              permission.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="flex flex-col gap-8">
          {portfolioProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <ProjectCaseStudy project={project} />
            </FadeIn>
          ))}
        </Container>
      </section>

      <CtaSection
        title="Want a website like these built for your business?"
        description="Book a free strategy call and we'll show you exactly what a conversion-focused website could look like for you."
      />
    </>
  );
}
