import axios from "axios";

export function getPosts() {
  return axios
    .get("https://67e27bdb97fc65f535364c6e.mockapi.io/api/v1/tweets")
    .then((response) => {
      return response.data;
    });
}

export function postTweet(data) {
  return axios
    .post("https://67e27bdb97fc65f535364c6e.mockapi.io/api/v1/tweets", data)
    .then((response) => response.data);
}
