import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full flex flex-col items-center justify-center gap-2 min-h-screen bg-secondary text-primary'>
      <h1 className='text-3xl  mb-2 sm:mb-8'>About Us</h1>
      <p className='text-md mb-4 text-tertiary sm:p-0 w-full px-2 sm:px-2 sm:text-xl sm:w-2/3 text-center'>At <b>AlgoMedia Agency</b>, we value innovation and measurable impact. We aim to build lasting partnerships by truly understanding our clients’ goals and delivering beyond expectations.
      </p>
      <div className='w-[95vw]  sm:w-3/4 border flex items-center justify-center sm:mt-4'>
        <div className={`w-full gap-1 p-1 py-3 sm:p-4 border-r text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}>
          <h2 className='text-4xl font-semibold'>133+</h2>
          <p className='text-xs text-center sm:text-lg text-tertiary'>Projects Completed</p>
        </div>
        <div className={`w-full gap-1 p-1 py-3 sm:p-4 border-r text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}>
          <h2 className='text-4xl font-semibold'>50+</h2>
          <p className='text-xs text-center sm:text-lg text-tertiary'>Happy Clients</p>
        </div>
        <div className={`w-full gap-1 p-1 py-3 sm:p-4 text-[#efefef] flex flex-col items-center justify-center bg-[#232323]`}>
          <h2 className='text-4xl font-semibold'>10+</h2>
          <p className='text-xs text-center sm:text-lg text-tertiary'>Awards Won</p>
        </div>

      </div>
    </div>
  )
}

export default About
