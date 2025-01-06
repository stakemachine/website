"use client";
import Image from "next/image";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Network } from "@/types/Types";
import Link from "next/link";
import { Breadcrumbs } from "./breadcrumbs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function NetworkPage({ network }: { network: Network }) {
  const breadcrumbItems = [
    // { label: "Networks", href: "/networks" },
    {
      label: network.name,
      href: `/networks/${network.name.toLowerCase().replace(/\s+/g, "-")}`,
    },
  ];
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-center gap-6 mb-12">
          <Image
            src={network.logo}
            alt={`${network.name} logo`}
            width={64}
            height={64}
            className="rounded-full"
          />
          <h1 className="text-5xl font-bold tracking-tighter">
            {network.name} Network
          </h1>
        </div>

        <div className="grid gap-12 md:grid-cols-2 mb-20">
          <div>
            <h2 className="mb-6 text-3xl font-semibold">
              About {network.name}
            </h2>
            <p className="text-lg text-muted-foreground">{network.longDesc}</p>
          </div>

          <div className="rounded-lg border p-8">
            <h2 className="mb-6 text-3xl font-semibold">Validator Details</h2>
            {network?.validators?.map((val) => (
              <div className="space-y-4" key={val.name}>
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-lg font-medium">
                      Validator Address
                    </span>
                    <CopyButton value={val.address} />
                  </div>
                  <code className="block w-full rounded-md bg-muted p-3 text-m">
                    {val.address}
                  </code>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("How to stake guide coming soon!");
                      }}
                    >
                      How to stake
                    </a>
                  </Button>
                  <Button asChild>
                    <Link
                      href={network.staking_url}
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      Stake
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-semibold">
            Performance & Statistics
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {network.stats?.map((stat) => (
              <div key={stat.label} className="rounded-lg border p-6">
                <div className="text-lg font-medium text-muted-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {network.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
