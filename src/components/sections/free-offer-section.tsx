import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { growthAuditItems } from "@/lib/data/growth-audit";

export function FreeOfferSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <FadeIn className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full glow-purple blur-3xl" />
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-300 uppercase">
                Free Offer
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Free AI & Website Growth Audit
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
                Book a free audit and get a clear, actionable picture of
                where AI automation, your website, and your SEO could be
                doing more for your business.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-12 gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 px-7 text-base text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.7)] hover:opacity-90"
              >
                <Link href="/contact">
                  Claim My Free Audit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-2">
              <ul className="flex flex-col gap-4">
                {growthAuditItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-brand-300" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
