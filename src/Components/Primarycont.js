import React from "react";
import { useSelector } from "react-redux";
import { getRandomInt } from "../utils/constants";
import Trailer from "./Trailer";
import Videotitle from "./Videotitle";

const Primarycont = () => {
  const upmovies = useSelector((store) => store.movie.Trendingmovie);
  const Trailerindex = getRandomInt(15);
  if (!upmovies) return null;

  const { title, id, overview } = upmovies[Trailerindex];

  return (
    <div className="relative">
      <Videotitle title={title} />
      <Trailer movieid={id} />
    </div>
  );
};

export default Primarycont;
