import React from 'react'
import Image from 'next/image' 

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    Hello, I'm Yasiru
                </h1>
                <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, incidunt animi voluptas iure cum corrupti nemo quis dolorum vitae officiis dolores sint blanditiis labore pariatur illo quibusdam. Cupiditate, nostrum odio?
                </p>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] relative '> 
                    <Image 
                    src="/man.png" 
                    className='absolute transform -translate-x-1/2-translate-y-1/2 ml-[40px] mt-[20px]'
                    alt='hero image' 
                    width={400} 
                    height={400}/>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection