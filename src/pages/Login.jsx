import React, { useState } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router";
import logo from "../assets/coinflip.png";
import "../index.css";

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignIn(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const { data, error } = await await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      navigate("/dashboard");
      console.log(supabase.auth.session());
      console.log(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Incorrect email or password.");
    }
  }

  return (
    <div className="login-page h-screen flex justify-center items-center">
      <div className="w-1/2"></div>
      <div className="w-1/2 ">
        <div className="w-3/4  flex flex-col gap-8 align-center">
          <div className="login-header flex gap-4">
            <img src={logo} alt="coinflip login logo" />
            <h1 className="text-4xl text-white ">Crypto</h1>
          </div>
          <form onSubmit={handleSignIn} className="">
            <label htmlFor="email" className="block text-lg text-white mb-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input"
              autoComplete="email"
            />
            <label
              htmlFor="password"
              className="block text-lg text-white mb-4 mt-4"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="input"
            />
            <div className="flex login-small">
              <p className=" ">
                {" "}
                <input
                  type="checkbox"
                  className="checkbox inline-block mr-2 "
                />{" "}
                Save your email and password
              </p>
              <p
                className=" ml-auto cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Don't have an account?
              </p>
            </div>
            <button type="submit" className="cta-button mt-16">
              Sign In
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
