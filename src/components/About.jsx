import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full flex flex-col items-center justify-center gap-2 min-h-screen bg-secondary text-primary'>
      <h1 className='text-3xl mb-8'>About Us</h1>
      <p className='text-md mb-4 text-tertiary w-1/2 text-center'>
        At Algo Media Agency, we value innovation, collaboration, and measurable impact. We aim to build lasting partnerships by truly understanding our clients’ goals and delivering beyond expectations. Our commitment lies in ethical marketing, creative excellence, and sustainable growth—for our clients and the communities they serve.
      </p>
      <div className='w-3/4 border flex items-center justify-center   mt-4 '>
        <div className={`w-full gap-1 p-4 border-r text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}>
          <h2 className='text-4xl font-semibold'>133+</h2>
          <p className='text-sm text-tertiary'>Projects Completed</p>
        </div>
        <div className={`w-full gap-1 p-4 border-r text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}>
          <h2 className='text-4xl font-semibold'>50+</h2>
          <p className='text-sm text-tertiary'>Happy Clients</p>
        </div>
        <div className={`w-full gap-1 p-4 text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}>
          <h2 className='text-4xl font-semibold'>10+</h2>
          <p className='text-sm text-tertiary'>Awards Won</p>
        </div>

      </div>
    </div>
  )
}

export default About
