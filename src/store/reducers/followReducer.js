import { FOLLOW_USER, UNFOLLOW_USER } from "../actions/followActions";

const initialValue = {
  followedUsers: [
    {
      name: "Emre Şahiner",
      nickname: "emres",
      avatar:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/33.jpg",
    },
  ],
};

//3. ilgili action için reducer'ına o case'i ekle.
export function followReducer(state = initialValue, action) {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        followedUsers: [...state.followedUsers, action.payload],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        followedUsers: state.followedUsers.filter(
          (user) => user.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
