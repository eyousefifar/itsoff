import axios from "axios";

const baseURL = process.env.BASE_URL;

const APIClient = axios.create({ baseURL });

function setAuthToken(token: string) {
  if (token) APIClient.defaults.headers.Authorization = `Bearer ${token}`;
  else APIClient.defaults.headers.Authorization = ``;
}

export { APIClient, setAuthToken };
