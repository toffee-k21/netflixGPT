import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlayBack from './VideoPlayBack'
import BannerMovieDetails from './BannerMovieDetails'

function MainContainer() {

    const movie = useSelector((store)=>store.movie.popularMovies)

    if(movie == null) return;

<<<<<<< HEAD
    const mainMovie = movie[6]
=======
    const mainMovie = movie[4]
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175

    const {id,overview,title} = mainMovie

  return (
    <div>
<BannerMovieDetails title={title} overview={overview} />
<VideoPlayBack movieId={id}/>
    </div>
  )
}

export default MainContainer