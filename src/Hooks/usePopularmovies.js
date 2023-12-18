import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularmovie } from "../utils/moviesSlice";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const Popularmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Options
    );
    const json = await data.json();
    const movielist = json.results;
    dispatch(addPopularmovie(movielist));
  };

  useEffect(() => {
    Popularmovies();
  }, []);
};

export default usePopularmovies;
