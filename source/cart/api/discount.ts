import { APIClient } from "../../../_api";

const endpoint = "/discounts";

function validate_Discount(code: number) {
  return APIClient.get(`${endpoint}/${code}/validate`);
}

export { validate_Discount };
