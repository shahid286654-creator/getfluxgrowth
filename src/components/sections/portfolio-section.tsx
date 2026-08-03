import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { portfolioItems } from "@/lib/data/portfolio";

export function PortfolioSection() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Real systems, running in production"
          description="A look at the automation systems we've built for businesses across logistics, real estate, healthcare, and more."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((item) => (
            <FadeInStaggerItem key={item.slug}>
              <Link
                href="/portfolio"
                className="group glass-card flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-brand-500/10 text-brand-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                  {item.results.slice(0, 3).map((result) => (
                    <div key={result.label}>
                      <div className="text-base font-semibold text-brand-300">
                        {result.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-brand-300 opacity-0 transition-opacity group-hover:opacity-100">
                  View case study <ArrowUpRight className="size-4" />
                </div>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>

        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg" className="gap-2 border-white/15 bg-white/5 hover:bg-white/10">
            <Link href="/portfolio">
              View Full Portfolio <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
