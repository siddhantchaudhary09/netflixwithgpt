import React, { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingmovie } from "../utils/moviesSlice";

const useTrendingmovies = () => {
  const dispatch = useDispatch();
  const Trendingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      Api_Options
    );
    const json = await data.json();
    const movielist = json.results;

    dispatch(addTrendingmovie(movielist));
  };

  useEffect(() => {
    Trendingmovies();
  }, []);

  return <div></div>;
};

export default useTrendingmovies;
