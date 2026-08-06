import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectThumbnail } from "@/components/shared/project-thumbnail";
import type { PortfolioProject } from "@/lib/data/portfolio";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="glass-card flex h-full flex-col overflow-hidden rounded-2xl p-3">
      <ProjectThumbnail
        src={project.thumbnail}
        alt={`${project.title} homepage preview`}
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <Badge className="border-brand-400/30 bg-brand-500/10 text-brand-300 uppercase" variant="outline">
            Demo Project
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="border-white/15 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="w-fit gap-2 border-white/15 bg-white/5 hover:bg-white/10"
          >
            <Link href={`/portfolio#${project.slug}`}>
              View Case Study <ArrowRight className="size-4" />
            </Link>
          </Button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Live Demo <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
