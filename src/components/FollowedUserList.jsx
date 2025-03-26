import React from "react";
import { useSelector } from "react-redux";
import FollowedUser from "./FollowedUser";

function FollowedUserList() {
  const users = useSelector((state) => state.follow.followedUsers);
  return (
    <div>
      <h2 className="font-bold text-lg">Followed Users</h2>
      {users.map((user, index) => (
        <FollowedUser key={index} user={user} />
      ))}
    </div>
  );
}

export default FollowedUserList;
