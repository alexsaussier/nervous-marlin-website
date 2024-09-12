'use client'

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
      scrolled ? 'bg-gray-800 text-white' : 'bg-transparent text-white'
    }`}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <div className="flex flex-col">
          <div className="text-2xl font-bold">Nervous Marlin</div>
          <div className="text-sm italic">Fishing Lodge</div>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 mr-6">
            <li><a href="#activities">Activities</a></li>
            <li><a href="#planning">Trip Planning</a></li>
            <li><a href="#about">Why Choose Us?</a></li>
          </ul>
          <a href="#book" className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
