import { APIClient } from "../../../_api";

const endpoint = "/reserves";

interface IData {
  count: number;
}

function pushBasket(id: string, data: IData) {
  return APIClient.post(`${endpoint}/${id}`, data);
}

function popBasket(id: string) {
  return APIClient.delete(`${endpoint}/${id}`);
}

export { pushBasket, popBasket };
