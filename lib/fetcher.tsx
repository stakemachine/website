import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function GetData(url: string) {
    const { data, error } = useSWR(url, fetcher);

    if (error) {
        console.log(error);
    }
    if (!data) {
        return null;
    }
    return data;
}

export function GetGeckoPrice(id: string) {
    const url = `https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=${id}`;
    const priceData = GetData(url);
    if (!priceData) {
        return null;
    }
    return priceData[id].usd;
}