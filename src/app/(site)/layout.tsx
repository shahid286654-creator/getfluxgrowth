import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies, headers } from "next/headers";
import { Navbar } from "@/components/layout/navbar";
import { CurrencyProvider } from "@/components/providers/currency-provider";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { CURRENCY_COOKIE, detectServerCurrency } from "@/lib/currency";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { JsonLd } from "@/components/shared/json-ld";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { MicrosoftClarity } from "@/components/analytics/microsoft-clarity";
import { siteConfig } from "@/lib/site";
import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

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
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "C218BFF5C48B4F84F09E13A173C06083",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
  colorScheme: "dark",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Reading the request makes every page dynamic; that's what lets prices follow the visitor.
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);
  const { currency, detectedOnServer } = detectServerCurrency(
    cookieStore.get(CURRENCY_COOKIE)?.value,
    (name) => headerStore.get(name)
  );

  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={professionalServiceSchema()} />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_-10%,black,transparent)]" />
        <ScrollProgress />
        <CurrencyProvider initialCurrency={currency} detectedOnServer={detectedOnServer}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CurrencyProvider>
      </body>
    </html>
  );
}
