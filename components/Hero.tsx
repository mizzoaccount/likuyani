/*"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32"
    >
      {/* Particle background *
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white bg-opacity-10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 50],
              x: [null, (Math.random() - 0.5) * 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      {/* Glow effects *
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 mix-blend-screen"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center md:text-left max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 uppercase rounded-full bg-white bg-opacity-10">
              Innovative Solutions
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Malex Chem
            </span> <br />
            <span className="text-white">Supplies Ltd</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto md:mx-0 text-blue-100"
          >
            Pioneering chemical solutions that drive innovation and sustainability for tomorrow's challenges.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative overflow-hidden px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="relative overflow-hidden px-8 py-4 rounded-full font-semibold bg-transparent border-2 border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300"
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white bg-opacity-5 hover:bg-opacity-10 transition-all duration-300"></span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating 3D shapes *
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-lg bg-blue-500 bg-opacity-10 border border-blue-400 border-opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-400 bg-opacity-10 border border-blue-300 border-opacity-30"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
      />

      {/* Animated grid lines *
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Scroll indicator *
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-blue-300">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>

      {/* Floating molecules animation *
      <div className="absolute inset-0 overflow-hidden">
        {['M5,5 L10,10 L5,15', 'M15,5 L20,10 L15,15', 'M10,10 L15,15 L10,20'].map((d, i) => (
          <motion.svg
            key={i}
            className="absolute"
            width="30"
            height="30"
            viewBox="0 0 25 25"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: 0.8 + Math.random() * 0.4
            }}
            animate={{
              x: [null, (Math.random() - 0.5) * 50],
              y: [null, (Math.random() - 0.5) * 50],
              rotate: [0, 360],
              transition: {
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          >
            <path d={d} />
            <circle cx="12.5" cy="12.5" r="2" fill="white" fillOpacity="0.5" />
          </motion.svg>
        ))}
      </div>
    </section>
  );
};

export default Hero;*/

// app/page.tsx (for App Router) or pages/index.js (for Pages Router)
// app/page.tsx (for App Router) or pages/index.js (for Pages Router)
"use client";
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#b60808] opacity-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-[#03ac56] opacity-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full bg-[#fe0000] opacity-10 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 text-center relative z-10">
        {/* Hero Text with gradient animation */}
        <h1 className="text-5xl md:text-5xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
            Lukuyani Community<br />Empowerment<br />Organization
          </span>
        </h1>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          The joyful productivity app. Schedule time for todos, events, and contacts.
        </p>

        {/* Card Grid Section */}
        <div className="mt-12">
          {/* Top Buttons - Centered with enhanced hover effects */}
          <div className="flex justify-center gap-4 mb-0">
            <button className="relative overflow-hidden bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <span className="relative z-10">View Features</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#9ed462] to-[#03ac56] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            <button className="relative overflow-hidden bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <span className="relative z-10">See Pricing</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#fe0000] to-[#b60808] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Card Grid with enhanced animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-0">
            {/* Column 1 */}
            <div className="flex flex-col">
              <div className="h-80 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/480445184_635348502469153_2590654536309318242_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeETzov3OaWCyqr6qfaBsgijk7LTV5VHe8mTstNXlUd7ycTZEdrbRecHoKLo0ewReEwMalJ9vsNjzQ2CJlXtQU-J&_nc_ohc=4qmLrbwEwXoQ7kNvwE4JfWI&_nc_oc=Adk3aqwuf27tIid5XuGrDc94IKIrYeXZqmZB695o-PKfm6bJa95p8zRJ0BRW4FwaTXA&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=HtN0QzU1p9ntbTgCzveL9g&oh=00_AfL8WrEYJ-95KFFJXkZG88zzY4FinsM_Q2YFvNECECMq2g&oe=682FED99"
                    alt="Team Collaboration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-[#9ed462] to-[#03ac56] rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-white font-medium text-lg">Let them be heard</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col justify-end">
              <div className="h-80 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/491938727_678686084802061_3263230046144354296_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG6ofsDEi9Jg66ACLxeLN5xHhwn6vJSuj0eHCfq8lK6PZgGz5nkUIkJbQhfHygzX9OXhKTMBS9OJgr4MYY0VBNi&_nc_ohc=XI-stCHRmW0Q7kNvwFEsOXo&_nc_oc=AdnFf7W5TnpQyV6Mmf3Nh7CA1aLbnE-JM1BXieqQbKVLCdDCKUL7Fqx-gBCIwuQEH_8&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=5swaWbXx3-aSFlT76ip0NQ&oh=00_AfLDivsvd8xOPmzNFh89fBD6ntqoAqTRntJbCytekwj9lg&oe=682FEAC4"
                    alt="Digital Calendar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col justify-end">
              <div className="h-48 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#03ac56] to-[#b60808] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/494616904_690471613623508_8951357682867558982_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGLhoyLfffiCvqjk731tBczbft82_gEjpFt-3zb-ASOkdeGlckrJw8Efcd5ckTkaukSUOe1RKJZbEUWdaz65WYq&_nc_ohc=KiszL8JoNz8Q7kNvwERxFHL&_nc_oc=AdnRnWImq_XGbnIp7sFJ8GtmZxnSsvsJCv_Jjvyk883HOVbew2zldp2agrVGQfV4v4o&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=D28eLI1TdOOl7NLHDtykiQ&oh=00_AfLRscTMxEQytkY5FCs28Rjoxol7NIE-5S30sPYpMcAxDw&oe=6830038F"
                    alt="Task Planning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col justify-end">
              <div className="h-80 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#fe0000] to-[#9ed462] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/490806689_678685944802075_8218602547717874476_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHg0ISClEMVb3vlvVZONlnJ4Lxk3rfc9bDgvGTet9z1sDC031o_P-q_KHTAGQuzXblMwMpzW3dat3tyt_rOpySG&_nc_ohc=CM6EIVTaDncQ7kNvwHzshtq&_nc_oc=Adm8bCejZGu8xs2AEv6e3xBOwq8s6REwAiIKi9sBEHthkI9cEY-CoRGynsqvHk301KI&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=cd2xzzlYbD-TzZXM7segOA&oh=00_AfILoAyjQdqed4o1m_PgUl000WoHeo0SM6bNakSliXX9BA&oe=68301B14"
                    alt="Event Planning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col">
              <div className="h-80 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b60808] to-[#03ac56] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/493666505_688023610534975_8885622554008930096_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE1CgF_oTG9RCGd_ZMxlIgDAk-I5ZexqYoCT4jll7GpikA_UXxrIOpq0xoKDStz1p4PzmiV6ZLN7F3psLjgTvk6&_nc_ohc=h2LJV7ExYKcQ7kNvwEUByZk&_nc_oc=AdkltWQ0KkPipb2VToaoOXzraImjsrCtDlwlGIlyzl8OyksaY3K5z3pjNxqxhpRmIO8&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=CmhQcFTMOdQqjakE01UM6g&oh=00_AfIaF8k2YVBw64MFWIYRABzn1SYB5HAQrULIUxJE8DEa6w&oe=682FF5FC"
                    alt="Support Chat"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-[#fe0000] to-[#b60808] rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-white font-medium text-lg">Your home of help</p>
              </div>
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