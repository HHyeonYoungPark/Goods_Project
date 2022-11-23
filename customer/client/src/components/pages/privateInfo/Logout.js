import { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.clear();
    window.location = "/";
  }, []);
}

export default Logout;
