import React from "react";
import FollowedUserList from "../components/FollowedUserList";

function RightColumn() {
  return (
    <div className="w-1/3 pt-8 px-4 ">
      <FollowedUserList />
    </div>
  );
}

export default RightColumn;
