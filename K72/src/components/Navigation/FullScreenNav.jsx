import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef, useState } from 'react'

const FullScreenNav = () => {
  return (<>
    <div id='fullscreennav' className='text-white h-screen py-35 overflow-x-hidden overflow-y-hidden w-full absolute bg-black'>
        <div className='flex '></div>
      <div className=''>
        <div className='link relative border-y-1 border-white'>
            <h1 className='font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Projects</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>        
            </div>
        </div>
        <div className='link relative border-y-1 border-white'>
            <h1 className='font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Projects</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>        
            </div>
        </div>
        <div className='link relative border-y-1 border-white'>
            <h1 className='font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Projects</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>        
            </div>
        </div>
        <div className='link relative border-y-1 border-white'>
            <h1 className='font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Projects</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2.5 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-40 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                <h2 className='whitespace-nowrap font-[font2] text-[7vw] text-center leading-[0.9] pt-2 uppercase'>Pour Tout Voir</h2>
                <img className='h-19 rounded-full shrink-0 w-35 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>        
            </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default FullScreenNav
