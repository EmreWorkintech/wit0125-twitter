import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function NewPostForm() {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { post: "" }, mode: "onChange" });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => {
      return axios
        .post("https://67e27bdb97fc65f535364c6e.mockapi.io/api/v1/tweets", data)
        .then((response) => response.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      reset();
    },
  });

  function submitFn(formData) {
    mutation.mutate(formData);
  }

  return (
    <form
      onSubmit={handleSubmit(submitFn)}
      className="flex gap-4 justify-between items-start mb-4"
    >
      <img src={user.avatar} className="rounded-full w-12" />
      <textarea
        {...register("post", {
          minLength: { value: 3, message: "Lütfen mesajınızı yazınız." },
        })}
        className="w-full border border-slate-200"
      >
        {" "}
      </textarea>
      <button>Post</button>
      {errors.tweet && <p>{errors.tweet.message}</p>}
      {mutation.isPending && "Posting data..."}
      {mutation.error && mutation.error.message}
    </form>
  );
}

export default NewPostForm;
