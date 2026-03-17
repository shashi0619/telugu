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
  "description": "Telugu OTT release dates 2025 – latest movies on Netflix, Amazon Prime, JioHotstar, Aha, ZEE5 and more.",
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
    default: "New Telugu Movies on OTT This Week 2025 | Telugu OTT Releases – OTT Biryani",
    template: "%s | OTT Biryani",
  },
  description: "Find new Telugu movies on OTT released this week and today. Latest Telugu OTT releases on Amazon Prime, Netflix, JioHotstar, Aha, ZEE5, SonyLIV. Track which Telugu movie is releasing on OTT and when.",
  keywords: [
    "new movies on OTT Telugu",
    "Telugu movies on OTT",
    "Telugu OTT movie",
    "Telugu OTT release this week",
    "OTT movies released in Telugu",
    "Telugu OTT release dates 2025",
    "new Telugu movies releasing on OTT today",
    "which Telugu movie is on OTT now",
    "Telugu movies OTT platform",
    "latest Telugu movies Netflix 2025",
    "Telugu movies Amazon Prime 2025",
    "Telugu movies JioHotstar 2025",
    "Telugu movies Aha OTT",
    "Telugu movies ZEE5",
    "OTT Biryani",
    "Telugu movie OTT release date",
    "when Telugu movie releasing on OTT",
    "Telugu OTT streaming this week",
    "new Telugu OTT releases",
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
    title: "New Telugu Movies on OTT This Week 2025 | OTT Biryani",
    description: "New Telugu movies on OTT released this week. Track releases on Amazon Prime, Netflix, JioHotstar, Aha, ZEE5, SonyLIV and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OTT Biryani – New Telugu OTT Releases This Week",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Telugu Movies on OTT This Week 2025 | OTT Biryani",
    description: "New Telugu movies on OTT released this week. Track releases on Amazon Prime, Netflix, JioHotstar, Aha, ZEE5 and more.",
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
