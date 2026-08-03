import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/fade-in";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <FadeIn
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-300 uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          align === "center" ? "max-w-3xl" : "max-w-2xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base text-muted-foreground text-pretty sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
