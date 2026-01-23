import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'

const FullScreenNav = () => {
  return (<>
    <div id='fullscreennav' className='text-white h-screen py-33 w-full absolute bg-amber-500'>
      <div className=''>
        <div className='link border-t-1 border-white'>
            <h1 className='font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Projects</h1>
            <div className='absolute flex'>
                <div className='flex overflow-auto items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
            </div>
            {/* <div>
                <h2>Pour Tout Voir</h2>
                <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2>Pour Tout Voir</h2>
                <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
            </div> */}
            </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default FullScreenNav
