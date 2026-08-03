import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GetFluxGrowth to book a free automation audit and see where AI can save your business the most time.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactDetails = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
      </div>
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Book your free automation audit"
          description="Tell us a bit about your business and where time is disappearing. We'll come back with a clear picture of what AI automation could do for you."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          <FadeIn className="lg:col-span-2">
            <div className="glass-card space-y-6 rounded-2xl p-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-300">
                    <detail.icon className="size-4.5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      {detail.label}
                    </div>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-sm font-medium text-foreground hover:text-brand-300"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-foreground">
                        {detail.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
