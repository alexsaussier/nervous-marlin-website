'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header({ alwaysDark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const headerClass = alwaysDark
    ? 'bg-gray-800 text-white'
    : scrolled
    ? 'bg-gray-800 text-white'
    : 'bg-transparent text-white';

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${headerClass}`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link href="/" className="flex flex-col cursor-pointer">
          <span className="text-2xl font-bold">Nervous Marlin</span>
          <span className="text-sm italic">Fishing Lodge</span>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Hamburger menu button */}
          <button
            className="lg:hidden text-white focus:outline-none w-6 h-6 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
          </button>
          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-6">
            {['About Us', 'Location', 'Fishing', 'Activities', 'Accomodation', 'Pricing'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-base xl:text-lg font-semibold hover:text-red-400 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {/* Book Now button - always visible */}
          <Link href="/book-now" className="bg-red-600 text-white px-4 py-2 rounded-full text-base xl:text-lg font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed right-0 w-64 bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } top-[80px]`}
      >
        <ul className="py-2 px-4">
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
    </header>
  );
}
