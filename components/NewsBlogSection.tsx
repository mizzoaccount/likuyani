/*"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsBlogSection() {
  const articles = [
    {
      id: 1,
      title: "Empowering Women Through Agribusiness Training",
      excerpt: "How our latest initiative is transforming lives in Likuyani through sustainable farming practices",
      date: "May 15, 2023",
      category: "Program Updates",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Youth Leadership Forum 2023 Recap",
      excerpt: "Highlights from our annual event that brought together 200+ young leaders from Western Kenya",
      date: "April 28, 2023",
      category: "Community Stories",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 3,
      title: "New Climate Resilience Program Launched",
      excerpt: "Partnering with local farmers to implement sustainable land management techniques",
      date: "March 10, 2023",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      color: "from-[#fe0000] to-[#b60808]"
    }
  ];

  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Animated background elements *
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#b60808] opacity-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-[#03ac56] opacity-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 rounded-full bg-[#fe0000] opacity-10 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header *
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              News & Blog
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Stories of impact, program updates, and community voices from Likuyani
          </p>
        </div>

        {/* Articles Grid *
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <div key={article.id} className="group">
              <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                {/* Image with gradient overlay *
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`bg-gradient-to-r ${article.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                {/* Content *
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#b60808] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">{article.excerpt}</p>
                  <Link 
                    href={`/news/${article.id}`} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#b60808] to-[#03ac56] font-medium inline-flex items-center self-start"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button *
        <div className="text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:from-[#fe0000] hover:to-[#9ed462] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}*/

"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsBlogSection() {
  const articles = [
    {
      id: 1,
      title: "Empowering Women Through Agribusiness Training",
      excerpt: "How our latest initiative is transforming lives in Likuyani through sustainable farming practices",
      date: "May 15, 2023",
      category: "Program Updates",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Youth Leadership Forum 2023 Recap",
      excerpt: "Highlights from our annual event that brought together 200+ young leaders from Western Kenya",
      date: "April 28, 2023",
      category: "Community Stories",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 3,
      title: "New Climate Resilience Program Launched",
      excerpt: "Partnering with local farmers to implement sustainable land management techniques",
      date: "March 10, 2023",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      color: "from-[#fe0000] to-[#b60808]"
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-10 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-10 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#fe0000] opacity-10 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              News & Blog
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto">
            Stories of impact, program updates, and community voices from Likuyani
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20">
          {articles.map((article) => (
            <div key={article.id} className="group">
              <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                {/* Image with gradient overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`bg-gradient-to-r ${article.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#b60808] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">{article.excerpt}</p>
                  <Link 
                    href={`/news/${article.id}`} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#b60808] to-[#03ac56] font-medium inline-flex items-center self-start"
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:from-[#fe0000] hover:to-[#9ed462] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
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