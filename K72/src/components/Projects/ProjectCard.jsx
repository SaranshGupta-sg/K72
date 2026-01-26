import React from 'react'

const ProjectCard = (props) => {
    return (<>
            <div className='lg:w-1/2 group relative  hover:rounded-[50px] overflow-hidden  transition-all rounded-none h-full'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
                    <h2 className='uppercase text-6xl font-[font1] border-3 pt-2 px-5 text-white border-white rounded-full'>Vior le projet</h2>
                </div>
            </div>
            <div className='lg:w-1/2 group relative  hover:rounded-[50px] overflow-hidden  transition-all rounded-none h-full'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
                    <h2 className='uppercase text-6xl font-[font1] border-3 pt-2 px-5 text-white border-white rounded-full'>Vior le projet</h2>
                </div>
            </div>
    </>

    )
}

export default ProjectCard
