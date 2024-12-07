import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setUser(response.data.user);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      localStorage.removeItem("token");
      navigate("/login");
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render children only if token exists
  if (!token) {
    return null; // You can display a loader or nothing during redirection
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
