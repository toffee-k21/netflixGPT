import React from 'react'
import { lang } from '../utils/constants'
import { useSelector } from 'react-redux'

function GPTSearchbar() {

  const language = useSelector(store=>store.gpt.lang)
  

  return (
    <div className='w-full flex justify-center'>
        <form className='grid grid-cols-12 w-1/2 bg-black'>
            <input className='border p-2 m-2 col-span-9' type="text" placeholder={lang[language].placeholder} />
            <button className='bg-red-700 p-2 rounded-lg m-2 col-span-3'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchbar