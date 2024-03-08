import Header from "./Header";
import MainContainer from "./MainContainer";
import useFetchPopularMovieList from "../customHooks/useFetchPopularMovieList";
import SecondaryContainer from "./SecondaryContainer";
import useFetchTopRatedMovies from "../customHooks/useFetchTopRatedMovies";
import useFetchUpcomingMoviesList from "../customHooks/useFetchUpcomingMoviesList";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const GPTSearchShow = useSelector((store) => store.gpt.GPTSearchShow);

  useFetchPopularMovieList();
  useFetchTopRatedMovies();
  useFetchUpcomingMoviesList();

  return (
    <div>
      <Header />
      {/*  ***we have render diff page without using router !!*/}
      {GPTSearchShow ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
