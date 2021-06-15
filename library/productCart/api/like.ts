import { APIClient } from "../../../_api";

const endpoint = "/products";

function toggleLike(id: string) {
  return APIClient.post(`${endpoint}/likes/${id}`);
}

export { toggleLike };
