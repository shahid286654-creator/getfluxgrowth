import { sanityClient } from "./client";
import {
  postBySlugQuery,
  postSlugsQuery,
  postsQuery,
  relatedPostsQuery,
} from "./queries";
import type { Post, PostListItem } from "./types";

export async function getAllPosts(): Promise<PostListItem[]> {
  return sanityClient.fetch(postsQuery);
}

export async function getPostSlugs(): Promise<string[]> {
  return sanityClient.fetch(postSlugsQuery);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityClient.fetch(postBySlugQuery, { slug });
}

export async function getRelatedPosts(
  categorySlug: string,
  slug: string
): Promise<PostListItem[]> {
  return sanityClient.fetch(relatedPostsQuery, { categorySlug, slug });
}
