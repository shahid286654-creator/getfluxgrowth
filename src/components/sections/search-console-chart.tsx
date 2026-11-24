"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { searchConsoleDaily, searchConsoleTotals } from "@/lib/data/search-console";

type MetricKey = "clicks" | "impressions" | "ctr" | "position";

const nf = new Intl.NumberFormat("en-US");
const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
const dayFmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

const metrics: {
  key: MetricKey;
  label: string;
  total: string;
  value: (d: (typeof searchConsoleDaily)[number]) => number;
  format: (v: number) => string;
  // Lower average position is better, so its chart is flipped to read "up = good".
  invert?: boolean;
}[] = [
  {
    key: "clicks",
    label: "Total clicks",
    total: nf.format(searchConsoleTotals.clicks),
    value: (d) => d[1],
    format: (v) => nf.format(v),
  },
  {
    key: "impressions",
    label: "Total impressions",
    total: compact.format(searchConsoleTotals.impressions),
    value: (d) => d[2],
    format: (v) => nf.format(v),
  },
  {
    key: "ctr",
    label: "Average CTR",
    total: `${searchConsoleTotals.ctr.toFixed(1)}%`,
    value: (d) => (d[1] / d[2]) * 100,
    format: (v) => `${v.toFixed(1)}%`,
  },
  {
    key: "position",
    label: "Average position",
    total: searchConsoleTotals.position.toFixed(1),
    value: (d) => d[3],
    format: (v) => v.toFixed(1),
    invert: true,
  },
];

const W = 600;
const H = 240;
const PAD = 8;

export function SearchConsoleChart() {
  const [active, setActive] = useState<MetricKey>("clicks");
  const [hover, setHover] = useState<number | null>(null);

  const metric = metrics.find((m) => m.key === active)!;
  const values = searchConsoleDaily.map(metric.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const x = (i: number) => (i / (values.length - 1)) * W;
  const y = (v: number) => {
    const t = (v - min) / (max - min || 1);
    return PAD + (metric.invert ? t : 1 - t) * (H - PAD * 2);
  };
  const line = `M${values.map((v, i) => `${x(i)},${y(v)}`).join(" L")}`;
  const monthTicks = searchConsoleDaily
    .map((d, i) => ({ i, date: d[0] }))
    .filter(({ date }) => date.endsWith("-01"));

  const hovered = hover === null ? null : searchConsoleDaily[hover];

  return (
    <div className="relative">
      <div className="absolute inset-6 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 shadow-[0_40px_80px_-30px_rgba(59,130,246,0.6)] backdrop-blur-2xl sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="size-5 rounded-full border-4 border-white/90 bg-brand-400" />
            <p className="font-medium">fluxgrowth.io</p>
          </div>
          <p className="text-xs text-muted-foreground">Google Search Console</p>
        </div>

        <div role="tablist" aria-label="Search metric" className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {metrics.map((m) => (
            <button
              key={m.key}
              role="tab"
              aria-selected={m.key === active}
              onClick={() => setActive(m.key)}
              className={cn(
                "rounded-xl border px-3 py-2.5 text-left transition-colors",
                m.key === active
                  ? "border-brand-300/60 bg-brand-500/25"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]",
              )}
            >
              <span className="block text-[11px] text-muted-foreground">{m.label}</span>
              <span className="mt-0.5 block text-lg font-light tracking-tight">{m.total}</span>
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-auto w-full touch-none overflow-visible text-brand-300"
            role="img"
            aria-label={`${metric.label} per day for fluxgrowth.io from ${searchConsoleTotals.from} to ${searchConsoleTotals.to}`}
            onPointerMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const i = Math.round(((e.clientX - r.left) / r.width) * (values.length - 1));
              setHover(Math.max(0, Math.min(values.length - 1, i)));
            }}
            onPointerLeave={() => setHover(null)}
          >
            <defs>
              <linearGradient id="gsc-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((t) => (
              <line key={t} x1="0" x2={W} y1={H * t} y2={H * t} stroke="white" strokeOpacity="0.06" />
            ))}
            <path d={`${line} L${W},${H} L0,${H} Z`} fill="url(#gsc-fill)" />
            <path d={line} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            {hover !== null ? (
              <>
                <line x1={x(hover)} x2={x(hover)} y1="0" y2={H} stroke="white" strokeOpacity="0.25" />
                <circle cx={x(hover)} cy={y(values[hover])} r="5" fill="white" />
              </>
            ) : null}
          </svg>

          {hovered && hover !== null ? (
            <div
              className="pointer-events-none absolute top-0 rounded-lg border border-white/15 bg-brand-950/90 px-3 py-2 text-xs shadow-lg backdrop-blur"
              style={{
                left: `${(hover / (values.length - 1)) * 100}%`,
                transform: `translateX(${hover > values.length / 2 ? "calc(-100% - 10px)" : "10px"})`,
              }}
            >
              <p className="text-muted-foreground">{dayFmt.format(new Date(hovered[0]))}</p>
              <p className="mt-0.5 font-medium">
                {metric.format(values[hover])}{" "}
                <span className="font-normal text-muted-foreground">{metric.label.replace(/^(Total|Average) /, "")}</span>
              </p>
            </div>
          ) : null}
        </div>

        <div className="relative mt-3 h-4 text-xs text-muted-foreground">
          {monthTicks.map(({ i, date }) => (
            <span
              key={date}
              className="absolute -translate-x-1/2"
              style={{ left: `${(i / (values.length - 1)) * 100}%` }}
            >
              {dayFmt.format(new Date(date))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
