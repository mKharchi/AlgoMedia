
import React from 'react';
import { FaLinkedin, FaWhatsapp, FaTelegram, FaFacebook } from 'react-icons/fa';
import { website } from '../assets/assets';

const links = [
  { icon: <FaLinkedin aria-label="LinkedIn" />, href: 'https://www.linkedin.com/company/yourcompany' },
  { icon: <FaWhatsapp aria-label="WhatsApp" />, href: 'https://wa.me/yourcompany' },
  { icon: <FaTelegram aria-label="Telegram" />, href: 'https://t.me/yourcompany' },
  { icon: <FaFacebook aria-label="Facebook" />, href: 'https://www.facebook.com/yourcompany' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full h-16 relative bottom-0 flex justify-center items-center gap-28 p-4" aria-label="Footer">
      <nav className="flex gap-4" aria-label="Social media links">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.icon.props['aria-label']}
          >
            {link.icon}
          </a>
        ))}
      </nav>
      <p className="text-sm align-middle text-gray-500">© {year} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
