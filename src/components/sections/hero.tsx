"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

const stats = [
  { icon: Users, label: "Leads sourced monthly", value: "10,000+" },
  { icon: Zap, label: "Hours automated / week", value: "500+" },
  { icon: TrendingUp, label: "Avg. pipeline growth", value: "40%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-brand-300" />
          AI-powered growth systems for modern businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Automate growth with{" "}
          <span className="text-gradient">AI that works while you sleep</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty"
        >
          GetFluxGrowth builds custom AI automation systems that find leads,
          audit prospects, write outreach, and run your busywork — so your
          team can focus on closing deals, not chasing them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 px-7 text-base text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.7)] hover:opacity-90"
          >
            <Link href="/contact">
              Book a Strategy Call
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/15 bg-white/5 px-7 text-base hover:bg-white/10"
          >
            <Link href="/portfolio">See Our Work</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card mt-16 grid w-full max-w-3xl grid-cols-1 gap-6 rounded-2xl px-8 py-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-300">
                <stat.icon className="size-5" />
              </div>
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
