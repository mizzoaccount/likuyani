 'use client';

import React, { useState } from 'react';

export default function Navbart() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Left - Logo */}
        <div className="text-3xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-[#b60808] to-[#03ac56] rounded-full inline-block animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
            L.C.E.O
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#about" className="hover:text-[#fe0000] transition-colors duration-300">About Us</a>
        <a href="#programs" className="hover:text-[#03ac56] transition-colors duration-300">Programs</a>
        <a href="#impact" className="hover:text-[#9ed462] transition-colors duration-300">Impact</a>
        <a href="#get-involved" className="hover:text-[#fe0000] transition-colors duration-300">Get Involved</a>
        <a href="#donate" className="hover:text-[#03ac56] transition-colors duration-300">Donate</a>
        <a href="#contact" className="hover:text-[#9ed462] transition-colors duration-300">Contact</a>
      </nav>
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:text-[#b60808]">Log in</a>
          <a 
            href="#" 
            className="px-4 py-2 border border-black rounded-full text-black hover:bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:text-white hover:border-transparent transition-all duration-300"
          >
            Sign up
          </a>
        </div>

{/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col gap-4 py-6 px-6 md:hidden">
    <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#b60808] transition-colors duration-300">Home</a>
    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#fe0000] transition-colors duration-300">About Us</a>
    <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#03ac56] transition-colors duration-300">Programs</a>
    <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9ed462] transition-colors duration-300">Impact</a>
    <a href="#get-involved" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#f59e0b] transition-colors duration-300">Get Involved</a>
    <a href="#donate" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#6366f1] transition-colors duration-300">Donate</a>
    <a href="#news" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ec4899] transition-colors duration-300">News & Updates</a>
    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#10b981] transition-colors duration-300">Contact</a>
    <hr className="border-gray-200 my-2" />
    <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#b60808] transition-colors duration-300">Log in</a>
    <a 
      href="#" 
      onClick={() => setMobileMenuOpen(false)}
      className="px-4 py-2 border border-black rounded-full text-black hover:bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:text-white hover:border-transparent transition-all duration-300 text-center"
    >
      Sign up
    </a>
  </div>
)}

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