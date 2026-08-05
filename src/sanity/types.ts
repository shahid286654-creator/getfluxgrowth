import type { PortableTextBlock } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

export interface SanityImage {
  asset: SanityImageSource;
  alt: string;
}

export interface Category {
  title: string;
  slug: string;
  description?: string;
}

export interface Author {
  name: string;
  slug: string;
  role?: string;
  image?: SanityImage;
  bio?: string;
  url?: string;
}

export interface PostListItem {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: SanityImage;
  category: Category;
  author: Pick<Author, "name" | "slug" | "image">;
  publishedAt: string;
  updatedAt?: string;
}

export interface Post extends Omit<PostListItem, "author"> {
  author: Author;
  body: PortableTextBlock[];
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: SanityImage;
}
