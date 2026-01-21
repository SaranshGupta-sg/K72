import React from 'react'
import Video from '../components/Home/Video.jsx'
import HomeHeroText from '../components/Home/HomeHeroText.jsx'
import HomeBottomText from '../components/Home/HomeBottomText.jsx'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col'>
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
