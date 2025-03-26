import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowedUser from "./FollowedUser";
import { getFollowedUsers } from "../store/actions/followActions";

function FollowedUserList() {
  const users = useSelector((state) => state.follow.followedUsers);
  const isLoading = useSelector((state) => state.follow.loading);
  const error = useSelector((state) => state.follow.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowedUsers());
  }, [dispatch]);

  return (
    <div>
      <h2 className="font-bold text-lg">Followed Users</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red">{error}</p>}
      {users.map((user, index) => (
        <FollowedUser key={index} user={user} />
      ))}
    </div>
  );
}

export default FollowedUserList;
