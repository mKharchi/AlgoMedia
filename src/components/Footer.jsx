import React from 'react'
import { FaLinkedin , FaWhatsapp , FaTelegram , FaFacebook } from 'react-icons/fa'
import { website } from '../assets/assets'
const Footer = () => {

  const links =  [
    {icon: <FaLinkedin />, href:'https://www.linkedin.com'},
    {icon: <FaWhatsapp />, href:'https://www.whatsapp.com'},
    {icon: <FaTelegram />, href:'https://www.telegram.org'},
    {icon: <FaFacebook />, href:'https://www.facebook.com'},
  ]
  
    return (
    <div className='w-full h-16  relative bottom-0 flex justify-center items-center gap-28 p-4'>
        <div className='flex gap-4'>
            {links.map((link, index) => (
                <a key={index} href={link.href} target="_blank" >
                    {link.icon}
                </a>
            ))} 
        </div>

        <p className='text-sm align-middle text-gray-500'>© 2023 Your Company. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
