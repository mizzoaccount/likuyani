/*"use client"
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

        <div className="flex items-center gap-4">
          <Link 
            href="/account" 
            className="p-1 rounded-full border-2 border-gray-300 hover:border-[#03ac56] transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 text-gray-700"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
              />
            </svg>
          </Link>
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
        </div>

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

          <div 
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] rounded-full transition-all duration-500 ease-out"
            style={{
              left: `${indicatorPosition.left}px`,
              width: `${indicatorPosition.width}px`,
              transition: isInitialLoad ? 'none' : 'all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
        </nav>

   
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
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-4 text-black hover:text-[#03ac56] transition-colors duration-300 hover:translate-x-1"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
                />
              </svg>
              <span>Account</span>
            </Link>
          </div>
        )}
      </div>

 
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

        {/* Desktop Nav Links + User Icon */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-gray-700 font-medium relative">
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

          {/* User Icon - Desktop */}
          <Link 
            href="/account" 
            className="p-1 rounded-full border-2 border-gray-300 hover:border-[#03ac56] transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 text-gray-700"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button + User Icon */}
        <div className="flex items-center gap-4 md:hidden">
          <Link 
            href="/account" 
            className="p-1 rounded-full border-2 border-gray-300 hover:border-[#03ac56] transition-colors duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6 text-gray-700"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
              />
            </svg>
          </Link>
          <button 
            className="p-2 rounded-lg focus:outline-none"
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
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-2 px-4 text-black hover:text-[#03ac56] transition-colors duration-300 hover:translate-x-1"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
                />
              </svg>
              <span>Account</span>
            </Link>
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