import React from "react";

function BannerMovieDetails({ title, overview }) {
  return (
<<<<<<< HEAD
    <div className="h-[600px] bg-gradient-to-r from-black">
    <div className="w-1/2 py-[13%] px-10 ">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className=" py-6 text-white">{overview}</p>
      <div className="">
      <button className="my-2 mr-2 p-2 bg-white rounded-md w-20 h-11 hover:bg-opacity-80">&#9658; Play</button>
      <button className="text-white m-2 p-2 rounded-md h-11 bg-gray-500/[.5] hover:bg-opacity-100">More Info</button>
      </div>
=======
    <div className="w-screen aspect-video bg-gradient-to-r from-black">
    <div className="w-1/2 py-[20%] px-6 ">
      <h1 className="font-bold text-5xl text-white">{title}</h1>
      <p className="text-lg py-6 text-white">{overview}</p>
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
    </div>
    </div>
  );
}

export default BannerMovieDetails;
