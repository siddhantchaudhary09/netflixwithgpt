import React from "react";

import useTrailor from "../Hooks/useTrailor";
import { useSelector } from "react-redux";

const Trailer = ({ movieid }) => {
  useTrailor(movieid);
  const trailerlink = useSelector((store) => store.movie.Trailer);

  if (!trailerlink) return;
  let { key } = trailerlink;

  return (
    <div>
      <div className="  w-[calc(100dvw)]">
        <iframe
          className=" w-[calc(100dvw)] aspect-video"
          title="video"
          src={
            "https://www.youtube.com/embed/" +
            key +
            "?si=KPRrqpIRvCKg4NuD&autoplay=1&mute=1&showinfo=0&controls=0&autohide=1modestbranding=0;start=20"
          }
        ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
