import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

/**
 * Abstract ascending-bars + flux-swoosh mark. Intentionally monoline/no
 * colored chip — reads as a boutique agency mark rather than a stock
 * "icon in a gradient square" template.
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fg-gold" x1="2" y1="28" x2="30" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-brand-300)" />
          <stop offset="1" stopColor="var(--color-brand-600)" />
        </linearGradient>
      </defs>
      <rect x="3" y="19" width="5" height="9" rx="1" fill="url(#fg-gold)" />
      <rect x="11.5" y="13" width="5" height="15" rx="1" fill="url(#fg-gold)" />
      <rect x="20" y="6" width="5" height="22" rx="1" fill="url(#fg-gold)" />
      <path
        d="M4 16.5 L13 10 L21.5 13.5 L29 4.5"
        stroke="url(#fg-gold)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 4.5H29V10"
        stroke="url(#fg-gold)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markClassName?: string;
}

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="text-lg font-semibold tracking-tight">
        Get<span className="text-gradient">Flux</span>Growth
      </span>
    </span>
  );
}
