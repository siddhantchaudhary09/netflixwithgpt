import React from "react";
import { IMG_cdn } from "../utils/constants";

const Moviecard = ({ id }) => {
  console.log(id);
  return (
    <div className="w-52 ">
      <img src={IMG_cdn + id} className="" />
    </div>
  );
};

export default Moviecard;
