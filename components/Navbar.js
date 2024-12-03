'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/assets/Nervous Marlin_pesca deportiva_FInal_Curvas_1.jpg'
import logoBlack from '../public/assets/logoBlack.png';
import logoBlue from '../public/assets/logoBlue.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileAccommodationOpen, setIsMobileAccommodationOpen] = useState(false);
  const [isDesktopAccommodationOpen, setIsDesktopAccommodationOpen] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both the menu button and menu content
      const menu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (isMenuOpen && 
          menu && 
          menuButton && 
          !menu.contains(event.target) && 
          !menuButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const headerClass = scrolled
    ? 'bg-blue-200 text-sky-800'
    : 'bg-transparent text-white';

  const buttonClass = scrolled ? 'bg-white text-sky-800 hover:bg-sky-800 hover:text-white' : 'bg-sky-200 text-sky-900 hover:bg-white'; 

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${headerClass}`}>
      <nav className="flex justify-between items-center px-2 sm:px-8 xl:px-16 mx-auto">
        <a href="/" className="flex cursor-pointer">
          <Image src={logoBlack} alt="Nervous Marlin Logo" className="w-20 sm:w-24 h-auto py-2" />
          
        </a>
        <div className="flex items-center space-x-2 sm:space-x-4">

          {/* Hamburger menu button */}
            <button
              id="menu-button"
              className="lg:hidden focus:outline-none flex items-center gap-2 mr-6"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <p className={`${scrolled ? 'text-sky-800' : 'text-white'}`}>Menu</p>
              <div className="flex items-center h-6 relative">
                <span className={`block absolute h-0.5 w-6 bg-current ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'} ${scrolled ? 'text-sky-800' : 'text-white'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current ${isMenuOpen ? 'opacity-0' : ''} ${scrolled ? 'text-sky-800' : 'text-white'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'} ${scrolled ? 'text-sky-800' : 'text-white'}`}></span>
              </div>
            </button>

          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-2 xl:space-x-6">
            {['About Us', 'Location', 'Fishing', 'Activities'].map((item) => (
              <li key={item}>
                <div className="px-2 py-2 hover:bg-sky-800 hover:text-white rounded-md">
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-base xl:text-lg font-semibold">
                    {item}
                  </a>
                </div>
              </li>
            ))}
            {/* Accommodation dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsDesktopAccommodationOpen(!isDesktopAccommodationOpen)}
                className="px-2 py-2 hover:bg-sky-800 hover:text-white rounded-md flex items-center gap-1 text-base xl:text-lg font-semibold"
              >
                Accommodation
                <span className={`transform transition-transform duration-200 ${isDesktopAccommodationOpen ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>
              {/* Dropdown menu */}
              <ul className={`absolute bg-blue-200 rounded-md mt-1 w-full overflow-hidden transition-all duration-200 ${
                isDesktopAccommodationOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}>
                <li>
                  <a href="/accommodation/" 
                     className="block px-3 py-2 text-sky-800 text-sm xl:text-base hover:bg-sky-800 hover:text-white">
                    Large Groups (8+)
                  </a>
                </li>
                <li>
                  <a href="/accommodation/small-groups" 
                     className="block px-3 py-2 text-sky-800 text-sm xl:text-base hover:bg-sky-800 hover:text-white">
                    Smaller Groups
                  </a>
                </li>
              </ul>
            </li>
            {/* Packages item */}
            <li>
              <div className="px-2 py-2 hover:bg-sky-800 hover:text-white rounded-md">
                <a href="/packages" className="text-base xl:text-lg font-semibold">
                  Packages
                </a>
              </div>
            </li>
          </ul>

          {/* Book Now button - always visible */}
          <a href="/book-now" className={`${buttonClass} px-3 sm:px-4 py-2 rounded-full text-xs sm:text-base xl:text-lg font-semibold transition duration-300`}>
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`lg:hidden fixed right-0 w-64 bg-blue-200 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } sm:top-[80px]`}
      >
        <ul className="py-2 px-4">
          {['About Us', 'Location', 'Fishing', 'Activities'].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                onClick={handleMenuItemClick}
                className="block py-2 text-lg font-semibold text-sky-800 hover:text-white transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          {/* Accommodation dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsMobileAccommodationOpen(!isMobileAccommodationOpen)}
              className="w-full text-left py-2 text-lg font-semibold text-sky-800 hover:text-white transition duration-300 flex items-center justify-between"
            >
              Accommodation
              <span className={`transform transition-transform duration-200 ${isMobileAccommodationOpen ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            {/* Dropdown menu */}
            <ul className={`bg-blue-200 overflow-hidden transition-all duration-200 ${
              isMobileAccommodationOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <li>
                <a 
                  href="/accommodation/"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-2 text-sky-800 hover:bg-sky-800 hover:text-white"
                >
                  Large Groups (8+)
                </a>
              </li>
              <li>
                <a 
                  href="/accommodation/small-groups"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-2 text-sky-800 hover:bg-sky-800 hover:text-white"
                >
                  Smaller Groups
                </a>
              </li>
            </ul>
          </li>
          {/* Packages item */}
          <li>
            <a
              href="/packages"
              onClick={handleMenuItemClick}
              className="block py-2 text-lg font-semibold text-sky-800 hover:text-white transition duration-300"
            >
              Packages
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
