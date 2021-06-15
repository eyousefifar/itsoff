import { APIClient } from "../../../_api";

const endpoint = "/categores";

const sellerId = process.env.SELLER_ID;

function getAllCat() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

export { getAllCat };
