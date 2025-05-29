"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UnderConstructionModal } from './ConstructionModal';

export default function TopHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Community images for the carousel
  const communityImages = [
    "/assets/asset7.jpeg",
    "/assets/asset9.jpeg",
    "/assets/asset10.jpeg",
    "/assets/asset11.jpeg",
    "/assets/asset8.jpeg",
    "/assets/asset12.jpeg",
    "/assets/asset22.jpeg",
    "/assets/asset23.jpeg",
    "/assets/asset24.jpeg",
   "/assets/asset25.jpeg",
    "/assets/asset26.jpeg",
    "/assets/asset27.jpeg",
    "/assets/asset28.jpeg",
    "/assets/asset29.jpeg",
    "/assets/asset30.jpeg",
    "/assets/asset32.jpeg",
  ];
  
  // Carousel titles
  const carouselTitles = [
    "Education Programs",
    "Healthcare Initiatives",
    "Economic Empowerment",
    "Community Development",
    "Volunteer Engagement",
    "Sustainable Futures"
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % communityImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-white via-[#fef2f2] to-[#f0fdf4] py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 md:w-60 md:h-60 rounded-full bg-[#9ed462] opacity-5 mix-blend-multiply"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-5 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.div 
                className="inline-block bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white px-4 py-1 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Transforming Lives Since 2019
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
                  Empowering Likuyani<br />
                  <span className="text-gray-800">Through Community Action</span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Likuyani Community Empowerment Organization (LCEO) is a grassroots initiative dedicated to creating sustainable change in Western Kenya. Through collaborative efforts, we're building a future where every community member has access to education, healthcare, and economic opportunities.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-[#b60808] to-[#fe0000] text-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium"
                onClick={() => setIsModalOpen(true)}
                >
                Join Our Mission
              </button>
              <button className="px-8 py-3 bg-white border-2 border-[#03ac56] text-[#03ac56] rounded-full hover:bg-[#03ac56]/10 transition-all duration-300 font-medium flex items-center gap-2"
                onClick={() => setIsModalOpen(true)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Our Impact Story
              </button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#b60808]">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#03ac56]">10K+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#fe0000]">200+</div>
                <div className="text-sm text-gray-600">Volunteers</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image Carousel */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {communityImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image 
                    src={img}
                    alt={`Community activity ${index + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">
                      {carouselTitles[index]}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      Empowering communities through sustainable initiatives
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {communityImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-white w-6 scale-125' 
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* Floating tag */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-[#b60808] to-[#fe0000] p-2 rounded-2xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-white p-3 rounded-xl text-center">
                <div className="text-lg font-bold text-[#b60808]">Since 2019</div>
                <div className="text-xs text-gray-600">Serving Likuyani</div>
              </div>
            </motion.div>
            
            {/* Floating community icons */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-lg flex items-center"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#03ac56]/10 border-2 border-white overflow-hidden">
                  <Image 
                    src="/assets/asset12.jpeg"
                    alt="Community member"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#b60808]/10 border-2 border-white overflow-hidden">
                  <Image 
                    src="/assets/asset11.jpeg"
                    alt="Community member"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#fe0000]/10 border-2 border-white overflow-hidden">
                  <Image 
                    src="/assets/asset10.jpeg"
                    alt="Community member"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium text-gray-800">Community</div>
                <div className="text-xs text-gray-600">Stronger Together</div>
              </div>
            </motion.div>
          </motion.div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}