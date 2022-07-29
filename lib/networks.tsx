import { NetworksJson } from "../constants/networks";
export function getAllNetworksPaths(): string[] {
    return NetworksJson.map(network => '/networks/' + network.slug);
}