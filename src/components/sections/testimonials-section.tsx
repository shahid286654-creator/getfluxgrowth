import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Businesses that put their growth on autopilot with GetFluxGrowth."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <FadeInStaggerItem key={testimonial.name}>
              <figure className="glass-card flex h-full flex-col rounded-2xl p-7">
                <Quote className="size-6 text-brand-400/60" />
                <blockquote className="mt-4 flex-1 text-base text-foreground/90 text-pretty">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <Avatar className="size-10 border border-white/10">
                    <AvatarFallback className="bg-brand-500/20 text-brand-200">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
