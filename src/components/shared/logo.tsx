import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline text-[1.375rem] leading-none tracking-[-0.045em] select-none",
        className
      )}
    >
      <span className="font-light text-foreground/55">get</span>
      <span className="font-semibold text-foreground">flux</span>
      <span className="font-light text-foreground">growth</span>
      <span
        aria-hidden="true"
        className="ml-[0.06em] inline-block size-[0.26em] rounded-full bg-brand-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]"
      />
    </span>
  );
}
