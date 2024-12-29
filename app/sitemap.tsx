import { MetadataRoute } from "next";
import { NetworksJson } from "../constants/networks";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stake-machine.com"; // Replace with your actual domain

  // Define your static routes
  const staticRoutes = ["", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Define your dynamic network routes
  const networks = NetworksJson.map((network) => network.slug);
  const networkRoutes = networks.map((network) => ({
    url: `${baseUrl}/networks/${network}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...networkRoutes];
}
