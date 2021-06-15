import { APIClient } from "../../../_api";

const endpoint = "/reserves";

function getBasket() {
  return APIClient.get(endpoint);
}

function pay(data: any) {
  return APIClient.post(`${endpoint}/pay`, data);
}

export { getBasket, pay };
