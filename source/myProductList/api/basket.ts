import { APIClient } from "../../../_api";

const endpoint = "/reserves";

function getBasket() {
  return APIClient.get(endpoint);
}

export { getBasket };
