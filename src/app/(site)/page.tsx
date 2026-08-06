import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { FreeOfferSection } from "@/components/sections/free-offer-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { faqSchema } from "@/lib/schema";
import { faqItems } from "@/lib/data/faq";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqItems)} />
      <Hero />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PortfolioSection />
      <FreeOfferSection />
      <FaqSection />
      <CtaSection
        title="Ready to Grow Your Business?"
        primaryLabel="Book a Strategy Call"
        secondaryLabel="Get Free Growth Audit"
        secondaryHref="/contact"
      />
    </>
  );
}
