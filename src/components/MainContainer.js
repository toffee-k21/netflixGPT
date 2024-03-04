import React from 'react'
import { useSelector } from 'react-redux'
import VideoPlayBack from './VideoPlayBack'
import BannerMovieDetails from './BannerMovieDetails'

function MainContainer() {

    const movie = useSelector((store)=>store.movie.popularMovies)

    if(movie == null) return;

    const mainMovie = movie[4]

    const {id,overview,title} = mainMovie

  return (
    <div>
<BannerMovieDetails title={title} overview={overview} />
<VideoPlayBack movieId={id}/>
    </div>
  )
}

export default MainContainer