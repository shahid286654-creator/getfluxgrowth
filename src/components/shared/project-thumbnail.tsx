import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProjectThumbnail({ src, alt, className }: ProjectThumbnailProps) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </div>
  );
}
