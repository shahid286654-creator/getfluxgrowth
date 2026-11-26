import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";
import { siteConfig, whatsappHref } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Fixed prices for small business websites and Google Maps setup in Mauritius, India and worldwide. Pay 50% to start, the rest when you're happy.",
  path: "/pricing",
  keywords: [
    "website design price Mauritius",
    "small business website cost",
    "Google Business Profile setup",
    "website design Noida price",
  ],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Pricing", url: `${siteConfig.url}/pricing` },
        ])}
      />
      <div className="pt-4 sm:pt-8">
        <PricingSection as="h1" showPaymentSteps />
      </div>
      <CtaSection
        title="Not sure which one you need?"
        description="Send me your business name on WhatsApp and I'll record a free 5-minute video audit showing what to fix first."
        primaryLabel="Chat on WhatsApp"
        primaryHref={whatsappHref()}
        secondaryLabel="See my work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
