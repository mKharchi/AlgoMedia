import React from 'react'

const Navbar = () => {
    const links = [
        {name:'Home' , href:'#hero'},
        {name:'Services', href:'#services'},
        {name:'About', href:'#about'},
        {name:'Contact', href:'#contact'},
    ]

  return (
    <div className='w-full sticky  text-sm  top-0 py-4 px-32 flex items-center justify-between '>
      <div className='w-1/2 flex items-center'>
        <img height={256} width={256} src='/logo.jpeg' alt='Logo' className='h-10 w-10 mr-2 rounded-full' />
        <a href='#hero' className='text-lg font-semibold '>ALgoMedia</a>
      </div>
      <div className='w-1/2  flex items-center justify-end gap-4'>

        {links.map((link, index) => (
          <a key={index} href={link.href} className='mx-4 text-sm hover:opacity-80 transition-all duration-300' >
            {link.name || 'Home'}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
