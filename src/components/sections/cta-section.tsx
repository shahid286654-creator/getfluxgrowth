import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";

export function CtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <FadeIn className="glass-card relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full glow-purple blur-3xl" />
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Ready to put your growth on autopilot?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
            Book a free automation audit and see exactly where AI can save
            your team the most time this quarter.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
