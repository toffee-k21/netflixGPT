import React from 'react'
import GPTSearchbar from './GPTSearchbar'

function GPTSearchPage() {
  return (
    <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg)] md:h-[600px] flex justify-center items-center h-screen object-cover'>
      
        <GPTSearchbar />
    </div>
    // strategy : always try render the component in the main page and build this page to render diff components
  )
}

export default GPTSearchPage