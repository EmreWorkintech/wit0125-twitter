import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Feed() {
  const { user } = useContext(UserContext);

  return <div>Feed - {user.email}</div>;
}

export default Feed;
