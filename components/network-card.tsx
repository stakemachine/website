"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCoinGeckoPrice } from "@/hooks/useCoinGeckoPrice";
import { Loader2 } from "lucide-react";
import { Network } from "@/types/Types";

export function NetworkCard({ network }: { network: Network }) {
  const { price, loading, error } = useCoinGeckoPrice(network.coingecko_id);

  return (
    <Link href={`/networks/${network.slug}`}>
      <Card className="h-full transition-colors hover:border-primary hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <Image
              src={network.logo}
              alt={`${network.name} logo`}
              width={40}
              height={40}
              className="rounded-full bg-white"
            />
            <CardTitle className="text-2xl">{network.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground text-lg">{network.shortDesc}</p>
          <div className="grid grid-cols-2 gap-6">
            {network.stats &&
              network.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold dark:text-gray-100">
                    {stat.value}
                  </p>
                </div>
              ))}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Current Price
              </p>
              {loading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : error ? (
                <p className="text-sm text-red-500">Failed to load price</p>
              ) : (
                <p className="text-2xl font-bold dark:text-gray-100">
                  ${price?.toFixed(2) ?? "N/A"}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
