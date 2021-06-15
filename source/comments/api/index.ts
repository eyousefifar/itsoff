import { APIClient } from "../../../_api";
const sellerId = process.env.SELLER_ID;

const endpoint = "/users/comments";

function getAllComments() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

function newComment(data: any) {
  return APIClient.post(`${endpoint}/${sellerId}`, data);
}

export { getAllComments, newComment };
