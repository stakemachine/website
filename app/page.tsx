import { NetworksJson } from "../constants/networks";
import type { Networks } from "../types/Types";
import Hero from "../components/Hero";
import NetworkCards from "../components/NetworkCards";
import { GithubReposJson } from "../constants/github.repos";
import GithubRepoCards from "../components/GithubRepoCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-custodial staking provider - Stake Machine",
  description:
    "Our reliable infrastructure can help you enhance your staking rewards.",
  openGraph: {
    type: "website",
    url: "https://stake-machine.com/",
    title: "Stake Machine - non-custdodial staking provider",
    description:
      "Our reliable infrastructure can help you to enhance your staking rewards.",
    siteName: "Stake Machine - non-custdodial staking provider",
  },
  twitter: {
    title: "Stake Machine - non-custdodial staking provider",
    description:
      "Our reliable infrastructure can help you enhance your staking rewards.",
    site: "@stakemachine",
    card: "summary_large_image",
  },
};

export default function Home() {
  const networks: Networks = NetworksJson;
  const githubRepos = GithubReposJson;
  return (
    <>
      <Hero />
      <NetworkCards networks={networks} />
      <GithubRepoCards githubRepos={githubRepos} />
    </>
  );
}
