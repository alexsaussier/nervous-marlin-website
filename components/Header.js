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
            <li><Link href="/location" className="text-lg font-semibold hover:text-red-400 transition duration-300">Location</Link></li>
            <li><Link href="/accomodation-and-activities" className="text-lg font-semibold hover:text-red-400 transition duration-300">Activities</Link></li>
            <li><Link href="/about-us" className="text-lg font-semibold hover:text-red-400 transition duration-300">About Us</Link></li>
            {/*
            <li><Link href="/packages" className="text-lg font-semibold hover:text-red-400 transition duration-300">Packages</Link></li>
            */}

          </ul>
          {/* Book Now button - always visible */}
          <Link href="/book-now" className="bg-red-600 text-white px-4 py-2 rounded-full text-base lg:text-lg font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2"><Link href="/location" className="text-lg font-semibold hover:text-red-400 transition duration-300">Location</Link></li>
            <li className="py-2"><Link href="/accomodation-and-activities" className="text-lg font-semibold hover:text-red-400 transition duration-300">Activities</Link></li>
            <li className="py-2"><Link href="/#about" className="text-lg font-semibold hover:text-red-400 transition duration-300">Why Choose Us?</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
