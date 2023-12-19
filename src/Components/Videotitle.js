import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const Videotitle = ({ title, desc }) => {
  return (
    <div className=" bg-gradient-to-r from-black w-screen aspect-video  absolute">
      <div className=" absolute top-1/4 px-12 ">
        <h1 className="text-white text-6xl font-bold w-1/2">{title}</h1>
        <p className="py-6 text-lg w-1/3 text-white font-bold">{desc} </p>

        <div className="flex">
          <button className="bg-white text-black p-4 px-12 text-xl rounded-lg flex items-center">
            <FaPlay />
            Play
          </button>
          <button className="ml-2 bg-gray-500  text-white p-4 px-8 text-xl rounded-lg opacity-90 flex items-center">
            <MdInfoOutline /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videotitle;
