import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateMyPage({ userId }) {
  return userId === "admin" ? <Navigate to="/AdminPage" /> : <Outlet />;
}

export default PrivateMyPage;
