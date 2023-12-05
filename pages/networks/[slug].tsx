import { GetStaticPaths, GetStaticProps } from "next";
import { Network } from "../../types/Types";
import { NetworksJson } from "../../constants/networks";
import Image from "next/image";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { NextSeo } from "next-seo";
import Link from "next/link";

export function getNetworkBySlug(slug: string): Network | undefined {
  return NetworksJson.find((network) => network.slug === slug);
}

export function getAllNetworksPaths(): string[] {
  return NetworksJson.map((network) => "/networks/" + network.slug);
}

export default function NetworkInfo({ network }: { network: Network }) {
  /* var price: number = GetGeckoPrice(network.coingecko_id); */
  var [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <NextSeo
        title={`Earn ${network.symbol} with`}
        description={`Stake ${network.symbol} and earn rewards with Stake Machine`}
        canonical={"https://stake-machine.com/networks/" + network.slug}
        openGraph={{
          url: "https://stake-machine.com/",
          title: `Earn ${network.symbol} with Stake Machine`,
          description: `Stake ${network.symbol} and earn rewards with Stake Machine`,
        }}
      />

      <section>
        <div className="max-w-6xl mx-auto px-4 pt-20 sm:px-6 ">
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
                      <div
                        className="border p-4 rounded-lg flex bg-gray-50"
                        onMouseLeave={() => setIsCopied(false)}
                      >
                        <div className="pr-3 font-light max-w-[16rem] sm:max-w-fit">
                          <p className="text-clip truncate">{val.address}</p>
                        </div>
                        <CopyToClipboard
                          text={val.address}
                          onCopy={() => setIsCopied(true)}
                        >
                          <div
                            className="tooltip cursor-pointer"
                            data-tip={isCopied ? "Copied!" : "Copy"}
                          >
                            <svg
                              width={24}
                              height={24}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                        </CopyToClipboard>
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
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllNetworksPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const network = getNetworkBySlug(params?.slug as string);
  return {
    props: {
      network,
    },
  };
};
