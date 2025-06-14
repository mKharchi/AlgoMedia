import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='w-full gap-2 min-h-screen flex flex-col items-center justify-center bg-secondary text-primary'>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
