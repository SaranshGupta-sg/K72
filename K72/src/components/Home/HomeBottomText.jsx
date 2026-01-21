import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-6'>
      
      <Link
        to="/projects"
        className='text-[5vw] flex justify-center items-center border border-white rounded-full uppercase px-5 hover:border-[#D3FD50] hover:text-[#D3FD50]'
      >
        Projects
      </Link>

      <Link
        to="/agence"
        className='text-[5vw] flex justify-center items-center border border-white rounded-full uppercase px-5 hover:border-[#D3FD50] hover:text-[#D3FD50]'
      >
        Agence
      </Link>

    </div>
  )
}

export default HomeBottomText
