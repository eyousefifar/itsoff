import { APIClient } from "../../../_api";

const endpoint = "/holiday";

function getAllMyHoliday() {
  return APIClient.get(endpoint);
}

function addHoliday(data: any) {
  return APIClient.post(endpoint, data);
}

function deleteHoliday(uuid: string) {
  return APIClient.delete(`${endpoint}/${uuid}`);
}

export { getAllMyHoliday, addHoliday, deleteHoliday };
