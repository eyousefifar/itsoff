import { APIClient } from "../../../_api";

const endpoint = "/products";

function getProduct(uuid: string) {
  return APIClient.get(`${endpoint}/${uuid}`);
}

function updateProduct(uuid: string, data: any) {
  return APIClient.put(`${endpoint}/${uuid}`, data);
}

function addProduct(data: any) {
  return APIClient.post(endpoint, data);
}

export { getProduct, updateProduct, addProduct };
