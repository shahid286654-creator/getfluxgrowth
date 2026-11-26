"use client";

import { Check, Eye, HeartHandshake, Rocket, Video, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { CurrencySwitcher } from "@/components/shared/currency-switcher";
import { useCurrency } from "@/components/providers/currency-provider";
import {
  carePlan,
  customQuoteMessage,
  paymentMethods,
  pricingTiers,
  type PricingTier,
} from "@/lib/data/pricing";
import { whatsappHref } from "@/lib/site";
import type { Currency } from "@/lib/currency";
import { cn } from "@/lib/utils";

function tierHref(tier: PricingTier, currency: Currency) {
  return whatsappHref(`${tier.whatsappMessage} (${tier.price[currency]}).`, currency);
}

export function PricingSection({
  as = "h2",
  showPaymentSteps = false,
}: {
  as?: "h1" | "h2";
  showPaymentSteps?: boolean;
}) {
  const { currency } = useCurrency();

  const steps = [
    {
      icon: Video,
      title: "Free 5-minute audit",
      description:
        "Send me your business name. I record a short video showing what's stopping customers from finding or contacting you.",
    },
    {
      icon: Wallet,
      title: "Pay 50% to start",
      description: `Pay by ${paymentMethods[currency]}. I start building as soon as it arrives.`,
    },
    {
      icon: Eye,
      title: "See your site in 7 days",
      description:
        "I build it on a private preview link. You ask for changes until you're happy.",
    },
    {
      icon: Rocket,
      title: "Pay the rest, go live",
      description:
        "You pay the remaining 50% only when you're happy, and your website goes live on your own domain.",
    },
  ];

  return (
    <section id="pricing" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          as={as}
          eyebrow="Pricing"
          title="Simple, fixed prices. No surprises."
          description="Pay 50% to start and the rest only when you're happy with your website."
        />

        <div className="mt-10 flex justify-center">
          <CurrencySwitcher />
        </div>

        <FadeInStagger className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <FadeInStaggerItem key={tier.name}>
              <div
                className={cn(
                  "glass-card relative flex h-full flex-col rounded-2xl p-8",
                  tier.highlighted && "border-brand-400/50 border-glow"
                )}
              >
                {tier.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 px-3 py-1 text-xs font-medium whitespace-nowrap text-white">
                    {tier.badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-tight">{tier.price[currency]}</span>
                  <span className="text-sm text-muted-foreground">{tier.cadence}</span>
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
                  variant={tier.highlighted ? "default" : "outline"}
                  className={cn(
                    "mt-8",
                    tier.highlighted
                      ? "bg-gradient-to-r from-brand-600 to-brand-400 text-white hover:opacity-90"
                      : "border-white/15 bg-white/5 hover:bg-white/10"
                  )}
                >
                  <a href={tierHref(tier, currency)} target="_blank" rel="noopener noreferrer">
                    {tier.cta}
                  </a>
                </Button>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <FadeIn className="glass-card mt-6 flex flex-col gap-6 rounded-2xl border-brand-400/30 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
              <HeartHandshake className="size-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{carePlan.name}</h3>
                <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                  {carePlan.badge}
                </span>
              </div>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">{carePlan.description}</p>
              <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {carePlan.features.map((feature) => (
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
              <span className="text-3xl font-semibold tracking-tight">{carePlan.price[currency]}</span>
              <span className="text-sm text-muted-foreground">{carePlan.cadence}</span>
            </div>
            <Button asChild variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10">
              <a href={tierHref(carePlan, currency)} target="_blank" rel="noopener noreferrer">
                {carePlan.cta}
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="mt-8 text-center text-sm text-muted-foreground">
          Need AI automation or a bigger project?{" "}
          <a
            href={whatsappHref(customQuoteMessage, currency)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-brand-400/60 underline-offset-4 hover:decoration-brand-300"
          >
            Ask me for a custom quote.
          </a>
        </FadeIn>

        {showPaymentSteps ? (
          <div id="how-it-works" className="mt-24 scroll-mt-24">
            <SectionHeading
              eyebrow="How it works"
              title="How it works & payment"
              description={`You pay by ${paymentMethods[currency]}. Half to start, half when you're happy.`}
            />
            <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FadeInStaggerItem key={step.title}>
                  <div className="glass-card flex h-full flex-col gap-4 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                        <step.icon className="size-5" />
                      </div>
                      <span className="text-sm font-light text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
