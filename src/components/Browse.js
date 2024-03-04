import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { useEffect } from "react"
import { options } from "../utils/constants"
import MainContainer from "./MainContainer"
import { addPopularMovieList } from "../utils/movieSlice"
import useFetchPopularMovieList from "../customHooks/useFetchPopularMovieList"


const Browse = () => {

useFetchPopularMovieList()

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse