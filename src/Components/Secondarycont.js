import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondarycont = () => {
  const movies = useSelector((store) => store.movie);
  if (!movies) return;

  return (
    <div className="bg-black p-3">
      <div className="-mt-32 relative ">
        <Movielist title={"Now Playing"} movies={movies.Nowplayingmovie} />
        <Movielist title={"Trending"} movies={movies.Trendingmovie} />
        <Movielist title={"Popular"} movies={movies.Popularmovie} />
        <Movielist title={"Upcoming"} movies={movies.Upcomingmovie} />
      </div>
    </div>
  );
};

export default Secondarycont;
