import { APIClient } from "../../../_api";

const endpoint = "/holiday";

const sellerId = process.env.SELLER_ID;

function getForSeller() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

function getMyHoliday() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

export { getForSeller, getMyHoliday };
