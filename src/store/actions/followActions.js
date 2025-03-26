import { v4 as uuidv4 } from "uuid";

//1. action type constant oluştur çünkü typo çok yapıyoruz.
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

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
