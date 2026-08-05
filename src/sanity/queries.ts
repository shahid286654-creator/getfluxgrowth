const postListProjection = /* groq */ `{
  "title": title,
  "slug": slug.current,
  "excerpt": excerpt,
  "featuredImage": {
    "asset": featuredImage.asset,
    "alt": featuredImage.alt
  },
  "category": category->{ title, "slug": slug.current, description },
  "author": author->{ name, "slug": slug.current, image },
  "publishedAt": publishedAt,
  "updatedAt": updatedAt
}`;

export const postsQuery = /* groq */ `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postListProjection}
`;

export const postSlugsQuery = /* groq */ `
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = /* groq */ `
  *[_type == "post" && slug.current == $slug][0]{
    "title": title,
    "slug": slug.current,
    "excerpt": excerpt,
    "featuredImage": {
      "asset": featuredImage.asset,
      "alt": featuredImage.alt
    },
    "category": category->{ title, "slug": slug.current, description },
    "author": author->{ name, "slug": slug.current, role, image, bio, url },
    "publishedAt": publishedAt,
    "updatedAt": updatedAt,
    "body": body,
    "tags": tags,
    "metaTitle": metaTitle,
    "metaDescription": metaDescription,
    "canonicalUrl": canonicalUrl,
    "ogImage": ogImage
  }
`;

export const relatedPostsQuery = /* groq */ `
  *[_type == "post" && defined(slug.current) && category->slug.current == $categorySlug && slug.current != $slug]
    | order(publishedAt desc)[0...3] ${postListProjection}
`;
