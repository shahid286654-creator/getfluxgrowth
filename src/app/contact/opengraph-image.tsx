import { buildOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return buildOgImage(
    "Book Your Free Automation Audit",
    "Tell us where time is disappearing. We'll show you what AI automation could do."
  );
}
