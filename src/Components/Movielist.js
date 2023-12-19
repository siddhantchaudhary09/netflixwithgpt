import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ title, movies }) => {
  if (!movies) return;
  console.log(movies);

  return (
    <div className="">
      <h1 className="text-white font-bold text-2xl pt-2">{title}</h1>
      <div className="flex overflow-x-scroll p-2">
        <div className="flex gap-x-4">
          {movies.map((movie) => (
            <Moviecard key={movie.id} id={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movielist;
