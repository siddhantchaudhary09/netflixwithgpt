import React, { useRef } from "react";
import { Api_Options, BG_IMG } from "../utils/constants";
import openai from "../utils/Openai";
import { useDispatch, useSelector } from "react-redux";
import {
  addgptmovies,
  addmovienames,
  removemovies,
  removenames,
} from "../utils/Gptslice";
import Moviesuggestions from "./Moviesuggestions";

const Gptsearch = () => {
  const dispacth = useDispatch();
  const searchintmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      Api_Options
    );
    const json = await data.json();
    return json.results;
  };
  const Search = useRef(null);

  const handlegptclick = async () => {
    const gptquery =
      "act as a movie recommendation system  and suggest some movie for given query" +
      Search.current.value +
      "only give me 5 movies names , comma separated like the example result given ahead . exampleresult:gadar, sholay , don , surya and this comma separated rule is must for all movies and all results  ";

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptquery }],
      model: "gpt-3.5-turbo",
    });

    const gptmovies = gptresults.choices?.[0].message.content.split(",");

    dispacth(addmovienames(gptmovies));
    const promisearray = gptmovies.map((movie) => searchintmdb(movie));
    const tmdbmovies = await Promise.all(promisearray);

    dispacth(addgptmovies(tmdbmovies));
  };

  return (
    <div>
      <div className="relative ">
        <img
          className="  absolute w-[calc(100dvw)] h-[calc(100dvh)]   "
          alt="bg-img"
          src={BG_IMG}
        />
      </div>
      <div className="absolute z-20 w-1/2">
        <form
          className="bg-black mt-32 ml-64 p-2 rounded-lg w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={Search}
            type="text"
            placeholder="What you want to Search today?"
            className="bg-gray-700 w-3/4 p-3 m-2 rounded-lg text-white text-xl "
          />
          <button
            className=" bg-purple-500 w-1/6 m-2 p-2 rounded-md font-bold text-2xl text-white"
            onClick={handlegptclick}
          >
            Search
          </button>
        </form>
      </div>
      <Moviesuggestions />
    </div>
  );
};

export default Gptsearch;
