import { APIClient } from "../../../_api";

const endpoint = "/products";

interface IData {
  status: boolean;
}

function statusToggle(id: string, data: IData) {
  return APIClient.post(`${endpoint}/${id}`, data);
}

function deleteProduct(id: string) {
  return APIClient.delete(`${endpoint}/${id}`);
}

export { statusToggle, deleteProduct };
