import {  GetStaticProps } from "next";
import NetworkCards from "../../components/NetworkCards";
import { NetworksJson } from "../../constants/networks";
import { Networks } from "../../types/Types";

export default function NetworksIndex({networks}: {networks: Networks}) {
    return (
        <NetworkCards networks={networks} />
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const networks: Networks = NetworksJson
    return {
        props: {
            networks
        }
    }
}