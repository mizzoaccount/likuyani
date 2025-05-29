"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AbouttSection() {
  return (
    <section className="w-full bg-white py-12 md:py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#9ed462] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Empowering Likuyani Community
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Building sustainable futures through education, healthcare, and economic empowerment in Western Kenya.
          </p>
        </div>

        {/* Stats Grid *
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-20">
          <div className="bg-gradient-to-br from-[#fe0000]/10 to-[#b60808]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b60808] mb-1 sm:mb-2">5+</div>
            <div className="text-sm sm:text-base text-gray-700">Years of Service</div>
          </div>
          <div className="bg-gradient-to-br from-[#9ed462]/10 to-[#03ac56]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03ac56] mb-1 sm:mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-700">Community Projects</div>
          </div>
          <div className="bg-gradient-to-br from-[#b60808]/10 to-[#fe0000]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fe0000] mb-1 sm:mb-2">10K+</div>
            <div className="text-sm sm:text-base text-gray-700">Lives Impacted</div>
          </div>
          <div className="bg-gradient-to-br from-[#03ac56]/10 to-[#9ed462]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9ed462] mb-1 sm:mb-2">200+</div>
            <div className="text-sm sm:text-base text-gray-700">Local Volunteers</div>
          </div>
        </div>*/}

        {/* Stats Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-20">
  {/* Stat Card 1 */}
  <div className="relative group overflow-hidden p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#fe0000] to-[#b60808] hover:shadow-lg transition-all duration-500">
    <div className="relative h-full bg-white rounded-xl sm:rounded-[15px] p-4 sm:p-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000]/5 to-[#b60808]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b60808] mb-1 sm:mb-2 drop-shadow-sm">5+</div>
        <div className="text-sm sm:text-base text-gray-700 font-medium">Years of Service</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fe0000] to-[#b60808] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>

  {/* Stat Card 2 */}
  <div className="relative group overflow-hidden p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#9ed462] to-[#03ac56] hover:shadow-lg transition-all duration-500">
    <div className="relative h-full bg-white rounded-xl sm:rounded-[15px] p-4 sm:p-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9ed462]/5 to-[#03ac56]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03ac56] mb-1 sm:mb-2 drop-shadow-sm">50+</div>
        <div className="text-sm sm:text-base text-gray-700 font-medium">Community Projects</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9ed462] to-[#03ac56] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>

  {/* Stat Card 3 */}
  <div className="relative group overflow-hidden p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#b60808] to-[#fe0000] hover:shadow-lg transition-all duration-500">
    <div className="relative h-full bg-white rounded-xl sm:rounded-[15px] p-4 sm:p-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#b60808]/5 to-[#fe0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fe0000] mb-1 sm:mb-2 drop-shadow-sm">10K+</div>
        <div className="text-sm sm:text-base text-gray-700 font-medium">Lives Impacted</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b60808] to-[#fe0000] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>

  {/* Stat Card 4 */}
  <div className="relative group overflow-hidden p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#03ac56] to-[#9ed462] hover:shadow-lg transition-all duration-500">
    <div className="relative h-full bg-white rounded-xl sm:rounded-[15px] p-4 sm:p-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#03ac56]/5 to-[#9ed462]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9ed462] mb-1 sm:mb-2 drop-shadow-sm">200+</div>
        <div className="text-sm sm:text-base text-gray-700 font-medium">Local Volunteers</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#03ac56] to-[#9ed462] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>
</div>

        {/* Content with Image */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full lg:w-1/2 relative"> {/* Added lg:mt-8 to move image down on larger screens */}
            <div className="relative aspect-video rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
             {/*} <Image
                src="/assets/asset12.jpeg"
                alt="LCEO Community Members"
                fill
                className=""
                priority
              />*/}
<Image
  src="/assets/asset12.jpeg"
  alt="LCEO Community Members"
  fill
  className="objtect-cover object-bottom" // Zoom out to 90%
  priority
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Responsive "Since 2008" card */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-[#b60808] to-[#fe0000] p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg w-2/3 sm:w-3/4 md:w-2/3">
              <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#b60808]">Since 2019</div>
                <div className="text-xs sm:text-sm text-gray-600">Serving Likuyani Sub-County</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Our Story</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Founded in 2019, Likuyani Community Empowerment Organization (LCEO) began as a small grassroots initiative 
              addressing education disparities in Western Kenya. Today, we've grown into a comprehensive community 
              development organization impacting thousands annually.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#03ac56]"></div>
                </div>
                <p className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-800">Mission:</span> To empower marginalized communities 
                  through sustainable programs in education, healthcare, and economic development.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#9ed462]"></div>
                </div>
                <p className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-800">Vision:</span> A self-reliant community where every 
                  individual has access to quality education, healthcare, and economic opportunities.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#fe0000]"></div>
                </div>
                <p className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-600">
                  <span className="font-semibold text-gray-800">Approach:</span> Community-led solutions, partnerships 
                  with local stakeholders, and sustainable program design.
                </p>
              </div>
            </div>

               <Link href="/about">
              <button className="mt-6 sm:mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white text-sm sm:text-base rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Learn More About Our Work
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Animation styles */}
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
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}
