import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";
import "./(site)/globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Page not found | ${siteConfig.name}`,
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col items-center justify-center bg-background text-foreground">
        <Container className="flex flex-col items-center py-24 text-center">
          <span className="text-sm font-medium text-brand-300">404</span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/">Back to home</Link>
          </Button>
        </Container>
      </body>
    </html>
  );
}
