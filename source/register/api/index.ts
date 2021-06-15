import { APIClient } from "../../../_api";

const endpoint = "/users";

function login(data: any) {
  return APIClient.post(`${endpoint}/user/login`, data);
}

function verifyUser(data: any) {
  return APIClient.post(`${endpoint}/verifyUser`, data);
}

function register(data: any) {
  return APIClient.post(`${endpoint}/user/register`, data);
}

function getDiscount() {
  return APIClient.get(`discounts/getUserDiscount`);
}

export { login, verifyUser, register, getDiscount };
