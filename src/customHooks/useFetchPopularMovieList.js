import { useDispatch, useSelector } from "react-redux"
import { addPopularMovieList } from "../utils/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const useFetchPopularMovieList =()=>{
    const dispatch = useDispatch()
    const popularMovies = useSelector((store)=>store.movie.popularMovies)

    const PopularMovieList = async ()=>{
  
      const data =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      
      const json = await data.json()
      // console.log(json)
    
      // console.log(json.results)
  
      dispatch(addPopularMovieList(json.results))
  
      // return json
    }
  
    useEffect( ()=>{
      !popularMovies && PopularMovieList()
    },[])
}

export default useFetchPopularMovieList