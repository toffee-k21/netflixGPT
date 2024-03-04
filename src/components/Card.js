import React from 'react'
import { POSTER_IMG_URL } from '../utils/constants'

function Card({moviePoster}) {
    // console.log(poster_path)
  return (
    <div>
        <div className='m-2 w-36'>
            <img className="w-44" src={POSTER_IMG_URL+moviePoster} alt='movie' />
        </div>
    </div>
  )
}

export default Card