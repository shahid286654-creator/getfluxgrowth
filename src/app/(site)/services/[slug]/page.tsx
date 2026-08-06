import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  FadeIn,
  FadeInStagger,
  FadeInStaggerItem,
} from "@/components/shared/fade-in";
import { JsonLd } from "@/components/shared/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaSection } from "@/components/sections/cta-section";
import { servicePages, getServicePage } from "@/lib/data/service-pages";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const relatedServices = servicePages.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          {
            name: service.title,
            url: `${siteConfig.url}/services/${service.slug}`,
          },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          slug: service.slug,
          title: service.title,
          description: service.metaDescription,
          serviceType: service.title,
          deliverables: service.deliverables,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
          <div className="absolute top-1/3 right-[-10%] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        </div>
        <Container className="flex flex-col items-center text-center">
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted-foreground">
            <service.icon className="size-3.5 text-brand-300" />
            {service.hero.eyebrow}
          </span>
          <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {service.hero.prefix}
            <span className="text-gradient">{service.hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            {service.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 px-7 text-base text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.7)] hover:opacity-90"
            >
              <Link href="/contact">
                Book a Strategy Call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/15 bg-white/5 px-7 text-base hover:bg-white/10"
            >
              <Link href="/contact">Get Free Growth Audit</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-6">
            {service.hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-brand-300" />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* AI Search Optimization: direct, quotable definition for AI Overviews / ChatGPT / Perplexity */}
      <section className="pb-4">
        <Container>
          <FadeIn className="glass-card mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
            <h2 className="text-sm font-semibold tracking-wide text-brand-300 uppercase">
              What is {service.title}?
            </h2>
            <p className="mt-3 text-base text-foreground/90 text-pretty sm:text-lg">
              {service.aiQuickAnswer}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow={service.problem.eyebrow}
            title={service.problem.title}
            description={service.problem.description}
          />
          <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.problem.points.map((point) => (
              <FadeInStaggerItem key={point.title}>
                <div className="glass-card h-full rounded-2xl p-6">
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Solution */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-300 uppercase">
                {service.solution.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {service.solution.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
                {service.solution.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="flex flex-col gap-4">
                {service.solution.points.map((point) => (
                  <li
                    key={point}
                    className="glass-card flex items-start gap-3 rounded-xl p-4"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-brand-300" />
                    <span className="text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title={`Why businesses choose GetFluxGrowth for ${service.title}`}
            description="Everything we build is judged by one thing: the measurable difference it makes to your business."
          />
          <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
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

      {/* Process */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A simple, four-step process"
            description={`A proven, transparent process that takes your ${service.title.toLowerCase()} from where it is today to a system that keeps generating growth.`}
          />
          <FadeInStagger className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-14 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
            {service.process.map((step) => (
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

      {/* Deliverables */}
      <section className="py-24 sm:py-32">
        <Container>
          <FadeIn className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full glow-purple blur-3xl" />
            </div>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium tracking-wide text-brand-300 uppercase">
                  Deliverables
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  What you actually get
                </h2>
                <p className="mt-4 max-w-md text-base text-muted-foreground text-pretty sm:text-lg">
                  No vague retainers. Every engagement comes with a clear,
                  tangible set of deliverables.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 h-12 gap-2 bg-gradient-to-r from-brand-500 to-fuchsia-500 px-7 text-base text-white shadow-[0_0_40px_-10px_rgba(168,85,247,0.7)] hover:opacity-90"
                >
                  <Link href="/contact">
                    Book a Strategy Call
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="lg:col-span-3">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-300" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FAQs */}
      <section className="py-24 sm:py-32">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description={`Everything you need to know before getting started with ${service.title.toLowerCase()}.`}
          />
          <FadeIn className="mt-14">
            <Accordion
              type="single"
              collapsible
              className="glass-card rounded-2xl px-2"
            >
              {service.faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="border-white/10 px-4 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </Container>
      </section>

      {/* Related Services + internal links */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="Pair it with"
            description="Most of our best results come from combining automation, a strong website, and SEO — not running them in isolation."
          />
          <FadeInStagger className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedServices.map((related) => (
              <FadeInStaggerItem key={related.slug}>
                <Link
                  href={`/services/${related.slug}`}
                  className="group glass-card relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.06]"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300 transition-colors group-hover:bg-brand-500/20">
                    <related.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {related.hero.subheadline}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-brand-300">
                    Learn more <ArrowUpRight className="size-4" />
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <FadeIn
            delay={0.1}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <Link href="/services" className="hover:text-foreground">
              All Services
            </Link>
            <Link href="/portfolio" className="hover:text-foreground">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-foreground">
              About Us
            </Link>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </FadeIn>
        </Container>
      </section>

      <CtaSection
        title={`Ready to get started with ${service.title}?`}
        description="Book a free strategy call and we'll show you exactly where the fastest wins are for your business."
      />
    </>
  );
}
