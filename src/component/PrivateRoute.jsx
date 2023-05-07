import React from "react";
import useAuthStatus from "../hook/useAuthStatus";
import { Navigate, Outlet } from "react-router";
function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  console.log(loggedIn);
  if (checkingStatus) return <p>Loading...</p>;
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
