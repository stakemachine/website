import { NetworksJson } from "../../../constants/networks";
import Image from "next/image";

import Link from "next/link";

export default async function NetworkInfo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  /* var price: number = GetGeckoPrice(network.coingecko_id); */
  const { slug } = await params;

  const network = NetworksJson.find((network) => network.slug === slug);

  if (!network) {
    return <div>Network not found</div>;
  }
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 pt-28 sm:px-6 min-h-screen">
          <div className="mb-6 mt-10 w-full break-words rounded-xl bg-indigo-100 shadow-lg">
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center">
                <div className="block pt-4 rounded-full border-none align-middle">
                  <Image
                    src={network.logo}
                    alt={network.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className=" text-2xl font-bold leading-normal">
                {network.name}
              </h3>
              <div className=" text-xs font-bold uppercase text-slate-500">
                {network.network}
              </div>
              <div className="w-full text-center">
                <div className="flex justify-center">
                  <div className="p-2 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide">
                      {network.fee * 100}%
                    </span>
                    <span className="text-sm text-slate-500">Fee</span>
                  </div>

                  <div className="p-2 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide">
                      {network.apy ? network.apy * 100 : "NaN"}%
                    </span>
                    <span
                      className="text-sm text-slate-500 tooltip"
                      data-tip="Annual Percentage Yield"
                    >
                      APY
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 text-center">
              <div className="flex justify-center">
                <ul>
                  {network?.validators.map((val) => (
                    <li key={val.address}>
                      <div className="border p-4 rounded-lg flex bg-gray-50">
                        <div className="pr-3 font-light max-w-[16rem] sm:max-w-fit">
                          <p className="text-clip truncate">{val.address}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-4 card-actions justify-center">
                <Link href="" className="px-4">
                  <button className="btn">How to stake</button>
                </Link>
                <Link
                  href={network.staking_url}
                  className="px-4"
                  target="blank"
                >
                  <button className="btn btn-primary">Stake Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return NetworksJson.map((network) => ({
    slug: network.slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const network = NetworksJson.find((network) => network.slug === slug);
  if (!network) {
    return <div>Network not found</div>;
  }
  return {
    title: `Stake ${network.symbol} with`,
    description: network.desc,
    keywords: network.slug,
    openGraph: {
      type: "website",
      url: `https://stake-machine.com/networks/${network.slug}`,
      title: `Stake ${network.symbol} with Stake Machine`,
      description: network.desc,
      siteName: `Stake ${network.symbol} with Stake Machine`,
    },
    twitter: {
      title: `Stake ${network.symbol} with Stake Machine`,
      description: network.desc,
      site: "@stakemachine",
      card: "summary_large_image",
    },
  };
};
