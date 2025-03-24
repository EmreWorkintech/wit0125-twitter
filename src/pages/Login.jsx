import React from "react";
import LoginForm from "../components/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  return (
    <div className="mx-auto w-1/4 mt-16 flex gap-5 flex-col items-start">
      <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-5xl" />
      <h1 className="font-bold text-4xl">Log in to Twitter</h1>
      <LoginForm />
      <div className="flex justify-between w-full">
        <Link to="/forgot_password" className="text-blue-400">
          Forgot Password?
        </Link>
        <Link to="/forgot_password" className="text-blue-400">
          Sign up to Twitter
        </Link>
      </div>
    </div>
  );
}

export default Login;
