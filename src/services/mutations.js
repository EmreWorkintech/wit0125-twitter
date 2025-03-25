import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTweet } from "./api";

export function usePostTweet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
}
