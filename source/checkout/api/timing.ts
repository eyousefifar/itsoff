import { APIClient } from "../../../_api";

const endpoint = "/timing";

const sellerId = process.env.SELLER_ID;

function getForSeller() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

export { getForSeller };
