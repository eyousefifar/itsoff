import { APIClient } from "../../../_api";

const endpoint = "/users";

export function getProfile() {
  return APIClient.get(endpoint);
}

export function editProfile(data: any) {
  return APIClient.put(endpoint, data);
}

export function getMyBookMark() {
  return APIClient.get(`${endpoint}/bookmarks`);
}
