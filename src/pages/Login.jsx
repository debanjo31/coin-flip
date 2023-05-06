import React from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  async function handleSignIn(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      navigate("/dashboard");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1 className="text-2xl text-white">Login</h1>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
