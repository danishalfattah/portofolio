import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danishalfattah.site"),
  title: {
    default: "Danish Alfattah — Portfolio",
    template: "%s | Danish Alfattah",
  },
  description:
    "Portfolio of Muhammad Danish Alfattah Lubis — Informatics Engineering Student at University of Brawijaya. Explore projects in web development, mobile apps, and AI.",
  keywords: [
    "Danish Alfattah",
    "Muhammad Danish Alfattah Lubis",
    "Software Developer",
    "Web Developer",
    "Portfolio",
    "University of Brawijaya",
    "Next.js",
    "React",
    "TypeScript",
    "Frontend Developer",
    "Fullstack Developer",
  ],
  authors: [
    {
      name: "Muhammad Danish Alfattah Lubis",
      url: "https://danishalfattah.site",
    },
  ],
  creator: "Muhammad Danish Alfattah Lubis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danishalfattah.site",
    siteName: "Danish Alfattah",
    title: "Danish Alfattah — Software Developer & Portfolio",
    description:
      "Portfolio of Muhammad Danish Alfattah Lubis — Software Developer & CS Student at University of Brawijaya. Explore projects in web development, mobile apps, and AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Alfattah — Software Developer & Portfolio",
    description:
      "Portfolio of Muhammad Danish Alfattah Lubis — Software Developer & CS Student at University of Brawijaya.",
  },
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
    canonical: "https://danishalfattah.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
