import React from 'react'

function GPTSearchbar() {
  return (
    <div className=''>
        <form className='grid grid-cols-12 w-1/2 bg-black'>
            <input className='border p-2 m-2 col-span-9' type="text" placeholder='What would you want to watch today ?' />
            <button className='bg-red-700 p-2 rounded-lg m-2 col-span-3'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchbar