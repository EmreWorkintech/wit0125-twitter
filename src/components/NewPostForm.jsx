import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { usePostTweet } from "../services/mutations";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

function NewPostForm() {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { post: "" }, mode: "onChange" });

  const mutation = usePostTweet();

  function submitFn(formData) {
    mutation.mutate(formData);
    reset();
  }

  const KEY = import.meta.env.VITE_GEMINI_API;
  const genAI = new GoogleGenerativeAI(KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: "convert to english",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [],
    responseMimeType: "text/plain",
  };

  async function run() {
    const prompt = getValues("post");
    setValue("post", "Translating...");
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    setValue("post", result.response.text());
  }

  return (
    <form
      onSubmit={handleSubmit(submitFn)}
      className="flex gap-4 justify-between items-start mb-4"
    >
      <img src={user.avatar} className="rounded-full w-12" />
      <div className="relative flex-grow">
        <textarea
          {...register("post", {
            minLength: { value: 3, message: "Lütfen mesajınızı yazınız." },
          })}
          className=" w-full border border-slate-200"
          rows={5}
        >
          {" "}
        </textarea>
        <div className="absolute right-2 bottom-3" onClick={run}>
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </div>
      </div>

      <button>Post</button>

      {errors.tweet && <p>{errors.tweet.message}</p>}
      {mutation.isPending && "Posting data..."}
      {mutation.error && mutation.error.message}
    </form>
  );
}

export default NewPostForm;
