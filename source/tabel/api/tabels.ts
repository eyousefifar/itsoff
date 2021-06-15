import { APIClient } from "../../../_api";

const endpoint = "/tabels";

function getAllMyTabel() {
  return APIClient.get(endpoint);
}

function addTabel(data: any) {
  return APIClient.post(endpoint, data);
}

function deleteTabel(uuid: string) {
  return APIClient.delete(`${endpoint}/${uuid}`);
}

function updateTabel(uuid: string, data: any) {
  return APIClient.put(`${endpoint}/${uuid}`, data);
}

export { getAllMyTabel, addTabel, deleteTabel, updateTabel };
