import { notFound } from "next/navigation";
import { NetworkPage } from "@/components/network-page";
import { NetworksJson } from "@/constants/networks";
import Script from "next/script";

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
    title: `Stake ${network.symbol} (${network.name}): Earn rewards with Stake Machine`,
    description: network.seo.description,
    keywords: network.seo?.keywords.join(", "),
    openGraph: {
      type: "website",
      url: `https://stake-machine.com/networks/${network.slug}`,
      title: `Stake ${network.symbol} with Stake Machine`,
      description: network.shortDesc,
      siteName: `Stake ${network.symbol} with Stake Machine`,
    },
    twitter: {
      title: `Stake ${network.symbol} with Stake Machine`,
      description: network.shortDesc,
      site: "@stakemachine",
      card: "summary_large_image",
    },
    alternates: {
      canonical: `https://stake-machine.com/networks/${network.slug}`,
    },
  };
};

export async function generateStaticParams() {
  return NetworksJson.map((network) => ({
    slug: network.slug,
  }));
}

export default async function NetworkSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const network = NetworksJson.find((network) => network.slug === slug);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: network?.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  if (!network) {
    notFound();
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <NetworkPage network={network} />
    </>
  );
}
