import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: ogTitle,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
