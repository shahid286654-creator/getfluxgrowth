import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
      </div>
      <Container className="max-w-3xl">
        <SectionHeading
          align="left"
          eyebrow="Legal"
          title="Privacy Policy"
          description="Last updated: August 5, 2026"
        />

        <FadeIn className="mt-12 space-y-8 text-sm text-muted-foreground text-pretty">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              1. Information we collect
            </h2>
            <p>
              When you submit the contact form on this site, we collect the
              information you provide directly: your name, email address,
              company name, and message. We do not collect any information
              beyond what you choose to submit.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              2. How we use your information
            </h2>
            <p>
              We use the information you submit solely to respond to your
              inquiry and discuss a potential engagement. We do not sell,
              rent, or share your information with third parties for
              marketing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              3. Data retention
            </h2>
            <p>
              We retain contact form submissions only for as long as needed
              to respond to your inquiry and maintain a record of our
              business communications. You may request deletion of your data
              at any time by emailing us.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              4. Cookies and analytics
            </h2>
            <p>
              This site may use basic, privacy-respecting analytics to
              understand overall traffic patterns. We do not use tracking
              cookies for advertising purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              5. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or your data,
              contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-300 hover:text-brand-200"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
