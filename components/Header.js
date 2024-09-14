'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <Link href="/" className="flex flex-col cursor-pointer">
          <span className="text-2xl font-bold">Nervous Marlin</span>
          <span className="text-sm italic">Fishing Lodge</span>
        </Link>
        <div className="flex items-center">
          <ul className="flex space-x-8 mr-8">
            <li><Link href="/#activities" className="text-lg font-semibold hover:text-red-400 transition duration-300">Activities</Link></li>
            <li><Link href="/trip-planning" className="text-lg font-semibold hover:text-red-400 transition duration-300">Trip Planning</Link></li>
            <li><Link href="/#about" className="text-lg font-semibold hover:text-red-400 transition duration-300">Why Choose Us?</Link></li>
            <li><Link href="/packages" className="text-lg font-semibold hover:text-red-400 transition duration-300">Packages</Link></li>


          </ul>
          <Link href="/book-now" className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
