import React from "react";
import Post from "./Post";
import { toast } from "react-toastify";
import { usePosts } from "../services/queries";

function PostList() {
  const { data, error, isPending } = usePosts();

  if (isPending) return "Loading...";
  if (error) {
    toast.error(error.message);
    return error.message;
  }

  return (
    <div>
      {data.map((item, index) => (
        <Post item={item} key={index} />
      ))}
    </div>
  );
}

export default PostList;
