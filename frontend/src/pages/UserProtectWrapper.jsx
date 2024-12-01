import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Render children only if token exists
  if (!token) {
    return null; // You can display a loader or nothing during redirection
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
