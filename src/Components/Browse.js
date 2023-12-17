import React from "react";
import Head from "./Head";
import Primarycont from "./Primarycont";
import Secondarycont from "./Secondarycont";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import usePopularmovies from "../Hooks/usePopularmovies";
import useTrendingmovies from "../Hooks/useTrendingmovies";
import useUpcomingmovies from "../Hooks/useUpcomingmovies";

const Browse = () => {
  useNowplayingmovies();
  usePopularmovies();
  useTrendingmovies();
  useUpcomingmovies();

  return (
    <div className="">
      <Head />
      <Primarycont />
      <Secondarycont />
    </div>
  );
};

export default Browse;
