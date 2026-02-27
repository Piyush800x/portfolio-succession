import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GrainOverlay from "./components/GrainOverlay";
import JsonLd from "./components/JsonLd";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://piyushpaul.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Piyush Paul — Full-Stack Developer & Engineer",
    template: "%s | Piyush Paul",
  },
  description:
    "Portfolio of Piyush Paul — Full-Stack Developer and Backend Engineer specializing in Python, Next.js, Flask, React, and cloud-native architectures. Building scalable systems and modern web applications.",
  keywords: [
    "Piyush Paul",
    "Full-Stack Developer",
    "Backend Engineer",
    "Python Developer",
    "Next.js Developer",
    "Flask",
    "React",
    "Web Developer Portfolio",
    "Software Engineer",
    "TypeScript",
    "MongoDB",
    "AWS",
    "GCP",
  ],
  authors: [{ name: "Piyush Paul", url: siteUrl }],
  creator: "Piyush Paul",
  publisher: "Piyush Paul",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Piyush Paul — Portfolio",
    title: "Piyush Paul — Full-Stack Developer & Engineer",
    description:
      "Full-Stack Developer and Backend Engineer. Building scalable systems, security tools, and modern web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Paul — Full-Stack Developer & Engineer",
    description:
      "Full-Stack Developer and Backend Engineer. Building scalable systems, security tools, and modern web applications.",
    creator: "@piyush_paul",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* JSON-LD Structured Data */}
        <JsonLd />

        {/* Ambient gradient background */}
        <div className="ambient-gradient" aria-hidden="true" />

        {/* Film grain overlay */}
        <GrainOverlay />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10">{children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
