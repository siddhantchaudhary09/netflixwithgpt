import React, { useEffect } from "react";

import useTrailor from "../Hooks/useTrailor";
import { useSelector } from "react-redux";

const Trailer = ({ movieid }) => {
  useTrailor(movieid);
  const trailerlink = useSelector((store) => store.movie.Trailer);

  if (!trailerlink) return;
  let { key } = trailerlink;

  return (
    <div>
      <div className="">
        <iframe
          className=""
          title="video"
          src={
            "https://www.youtube.com/embed/" +
            key +
            "?si=KPRrqpIRvCKg4NuD&autoplay=1&mute=1&showinfo=0&controls=0&autohide=1;start=20"
          }
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
