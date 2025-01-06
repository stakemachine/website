import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stake Machine - Non-custodial Staking Services Provider",

  description:
    "Stake Machine provides reliable infrastructure to enhance your staking rewards across multiple blockchain networks.",
  keywords: [
    "staking",
    "blockchain",
    "cryptocurrency",
    "validator",
    "The Graph",
    "Partisia",
    "Namada",
  ],
  authors: [{ name: "Stake Machine" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stake-machine.com",
    siteName: "Stake Machine",
    images: [
      {
        url: "https://stake-machine.com/oval-favicon.svg",
        width: 64,
        height: 64,
        alt: "Stake Machine - Enhance Your Staking Rewards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@stakemachine",
    creator: "@stakemachine",
  },
  alternates: {
    canonical: "https://stake-machine.com",
  },
  icons: [
    {
      rel: "icon",
      url: "/oval-favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Stake Machine",
              url: "https://stake-machine.com",
              logo: "https://stake-machine.com/oval-favicon.svg",
              sameAs: [
                "https://twitter.com/stakemachine",
                "https://github.com/stakemachine",
              ],
              description:
                "Stake Machine provides non-custodial staking services across multiple blockchain networks.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
