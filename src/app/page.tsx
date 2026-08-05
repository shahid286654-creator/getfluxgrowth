import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
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
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
