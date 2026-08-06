import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/shared/fade-in";
import { ProjectCard } from "@/components/shared/project-card";
import { portfolioProjects } from "@/lib/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          description="Self-directed demo projects — not client work — built to show how we design and develop real, conversion-focused websites."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolioProjects.map((project) => (
            <FadeInStaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="gap-2 border-white/15 bg-white/5 hover:bg-white/10"
          >
            <Link href="/portfolio">
              View Full Portfolio <ArrowRight className="size-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
