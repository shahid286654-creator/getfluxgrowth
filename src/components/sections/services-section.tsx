import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { coreServices } from "@/lib/data/core-services";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Three ways we grow your business"
          description="Every engagement is built around a clear business outcome — more leads, a better website, or higher rankings."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {coreServices.map((service) => (
            <FadeInStaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group glass-card relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.outcome}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-foreground/90"
                    >
                      <Check className="size-4 shrink-0 text-brand-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-1 text-sm font-medium text-brand-300">
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
