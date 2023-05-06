import React from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    console.log("Logout");
    supabase.auth.signOut();
    navigate("/login");
  };
  return (
    <div>
      <h1 className="text-2xl text-white">Dashboard</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

export default Dashboard;
