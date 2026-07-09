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
    default: "Piyush Paul — AI/ML Developer & Cybersecurity Engineer",
    template: "%s | Piyush Paul",
  },
  description:
    "Portfolio of Piyush Paul — AI/ML Developer and Cybersecurity Engineer specializing in agentic AI systems, autonomous pipelines, penetration testing, and high-performance backend engineering. MLH Hack Days Winner. Builder of ARTA, PacketForge, and AstroRoni.",
  keywords: [
    "Piyush Paul",
    "AI Developer",
    "ML Developer",
    "Agentic AI",
    "Multi-Agent Systems",
    "Autonomous AI Agent",
    "Cybersecurity Engineer",
    "Penetration Testing",
    "Red Team AI",
    "Full-Stack Developer",
    "Backend Engineer",
    "Python Developer",
    "FastAPI",
    "Next.js Developer",
    "Flask",
    "React",
    "TypeScript",
    "DPDK",
    "Network Security",
    "RAG",
    "Retrieval-Augmented Generation",
    "LLM",
    "Gemini AI",
    "OpenAI",
    "Anthropic Claude",
    "MongoDB",
    "GCP",
    "Docker",
    "MLH Winner",
    "Hackathon",
    "West Bengal",
    "India",
    "Software Engineer Portfolio",
    "JIS College of Engineering",
    "ARTA",
    "PacketForge",
    "AstroRoni",
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
    title: "Piyush Paul — AI/ML Developer & Cybersecurity Engineer",
    description:
      "AI/ML Developer & Cybersecurity Engineer building autonomous AI agents, high-performance network systems, and full-stack applications. MLH Hack Days Winner · Synchronicity S2 Runner-Up · HackTropica Runner-Up.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Piyush Paul — AI/ML Developer & Cybersecurity Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Piyush Paul — AI/ML Developer & Cybersecurity Engineer",
    description:
      "AI/ML Developer & Cybersecurity Engineer. Building autonomous AI agents, DPDK network systems, and full-stack apps. MLH Hack Days Winner.",
    creator: "@piyushpaul_dev",
    images: ["/api/og"],
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
