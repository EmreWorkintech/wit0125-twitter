import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ defaultValues: { email: "", password: "" }, mode: "onChange" });

  const history = useHistory();

  function submitFn(formData) {
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        console.log(res.data);
        reset();
        history.push("/feed");
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <form
      onSubmit={handleSubmit(submitFn)}
      className="w-full gap-4 flex flex-col"
    >
      <input
        {...register("email", {
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Geçerli email giriniz!",
          },
        })}
        className="login-input"
        placeholder="Email Address"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        {...register("password", {
          validate: (value) => value.length >= 8 || "En az 8 karakter yazınız.",
        })}
        className="login-input"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <button
        disabled={!isValid}
        className="bg-blue-400 text-white p-4 rounded-full w-full"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
