import { API } from "../api";

export function getPosts() {
  return API.get("tweets").then((response) => {
    return response.data;
  });
}

export function postTweet(data) {
  return API.post("tweets", data).then((response) => response.data);
}
