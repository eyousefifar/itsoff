import { APIClient } from "../../../_api";

const endpoint = "/timing";

const sellerId = process.env.SELLER_ID;

function getAllMyTime() {
  return APIClient.get(endpoint);
}

function getAllTime() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}

function addTime(data: any) {
  return APIClient.post(endpoint, data);
}

function deleteTime(uuid: string) {
  return APIClient.delete(`${endpoint}/${uuid}`);
}

function statusToggleTime(uuid: string, data: any) {
  return APIClient.post(`${endpoint}/${uuid}`, data);
}

function updateTime(uuid: string, data: any) {
  return APIClient.put(`${endpoint}/${uuid}`, data);
}

export {
  statusToggleTime,
  getAllMyTime,
  addTime,
  deleteTime,
  updateTime,
  getAllTime
};
