import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Terms of Service", url: `${siteConfig.url}/terms` },
        ])}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
      </div>
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="Legal"
          title="Terms of Service"
          description="Last updated: August 5, 2026"
        />

        <FadeIn className="mt-12 space-y-8 text-sm text-muted-foreground text-pretty">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              1. Overview
            </h2>
            <p>
              These Terms of Service govern your use of the {siteConfig.name}{" "}
              website and any engagement discussions initiated through it. By
              contacting us or engaging our services, you agree to these
              terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              2. Services
            </h2>
            <p>
              {siteConfig.name} provides AI automation consulting and
              implementation services. The specific scope, deliverables,
              timeline, and pricing for any engagement are defined in a
              separate written agreement or proposal between the client and{" "}
              {siteConfig.name}, not by this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              3. Website content
            </h2>
            <p>
              Content on this website is provided for general informational
              purposes and does not constitute a binding offer. Pricing shown
              on this site is indicative and subject to confirmation before
              any engagement begins.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              4. Intellectual property
            </h2>
            <p>
              All content on this website, including text, graphics, and
              design, is the property of {siteConfig.name} unless otherwise
              stated, and may not be reproduced without permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              5. Limitation of liability
            </h2>
            <p>
              This website and its content are provided &ldquo;as is&rdquo;
              without warranties of any kind. {siteConfig.name} is not liable
              for any indirect or consequential damages arising from use of
              this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-foreground">
              6. Contact
            </h2>
            <p>
              Questions about these terms can be sent to{" "}
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
