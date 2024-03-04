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

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;