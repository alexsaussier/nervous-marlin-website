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
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-8">
            <li><Link href="/about-us" className="text-lg font-semibold hover:text-red-400 transition duration-300">About Us</Link></li>
            <li><Link href="/fishing" className="text-lg font-semibold hover:text-red-400 transition duration-300">Fishing</Link></li>
            <li><Link href="/activities" className="text-lg font-semibold hover:text-red-400 transition duration-300">Other Activities</Link></li>
            <li><Link href="/accomodation" className="text-lg font-semibold hover:text-red-400 transition duration-300">Accomodation</Link></li>
            <li><Link href="/packages" className="text-lg font-semibold hover:text-red-400 transition duration-300">Packages</Link></li>
          </ul>
          {/* Book Now button - always visible */}
          <Link href="/book-now" className="bg-red-600 text-white px-4 py-2 rounded-full text-base lg:text-lg font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 max-w-[250px] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out rounded-bl-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="py-4">
            <li><Link href="/about-us" onClick={handleMenuItemClick} className="block px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300">About Us</Link></li>
            <li><Link href="/fishing" onClick={handleMenuItemClick} className="block px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300">Fishing</Link></li>
            <li><Link href="/activities" onClick={handleMenuItemClick} className="block px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300">Other Activities</Link></li>
            <li><Link href="/accomodation" onClick={handleMenuItemClick} className="block px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300">Accomodation</Link></li>
            <li><Link href="/packages" onClick={handleMenuItemClick} className="block px-4 py-2 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition duration-300">Packages</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
