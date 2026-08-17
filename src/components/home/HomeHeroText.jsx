import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className='font-Lausanne text-center text-white'>
      <div className=' text-[8vw] uppercase leading-[6vw]'>The spark for</div>
      <div className=' text-[8vw] uppercase leading-[6vw] flex items-center justify-center'>all
        <div className='h-[6vw] w-[10vw] rounded-full mt-2 overflow-hidden'>  
        <Video />
        </div>
        things</div>
      <div className=' text-[8vw] uppercase leading-[6vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText
