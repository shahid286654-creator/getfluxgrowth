import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/shared/json-ld";
import { PostThumbnail } from "@/components/blog/post-thumbnail";
import { PostBody } from "@/components/blog/post-body";
import { PostCard } from "@/components/blog/post-card";
import { CtaSection } from "@/components/sections/cta-section";
import { getAllPosts, getPostBySlug, getPostSlugs, getRelatedPosts } from "@/sanity/api";
import { urlFor } from "@/sanity/image";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";
import { readingTimeFromBlocks } from "@/lib/reading-time";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs().catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const url = post.canonicalUrl || `${siteConfig.url}/blog/${post.slug}`;
  const ogImageSource = post.ogImage ?? post.featuredImage;
  const ogImageUrl = urlFor(ogImageSource.asset).width(1200).height(630).fit("crop").url();
  const ogTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: ogTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [relatedPosts, allPosts] = await Promise.all([
    getRelatedPosts(post.category.slug, post.slug),
    getAllPosts(),
  ]);
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  const readingTime = readingTimeFromBlocks(post.body);
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const featuredImageUrl = urlFor(post.featuredImage.asset)
    .width(1200)
    .height(630)
    .fit("crop")
    .url();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription || post.excerpt,
          slug: post.slug,
          imageUrl: featuredImageUrl,
          authorName: post.author.name,
          authorUrl: post.author.url,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        })}
      />

      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full glow-purple blur-3xl" />
        </div>
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center gap-4 text-center animate-in fade-in slide-in-from-bottom-6 fill-mode-backwards duration-600 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]">
            <Badge variant="outline" className="border-brand-400/30 bg-brand-500/10 text-brand-300 uppercase">
              {post.category.title}
            </Badge>
            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/90">{post.author.name}</span>
              <span aria-hidden>&middot;</span>
              <time dateTime={post.publishedAt}>{date}</time>
              <span aria-hidden>&middot;</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" /> {readingTime} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="max-w-4xl">
        <PostThumbnail image={post.featuredImage} priority />
      </Container>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <article>
            <PostBody value={post.body} />
          </article>

          {post.tags && post.tags.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-white/15 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}

          {post.author.bio ? (
            <div className="glass-card mt-10 flex items-start gap-4 rounded-2xl p-6">
              {post.author.image ? (
                <Image
                  src={urlFor(post.author.image.asset).width(96).height(96).fit("crop").url()}
                  alt={post.author.image.alt}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-full object-cover"
                />
              ) : null}
              <div>
                <div className="font-semibold text-foreground">{post.author.name}</div>
                {post.author.role ? (
                  <div className="text-xs font-medium text-brand-300">{post.author.role}</div>
                ) : null}
                <p className="mt-2 text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          ) : null}

          {previousPost || nextPost ? (
            <nav
              aria-label="More articles"
              className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
            >
              {previousPost ? (
                <Link
                  href={`/blog/${previousPost.slug}`}
                  className="glass-card rounded-xl p-4 transition-colors hover:border-brand-400/30"
                >
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    {previousPost.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="glass-card rounded-xl p-4 text-right transition-colors hover:border-brand-400/30"
                >
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="mt-1 text-sm font-medium text-foreground">
                    {nextPost.title}
                  </div>
                </Link>
              ) : null}
            </nav>
          ) : null}
        </Container>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="pb-24 sm:pb-32">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Related articles</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <PostCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaSection />
    </>
  );
}
