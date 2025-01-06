import { NetworkCard } from "@/components/network-card";
import { NetworksJson } from "@/constants/networks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Blockchain Networks",
  description:
    "Explore the blockchain networks supported by Stake Machine for non-custodial staking services. Enhance your staking rewards across multiple networks.",
  openGraph: {
    images: [
      {
        url: "https://stake-machine.com/oval-favicon.svg",
        width: 64,
        height: 64,
        alt: "Stake Machine Supported Networks",
      },
    ],
  },
};

export default function NetworksPage() {
  const networks = NetworksJson;
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-8">
          Supported Networks
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Stake Machine provides non-custodial staking services across multiple
          blockchain networks. Explore our supported networks below and learn
          how you can enhance your staking rewards.
        </p>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {networks.map((network) => (
            <NetworkCard key={network.name} network={network} />
          ))}
        </div>
      </div>
    </div>
  );
}
