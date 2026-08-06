import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { benefits } from "@/lib/data/why-choose-us";

export function WhyChooseUsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for outcomes, not busywork"
          description="Everything we build is judged by one thing: the measurable difference it makes to your business."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <FadeInStaggerItem key={benefit.title}>
              <div className="glass-card flex h-full flex-col gap-4 rounded-2xl p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
                  <benefit.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
