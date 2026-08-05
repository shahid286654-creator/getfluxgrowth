import type { PortableTextBlock } from "@portabletext/react";

const WORDS_PER_MINUTE = 200;

export function readingTimeFromBlocks(blocks: PortableTextBlock[]): number {
  const wordCount = blocks.reduce((count, block) => {
    if (block._type !== "block" || !Array.isArray(block.children)) {
      return count;
    }
    const text = block.children
      .map((child) => (typeof child.text === "string" ? child.text : ""))
      .join(" ");
    return count + text.trim().split(/\s+/).filter(Boolean).length;
  }, 0);

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
