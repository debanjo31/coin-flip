import React from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();
  console.log(supabase);
  async function handleSignUp(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const { user, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      navigate("/dashboard");
      if (error) throw error;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h1 className="text-2xl text-white">SignUp</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
