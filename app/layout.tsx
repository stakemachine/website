import type { Metadata } from "next";

import "../styles/globals.css";

import React from "react";
import MinFooter from "../components/Layout/MinFooter";
import Header from "../components/Layout/Header";

export const metadata: Metadata = {
  title: {
    template: "%s Stake Machine",
    default: "Stake Machine - Non-custodial Staking Services Provider",
  },
  description:
    "We help run blockchain networks with reliable infrastructure to enhance your staking rewards.",
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
    <html lang="en">
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <MinFooter />
      </body>
    </html>
  );
}
