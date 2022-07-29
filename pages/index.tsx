import type { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo';
import { NetworksJson } from '../constants/networks';
import { Networks } from '../types/Types';
import Hero from '../components/Hero';
import NetworkCards from '../components/NetworkCards';
import { GithubRepo, GithubReposJson } from '../constants/github.repos';
import GithubRepoCards from '../components/GithubRepoCards';

export default function Home({ networks, githubRepos }: { networks: Networks, githubRepos: GithubRepo[] }) {
  return (
    <>
      <NextSeo
        title="Non-custodial staking provider"
        description="Description about pages."
        canonical="https://stake-machine.com/"
        openGraph={{
          type: 'website',
          url: 'https://stake-machine.com/',
          title: 'Stake Machine - PoS networks validator',
          description: 'Reliable Web3 infrastructure',
          site_name: 'Stake Machine',
        }}
        twitter={{
          handle: '@stakemachine',
          site: '@stakemachine',
          cardType: 'summary_large_image',
        }}
      />
      <Hero />
      <NetworkCards networks={networks} />
      <GithubRepoCards githubRepos={githubRepos} />
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const networks: Networks = NetworksJson
  const githubRepos = GithubReposJson
  return {
    props: {
      networks,
      githubRepos
    }
  }
}