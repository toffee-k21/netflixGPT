import React from "react";

function BannerMovieDetails({ title, overview }) {
  return (
    <div className="h-[600px] bg-gradient-to-r from-black">
    <div className="w-1/2 py-[13%] px-10 ">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className=" py-6 text-white">{overview}</p>
      <div className="">
      <button className="my-2 mr-2 p-2 bg-white rounded-md w-20 h-11 hover:bg-opacity-80">&#9658; Play</button>
      <button className="text-white m-2 p-2 rounded-md h-11 bg-gray-500/[.5] hover:bg-opacity-100">More Info</button>
      </div>
    </div>
    </div>
  );
}

export default BannerMovieDetails;
