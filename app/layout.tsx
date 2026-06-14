import type { Metadata, Viewport } from "next";
import { Inter, Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexuswagerofficial.com"),
  title: {
    template: "%s | NexusWager",
    default: "NexusWager — Competitive Skill-Based Gaming Ecosystem",
  },
  description:
    "NexusWager is a premium gaming ecosystem in development, built for players, developers, studios, publishers, partners, and future competitive gaming experiences.",
  keywords: [
    "NexusWager",
    "competitive gaming",
    "skill-based gaming",
    "gaming ecosystem",
    "game developers",
    "tournaments",
    "leaderboards",
    "gaming community",
    "partner platform",
  ],
  authors: [{ name: "NexusWager" }],
  creator: "NexusWager",
  publisher: "NexusWager",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexuswagerofficial.com",
    siteName: "NexusWager",
    title: "NexusWager — Competitive Skill-Based Gaming Ecosystem",
    description:
      "A premium gaming ecosystem in development for players, developers, studios, publishers, partners, and future competitive gaming experiences.",
    images: [
      {
        url: "/assets/hero/hero-dashboard.webp",
        width: 1200,
        height: 630,
        alt: "NexusWager gaming ecosystem preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusWager — Competitive Skill-Based Gaming Ecosystem",
    description:
      "A premium gaming ecosystem in development for players, developers, studios, publishers, partners, and future competitive gaming experiences.",
    images: ["/assets/hero/hero-dashboard.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#050505] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}