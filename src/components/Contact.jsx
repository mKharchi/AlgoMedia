import React from 'react'
import { Link } from 'react-router-dom'
import { PopupButton } from 'react-calendly'

const Contact = () => {
  return (
    <div id='contact' className='w-full flex flex-col items-center justify-center gap-2 min-h-[80vh] bg-secondary text-primary'>
      <h1 className='text-3xl mb-8'>Contact Us</h1>
      <p className='text-md text-tertiary w-1/2 text-center'>
        Whether you have a question, a project in mind, reach out using the contact form, and we’ll get back to you by email. Prefer a live chat? Schedule a one-on-one call with us via Calendly at your convenience.
      </p>
      <div className='w-3/4 flex items-center justify-center gap-4 p-4 mt-4 '>
        <Link to={'/email'} className='text-md  hover:opacity-80 px-8 py-3 bg-tertiary transition-all duration-150 ease-in-out text-accent'>Send us an email</Link>
        <PopupButton
          url="https://calendly.com/algomediacontact/30min"
          rootElement={document.getElementById('root')}
          text="Schedule a meeting"
          className="text-md hover:opacity-80 px-8 py-3 bg-tertiary transition-all duration-150 ease-in-out text-accent"
        />
      </div>
    </div>
  )
}

export default Contact
