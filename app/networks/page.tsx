import NetworkCards from "../../components/NetworkCards";
import { NetworksJson } from "../../constants/networks";
import { Networks } from "../../types/Types";

export default function NetworksIndex() {
  const networks: Networks = NetworksJson;

  return <NetworkCards networks={networks} />;
}
