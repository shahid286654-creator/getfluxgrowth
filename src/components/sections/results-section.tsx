import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { PillLink } from "@/components/sections/hero";
import { SearchConsoleChart } from "@/components/sections/search-console-chart";
import { searchConsoleDaily, searchConsoleTotals } from "@/lib/data/search-console";

const nf = new Intl.NumberFormat("en-US");
const firstDay = searchConsoleDaily[0];
const lastDay = searchConsoleDaily[searchConsoleDaily.length - 1];

const stats = [
  { value: nf.format(searchConsoleTotals.clicks), label: "Visitors from Google search" },
  { value: `${Math.floor(searchConsoleTotals.impressions / 1000)}K+`, label: "Times shown in search results" },
  {
    value: `#${Math.round(searchConsoleTotals.firstPosition)} → #${Math.round(searchConsoleTotals.lastPosition)}`,
    label: "Average Google position",
  },
  { value: "$0", label: "Spent on ads" },
];

export function ResultsSection() {
  return (
    <section id="results" className="relative scroll-mt-24 overflow-clip py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/40 to-transparent" />
        <div className="absolute top-1/2 right-[-10%] h-[36rem] w-[36rem] -translate-y-1/2 rounded-full glow-brand blur-3xl" />
        <div className="bg-stars absolute inset-0" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <Container>
        <FadeIn className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:order-2 lg:col-span-5">
            <span className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-xs">
              <span className="size-2.5 rounded-full bg-white shadow-[0_0_12px_2px_rgba(147,197,253,0.9)]" />
              Real Google Search Console data
            </span>
            <h2 className="mt-6 text-4xl font-light tracking-tight text-balance sm:text-5xl">
              I grew my own site <span className="text-gradient">before I pitched yours</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-pretty">
              Every tactic I sell, I tested first on{" "}
              <a
                href="https://fluxgrowth.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-brand-400/60 underline-offset-4 hover:decoration-brand-300"
              >
                fluxgrowth.io
              </a>
              . In three months it went from {firstDay[1]} Google visitors a day
              to {lastDay[1]}+ a day — no ads, no shortcuts. Your business gets
              the exact same playbook.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
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

          <div className="lg:order-1 lg:col-span-7">
            <SearchConsoleChart />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
