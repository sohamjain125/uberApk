import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import Loader from "../components/Loader";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      // console.log("No token, redirecting to login");
      navigate("/login");
      return;
    }
    if (!user._id) {
      // console.log("Fetching user profile...");
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log("User profile fetched:", response.data);
          setUser(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          // console.error("Error fetching profile:", err);
          localStorage.removeItem("token");
          navigate("/login");
        });
    } else {
      setIsLoading(false);
    }
  }, [token, navigate, setUser, user._id]);

  if (isLoading || !token) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
