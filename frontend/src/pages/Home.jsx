import React, { useRef, useState } from "react";
// impost { useGSAP } from "@gsap/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseref = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseref.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
        });
        gsap.to(panelCloseref.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute top-4 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporaray use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-6 relative">
          <h5
            ref={panelCloseref}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 opacity-0 text-2xl right-6 "
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full">
              {" "}
            </div>
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] text-lg px-12 py-2 rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eee] text-lg px-12 py-2 rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-red-500 "></div>
      </div>
    </div>
  );
};

export default Home;
