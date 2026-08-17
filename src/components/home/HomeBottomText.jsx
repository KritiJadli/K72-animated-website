import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-2'>
      <Link className='text-[4vw] px-8 py-3 hover:border-[#D3FD50] hover:text-[#D3FD50] text-white uppercase border-2 border-amber-50 rounded-full justify mb-3 hover' to='/projects' >Projects</Link>
      <Link className='text-[4vw] px-8 py-3 mb-3 hover:border-[#D3FD50] hover:text-[#D3FD50]  text-white uppercase border-2 border-amber-50 rounded-full justify' to='/agence' >Agence</Link>
    </div>
  )
}

export default HomeBottomText
