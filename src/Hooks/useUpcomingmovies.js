import React, { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingmovie } from "../utils/moviesSlice";

const useUpcomingmovies = () => {
  const dispatch = useDispatch();
  const Upcomingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      Api_Options
    );
    const json = await data.json();
    const movielist = json.results;

    dispatch(addUpcomingmovie(movielist));
  };

  useEffect(() => {
    Upcomingmovies();
  }, []);

  return <div></div>;
};

export default useUpcomingmovies;
