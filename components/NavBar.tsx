"use client"

import React, { useState } from 'react';

export default function Navbart() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left - Logo with animated gradient */}
        <div className="text-3xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-[#b60808] to-[#03ac56] rounded-full inline-block animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
            L.C.E.O
          </span>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03ac56]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Center - Nav Links */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none py-4 md:py-0 px-6 md:px-0`}>
          <div className="flex flex-col md:flex-row gap-6 text-gray-700">
            <a 
              href="#" 
              className="hover:text-[#b60808] transition-colors duration-300 py-2 md:py-0 border-b md:border-0 border-gray-100 md:border-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              How we work
            </a>
            <a 
              href="#" 
              className="hover:text-[#fe0000] transition-colors duration-300 py-2 md:py-0 border-b md:border-0 border-gray-100 md:border-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="hover:text-[#03ac56] transition-colors duration-300 py-2 md:py-0 border-b md:border-0 border-gray-100 md:border-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#" 
              className="hover:text-[#9ed462] transition-colors duration-300 py-2 md:py-0 border-b md:border-0 border-gray-100 md:border-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </a>
          </div>
        </nav>

        {/* Right - Auth Buttons */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex items-center gap-4 absolute md:static top-28 right-6 md:right-0 bg-white md:bg-transparent py-4 md:py-0`}>
          <a 
            href="#" 
            className="text-gray-700 hover:text-[#b60808] transition-colors duration-300 block md:inline-block py-2 md:py-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </a>
          <a 
            href="#" 
            className="px-4 py-2 border border-black rounded-full text-black hover:bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:text-white hover:border-transparent transition-all duration-300 block md:inline-block text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sign up
          </a>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </header>
  );
}