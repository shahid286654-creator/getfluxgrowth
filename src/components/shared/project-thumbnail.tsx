import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  src: string;
  alt: string;
  className?: string;
  /** When provided, renders a browser-chrome frame with this URL above the preview. */
  url?: string;
}

export function ProjectThumbnail({
  src,
  alt,
  className,
  url,
}: ProjectThumbnailProps) {
  const displayUrl = url?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-xl border border-white/10 bg-white/5",
        className
      )}
    >
      {displayUrl ? (
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
          <span className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/60" />
            <span className="size-2.5 rounded-full bg-yellow-400/60" />
            <span className="size-2.5 rounded-full bg-green-400/60" />
          </span>
          <span className="ml-2 truncate rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            {displayUrl}
          </span>
        </div>
      ) : null}
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}
