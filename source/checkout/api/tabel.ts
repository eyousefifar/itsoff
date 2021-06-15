import { APIClient } from "../../../_api";

const endpoint = "/tabels";

const sellerId = process.env.SELLER_ID;

function getByTyming(id: string, day: string) {
  return APIClient.get(`${endpoint}/${sellerId}/${id}?day=${day}`);
}

function getBySeller() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

export { getByTyming, getBySeller };
