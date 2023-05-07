import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

const useAuthStatus = () => {
  const [loggedIn, setloggedIn] = useState(false);
  const [session, setSession] = useState(null);
  const [checkingStatus, setcheckingStatus] = useState(true);
  console.log(session);

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
  return { loggedIn, checkingStatus };
};

export default useAuthStatus;
