import { APIClient } from "../../../_api";
const sellerId = process.env.SELLER_ID;
const endpoint = "/users/comments";

function getAllMyComment() {
  return APIClient.get(endpoint);
}

function getAllAcceptedComment() {
  return APIClient.get(`${endpoint}/${sellerId}`);
}
function acceptComment(uuid: string) {
  return APIClient.put(`${endpoint}/${uuid}`);
}
function delete_comment(uuid: string) {
  return APIClient.delete(`${endpoint}/${uuid}`);
}

export {
  getAllMyComment,
  acceptComment,
  getAllAcceptedComment,
  delete_comment
};
