import React from "react";
import { BG_IMG } from "../utils/constants";

const Gptsearch = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="  absolute w-[calc(100dvw)] h-[calc(100dvh)]   "
          alt="bg-img"
          src={BG_IMG}
        />
      </div>
      <div className="absolute z-20">
        <div className="flex items-center m-40 w-full">
          <input
            type="text"
            placeholder="Name"
            className="bg-gray-700  p-3  w-full m-4 rounded-lg text-white text-xl "
          />
          <button className=" bg-purple-500 w-1/2 p-2 rounded-md font-bold text-2xl text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gptsearch;
