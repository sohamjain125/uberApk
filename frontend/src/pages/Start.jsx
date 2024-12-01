import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-[url('https://media.istockphoto.com/id/1415182923/photo/view-of-city-traffic-with-traffic-lights-in-the-foreground-a-semaphore-with-a-green-light.jpg?s=2048x2048&w=is&k=20&c=sVX6-F84GLXPBEak3REcCL056NVtsWc51Q4sZ9cKDfk=')] pt-8  h-screen w-full flex justify-between flex-col ">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to={"/login"}
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 "
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
