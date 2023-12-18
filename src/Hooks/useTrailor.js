import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";

const useTrailor = (movieid) => {
  const dispatch = useDispatch();
  const trailervideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieid + "/videos",
      Api_Options
    );
    const json = await data.json();
    const trailers = json.results;
    const trailerfilter = trailers.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const trailer = trailerfilter.length ? trailerfilter[0] : json.results[0];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    trailervideo();
  }, []);

  return <div></div>;
};

export default useTrailor;
