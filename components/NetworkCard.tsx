import Link from "next/link";
import Image from "next/image";
import { Network } from "../types/Types";
export default function NetworkCard({ network }: { network: Network }) {
  return (
    <div className="mb-6 mt-10 w-full max-w-xs break-words rounded-xl bg-indigo-100 shadow-lg ml-3 mr-3 py-4">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="flex w-full justify-center">
            <div className="block -m-16 rounded-full border-none align-middle">
              <Image
                src={network.logo}
                alt={network.name}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h3 className="mb-1 text-2xl font-bold leading-normal">
            {network.name}
          </h3>
          <div className="mt-0 mb-2 text-xs font-bold uppercase text-slate-500">
            {network.network}
          </div>
          <div className="w-full text-center">
            <div className="flex justify-center pb-0">
              <div className="p-3 pt-0 text-center">
                <span className="block text-xl font-bold uppercase tracking-wide">
                  {network.fee * 100}%
                </span>
                <span className="text-sm text-slate-500">Fee</span>
              </div>

              <div className="p-3 pt-0 text-center">
                <span className="block text-xl font-bold uppercase tracking-wide">
                  {network.apy ? network.apy * 100 : "NaN"}%
                </span>
                <span className="text-sm text-slate-500">APY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center">
          <div className="flex flex-wrap justify-center min-h-full h-44">
            <div className="w-full px-4">
              <div>
                <p className="mb-4 font-light leading-relaxed">
                  {network.desc}
                </p>
              </div>
            </div>
          </div>
          <div className="align-text-bottom">
            <Link
              href={"/networks/" + network.slug}
              className="font-normal text-slate-700 hover:text-slate-400"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
