import { buildOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return buildOgImage(
    "Featured Projects",
    "A selection of demo projects showcasing our web development and design work."
  );
}
