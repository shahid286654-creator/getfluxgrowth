import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="AI systems built around how your business actually grows"
          description="From finding new customers to running your internal operations, we design automation that plugs directly into your existing workflow."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeInStaggerItem key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group glass-card relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                  <service.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.summary}
                </p>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-brand-300 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowUpRight className="size-4" />
                </div>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
