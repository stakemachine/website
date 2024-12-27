export const NetworksJson = [
	{
		name: "The Graph",
		desc: "The Graph is an indexing protocol for organizing blockchain data and making it easily accessible with GraphQL.",
		slug: "thegraph",
		fee: 0.1,
		apy: null,
		network: "arbitrum",
		coingecko_id: "the-graph",
		symbol: "GRT",
		logo: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/svg/black/grt.svg",
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
	},
	{
		name: "Partisia",
		desc: "Partisia Blockchain is the only blockchain that supports secure multiparty computation.",
		slug: "partisia",
		fee: 0.02,
		apy: 0.1,
		coingecko_id: "partisia",
		symbol: "MPC",
		network: "partisia",
		logo: "https://partisiablockchain.com/wp-content/uploads/2023/09/footer-logo.svg",
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
	},
	{
		name: "Namada",
		desc: "Namada is a proof-of-stake L1 protocol for interchain asset-agnostic privacy.",
		slug: "namada",
		fee: 0.05,
		apy: 0.1,
		coingecko_id: "namada",
		symbol: "MPC",
		network: "mainnet",
		logo: "https://namada.net/_next/static/media/namada-logo-symbol.dd39870e.svg",
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
	},
];
