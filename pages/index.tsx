import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { NetworksJson } from "../constants/networks";
import type { Networks } from "../types/Types";
import Hero from "../components/Hero";
import NetworkCards from "../components/NetworkCards";
import { type GithubRepo, GithubReposJson } from "../constants/github.repos";
import GithubRepoCards from "../components/GithubRepoCards";

export default function Home({
	networks,
	githubRepos,
}: { networks: Networks; githubRepos: GithubRepo[] }) {
	return (
		<>
			<NextSeo
				title="Non-custodial staking provider"
				description="Our reliable infrastructure can help you to enhance your staking rewards."
				canonical="https://stake-machine.com/"
				openGraph={{
					type: "website",
					url: "https://stake-machine.com/",
					title: "Stake Machine - non-custdodial staking provider",
					description:
						"Our reliable infrastructure can help you to enhance your staking rewards.",
					site_name: "Stake Machine",
				}}
				twitter={{
					handle: "@stakemachine",
					site: "@stakemachine",
					cardType: "summary_large_image",
				}}
			/>
			<Hero />
			<NetworkCards networks={networks} />
			<GithubRepoCards githubRepos={githubRepos} />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const networks: Networks = NetworksJson;
	const githubRepos = GithubReposJson;
	return {
		props: {
			networks,
			githubRepos,
		},
	};
};
