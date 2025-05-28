"use client"

import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-5 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Text with gradient animation */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
            Likuyani Community<br />Empowerment<br />Organization
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
         Empowering Communities. Transforming Futures.
        </p>

        {/* Top Buttons - Centered with enhanced hover effects */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="relative overflow-hidden bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <span className="relative z-10">Volunteer</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#9ed462] to-[#03ac56] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
          </button>
          <button className="relative overflow-hidden bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <span className="relative z-10">Our Impact</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#fe0000] to-[#b60808] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/assets/asset7.jpeg"
                  alt="Team Collaboration"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-[#9ed462] to-[#03ac56] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Driven by Passion</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-end">
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/assets/asset9.jpeg"
                  alt="Digital Calendar"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-end">
            <div className="h-48 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transitionAll: duration-500 p-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#03ac56] to-[#b60808] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/assets/asset10.jpeg"
                  alt="Task Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-end">
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/assets/asset11.jpeg"
                  alt="Event Planning"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col">
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image 
                  src="/assets/asset8.jpeg"
                  alt="Support Chat"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-[#fe0000] to-[#b60808] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Growing in Impact.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS or CSS-in-JS */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}