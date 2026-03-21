import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OTT Biryani",
  "url": "https://www.ottbiryani.com",
  "description": "Telugu OTT release dates 2026 – latest movies on Netflix, Amazon Prime, JioHotstar, Aha, ZEE5 and more.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.ottbiryani.com/?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OTT Biryani",
  "url": "https://www.ottbiryani.com",
  "description": "Your go-to source for Telugu OTT release dates, streaming availability, and movie information.",
  "sameAs": []
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ottbiryani.com"),
  title: {
    default: "Telugu OTT Release Dates 2026 – New Movies This Week on Netflix, Prime, ZEE5 | OTT Biryani",
    template: "%s | OTT Biryani",
  },
  description: "Latest Telugu movies on OTT this week (2026). Get exact release dates for Netflix, Amazon Prime, JioHotstar, Aha, ZEE5, ETV Win & more. Updated daily – don't miss a single Telugu OTT release.",
  keywords: [
    "Telugu OTT release dates 2026",
    "new Telugu movies on OTT this week",
    "latest Telugu OTT releases",
    "ott movies this week telugu",
    "new ott movies 2026 telugu",
    "Telugu movies on OTT",
    "Telugu OTT release date today",
    "which Telugu movie is on OTT now",
    "Telugu movies Amazon Prime 2026",
    "Telugu movies Netflix 2026",
    "Telugu movies JioHotstar 2026",
    "Telugu movies ZEE5 2026",
    "Telugu movies Aha OTT",
    "Telugu movies ETV Win",
    "new Telugu movies releasing on OTT",
    "Telugu movie OTT release date",
    "OTT Biryani Telugu",
    "Telugu OTT streaming this week",
  ],
  authors: [{ name: "OTT Biryani", url: "https://www.ottbiryani.com" }],
  creator: "OTT Biryani",
  publisher: "OTT Biryani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ottbiryani.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ottbiryani.com",
    siteName: "OTT Biryani",
    title: "Telugu OTT Release Dates 2026 – New Movies This Week | OTT Biryani",
    description: "Latest Telugu movies on OTT this week (2026). Get exact release dates for Netflix, Amazon Prime, JioHotstar, Aha, ZEE5 & more. Updated daily.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OTT Biryani – Telugu OTT Release Dates 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telugu OTT Release Dates 2026 – New Movies This Week | OTT Biryani",
    description: "Latest Telugu movies on OTT this week (2026). Get exact release dates for Netflix, Amazon Prime, JioHotstar, Aha, ZEE5 & more. Updated daily.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="we29LAIWRW1ZKsFIRbGcma3ZLSCkX93LKB3Bc4eJ0tk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
