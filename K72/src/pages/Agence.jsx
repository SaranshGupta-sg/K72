import {React, useRef} from 'react'

const Agence = () => {

  const imageRef = useRef(null)

  return (<>
    <div>
      <div className='section1'>
        <div ref={imageRef} className='absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw] top-40 left-[30vw] bg-red-400'>
          <img  className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e
              Douze</h1>
          </div>
          <div className='pl-[50%] mt-20'>
            <p className='text-5xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>
      </div>
    </div>
  </>
  )
}

export default Agence
