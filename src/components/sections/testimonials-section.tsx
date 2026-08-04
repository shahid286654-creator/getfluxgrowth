import { Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Businesses that put their growth on autopilot with GetFluxGrowth."
        />

        <FadeIn className="mt-16">
          <div className="glass-card mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl p-12 text-center">
            <Quote className="size-8 text-brand-400/60" />
            <p className="text-lg font-medium text-foreground/90">
              Client success stories coming soon.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
