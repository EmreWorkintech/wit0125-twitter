import axios from "axios";
import { v4 as uuidv4 } from "uuid";

//1. action type constant oluştur çünkü typo çok yapıyoruz.
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

//thunk

export const GET_FOLLOWED_USERS_LOADING = "GET_FOLLOWED_USERS_LOADING";
export const GET_FOLLOWED_USERS_SUCCESS = "GET_FOLLOWED_USERS_SUCCESS";
export const GET_FOLLOWED_USERS_ERROR = "GET_FOLLOWED_USERS_ERROR";

//2. action creator function oluştur.
export const followUser = (user) => {
  return {
    type: FOLLOW_USER,
    payload: { ...user, id: uuidv4() },
  };
};

export const unfollowUser = (id) => {
  return {
    type: UNFOLLOW_USER,
    payload: id,
  };
};

export const getFollowedUsers = () => (dispatch) => {
  dispatch({
    type: GET_FOLLOWED_USERS_LOADING,
  });

  axios
    .get("https://67e27bdb97fc65f535364c6e.mockapi.io/api/v1/login")
    .then((response) => {
      console.log("axios end success");
      dispatch({
        type: GET_FOLLOWED_USERS_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("axios end error");
      dispatch({
        type: GET_FOLLOWED_USERS_ERROR,
        payload: error.message,
      });
    });
};
