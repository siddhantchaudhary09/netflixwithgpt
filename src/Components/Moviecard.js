import React from "react";
import { IMG_cdn } from "../utils/constants";

const Moviecard = ({ id }) => {
  if (!id) return;
  return (
    <div className=" w-28 sm:w-52  ">
      <img src={IMG_cdn + id} className="" />
    </div>
  );
};

export default Moviecard;
