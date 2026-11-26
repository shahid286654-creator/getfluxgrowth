import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ResultsSection } from "@/components/sections/results-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FreeOfferSection } from "@/components/sections/free-offer-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { faqSchema } from "@/lib/schema";
import { faqItems } from "@/lib/data/faq";
import { whatsappHref } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <Hero />
      <ResultsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <FreeOfferSection />
      <FaqSection />
      <CtaSection
        title="Ready to get more customers online?"
        description="Send me your business name on WhatsApp and I'll record a free 5-minute video showing what to fix first."
        primaryLabel="Chat on WhatsApp"
        primaryHref={whatsappHref()}
        secondaryLabel="See prices"
        secondaryHref="/pricing"
      />
    </>
  );
}
