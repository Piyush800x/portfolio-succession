import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import GrainOverlay from "./components/GrainOverlay";

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

export const metadata: Metadata = {
  title: "Piyush Paul — Full-Stack Developer & Engineer",
  description:
    "Portfolio of Piyush Paul. Full-Stack Developer. Backend Engineer. Building scalable systems and modern web applications.",
  keywords: [
    "Full-Stack Developer",
    "Backend Engineer",
    "Python",
    "Next.js",
    "Flask",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Piyush Paul" }],
  openGraph: {
    title: "Piyush Paul — Full-Stack Developer & Engineer",
    description:
      "Full-Stack Developer. Backend Engineer. Building scalable systems and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Ambient gradient background */}
        <div className="ambient-gradient" aria-hidden="true" />

        {/* Film grain overlay */}
        <GrainOverlay />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
