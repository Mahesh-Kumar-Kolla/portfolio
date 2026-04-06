import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Karthik | Learning Experience Designer",
  description:
    "Full-cycle L&D Professional with 10+ years of experience in Instructional Design and Training Delivery across Retail, BFSI, IT/ITES, and Telecommunications.",
  keywords: [
    "Learning Experience Designer",
    "Instructional Designer",
    "L&D Professional",
    "Training Developer",
    "eLearning Developer",
    "Articulate 360",
    "ADDIE",
    "Hyderabad",
  ],
  authors: [{ name: "Karthik" }],
  openGraph: {
    title: "Karthik | Learning Experience Designer",
    description:
      "Full-cycle L&D Professional with 10+ years of experience in Instructional Design and Training Delivery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik | Learning Experience Designer",
    description:
      "Full-cycle L&D Professional with 10+ years of experience in Instructional Design and Training Delivery.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
