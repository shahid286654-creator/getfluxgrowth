import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { processSteps } from "@/lib/data/process";

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="From audit to autopilot in five steps"
          description="A proven, transparent process that takes your business from manual busywork to a fully running AI automation system."
        />

        <FadeInStagger className="relative mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="absolute top-14 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {processSteps.map((step) => (
            <FadeInStaggerItem key={step.step}>
              <div className="glass-card relative flex h-full flex-col items-start gap-4 rounded-2xl p-6">
                <div className="flex size-12 items-center justify-center rounded-full border border-brand-400/30 bg-background text-brand-300">
                  <step.icon className="size-5" />
                </div>
                <span className="text-xs font-semibold tracking-widest text-brand-400">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
