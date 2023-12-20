import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Moviesuggestions = () => {
  const tmdbmovies = useSelector((store) => store.Gpt);
  const { movienames, gptmovies } = tmdbmovies;

  if (!movienames) return;
  if (!gptmovies) return;
  return (
    <div className="absolute top-2/4 p-3 bg-black w-full">
      {movienames.map((moviename, index) => (
        <Movielist
          key={moviename}
          title={moviename}
          movies={gptmovies[index]}
        />
      ))}
    </div>
  );
};

export default Moviesuggestions;
