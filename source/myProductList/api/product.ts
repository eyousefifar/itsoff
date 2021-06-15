import { APIClient } from "../../../_api";

const endpoint = "/products";

const sellerId = process.env.SELLER_ID;

function getAllSellerProduct() {
  return APIClient.get(`${endpoint}/seller/${sellerId}`);
}

function getMyProduct() {
  return APIClient.get(`${endpoint}/my`);
}

export { getAllSellerProduct, getMyProduct };
