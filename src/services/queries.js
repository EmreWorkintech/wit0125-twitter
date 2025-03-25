import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 10000,
  });
}
