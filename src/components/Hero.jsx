import React from 'react'

const Hero = () => {
    return (
        <div 
        id='hero'
            style={{
                backgroundImage: "url('/heroImage.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        className='w-full  h-screen flex flex-col items-center justify-center gap-8 '>
            <div className='w-1/3 h-screen flex flex-col items-center justify-center gap-8'>
                <h1 className=' text-center text-6xl'>AlgoMedia Agency</h1>
                <p className='px-10 text-tertiary text-sm text-center'>Algo Media Agency helps businesses grow and connect with their audience through impactful digital solutions. We specialize in web development, UI/UX design, social media marketing, and content creation. Let’s bring your vision to life.</p>

                <a href="#contact" className='bg-background cursor-pointer hover:opacity-80 transition-all duration-300 w-fit text-primary px-8 py-3 rounded-xs'>Contact Us</a>
            </div>
        </div>
    )
}

export default Hero
