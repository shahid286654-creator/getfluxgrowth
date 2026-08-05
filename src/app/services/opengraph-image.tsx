import { buildOgImage, ogImageSize, ogImageContentType } from "@/lib/og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return buildOgImage(
    "AI Automation Services",
    "Lead generation, workflow automation, AI agents, and CRM enrichment."
  );
}
