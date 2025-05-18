
"use client"
import React from 'react';

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Contact Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach out to Likuyani Community Empowerment Organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              {/* Map */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.755575058426!2d34.98741531526171!3d0.2832995641070085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTcnMDAuMCJOIDM0wrA1OScyMS4xIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-8 h-8 rounded-full bg-[#b60808]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#b60808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <a href="tel:0727434732" className="text-gray-600 hover:text-[#b60808] transition-colors">0727 434 732</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="w-8 h-8 rounded-full bg-[#03ac56]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#03ac56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <a href="mailto:likuyanicommunityorganization@gmail.com" className="text-gray-600 hover:text-[#03ac56] transition-colors">likuyanicommunityorganization@gmail.com</a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center space-x-4 pt-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#1877F2]/10 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 hover:text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#1DA1F2]/10 transition-colors">
                    <svg className="w-5 h-5 text-gray-600 hover:text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-[#b60808] to-[#fe0000] text-white rounded-full hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
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
      `}</style>
    </section>
  );
}