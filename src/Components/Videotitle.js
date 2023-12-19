import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const Videotitle = ({ title, desc }) => {
  return (
    <div className=" bg-gradient-to-r from-black w-screen aspect-video  absolute">
      <div className=" absolute bottom-0 sm:top-1/4 px-12 ">
        <h1 className="text-white text-lg sm:text-6xl font-bold sm:w-1/2">
          {title}
        </h1>

        <p className="py-6 text-xs sm:text-lg sm:w-1/3 text-white font-bold hidden sm:block ">
          {desc}{" "}
        </p>

        <div className="flex">
          <button className="bg-white text-black my-1 p-1 px-4 sm:px-12 text-xl rounded-lg flex items-center">
            <FaPlay />
            Play
          </button>
          <button className="ml-2 bg-gray-500  text-white my-1 p-1 px-3 sm:px-12 text-xl rounded-lg opacity-90 flex items-center">
            <MdInfoOutline /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videotitle;
