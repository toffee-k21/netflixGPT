import React from "react";
import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";

function SecondaryContainer() {

  const movies = useSelector((store)=>store.movie)
  // console.log(movies)

  if(movies.popularMovies == null) return;
  if(movies.upcomingMovies == null) return;

  return (
    <div className="text-white bg-black mt-1">
      <div className="relative md:-top-44 -top-64">
      <CardContainer title='Popular Movies' moviesList={movies.popularMovies} />
      <CardContainer title='Top Rated Movies' moviesList={movies.topRatedMovies} />
      <CardContainer title='Upcoming' moviesList={movies.upcomingMovies} />
      <CardContainer title='Popular Movies' moviesList={movies.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
