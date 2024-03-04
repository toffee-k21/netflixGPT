import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMoviesList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useFetchTopRatedMovies = () =>{
  const dispatch = useDispatch()

  const fun = async( )=>{
const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)

const json = await data.json();
// console.log(json.results)
dispatch(addTopRatedMoviesList(json.results))
  }

  useEffect(()=>{
fun()
  },[])


}

export default useFetchTopRatedMovies