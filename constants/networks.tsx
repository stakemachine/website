export const NetworksJson = [
  {
    name: "The Graph",
    desc: "The Graph is an indexing protocol for organizing blockchain data and making it easily accessible with GraphQL.",
    shortDesc:
      "Decentralized indexing protocol for Web3. Efficiently query blockchain data.",
    longDesc:
      "The Graph is a decentralized protocol for indexing and querying blockchain data. It makes it possible to query data that is difficult to query directly. Projects with complex smart contracts like Uniswap use The Graph for their subgraphs.",
    slug: "the-graph",
    fee: 0.1,
    apy: null,
    stats: [
      { label: "Fee", value: "10%" },
      { label: "APY", value: "~12.5%" },
    ],
    network: "arbitrum",
    coingecko_id: "the-graph",
    symbol: "GRT",
    logo: "/logo/network/the-graph.svg",
    tokens: 25149230,
    usd_rate: 0.1,
    staking_url:
      "https://thegraph.com/explorer/profile/0xe0ceec6daa59cc951f3f71d6fc4221e55ef6c386?view=Indexing&chain=arbitrum-one",
    validators: [
      {
        address: "0xe0ceec6daa59cc951f3f71d6fc4221e55ef6c386",
        name: "The Graph Indexer",
      },
    ],
    seo: {
      keywords: [
        "The Graph",
        "Blockchain",
        "Crypto",
        "GRT",
        "How to stake GRT",
      ],
      description: "Stake GRT tokens to earn rewards on The Graph network.",
    },
    faq: [
      {
        question: "What is The Graph?",
        answer:
          "The Graph is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum. It makes it possible to query data that is difficult to query directly.",
      },
      {
        question: "How does staking work on The Graph?",
        answer:
          "Staking on The Graph involves delegating GRT tokens to Indexers. Delegators earn a share of query fees and indexing rewards in proportion to their stake.",
      },
      {
        question: "What is the minimum amount to stake?",
        answer:
          "There is no minimum amount to delegate on The Graph. However, due to gas costs, it's recommended to delegate a meaningful amount to make the transaction worthwhile.",
      },
    ],
  },
  {
    name: "Partisia",
    desc: "Partisia Blockchain is the only blockchain that supports secure multiparty computation.",
    shortDesc:
      "Privacy-first blockchain platform combining public and private smart contracts.",
    longDesc:
      "Partisia is a privacy-first blockchain platform that combines public and private smart contracts. It offers a unique approach to blockchain technology, focusing on data privacy and security.",
    slug: "partisia",
    fee: 0.02,
    apy: 0.1,
    coingecko_id: "partisia-blockchain",
    symbol: "MPC",
    network: "partisia",
    logo: "/logo/network/partisia.svg",
    tokens: 25000,
    usd_rate: 0.1,
    staking_url:
      "https://partiscan.io/validators/00a32433ea7bad4c8110d784e89a9711f02a5cac45/stake",
    validators: [
      {
        address: "00a32433ea7bad4c8110d784e89a9711f02a5cac45",
        name: "Baker node",
      },
    ],
    stats: [
      { label: "Fee", value: "10%" },
      { label: "APY", value: "~12.5%" },
    ],
    seo: {
      keywords: ["Partisia", "Blockchain", "Crypto", "MPC", "How to stake MPC"],
      description: "Stake MPC tokens to earn rewards on Partisia Blockchain.",
    },
    faq: [
      {
        question: "What is Partisia Blockchain?",
        answer:
          "Partisia Blockchain is a Web 3.0 public blockchain built for trust, transparency, privacy, and speed of light finalization.",
      },
      {
        question: "How does staking work on Partisia?",
        answer:
          "Staking on Partisia involves delegating MPC tokens to validators. Stakers earn rewards for helping secure the network.",
      },
      {
        question: "What makes Partisia unique?",
        answer:
          "Partisia combines public and private smart contracts, offering a unique approach to blockchain technology that focuses on data privacy and security.",
      },
    ],
  },
  {
    name: "Namada",
    desc: "Namada is a proof-of-stake L1 protocol for interchain asset-agnostic privacy.",
    shortDesc:
      "Interchain privacy platform enabling asset-agnostic private transfers.",
    longDesc:
      "Namada is an interchain privacy platform that enables asset-agnostic private transfers. It provides a robust infrastructure for privacy-preserving applications and cross-chain transactions.",
    slug: "namada",
    fee: 0.05,
    apy: 0.1,
    coingecko_id: "namada",
    symbol: "NAM",
    network: "mainnet",
    logo: "/logo/network/namada.svg",
    tokens: 25000,
    usd_rate: 0.1,
    staking_url:
      "https://shielded.live/validators/6996092C380F4A64E5CF1EC52A2699E8D9325C1AAB2DF5D57BA750926C50E1AB",
    validators: [
      {
        address: "tnam1q9mnn2qkg3fzuw8hzwgnuxa42rvdjhkn5s065aa3",
        name: "Genesis node",
      },
    ],
    stats: [
      { label: "Fee", value: "5%" },
      { label: "APY", value: "~12.5%" },
    ],
    seo: {
      keywords: ["Namada", "blockchain", "Crypto", "NAM", "How to stake NAM"],
      description: "Stake NAM tokens to earn rewards on Namada network.",
    },
    faq: [
      {
        question: "What is Namada?",
        answer:
          "Namada is an interchain privacy platform that enables asset-agnostic private transfers and shielded applications.",
      },
      {
        question: "How does staking work on Namada?",
        answer:
          "Staking on Namada involves delegating NAM tokens to validators. Stakers earn rewards for helping secure the network and participate in governance.",
      },
      {
        question: "What are Namada's key features?",
        answer:
          "Namada offers multi-asset shielding, interchain privacy, and a unique governance model that allows for private voting.",
      },
    ],
  },
];
