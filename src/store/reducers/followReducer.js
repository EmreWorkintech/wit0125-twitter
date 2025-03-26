import {
  FOLLOW_USER,
  GET_FOLLOWED_USERS_ERROR,
  GET_FOLLOWED_USERS_LOADING,
  GET_FOLLOWED_USERS_SUCCESS,
  UNFOLLOW_USER,
} from "../actions/followActions";

const initialValue = {
  followedUsers: [],
  loading: false,
  error: "",
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
    case GET_FOLLOWED_USERS_LOADING:
      console.log("loadin");
      return { ...state, loading: true };
    case GET_FOLLOWED_USERS_SUCCESS:
      console.log("success");
      return {
        ...state,
        followedUsers: action.payload,
        loading: false,
        error: "",
      };
    case GET_FOLLOWED_USERS_ERROR:
      console.log("error");
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
