import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import type { PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 text-2xl font-semibold tracking-tight text-balance first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-balance">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 text-lg font-semibold tracking-tight">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-brand-400/50 pl-4 text-foreground/90 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mt-5 leading-relaxed text-muted-foreground text-pretty first:mt-0">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground marker:text-brand-400">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground marker:text-brand-400">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-brand-200">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href) && !href.includes("getfluxgrowth.com");
      if (isExternal) {
        return (
          <a
            href={href}
            target={value?.blank !== false ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-brand-300 underline underline-offset-4 hover:text-brand-200"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className="text-brand-300 underline underline-offset-4 hover:text-brand-200"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value).width(1400).fit("max").url();
      return (
        <span className="mt-8 block overflow-hidden rounded-xl border border-white/10">
          <Image
            src={url}
            alt={value.alt ?? ""}
            width={1400}
            height={Math.round(1400 / (value.aspectRatio ?? 16 / 9))}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 720px, 100vw"
          />
          {value.caption ? (
            <span className="block px-1 py-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </span>
          ) : null}
        </span>
      );
    },
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
