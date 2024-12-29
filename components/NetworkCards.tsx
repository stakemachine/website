import { Networks } from "../types/Types";
import NetworkCard from "./NetworkCard";
export default function NetworkCards({ networks }: { networks: Networks }) {
  return (
    <section className="relative pt-10 lg:pt-10 pb-1 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="font-semibold text-lg text-indigo-500 mb-2 block">
          Stake with us
        </span>
        <h2
          className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
        >
          Networks we support
        </h2>
        <div className="flex flex-raw flex-wrap justify-center pt-12">
          {networks?.map((network, index) => {
            return <NetworkCard key={index} network={network} />;
          })}
        </div>
      </div>
    </section>
  );
}
