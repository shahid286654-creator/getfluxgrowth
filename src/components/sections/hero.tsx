"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

const trustPoints = [
  "Free growth audit, no obligation",
  "Direct access to your engineer — no account managers",
  "Clear pricing, no long-term lock-in",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full glow-brand blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] h-72 w-72 rounded-full bg-brand-300/15 blur-3xl" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase"
        >
          <span className="size-1.5 rounded-full bg-brand-300" />
          Engineering-led growth partner
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Websites, SEO & AI Automation{" "}
          <span className="text-gradient">built to win high-value clients</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty"
        >
          We design and engineer premium digital systems — websites, SEO
          infrastructure, and AI automation — for businesses that compete on
          quality, not price.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-12 gap-2 bg-gradient-to-r from-brand-500 to-brand-300 px-7 text-base text-brand-950 shadow-[0_0_40px_-10px_rgba(200,154,58,0.55)] hover:opacity-90"
          >
            <Link href="/contact">
              Get Free Growth Audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-white/15 bg-white/5 px-7 text-base hover:bg-white/10"
          >
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6"
        >
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-brand-300" />
              {point}
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
