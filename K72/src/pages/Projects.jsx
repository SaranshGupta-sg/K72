import React from 'react'
import { useGSAP } from '@gsap/react'
// import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

    const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]


    return (
        <>
            <div className='text-black p-4'>
                <div className='pt-[40vh]'>
                    <h2 className='font-[font2] text-[9vw] uppercase'>Projects</h2>
                </div>
                <div className='-mt-10'>
                    <div className='w-full h-[700px] mb-4 flex gap-4'>
                        <div className='w-1/2 hover:rounded-[50px] overflow-hidden transition-all rounded-none h-full'>
                        <img className='h-full w-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg" alt="" /></div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Projects
