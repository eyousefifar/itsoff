import { APIClient } from "../../../_api";

const endpoint = "/users/bookmarks";

interface IData {
  product: string;
}

function toggleBookmark(data: IData) {
  return APIClient.post(endpoint, data);
}

export { toggleBookmark };
