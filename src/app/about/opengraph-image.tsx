import { buildOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return buildOgImage(
    "About GetFluxGrowth",
    "We build the AI systems your team wishes it had time to build."
  );
}
