import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";

const Sevs = () => {
  return (
    <div className=" w-full h-full flex items-center flex-col gap-6 ">
      <h2 className="font-extrabold  text-5xl py-10">Branches</h2>

      <div className="flex  justify-center gap-5 w-full flex-wrap px-5">
        <div className="lg:w-96 w-5/6 h-56 bg-white shadow-lg shadow-gray-500 rounded-lg  flex flex-col items-center justify-start">
          <h3 className="font-extrabold text-2xl text-blue-700 py-5">
            Ga East Municipal
          </h3>
          <p className="flex flex-row gap-1">
            <FaLocationArrow color="orange" size={30} />- Batticaloa, Sri Lanka.
          </p>
          <br />
          <hr />
          <h4 class=" font-bold mb-1 mt-8 flex flex-row items-center gap-2">
            <BsTelephoneFill color="orange" size={30} />
            +233(0) 222 222 / 222
          </h4>
        </div>
        <div className="lg:w-96 w-5/6 h-56 bg-white shadow-lg shadow-gray-500 rounded-lg "></div>
        <div className="lg:w-96 w-5/6 h-56 bg-white shadow-lg shadow-gray-500 rounded-lg "></div>
        <div className="lg:w-96 w-5/6 h-56 bg-white shadow-lg shadow-gray-500 rounded-lg "></div>
        <div className="lg:w-96 w-5/6 h-56 bg-white shadow-lg shadow-gray-500 rounded-lg "></div>
        <div className="lg:w-96 w-5/6 h-56 bg-white shadow-lg shadow-gray-500 rounded-lg "></div>
      </div>
    </div>
  );
};

export default Sevs;
