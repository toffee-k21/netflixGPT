import React, { useRef } from 'react'
import { lang } from '../utils/constants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai';

function GPTSearchbar() {

  const language = useSelector(store=>store.gpt.lang)

  const GPTSearchInput = useRef(null)

  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: GPTSearchInput.current.value }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion)
  }

  const GPTSearchHandle = () =>{
    main()
    .then((r)=>console.log(r))
    .catch((e)=>console.log(e))
  }

  

  return (
    <div className='w-full flex justify-center'>
        <form className='grid grid-cols-12 md:w-1/2  bg-black' onSubmit={(e)=>e.preventDefault()}>
            <input className='border p-2 m-2 col-span-9' type="text"
            ref={GPTSearchInput} placeholder={lang[language].placeholder} />
            <button className='bg-red-700 p-2 rounded-lg m-2 col-span-3'
            onClick={GPTSearchHandle}>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchbar