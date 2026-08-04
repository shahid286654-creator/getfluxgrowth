import { ArrowUpRight } from "lucide-react";
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
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="border-white/15 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <Button
          asChild
          variant="outline"
          className="mt-6 w-fit gap-2 border-white/15 bg-white/5 hover:bg-white/10"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Live Demo <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
