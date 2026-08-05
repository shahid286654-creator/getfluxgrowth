import Image from "next/image";
import { urlFor } from "@/sanity/image";
import { cn } from "@/lib/utils";
import type { SanityImage } from "@/sanity/types";

export function PostThumbnail({
  image,
  className,
  priority = false,
}: {
  image: SanityImage;
  className?: string;
  priority?: boolean;
}) {
  const src = urlFor(image.asset).width(1200).height(675).fit("crop").url();

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5",
        className
      )}
    >
      <Image
        src={src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={priority}
      />
    </div>
  );
}
