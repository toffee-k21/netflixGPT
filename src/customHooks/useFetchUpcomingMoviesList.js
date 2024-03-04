import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMoviesList } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useFetchUpcomingMoviesList = () =>{
  const dispatch = useDispatch()

  const fun = async( )=>{
const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)

const json = await data.json();
// console.log(json.results)
dispatch(addUpcomingMoviesList(json.results))
  }

  useEffect(()=>{
fun()
  },[])


}

export default useFetchUpcomingMoviesList