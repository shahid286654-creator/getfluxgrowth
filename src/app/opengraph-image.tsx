import { siteConfig } from "@/lib/site";
import { buildOgImage, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return buildOgImage("Websites, SEO & AI that turn visitors into clients", siteConfig.tagline);
}
