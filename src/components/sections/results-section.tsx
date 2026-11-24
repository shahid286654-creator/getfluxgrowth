import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { PillLink } from "@/components/sections/hero";

// shortcut: hand-traced from Google Search Console daily clicks (Aug–Nov 2026), update when numbers grow
const dailyClicks = [
  2, 4, 6, 10, 6, 8, 10, 6, 8, 5, 30, 15, 20, 28, 18, 25, 40, 42, 90, 230, 260,
  350, 280, 200, 170, 200, 150, 130, 180, 220, 150, 180, 140, 210, 190, 240,
  270, 300, 280, 265,
];

const stats = [
  { value: "10,133", label: "Organic search clicks" },
  { value: "~300/day", label: "Clicks at current pace" },
  { value: "3 months", label: "From launch to here" },
  { value: "$0", label: "Spent on ads" },
];

export function ResultsSection() {
  return (
    <section id="results" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/40 to-transparent" />
        <div className="absolute top-1/2 right-[-10%] h-[36rem] w-[36rem] -translate-y-1/2 rounded-full glow-brand blur-3xl" />
        <div className="bg-stars absolute inset-0" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container>
        <FadeIn className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:order-2">
            <span className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-xs">
              <span className="size-2.5 rounded-full bg-white shadow-[0_0_12px_2px_rgba(147,197,253,0.9)]" />
              Proof, not promises
            </span>
            <h2 className="mt-6 text-4xl font-light tracking-tight text-balance sm:text-6xl">
              I grew my own site <span className="text-gradient">before I pitched yours</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground text-pretty">
              Every tactic I sell, I tested first on{" "}
              <a
                href="https://fluxgrowth.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-brand-400/60 underline-offset-4 hover:decoration-brand-300"
              >
                fluxgrowth.io
              </a>
              . It started with zero traffic. Today Google sends it a steady
              stream of visitors every day — no ads, no shortcuts. Your business
              gets the exact same playbook.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse border-l border-white/15 pl-4">
                  <dt className="mt-1 text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="text-2xl font-light tracking-tight">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <PillLink href="/contact">Grow my business like this</PillLink>
            </div>
          </div>

          <div className="lg:col-span-5 lg:order-1">
            <TrafficChart />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function TrafficChart() {
  const w = 400;
  const h = 220;
  const max = Math.max(...dailyClicks);
  const points = dailyClicks.map(
    (v, i) => `${(i / (dailyClicks.length - 1)) * w},${h - (v / max) * (h - 10)}`,
  );
  const line = `M${points.join(" L")}`;

  return (
    <div className="relative">
      <div className="absolute inset-6 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 shadow-[0_40px_80px_-30px_rgba(59,130,246,0.6)] backdrop-blur-2xl sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="size-5 rounded-full border-4 border-white/90 bg-brand-400" />
            <p className="font-medium">Performance</p>
          </div>
          <p className="text-xs text-muted-foreground">Google Search Console</p>
        </div>
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="mt-8 h-auto w-full text-brand-300"
          role="img"
          aria-label="Daily organic search clicks to fluxgrowth.io rising from near zero in August to around 300 per day by November 2026"
        >
          <defs>
            <linearGradient id="traffic-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${line} L${w},${h} L0,${h} Z`} fill="url(#traffic-fill)" />
          <path
            d={line}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
        </div>
        <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
          <p className="text-sm text-muted-foreground">fluxgrowth.io</p>
          <p className="text-right">
            <span className="block text-3xl font-light">10,133</span>
            <span className="text-xs text-muted-foreground">total clicks</span>
          </p>
        </div>
      </div>
    </div>
  );
}
