import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectThumbnail } from "@/components/shared/project-thumbnail";
import type { PortfolioProject } from "@/lib/data/portfolio";

export function ProjectCaseStudy({ project }: { project: PortfolioProject }) {
  return (
    <div
      id={project.slug}
      className="glass-card scroll-mt-24 overflow-hidden rounded-3xl"
    >
      <div className="p-3 sm:p-4">
        <ProjectThumbnail
          src={project.thumbnail}
          alt={`${project.title} homepage preview`}
          url={project.url}
        />
      </div>

      <div className="p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            className="border-brand-400/30 bg-brand-500/10 text-brand-300 uppercase"
            variant="outline"
          >
            Demo Project
          </Badge>
          <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {project.category}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
          {project.tagline}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-300 uppercase">
              <AlertCircle className="size-4" />
              Challenge
            </h3>
            <p className="mt-3 text-sm text-foreground/90 text-pretty">
              {project.challenge}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-300 uppercase">
              <Lightbulb className="size-4" />
              Solution
            </h3>
            <p className="mt-3 text-sm text-foreground/90 text-pretty">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold tracking-wide text-brand-300 uppercase">
            Key Features
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-300" />
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold tracking-wide text-brand-300 uppercase">
            Technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-white/15 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-brand-400/20 bg-brand-500/[0.06] p-6">
          <TrendingUp className="mt-0.5 size-5 shrink-0 text-brand-300" />
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-brand-300 uppercase">
              Business Impact
            </h3>
            <p className="mt-2 text-sm text-foreground/90 text-pretty">
              {project.businessImpact}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white hover:opacity-90"
          >
            <Link href="/contact">
              Get a Website Like This <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="gap-2 border-white/15 bg-white/5 hover:bg-white/10"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Live Demo <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
