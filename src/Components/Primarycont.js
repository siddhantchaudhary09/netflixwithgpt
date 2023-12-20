import React from "react";
import { useSelector } from "react-redux";
import { getRandomInt } from "../utils/constants";
import Trailer from "./Trailer";
import Videotitle from "./Videotitle";

const Primarycont = () => {
  const upmovies = useSelector((store) => store.movie.Nowplayingmovie);
  const Trailerindex = getRandomInt(15);
  if (!upmovies) return null;

  const { title, id, overview } = upmovies[Trailerindex];

  return (
    <div className=" overflow-hidden aspect-video">
      <Videotitle title={title} desc={overview} />
      <Trailer movieid={id} />
    </div>
  );
};

export default Primarycont;
