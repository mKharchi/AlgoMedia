import React from 'react'
import { Link } from 'react-router-dom'
import { PopupButton } from 'react-calendly'

const Contact = () => {
  return (
    <div id='contact' className='w-full flex flex-col items-center justify-center gap-2 min-h-[80vh] bg-secondary text-primary'>
      <h1 className='text-3xl  mb-4 sm:mb-8'>Contact Us</h1>
      <p className='text-md mb-4 text-tertiary sm:p-0 w-full px-4 sm:px-2 sm:text-xl sm:w-2/3 text-center'>
        <b>A project in mind?  </b>Reach out using our form, and we’ll get back to you. <b> Prefer a live chat?</b> Schedule a one-on-one call with us at your convenience.
      </p>
      <div className='w-full  text-sm font-semibold sm:text-lg px-4 sm:w-1/2 text-center flex items-center justify-center gap-4 p-4 mt-4 '>
        <Link to={'/email'} className='  w-full hover:opacity-80 px-8 py-3 bg-tertiary transition-all duration-150 ease-in-out text-accent'>Send us an email</Link>
        <PopupButton
          url="https://calendly.com/algomediacontact/30min"
          rootElement={document.getElementById('root')}
          text="Schedule a meeting"
          className=" w-full  hover:opacity-80 px-8 py-3 bg-tertiary transition-all duration-150 ease-in-out text-accent"
        />
      </div>
    </div>
  )
}

export default Contact
