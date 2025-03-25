import React from "react";
import Post from "./Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

function PostList() {
  const { data, error, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios
        .get("https://67e27bdb97fc65f535364c6e.mockapi.io/api/v1/tweets")
        .then((response) => {
          return response.data;
        });
    },
    staleTime: 10000,
  });

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
