/*"use client"
import React from 'react';
import Link from 'next/link';

export default function ThematicAreas() {
  const themes = [
    {
      id: 1,
      title: "Leadership & Governance",
      description: "Building effective community leadership and transparent governance structures",
      icon: "🏛️",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Youth Mentorship & Women Empowerment",
      description: "Creating opportunities and skills development for youth and women",
      icon: "👩‍🎓",
      color: "from-[#9ed462] to-[#03ac56]"
    },
    {
      id: 3,
      title: "Agribusiness",
      description: "Transforming agriculture into profitable, sustainable ventures",
      icon: "🌱",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 4,
      title: "Budget Advocacy & Social Accountability",
      description: "Promoting transparent use of public resources",
      icon: "📊",
      color: "from-[#fe0000] to-[#b60808]"
    },
    {
      id: 5,
      title: "Climate Change & Environmental Conservation",
      description: "Sustainable environmental practices for community resilience",
      icon: "🌍",
      color: "from-[#03ac56] to-[#b60808]"
    },
    {
      id: 6,
      title: "Sexual & Reproductive Health and Rights (SRHR)",
      description: "Improving access to comprehensive health education and services",
      icon: "❤️",
      color: "from-[#fe0000] to-[#9ed462]"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      {/* Background elements *
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header *
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Our Thematic Areas
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Focused initiatives driving sustainable change across Likuyani community
          </p>
        </div>

        {/* Thematic Cards Grid *
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <Link href={`/themes/${theme.id}`} key={theme.id}>
              <div className={`bg-gradient-to-br ${theme.color} p-0.5 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}>
                <div className="h-full bg-white rounded-3xl p-8 flex flex-col">
                  <div className={`text-5xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {theme.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{theme.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{theme.description}</p>
                  <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#b60808] to-[#03ac56] font-medium">
                    Explore program
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Animation styles *
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
      `}</style>
    </section>
  );
}*/


/*"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { UnderConstructionModal } from './ConstructionModal';

export default function ThematicAreas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const themes = [
    {
      id: 1,
      title: "Leadership & Governance",
      description: "Building effective community leadership and transparent governance structures",
      icon: "🏛️",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Youth Mentorship & Women Empowerment",
      description: "Creating opportunities and skills development for youth and women",
      icon: "👩‍🎓",
      color: "from-[#9ed462] to-[#03ac56]"
    },
    {
      id: 3,
      title: "Agribusiness",
      description: "Transforming agriculture into profitable, sustainable ventures",
      icon: "🌱",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 4,
      title: "Budget Advocacy & Social Accountability",
      description: "Promoting transparent use of public resources",
      icon: "📊",
      color: "from-[#fe0000] to-[#b60808]"
    },
    {
      id: 5,
      title: "Climate Change & Environmental Conservation",
      description: "Sustainable environmental practices for community resilience",
      icon: "🌍",
      color: "from-[#03ac56] to-[#b60808]"
    },
    {
      id: 6,
      title: "Sexual & Reproductive Health and Rights (SRHR)",
      description: "Improving access to comprehensive health education and services",
      icon: "❤️",
      color: "from-[#fe0000] to-[#9ed462]"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 relative overflow-hidden">
   
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
     
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Our Thematic Areas
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Focused initiatives driving sustainable change across Likuyani community
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20">
          {themes.map((theme) => (
            
              <div className={`bg-gradient-to-br ${theme.color} p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group`}>
                <div className="h-full bg-white rounded-xl sm:rounded-2xl p-8 flex flex-col">
                  <div className={`text-2xl sm:text-3xl md:text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {theme.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{theme.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6 flex-grow">{theme.description}</p>
                  <div className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#b60808] to-[#03ac56] font-medium"
                  onClick={() => setIsModalOpen(true)}
                  >
                    Explore program
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
        
          ))}
        </div>
      </div>

            <UnderConstructionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Feature Under Development"
        message="This feature is currently under development and will be available soon."
        featureName="Thematic details"
        estimatedCompletion="in a few so soon..."
      />

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
}*/

'use client';

import React, { useState } from 'react';
import { UnderConstructionModal } from './ConstructionModal';

export default function ThematicAreas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const themes = [
    {
      id: 1,
      title: "Leadership & Governance",
      description: "Building effective community leadership and transparent governance structures",
      icon: "🏛️",
      gradient: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Youth Mentorship & Women Empowerment",
      description: "Creating opportunities and skills development for youth and women",
      icon: "👩‍🎓",
      gradient: "from-[#9ed462] to-[#03ac56]"
    },
    {
      id: 3,
      title: "Agribusiness",
      description: "Transforming agriculture into profitable, sustainable ventures",
      icon: "🌱",
      gradient: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 4,
      title: "Budget Advocacy & Social Accountability",
      description: "Promoting transparent use of public resources",
      icon: "📊",
      gradient: "from-[#fe0000] to-[#b60808]"
    },
    {
      id: 5,
      title: "Climate Change & Environmental Conservation",
      description: "Sustainable environmental practices for community resilience",
      icon: "🌍",
      gradient: "from-[#03ac56] to-[#b60808]"
    },
    {
      id: 6,
      title: "Sexual & Reproductive Health and Rights (SRHR)",
      description: "Improving access to comprehensive health education and services",
      icon: "❤️",
      gradient: "from-[#fe0000] to-[#9ed462]"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Our Thematic Areas
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Focused initiatives driving sustainable change across Likuyani community
          </p>
        </div>

        {/* Thematic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className="relative group overflow-hidden p-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-br hover:shadow-lg transition-all duration-500"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.gradient.replace('from-', '').replace('to-', '').replace(/\[|\]/g, '')})` }}
              onMouseEnter={() => setHoveredCard(theme.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative h-full bg-white rounded-xl sm:rounded-[15px] p-6 sm:p-8 flex flex-col cursor-pointer">
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.gradient.replace('from-', '').replace('to-', '').replace(/\[|\]/g, '')})` }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with animated border */}
                  <div className="w-16 h-16 mb-6 flex items-center justify-center relative">
                    <div className="text-3xl">{theme.icon}</div>
                    <div className={`absolute inset-0 border-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${hoveredCard === theme.id ? 'scale-125' : 'scale-100'}`}
                         style={{ borderColor: theme.gradient.includes('#b60808') ? '#b60808' : theme.gradient.includes('#03ac56') ? '#03ac56' : '#fe0000' }} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {theme.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-6 flex-grow group-hover:text-gray-600 transition-colors duration-300">
                    {theme.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#b60808] to-[#03ac56] font-medium group-hover:text-gray-800 transition-colors duration-300">
                      Explore program
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                           fill="none" 
                           stroke="currentColor" 
                           viewBox="0 0 24 24">
                        <path strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                     style={{ backgroundImage: `linear-gradient(to right, ${theme.gradient.replace('from-', '').replace('to-', '').replace(/\[|\]/g, '')})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <UnderConstructionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Feature Under Development"
        message="This feature is currently under development and will be available soon."
        featureName="Thematic details"
        estimatedCompletion="in a few weeks"
      />

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