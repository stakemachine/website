import { NetworkCard } from "@/components/network-card";
import { RepoCard } from "@/components/repo-card";
import { ExploreNetworksButton } from "@/components/explore-networks-button";
import type { Metadata } from "next";
import { NetworksJson } from "@/constants/networks";
import { GithubReposJson } from "@/constants/github.repos";

export const metadata: Metadata = {
  title: "Enhance Your Staking Rewards with Stake Machine",
  description:
    "Stake Machine provides non-custodial staking services across multiple blockchain networks. Enhance your staking rewards with our reliable infrastructure.",
  openGraph: {
    images: [
      {
        url: "https://stake-machine.com/oval-favicon.svg",
        width: 64,
        height: 64,
        alt: "Stake Machine - Enhance Your Staking Rewards",
      },
    ],
  },
};

export default function Home() {
  const networks = NetworksJson;
  const repositories = GithubReposJson;
  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-16 sm:mb-0">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8">
            We help run{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400">
              blockchain
            </span>{" "}
            networks
          </h1>
          <p className="mx-auto mt-8 max-w-[800px] text-lg sm:text-xl text-muted-foreground mb-12">
            Our reliable infrastructure can help you enhance your staking
            rewards across multiple blockchain networks.
          </p>
          <div className="mt-12">
            <ExploreNetworksButton />
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 animate-bounce">
          <div
            className="mx-auto max-w-none flex justify-center pt-10 md:pt-32"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="networks"
        className="min-h-screen flex items-center py-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white text-center mb-16">
            Networks we support
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {networks.map((network) => (
              <NetworkCard key={network.name} network={network} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">
            We love Open-Source
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repositories.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
