import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige Landmarks | Luxury Real Estate in Jaipur, Rajasthan",
  description:
    "Discover ultra-luxury apartments, premium villas, and plotted developments by Prestige Landmarks. Rajasthan's most distinguished real estate developer since 1998.",
  keywords: [
    "luxury apartments Jaipur",
    "premium villas Rajasthan",
    "real estate Jaipur",
    "Prestige Landmarks",
    "luxury homes",
    "plotted development",
  ],
  openGraph: {
    title: "Prestige Landmarks | Luxury Real Estate in Jaipur",
    description:
      "Crafting architectural masterpieces across Rajasthan since 1998. Explore luxury apartments, villas, and premium developments.",
    type: "website",
    locale: "en_IN",
    siteName: "Prestige Landmarks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Landmarks | Luxury Real Estate",
    description:
      "Rajasthan's most distinguished real estate developer. Explore signature projects in Jaipur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-body antialiased bg-brand-black text-white`}
      >
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
