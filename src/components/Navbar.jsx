import React, { useState } from 'react'
import { FaBurger } from 'react-icons/fa6'

import { CiMenuBurger } from 'react-icons/ci'
const Navbar = () => {

  const [shown, setShown] = useState(false)
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className='w-full sticky  text-sm  top-0 py-3 sm:py-4 px-6 sm:px-32 flex items-center justify-between '>
      <div className='w-1/2 flex items-center'>
        <a href='#hero' className='text-lg flex font-semibold '>        <img height={256} width={256} src='/logo.jpeg' alt='Logo' className='h-8 w-8 sm:h-10 sm:w-10 mr-2 rounded-full' />
        </a>
        <a href='#hero' className='text-lg hidden sm:flex font-semibold '>ALgoMedia</a>
      </div>
      <div className=' hidden sm:flex w-1/2   items-center justify-end gap-4'>

        {links.map((link, index) => (
          <a key={index} href={link.href} className='mx-4 text-sm hover:opacity-80 transition-all duration-300' >
            {link.name || 'Home'}
          </a>
        ))}
      </div>

      <div className='flex sm:hidden w-1/2 items-center justify-end gap-4 px-2 text-xl  '>
        <CiMenuBurger fill='#e0e0e0' onClick={() => setShown(prev => !prev)} />
      </div>

      {shown &&
        <div className='sm:hidden absolute w-24 gap-1 text-lg  text-primary top-12 right-0 flex flex-col'>
          {links.map((link, index) => (
            <a key={index} href={link.href} className='mx-4 text-sm hover:opacity-80 transition-all duration-300' >
              {link.name}
            </a>
          ))}
        </div>

      }

    </div>
  )
}

export default Navbar
