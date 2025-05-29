
/*"use client"
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-5 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
  
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
             Empowering Communities,<br />Transforming <br />Lives
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
        Join us in making a difference and building a brighter future for all.
        </p>

      
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
   
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
            <p className="mt-4 text-center text-gray-600">A team working together to achieve a common goal.</p>
          </div>

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
            <p className="mt-4 text-center text-gray-600">Courtesy call to the office of kakamega county.</p>
          </div>

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
            <p className="mt-4 text-center text-gray-600">Planning tasks and organizing work efficiently.</p>

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
            <p className="mt-4 text-center text-gray-600">Planning and organizing a successful event.</p>
          </div>

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
            <p className="mt-4 text-center text-gray-600">The orgnisation chairperson and secretary.</p>
          </div>
        </div>
      </div>
      </div>
      
     
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
}*/




/*"use client"
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-5 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
            Empowering Communities,<br />Transforming <br />Lives
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
          Join us in making a difference and building a brighter future for all.
        </p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
       
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset9.jpeg"
                alt="Team Collaboration"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-6 bg-gradient-to-r from-[#9ed462] to-[#03ac56] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Driven by Passion</p>
            </div>
            <p className="mt-4 text-center text-gray-600 italic">Courtesy call to the office of kakamega governor His Excellency Fernandez Baraza</p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset9.jpeg"
                alt="Digital Calendar"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-gray-600">Courtesy call to the office of kakamega county.</p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="relative aspect-square bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#03ac56] to-[#b60808] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset10.jpeg"
                alt="Task Planning"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-gray-600">Planning tasks and organizing work efficiently.</p>
          </div>

          <div className="flex flex-col justify-end">
            <div className="relative aspect-[4/3] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset11.jpeg"
                alt="Event Planning"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-gray-600">Planning and organizing a successful event.</p>
          </div>

          <div className="flex flex-col">
            <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset8.jpeg"
                alt="Support Chat"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mt-6 bg-gradient-to-r from-[#fe0000] to-[#b60808] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Growing in Impact.</p>
            </div>
            <p className="mt-4 text-center text-gray-600">The organisation chairperson and secretary.</p>
          </div>
        </div>
      </div>

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
}*/

"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { UnderConstructionModal } from '@/components/ConstructionModal';

export default function Hero() {
   const [isModalOpen, setIsModalOpen] = useState(false);
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
            Empowering Communities,<br />Transforming <br />Lives
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
          Join us in making a difference and building a brighter future for all.
        </p>

        {/* Top Buttons - Centered with enhanced hover effects *
        <div className="flex justify-center gap-4 mb-8">
          <button className="relative overflow-hidden bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <span className="relative z-10">Volunteer</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#9ed462] to-[#03ac56] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
          </button>
          <button className="relative overflow-hidden bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <span className="relative z-10">Our Impact</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#fe0000] to-[#b60808] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
          </button>
        </div>*/}

         <div className="flex justify-center gap-4 mb-8">
      <button
        className="relative overflow-hidden bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
         onClick={() => setIsModalOpen(true)}
      >
        <span className="relative z-10">Volunteer</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#9ed462] to-[#03ac56] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      </button>
      <button
        className="relative overflow-hidden bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
         onClick={() => setIsModalOpen(true)}
      >
        <span className="relative z-10">Our Impact</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#fe0000] to-[#b60808] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
      </button>
    </div>
  );

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset9.jpeg"
                alt="Team Collaboration"
                fill
                className="object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
           {/* <div className="mt-6 bg-gradient-to-r from-[#9ed462] to-[#03ac56] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Driven by Passion</p>
            </div>*/}
            <div 
  className="mt-6 relative group cursor-pointer overflow-hidden"
 onClick={() => setIsModalOpen(true)}
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#9ed462] to-[#03ac56] rounded-xl sm:rounded-2xl shadow-md transition-all duration-500" />
  
  {/* Inner border effect */}
  <div className="absolute inset-0.5 border-2 border-white rounded-xl sm:rounded-2xl pointer-events-none" />
  
  <div className="relative h-24 flex items-center justify-between px-6 sm:px-8">
    <p className="text-white font-medium text-lg md:text-xl z-10">Driven by Passion?</p>
    
    {/* Animated arrow icon */}
    <div className="relative z-10 w-8 h-8 flex items-center justify-center">
      <svg 
        className="w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
      <div className="absolute inset-0 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
    </div>
  </div>
  
  {/* Hover overlay effect */}
  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
  {/* Responsive touch feedback */}
  <div className="absolute inset-0 active:bg-white/10 md:active:bg-transparent" />
</div>
            <p className="mt-4 text-center text-gray-600 italic">Courtesy call to the office of kakamega governor His Excellency Fernandez Baraza</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-end">
            <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset11.jpeg"
                alt="Digital Calendar"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-gray-600 italic">LCEO played a key role in helping Kakamega County join the Open Government Partnership, a global initiative promoting open leadership, democracy, and public participation in government decisions.</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-end">
            <div className="relative aspect-square bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#03ac56] to-[#b60808] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset10.jpeg"
                alt="Task Planning"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-gray-600 italic">LCEO engaging the Kakamega County Executive arm on how best to better service delivery on key county departments there are people faced.</p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-end">
            <div className="relative aspect-[4/3] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset16.jpeg"
                alt="Event Planning"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-center text-gray-600 italic">A meeting with CECM Health to deliberate on how best to better service delivery at the department of health with fellow leaders.</p>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col">
            <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
              <Image 
                src="/assets/asset8.jpeg"
                alt="Support Chat"
                fill
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/*<div className="mt-6 bg-gradient-to-r from-[#fe0000] to-[#b60808] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Growing in Impact.</p>
            </div>*/}
            <div 
  className="mt-6 relative group cursor-pointer overflow-hidden"
 onClick={() => setIsModalOpen(true)}
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#fe0000] to-[#b60808] rounded-xl sm:rounded-2xl shadow-md transition-all duration-500" />
  
  {/* Inner border effect */}
  <div className="absolute inset-0.5 border-2 border-white rounded-xl sm:rounded-2xl pointer-events-none" />
  
  <div className="relative h-24 flex items-center justify-between px-6 sm:px-8">
    <p className="text-white font-medium text-lg md:text-xl z-10">Growing in Impact.</p>
    
    {/* Animated arrow icon */}
    <div className="relative z-10 w-8 h-8 flex items-center justify-center">
      <svg 
        className="w-5 h-5 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M14 5l7 7m0 0l-7 7m7-7H3" 
        />
      </svg>
      <div className="absolute inset-0 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
    </div>
  </div>
  
  {/* Hover overlay effect */}
  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
  {/* Responsive touch feedback */}
  <div className="absolute inset-0 active:bg-white/10 md:active:bg-transparent" />
</div>
            <p className="mt-4 text-center text-gray-600 italic">The organisation Chairperson and the organization secretary attending a well planned event of one of the leading partner Siasa Place cel;ebrating 10 years of service to the community.</p>
          </div>
        </div>

        {/* New Image Showcase Section */}
        <div className="mt-20">     
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Image 1 */}
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <Image 
                  src="/assets/asset17.jpeg"
                  alt="Community Outreach"
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-center text-gray-600 italic">The LCEO leadership led other youth leadership into a discussion with kakamega county governor His Excellency Fernadez Baraza on how best to patner with civil society organization to enhance and champion service delivery to it's great people..</p>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col">
              <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <Image 
                  src="/assets/asset18.jpeg"
                  alt="Team Meeting"
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-center text-gray-600 italic">Members of LCEO Attending to a social  accountability meeting in kericho.</p>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col">
              <div className="relative aspect-square bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#03ac56] to-[#b60808] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <Image 
                  src="/assets/asset19.jpeg"
                  alt="Training Session"
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-center text-gray-600 italic">The Executive Committee meeting to finalise on the organization yearly plan at Soy Motel.</p>
            </div>

            {/* Image 4 */}
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <Image 
                  src="/assets/asset20.jpeg"
                  alt="Field Work"
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-center text-gray-600 italic">The Nangili Community engagement with the LCEO on the status of Nangili ECDE that has delayed denying young children a better service on their education.Finding solutions on this with the community.</p>
            </div>

            {/* Image 5 */}
            <div className="flex flex-col">
              <div className="relative aspect-[3/4] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <Image 
                  src="/assets/asset21.jpeg"
                  alt="Award Ceremony"
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-center text-gray-600 italic">Likuyani community Empowerment Organization is a member of the National water parliament where young people champion for matter water, sanitation and hygiene.</p>
            </div>

            {/* Image 6 *
            <div className="flex flex-col">
              <div className="relative aspect-[4/5] bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                <Image 
                  src="/assets/asset6.jpeg"
                  alt="Volunteer Team"
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-4 text-center text-gray-600">Our dedicated volunteers making change happen on the ground.</p>
            </div>*/}
          </div>
        </div>
      </div>

      <UnderConstructionModal 
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Feature Under Development"
  message="This feature is currently under development and will be available soon."
  featureName="The Feature"
  estimatedCompletion="in a few so soon..."
/>

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