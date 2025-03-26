import React from "react";
import { useDispatch } from "react-redux";
import { unfollowUser } from "../store/actions/followActions";

function FollowedUser(props) {
  const { user } = props;
  const dispatch = useDispatch();

  function handleUnfollow() {
    dispatch(unfollowUser(user.id));
  }
  return (
    <div className="flex gap-2 justify-between items-start mb-6 mt-4">
      <img src={user.avatar} className="rounded-full w-12" />
      <div className="text-lg w-full">
        <div className="flex justify-between gap-2 items-start">
          <p>{user.name} </p>
          <button
            className="bg-black text-white rounded-full py-1 px-4"
            onClick={handleUnfollow}
          >
            Unfollow
          </button>
        </div>
        <p className="font-normal text-slate-700">@{user.nickname}</p>
      </div>
    </div>
  );
}

export default FollowedUser;
