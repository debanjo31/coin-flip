import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import { useNavigate } from "react-router";

const useAuthStatus = () => {
  const navigate = useNavigate();
  const [loggedIn, setloggedIn] = useState(false);
  const [session, setSession] = useState(null);
  const [checkingStatus, setcheckingStatus] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        setloggedIn(true);
      }
      setcheckingStatus(false);
      console.log(session);
    });
  }, []);
  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard"); // redirect the user to the dashboard
    }
  }, [loggedIn]);
  return { loggedIn, checkingStatus };
};

export default useAuthStatus;
