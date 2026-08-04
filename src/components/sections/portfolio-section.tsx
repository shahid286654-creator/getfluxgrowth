import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { ProjectCard } from "@/components/shared/project-card";
import { portfolioProjects } from "@/lib/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="A selection of demo projects showcasing my web development and design work."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolioProjects.map((project) => (
            <FadeInStaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
