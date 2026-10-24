import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ["sanity", "@sanity/vision", "next-sanity"],
  // The Sanity Studio dependency tree ships thousands of source maps, type
  // declarations, and docs files that are never required at runtime but
  // still get walked and copied into the standalone output by file tracing,
  // which was making production builds take several minutes longer than
  // necessary (and is the likely cause of deploy timeouts).
  outputFileTracingExcludes: {
    "*": [
      "**/*.map",
      "**/*.d.ts",
      "**/*.d.ts.map",
      "**/README.md",
      "**/CHANGELOG.md",
    ],
  },
  experimental: {
    optimizePackageImports: ["radix-ui"],
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    // Scoped to the two public/ image directories, requiring a file
    // extension, so these rules only ever match static image files and
    // never the page routes at the same paths (e.g. /portfolio) or the
    // dynamic metadata image routes (/apple-icon, /opengraph-image, etc.),
    // which already set their own Cache-Control headers.
    const immutableImageCache = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];
    return [
      {
        source: "/images/:path*.(jpg|jpeg|png|webp|avif)",
        headers: immutableImageCache,
      },
      {
        source: "/portfolio/:path*.(jpg|jpeg|png|webp|avif)",
        headers: immutableImageCache,
      },
    ];
  },
};

export default nextConfig;
