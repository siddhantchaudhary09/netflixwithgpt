import { useEffect } from "react";
import { Api_Options } from "../utils/constants";
import { addNowplayingmovie } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();
  const Nowplayingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Api_Options
    );
    const json = await data.json();
    const movielist = json.results;
    console.log(movielist);
    dispatch(addNowplayingmovie(movielist));
  };

  useEffect(() => {
    Nowplayingmovies();
  }, []);
};

export default useNowplayingmovies;
