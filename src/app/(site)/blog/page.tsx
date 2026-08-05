import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInStagger, FadeInStaggerItem } from "@/components/shared/fade-in";
import { PostCard } from "@/components/blog/post-card";
import { JsonLd } from "@/components/shared/json-ld";
import { CtaSection } from "@/components/sections/cta-section";
import { getAllPosts } from "@/sanity/api";
import { siteConfig } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical guides on AI automation, SEO, digital marketing, and web development from the GetFluxGrowth team.",
  path: "/blog",
  keywords: [
    "AI Automation Blog",
    "SEO Blog",
    "Digital Marketing Blog",
    "Web Development Blog",
  ],
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ])}
      />
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        </div>
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="Insights on AI automation and growth"
            description="Practical guides on AI automation, SEO, digital marketing, and web development — written by the team building these systems every day."
          />
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          {posts.length > 0 ? (
            <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {posts.map((post, index) => (
                <FadeInStaggerItem key={post.slug}>
                  <PostCard post={post} priority={index === 0} />
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          ) : (
            <div className="glass-card rounded-2xl p-12 text-center text-muted-foreground">
              No articles published yet — check back soon.
            </div>
          )}
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
