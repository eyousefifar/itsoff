import { APIClient } from "../../../_api";

const endpoint = "/users";

function getProfile() {
  return APIClient.get(endpoint);
}

export { getProfile };
