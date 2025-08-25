
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  const [shown, setShown] = useState(false);
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];
  // Placeholder for active link logic
  // const [active, setActive] = useState('#hero');

  return (
    <nav className="w-full sticky text-sm top-0 py-3 sm:py-4 px-6 sm:px-32 flex items-center justify-between" aria-label="Main navigation">
      <div className="w-1/2 flex items-center">
        <a href="#hero" className="text-lg flex font-semibold" aria-label="Home">
          <img height={256} width={256} src="/logo.jpeg" alt="AlgoMedia logo" className="h-8 w-8 sm:h-10 sm:w-10 mr-2 rounded-full" />
        </a>
        <a href="#hero" className="text-lg hidden sm:flex font-semibold">AlgoMedia</a>
      </div>
      <ul className="hidden sm:flex w-1/2 items-center justify-end gap-4" role="menubar">
        {links.map((link, index) => (
          <li key={index} role="none">
            <a
              href={link.href}
              className="mx-4 text-sm hover:opacity-80 transition-all duration-300"
              // aria-current={active === link.href ? 'page' : undefined}
              role="menuitem"
            >
              {link.name || 'Home'}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex sm:hidden w-1/2 items-center justify-end gap-4 px-2 text-xl">
        <CiMenuBurger fill="#e0e0e0" onClick={() => setShown((prev) => !prev)} aria-label="Toggle menu" />
      </div>
      {shown && (
        <ul className="sm:hidden absolute w-24 gap-1 text-lg text-primary top-12 right-0 flex flex-col bg-secondary border rounded shadow-lg z-50" role="menu">
          {links.map((link, index) => (
            <li key={index} role="none">
              <a
                href={link.href}
                className="mx-4 text-sm hover:opacity-80 transition-all duration-300"
                // aria-current={active === link.href ? 'page' : undefined}
                role="menuitem"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
