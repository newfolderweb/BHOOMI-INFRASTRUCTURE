import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050F1B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bhoomi Infrastructure — Construction & Outsourcing",
  description:
    "Bhoomi Infrastructure Pvt. Ltd. delivers end-to-end infrastructure construction and outsourcing services. Civil engineering, industrial construction, government projects, manpower outsourcing and facility management across India.",
  keywords: [
    "infrastructure construction",
    "outsourcing services",
    "civil engineering",
    "government infrastructure",
    "facility management",
    "Lucknow construction company",
    "Bhoomi Infrastructure",
    "manpower outsourcing",
    "housekeeping services",
    "data centre construction",
  ],
  authors: [{ name: "Bhoomi Infrastructure Pvt. Ltd." }],
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
    title: "Bhoomi Infrastructure — We Construct. We Outsource.",
    description:
      "From foundations to facility management — Bhoomi delivers end-to-end infrastructure solutions with military-grade precision.",
    type: "website",
    locale: "en_IN",
    siteName: "Bhoomi Infrastructure",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhoomi Infrastructure — We Construct. We Outsource.",
    description:
      "End-to-end infrastructure construction and outsourcing services across India.",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-body" suppressHydrationWarning>{children}</body>
    </html>
  );
}
