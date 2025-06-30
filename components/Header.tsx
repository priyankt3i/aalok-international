
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  openStoryModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openStoryModal }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Gallery', href: '/fashion-show-gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/aalokfashion.png" alt="Aalok Fashion" className="h-10" />
        </a>
        <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.name === 'Contact' ? ( // Special handling for Contact to allow Story before it
                  <React.Fragment key={link.name}>
                    <button
                      onClick={openStoryModal}
                      className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Story
                    </button>
                    <Link to={link.href} className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                      {link.name}
                    </Link>
                  </React.Fragment>
                ) : (
                  <Link key={link.name} to={link.href} className="text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                )
              ))}
            </nav>
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
