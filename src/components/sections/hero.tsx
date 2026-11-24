"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Bot, TrendingUp } from "lucide-react";
import { Container } from "@/components/shared/container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[20%] left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full glow-brand blur-3xl" />
        <div className="bg-stars absolute inset-0" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      </div>

      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-6 -z-10 bg-gradient-to-b from-brand-400/35 to-transparent bg-clip-text text-center text-[19vw] leading-none font-light tracking-tighter text-transparent select-none sm:top-10"
      >
        FluxGrowth
      </p>

      <Container className="relative grid grid-cols-1 items-center gap-14 pt-[14vw] lg:grid-cols-12 lg:gap-8 lg:pt-[9vw]">
        <div className="order-2 lg:order-1 lg:col-span-4">
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="text-4xl font-light tracking-tight text-balance sm:text-5xl"
          >
            Websites, SEO & AI that{" "}
            <span className="text-gradient font-normal">turn visitors into clients</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="mt-6 max-w-sm text-muted-foreground text-pretty"
          >
            I build lead-generating websites, rank them on Google, and automate
            the follow-up — the same system that grew my own site to 10,000+
            organic clicks.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <PillLink href="/contact">Get free growth audit</PillLink>
            <Link
              href="#results"
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              See the results
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <GlassStack />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.35}
          variants={fadeUp}
          className="order-3 flex flex-row flex-wrap gap-8 lg:col-span-3 lg:flex-col lg:gap-12"
        >
          <Stat value="10K+" label="organic clicks" note="grown on my own site" />
          <Stat value="$0" label="ad spend" note="pure SEO, no paid traffic" />
          <span className="glass inline-flex w-fit items-center gap-2.5 rounded-full py-2 pr-4 pl-2 text-sm">
            <span className="size-2.5 rounded-full bg-white shadow-[0_0_12px_2px_rgba(147,197,253,0.9)]" />
            Direct access to me, no account managers
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

function Stat({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <div className="relative border-l border-white/15 pl-5">
      <span className="absolute top-0 -left-[3px] size-1.5 rounded-full bg-brand-300 shadow-[0_0_10px_2px_rgba(147,197,253,0.8)]" />
      <p className="text-3xl font-light tracking-tight">
        {value} <span className="text-sm text-muted-foreground">{label}</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

const tilt = "[transform:rotateX(18deg)_rotateY(-22deg)_rotateZ(-14deg)]";

function GlassStack() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem] [perspective:1400px]">
      <div className="absolute inset-[18%] rounded-full bg-brand-500/40 blur-3xl" />

      <div className={`animate-float absolute top-[6%] left-[8%] h-[56%] w-[62%] rounded-3xl border border-white/40 bg-gradient-to-br from-brand-100/90 via-brand-300/80 to-brand-600/70 shadow-[0_40px_80px_-20px_rgba(59,130,246,0.8)] ${tilt}`}>
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7),transparent_45%)]" />
      </div>

      <div className={`animate-float absolute top-[24%] left-[26%] h-[56%] w-[62%] rounded-3xl border border-white/15 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] [animation-delay:-2s] ${tilt}`}>
        <div className="flex items-center gap-2 text-xs text-brand-200">
          <TrendingUp className="size-4" /> Organic clicks
        </div>
        <p className="mt-3 text-3xl font-light">10,133</p>
        <svg viewBox="0 0 100 30" className="mt-4 w-full text-brand-300" aria-hidden>
          <path
            d="M0,29 L15,28 L28,27 L40,24 L48,8 L54,2 L62,14 L70,17 L78,12 L86,6 L94,4 L100,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={`animate-float absolute top-[46%] left-[40%] h-[42%] w-[52%] rounded-3xl border border-white/30 bg-white/10 p-5 shadow-[0_30px_60px_-20px_rgba(59,130,246,0.6)] backdrop-blur-xl [animation-delay:-4s] ${tilt}`}>
        <div className="flex items-center gap-2 text-xs text-brand-100">
          <Bot className="size-4" /> AI follow-up
        </div>
        <p className="mt-3 text-sm leading-snug">New lead answered instantly. Call booked automatically.</p>
      </div>
    </div>
  );
}

export function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group glass inline-flex items-center gap-4 rounded-full py-2 pr-2 pl-6 text-sm font-medium transition-colors hover:border-brand-300/50 hover:bg-white/10"
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-white text-brand-950 transition-transform group-hover:translate-x-0.5">
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
