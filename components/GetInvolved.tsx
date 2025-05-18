"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState('volunteer');
  
  const involvementOptions = [
    {
      id: 'volunteer',
      title: "Volunteer Opportunities",
      description: "Join our team of dedicated volunteers and make a direct impact in the Likuyani community through hands-on work.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 'partner',
      title: "Partnership Opportunities",
      description: "Collaborate with us as an organization or business to amplify our impact through strategic partnerships.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 'intern',
      title: "Internship Programs",
      description: "Gain valuable experience while contributing to meaningful change through our internship programs.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-[#fe0000] to-[#b60808]"
    },
    {
      id: 'network',
      title: "Join Our Network",
      description: "Become part of our growing network of supporters, advocates, and changemakers.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      color: "from-[#9ed462] to-[#03ac56]"
    }
  ];

  const activeOption = involvementOptions.find(option => option.id === activeTab);

  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-10 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Get Involved
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
            Join us in empowering the Likuyani community through various engagement opportunities
          </p>
        </div>

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {involvementOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveTab(option.id)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeTab === option.id 
                    ? `bg-gradient-to-r ${option.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.title}
              </button>
            ))}
          </div>

          {/* Content Card */}
          {activeOption && (
            <div className="lg:w-3/4">
              <div className="h-full bg-white rounded-3xl shadow-xl overflow-hidden group relative">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activeOption.color} opacity-10 z-10 transition-opacity duration-500`}></div>
                
                {/* Image */}
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={activeOption.image}
                    alt={activeOption.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{activeOption.title}</h3>
                  <p className="text-white/90 mb-6">{activeOption.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      Learn More
                    </button>
                    <button className={`px-6 py-2 bg-gradient-to-r ${activeOption.color} text-white rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
          <div className="bg-gradient-to-br from-[#fe0000]/10 to-[#b60808]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b60808] mb-1 sm:mb-2">250+</div>
            <div className="text-sm sm:text-base text-gray-700">Active Volunteers</div>
          </div>
          <div className="bg-gradient-to-br from-[#9ed462]/10 to-[#03ac56]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03ac56] mb-1 sm:mb-2">40+</div>
            <div className="text-sm sm:text-base text-gray-700">Trusted Partners</div>
          </div>
          <div className="bg-gradient-to-br from-[#b60808]/10 to-[#fe0000]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fe0000] mb-1 sm:mb-2">15+</div>
            <div className="text-sm sm:text-base text-gray-700">Annual Interns</div>
          </div>
          <div className="bg-gradient-to-br from-[#03ac56]/10 to-[#9ed462]/10 p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9ed462] mb-1 sm:mb-2">1K+</div>
            <div className="text-sm sm:text-base text-gray-700">Network Members</div>
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