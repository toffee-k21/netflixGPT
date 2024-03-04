import React, { useEffect, useState } from "react";
import { options } from "../utils/constants";

function VideoPlayBack({ movieId }) {

    const [vidkey, setVidkey] = useState('')
  const MovieVidDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );

    const json = await data.json();

    const mainVidDetailList = json.results.filter((r) => (r.type = "Trailer"));

    const mainVidDetails = mainVidDetailList[0];
    // if(mainVidDetails.length > 1)

setVidkey(mainVidDetails.key)
    // console.log(json.results.filter((r)=>r.name = "Official Trailer"))
  };

  useEffect(() => {
    MovieVidDetails();
  }, []);

  return (
    <div className="">
      <iframe
      className="w-full aspect-video absolute top-0 -z-10 "
        src={`https://www.youtube.com/embed/${vidkey}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"

      ></iframe>
    </div>
  );
}

export default VideoPlayBack;
