import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { addOns, pricingTiers } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your automation"
          description="Every engagement starts with a free audit so you know exactly what you're automating and what it's worth before you commit."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <FadeInStaggerItem key={tier.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-8",
                  tier.highlighted
                    ? "glass-card border-brand-400/50 border-glow"
                    : "glass-card"
                )}
              >
                {tier.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-300 px-3 py-1 text-xs font-medium text-brand-950">
                    Most Popular
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {tier.cadence}
                  </span>
                </div>
                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-300" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "mt-8",
                    tier.highlighted
                      ? "bg-gradient-to-r from-brand-500 to-brand-300 text-brand-950 hover:opacity-90"
                      : "border-white/15 bg-white/5 hover:bg-white/10"
                  )}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        {addOns.length > 0 ? (
          <div className="mt-10">
            <FadeIn className="mb-6 text-center text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Or add a one-time build to any plan
            </FadeIn>
            {addOns.map((addOn) => (
              <FadeIn
                key={addOn.name}
                className="glass-card flex flex-col gap-6 rounded-2xl border-brand-400/30 p-8 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{addOn.name}</h3>
                      <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                        Paid add-on
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                      {addOn.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {addOn.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-brand-300" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold tracking-tight">
                      {addOn.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {addOn.cadence}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-brand-500 to-brand-300 text-brand-950 hover:opacity-90"
                  >
                    <Link href="/contact">{addOn.cta}</Link>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
