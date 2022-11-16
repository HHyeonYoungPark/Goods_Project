import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ token }) {
  // return token ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />
}

export default PrivateRoute;
