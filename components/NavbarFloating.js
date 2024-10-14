'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavbarFloating = ({ alwaysDark = false }) => {
  const [isFloating, setIsFloating] = useState(!alwaysDark);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFloating(scrollPosition < 100 && !alwaysDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysDark]);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isFloating ? 'mt-8 mx-8 rounded-full bg-gray-800' : 'bg-gray-800'}`}>
        <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
          <Link href="/" className="flex flex-col cursor-pointer">
            <span className="text-2xl font-bold text-white">Nervous Marlin</span>
            <span className="text-sm italic text-white">Fishing Lodge</span>
          </Link>
          <div className="flex items-center space-x-4">
            <ul className="hidden lg:flex space-x-8">
              {['About Us', 'Location', 'Fishing', 'Activities', 'Accomodation', 'Packages'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-base xl:text-lg font-semibold text-white hover:text-red-400 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="lg:hidden text-white focus:outline-none w-6 h-6 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </button>
            <Link href="/book-now" className="bg-red-600 text-white px-4 py-2 rounded-full text-base xl:text-lg font-semibold hover:bg-red-700 transition duration-300">
              Book Now
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed right-0 w-64 bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${isFloating ? 'top-[115px] mr-16 rounded-b-3xl' : 'top-[80px]'}`}
      >
        <ul className={`py-2 ${isFloating ? 'pr-8 pl-4' : 'px-4'}`}>
          {['About Us', 'Location', 'Fishing', 'Activities', 'Accomodation', 'Packages'].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                onClick={handleMenuItemClick}
                className="block py-2 text-lg font-semibold text-gray-300 hover:text-white transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarFloating;
