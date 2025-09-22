import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight, Manrope } from "next/font/google";
import localFont from "next/font/local";

// Components
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";

// Custom fonts (from public/fonts)
const cossetteTitre = localFont({
  src: [
    { path: "../../public/fonts/CossetteTitre-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/CossetteTitre-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cossette-titre",
});

const storyScript = localFont({
  src: "../../public/fonts/StoryScript-Regular.ttf",
  variable: "--font-story-script",
  weight: "400",
  style: "normal",
});

// Google fonts
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Techivance — AI-Native Design & Web Studio",
  description:
    "Premium websites, AI integrations, and digital branding that convert. Built with Next.js, motion, and SEO-focused design.",
  metadataBase: new URL("https://techivance.com"),
  openGraph: {
    title: "Techivance — AI-Native Design & Web Studio",
    description: "Premium websites, AI integrations, and digital branding that convert.",
    url: "https://techivance.com",
    siteName: "Techivance",
    type: "website",
  },
    icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // fallback / old browsers
      { url: "/favicon.png", type: "image/png", sizes: "32x32" }, // modern PNG
      { url: "/favicon.svg", type: "image/svg+xml" }, // vector
    ],
    apple: "/apple-touch-icon.png", // optional (180x180 PNG)
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
          className={`${interTight.variable} ${manrope.variable} ${cossetteTitre.variable} ${storyScript.variable}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
