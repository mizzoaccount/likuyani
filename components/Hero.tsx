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
          The joyful productivity app. Schedule time for todos, events, and contacts.
        </p>

        {/* Top Buttons - Centered with enhanced hover effects */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="relative overflow-hidden bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <span className="relative z-10">View Features</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#9ed462] to-[#03ac56] opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
          </button>
          <button className="relative overflow-hidden bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
            <span className="relative z-10">See Pricing</span>
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
                  src="https://scontent.fnbo17-1.fna.fbcdn.net/v/t39.30808-6/480445184_635348502469153_2590654536309318242_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeETzov3OaWCyqr6qfaBsgijk7LTV5VHe8mTstNXlUd7ycTZEdrbRecHoKLo0ewReEwMalJ9vsNjzQ2CJlXtQU-J&_nc_ohc=4qmLrbwEwXoQ7kNvwE4JfWI&_nc_oc=Adk3aqwuf27tIid5XuGrDc94IKIrYeXZqmZB695o-PKfm6bJa95p8zRJ0BRW4FwaTXA&_nc_zt=23&_nc_ht=scontent.fnbo17-1.fna&_nc_gid=HtN0QzU1p9ntbTgCzveL9g&oh=00_AfL8WrEYJ-95KFFJXkZG88zzY4FinsM_Q2YFvNECECMq2g&oe=682FED99"
                  alt="Team Collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-[#9ed462] to-[#03ac56] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Let them be heard</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-end">
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
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
            <div className="h-48 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transitionAll: duration-500 p-4 group relative overflow-hidden">
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
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
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
            <div className="h-80 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500 p-4 group relative overflow-hidden">
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
            <div className="mt-6 bg-gradient-to-r from-[#fe0000] to-[#b60808] rounded-xl sm:rounded-2xl p-4 h-24 flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-white font-medium text-lg">Your home of help</p>
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