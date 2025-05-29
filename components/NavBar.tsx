 /*'use client';

import React, { useState } from 'react';

export default function Navbart() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
  
        <div className="text-3xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-[#b60808] to-[#03ac56] rounded-full inline-block animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
            L.C.E.O
          </span>
        </div>

        
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

    
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
         <a href="/" className="hover:text-[#9ed462] transition-colors duration-300">Home</a>
        <a href="/about" className="hover:text-[#fe0000] transition-colors duration-300">About Us</a>
        <a href="#programs" className="hover:text-[#03ac56] transition-colors duration-300">Programs</a>
        <a href="#impact" className="hover:text-[#9ed462] transition-colors duration-300">Impact</a>
        <a href="#get-involved" className="hover:text-[#fe0000] transition-colors duration-300">Get Involved</a>
        <a href="#donate" className="hover:text-[#03ac56] transition-colors duration-300">Donate</a>
        <a href="#contact" className="hover:text-[#9ed462] transition-colors duration-300">Contact</a>
      </nav>
   
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-gray-700 hover:text-[#b60808]">Log in</a>
          <a 
            href="#" 
            className="px-4 py-2 border border-black rounded-full text-black hover:bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:text-white hover:border-transparent transition-all duration-300"
          >
            Sign up
          </a>
        </div>


{mobileMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col gap-4 py-6 px-6 md:hidden">
    <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#b60808] transition-colors duration-300">Home</a>
    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#fe0000] transition-colors duration-300">About Us</a>
    <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#03ac56] transition-colors duration-300">Programs</a>
    <a href="#impact" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#9ed462] transition-colors duration-300">Impact</a>
    <a href="#get-involved" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#f59e0b] transition-colors duration-300">Get Involved</a>
    <a href="#donate" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#6366f1] transition-colors duration-300">Donate</a>
    <a href="#news" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#ec4899] transition-colors duration-300">News & Updates</a>
    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#10b981] transition-colors duration-300">Contact</a>
    <hr className="border-gray-200 my-2" />
    <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#b60808] transition-colors duration-300">Log in</a>
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
}*/
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, width: 0 });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const navRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Helper function to determine active link
  const isActive = (href: string) => {
    return pathname === href || 
           (href !== '/' && pathname.startsWith(href));
  };

  // Nav links data
  const navLinks = [
    { href: '/', text: 'Home', color: 'hover:text-[#9ed462]' },
    { href: '/about', text: 'About Us', color: 'hover:text-[#fe0000]' },
    { href: '/programs', text: 'Programs', color: 'hover:text-[#03ac56]' },
    { href: '/impact', text: 'Impact', color: 'hover:text-[#9ed462]' },
    { href: '/involved', text: 'Get Involved', color: 'hover:text-[#fe0000]' },
    { href: '/donate', text: 'Donate', color: 'hover:text-[#03ac56]' },
    { href: '/contact', text: 'Contact', color: 'hover:text-[#9ed462]' },
  ];

  // Update active indicator position
  useEffect(() => {
    let activeElement: HTMLElement | null = null;
    
    // Find the currently active link
    for (const link of navLinks) {
      if (isActive(link.href) && navRefs.current[link.href]) {
        activeElement = navRefs.current[link.href];
        break;
      }
    }
    
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorPosition({
        left: offsetLeft,
        width: offsetWidth
      });
      
      // Disable initial animation after first load
      if (isInitialLoad) {
        setTimeout(() => setIsInitialLoad(false), 500);
      }
    }
  }, [pathname]);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/assets/logo.png" 
              alt="LCEO Logo"
              width={50} 
              height={50} 
              className="w-auto h-auto"
            />
          </Link>
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
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium relative">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              ref={(el) => { navRefs.current[link.href] = el; }}
              className={`relative z-10 transition-colors duration-300 ${link.color} ${
                isActive(link.href) 
                  ? 'text-black font-semibold' 
                  : 'text-gray-700'
              }`}
            >
              {link.text}
            </Link>
          ))}
          
          {/* Animated active indicator */}
          <div 
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] rounded-full transition-all duration-500 ease-out"
            style={{
              left: `${indicatorPosition.left}px`,
              width: `${indicatorPosition.width}px`,
              transition: isInitialLoad ? 'none' : 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/auth/login" className="text-gray-700 hover:text-[#b60808] transition-colors">Log in</a>
          <a 
            href="/auth/register" 
            className="px-4 py-2 border border-black rounded-full text-black hover:bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:text-white hover:border-transparent transition-all duration-300"
          >
            Sign up
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col gap-4 py-6 px-6 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-4 rounded-lg transition-all duration-300 ${
                  link.color
                } ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-[#b60808]/10 to-[#03ac56]/10 font-semibold border-l-4 border-[#fe0000] pl-3 transform translate-x-1'
                    : 'text-black hover:translate-x-1'
                }`}
              >
                {link.text}
              </Link>
            ))}
            <hr className="border-gray-200 my-2" />
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-black hover:text-[#b60808] transition-colors duration-300 py-2 px-4 hover:translate-x-1">Log in</a>
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 border border-black rounded-full text-black hover:bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:text-white hover:border-transparent transition-all duration-300 text-center hover:scale-105"
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </header>
  );
}