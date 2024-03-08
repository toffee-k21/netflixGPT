import React from 'react'
import Card from './Card'

function CardContainer({title,moviesList}) {

    if(!moviesList) return ;
    // console.log(moviesList)


  return (
    <div className='text-white relative' >
        <h1 className='text-2xl mx-6 my-4'>{title}</h1>
        <div className='flex overflow-x-scroll mx-4 my-4' style={{scrollbarWidth:'none'}}>
        {moviesList.map((m)=><Card moviePoster={m.poster_path}/>)}
        </div>
    </div> 
  )
}

export default CardContainer