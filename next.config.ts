import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: ["radix-ui"],
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
