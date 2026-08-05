import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/fade-in";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
}) {
  const content = (
    <>
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-300 uppercase">
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          align === "center" ? "max-w-3xl" : "max-w-2xl"
        )}
      >
        {title}
      </Heading>
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
    </>
  );

  const wrapperClassName = cn(
    "flex flex-col gap-4",
    align === "center" ? "items-center text-center" : "items-start text-left",
    className
  );

  // Page-level h1 headings are always above the fold and are the LCP
  // candidate on every route (no page uses a hero image). Render them with
  // a CSS-only entrance animation so paint doesn't wait on client JS
  // hydration. h2s are below-the-fold scroll reveals, so they keep the
  // framer-motion viewport-triggered FadeIn.
  if (Heading === "h1") {
    return (
      <div
        className={cn(
          wrapperClassName,
          "animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-600 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]"
        )}
      >
        {content}
      </div>
    );
  }

  return <FadeIn className={wrapperClassName}>{content}</FadeIn>;
}
