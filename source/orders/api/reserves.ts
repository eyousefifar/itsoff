import { APIClient } from "../../../_api";

const endpoint = "/reserves";

function getReserves(from: string, to: string) {
  return APIClient.get(
    `${endpoint}/orders?from=${from}&to=${to}&skip=0&limit=1000`
  );
}

export { getReserves };
