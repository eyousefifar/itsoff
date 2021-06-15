import { APIClient } from "../../../_api";

const endpoint = "/categores";

const sellerId = process.env.SELLER_ID;

function getAllCategores() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

function addCategory(data: any) {
  return APIClient.post(endpoint, data);
}

function deleteCategory(uuid: string) {
  return APIClient.delete(`${endpoint}/${uuid}`);
}

function updateCategory(uuid: string, data: any) {
  return APIClient.put(`${endpoint}/${uuid}`, data);
}

export { getAllCategores, addCategory, updateCategory, deleteCategory };
