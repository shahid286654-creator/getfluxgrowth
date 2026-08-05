import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PostThumbnail } from "@/components/blog/post-thumbnail";
import type { PostListItem } from "@/sanity/types";

export function PostCard({
  post,
  priority = false,
}: {
  post: PostListItem;
  priority?: boolean;
}) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl p-3 transition-colors hover:border-brand-400/30"
    >
      <PostThumbnail image={post.featuredImage} priority={priority} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <Badge variant="outline" className="border-white/15 text-brand-300">
            {post.category.title}
          </Badge>
          <time dateTime={post.publishedAt}>{date}</time>
        </div>
        <h3 className="mt-3 text-lg font-semibold tracking-tight text-balance group-hover:text-brand-300">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground text-pretty">
          {post.excerpt}
        </p>
        <span className="mt-4 text-sm font-medium text-brand-300">
          {post.author.name}
        </span>
      </div>
    </Link>
  );
}
