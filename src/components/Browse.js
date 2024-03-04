<<<<<<< HEAD
import Header from "./Header";
import MainContainer from "./MainContainer";
import useFetchPopularMovieList from "../customHooks/useFetchPopularMovieList";
import SecondaryContainer from "./SecondaryContainer";
import useFetchTopRatedMovies from "../customHooks/useFetchTopRatedMovies";
import useFetchUpcomingMoviesList from "../customHooks/useFetchUpcomingMoviesList";

const Browse = () => {
  useFetchPopularMovieList();
  useFetchTopRatedMovies();
  useFetchUpcomingMoviesList();
=======
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { useEffect } from "react"
import { options } from "../utils/constants"
import MainContainer from "./MainContainer"
import { addPopularMovieList } from "../utils/movieSlice"
import useFetchPopularMovieList from "../customHooks/useFetchPopularMovieList"


const Browse = () => {

useFetchPopularMovieList()
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175

  return (
    <div>
      <Header />
      <MainContainer />
<<<<<<< HEAD
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
=======
    </div>
=======


const Browse = () => {
  return (
    <div>Browse</div>
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
  )
}

export default Browse
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
