"use client"

import React from 'react';
import Image from 'next/image';

export default function ResourcesSection() {
  const resources = [
    {
      id: 1,
      title: "Annual Reports",
      description: "Download our yearly impact reports and financial statements",
      type: "download",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      height: "h-80",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Photo Gallery",
      description: "View moments from our community programs and events",
      type: "gallery",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      height: "h-64",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 3,
      title: "Strategic Plans",
      description: "Access our roadmap for community development",
      type: "download",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      height: "h-72",
      color: "from-[#fe0000] to-[#b60808]"
    },
    {
      id: 4,
      title: "Infographics",
      description: "Visual representations of our impact and programs",
      type: "infographic",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      height: "h-96",
      color: "from-[#9ed462] to-[#03ac56]"
    },
    {
      id: 5,
      title: "Policy Briefs",
      description: "Research and recommendations for community development",
      type: "download",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      height: "h-60",
      color: "from-[#b60808] to-[#03ac56]"
    },
    {
      id: 6,
      title: "Video Library",
      description: "Watch stories of impact from our programs",
      type: "gallery",
      image: "https://images.unsplash.com/photo-1578525386936-7cac6bad612e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      height: "h-80",
      color: "from-[#03ac56] to-[#b60808]"
    }
  ];

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
              Resources
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Access our reports, media, and informational materials
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="group flex flex-col">
              {/* Resource Card */}
              <div className={`${resource.height} bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-white/90">{resource.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <div className={`mt-4 bg-gradient-to-r ${resource.color} rounded-xl sm:rounded-2xl p-4 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                {resource.type === 'download' ? (
                  <a href="#" className="text-white font-medium text-lg inline-flex items-center">
                    Download
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                ) : (
                  <a href="#" className="text-white font-medium text-lg inline-flex items-center">
                    View {resource.type === 'gallery' ? 'Gallery' : 'Infographics'}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
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