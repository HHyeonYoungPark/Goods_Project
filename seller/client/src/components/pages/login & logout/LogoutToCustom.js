import { useEffect } from "react";

function LogoutToCustom() {
  useEffect(() => {
    localStorage.clear();
    window.location = "http://localhost:3001/";
  }, []);
}

export default LogoutToCustom;
