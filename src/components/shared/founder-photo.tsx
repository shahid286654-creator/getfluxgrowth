import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface FounderPhotoProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: "md" | "lg";
  priority?: boolean;
}

export function FounderPhoto({
  src,
  alt = "Founder photo",
  className,
  size = "lg",
  priority = false,
}: FounderPhotoProps) {
  const dimensions = size === "lg" ? "size-48 sm:size-56 md:size-64" : "size-24 sm:size-28";

  return (
    <div className={cn("relative mx-auto shrink-0", dimensions, className)}>
      <div className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-br from-brand-500/40 via-brand-300/20 to-transparent blur-2xl" />
      <div className="relative size-full rounded-full bg-gradient-to-br from-brand-400 via-brand-300 to-brand-600 p-[3px] shadow-[0_0_60px_-12px_rgba(200,154,58,0.5)]">
        <div className="relative size-full overflow-hidden rounded-full bg-background">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 16rem, (min-width: 640px) 14rem, 10rem"
              className="object-cover"
              priority={priority}
            />
          ) : (
            <div
              role="img"
              aria-label="Founder photo placeholder"
              className="flex size-full items-center justify-center bg-gradient-to-br from-brand-500/10 via-white/[0.02] to-brand-300/10 text-brand-300"
            >
              <User className="size-10" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
