import axios from "axios";

function createAxiosInstance() {
  return axios.create({
    baseURL: "https://67e27bdb97fc65f535364c6e.mockapi.io/api/v1/",
    headers: { Authorization: localStorage.getItem("token") },
  });
}

export const API = createAxiosInstance();
