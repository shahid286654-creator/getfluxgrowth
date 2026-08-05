import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <div className="glass-card animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-500 ease-out inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="size-3.5 text-brand-300" />
          AI-powered growth systems for modern businesses
        </div>

        <h1 className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-600 delay-100 ease-out mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Automate growth with{" "}
          <span className="text-gradient">AI that works while you sleep</span>
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-600 delay-200 ease-out mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          GetFluxGrowth builds custom AI automation systems that find leads,
          audit prospects, write outreach, and run your busywork — so your
          team can focus on closing deals, not chasing them.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards duration-600 delay-300 ease-out mt-10 flex flex-col items-center gap-4 sm:flex-row">
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
        </div>
      </Container>
    </section>
  );
}
