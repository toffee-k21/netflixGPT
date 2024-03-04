import React from "react";

function BannerMovieDetails({ title, overview }) {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black">
    <div className="w-1/2 py-[20%] px-6 ">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className="text-lg py-6 text-white">{overview}</p>
    </div>
    </div>
  );
}

export default BannerMovieDetails;
