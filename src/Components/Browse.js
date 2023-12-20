import React from "react";
import Head from "./Head";
import Primarycont from "./Primarycont";
import Secondarycont from "./Secondarycont";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import usePopularmovies from "../Hooks/usePopularmovies";
import useTrendingmovies from "../Hooks/useTrendingmovies";
import useUpcomingmovies from "../Hooks/useUpcomingmovies";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowplayingmovies();
  usePopularmovies();
  useTrendingmovies();
  useUpcomingmovies();
  const gptview = useSelector((store) => store.Gpt.showgptsearch);
  return (
    <div className="">
      <Head />
      {gptview ? (
        <Gptsearch />
      ) : (
        <>
          <Primarycont />
          <Secondarycont />
        </>
      )}
    </div>
  );
};

export default Browse;
