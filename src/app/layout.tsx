import type { Metadata, Viewport } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Department of Electronics & Communication Engineering | GCT Coimbatore",
  description:
    "The Department of Electronics and Communication Engineering at GCT Coimbatore — India's top-ranked institute for 7 consecutive years. Explore world-class research in Communications, VLSI, Photonics, Signal Processing and more with 55+ faculty, 18+ labs, and 400+ publications per year.",
  keywords: [
    "GCT Coimbatore ECE",
    "Electronics Communication GCT Coimbatore",
    "ECE Department GCT Coimbatore",
    "GCT Coimbatore admissions",
    "VLSI research India",
    "PhD ECE India",
    "electronics engineering research India",
    "5G research GCT Coimbatore",
  ],
  authors: [{ name: "GCT Coimbatore ECE Department" }],
  openGraph: {
    title: "Department of ECE | GCT Coimbatore",
    description: "India's premier ECE department — pioneering research in Communications, VLSI, Photonics, Signal Processing, and RF Systems.",
    url: "https://ece.gct.ac.in",
    siteName: "GCT Coimbatore ECE",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCT Coimbatore ECE Department",
    description: "Pioneering research in Communications, VLSI, Photonics, and Signal Processing since 1971.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080d1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
