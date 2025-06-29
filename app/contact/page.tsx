/*import { UnderConstructionPage } from '@/components/NotReady';

export default function ContactConstructionPage() {
  return (
    <UnderConstructionPage 
      pageName="Contact Page"
      description="Our contact section is being rebuilt with exciting new features to help you get in touch with us more easily."
      estimatedCompletion="late October 2023"
    />
  );
}*/

"use client"

import React, { useState } from 'react';
import { UnderConstructionModal } from '@/components/ConstructionModal';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  interface FaqItem {
    question: string;
    answer: string;
  }

  const toggleFaq = (index: number): void => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I volunteer with your organization?",
      answer: "We welcome volunteers! You can start by filling out our volunteer application form on our website or contacting our volunteer coordinator via email. We'll then schedule an orientation session to match your skills with our needs."
    },
    {
      question: "What areas do you serve in Likuyani?",
      answer: "Our primary operations cover all wards of Likuyani Sub-County, with special focus on marginalized communities. We also partner with organizations in neighboring sub-counties for specific programs."
    },
    {
      question: "How transparent is your financial management?",
      answer: "We maintain the highest standards of financial transparency. Our audited financial reports are available annually, and we publish quarterly updates on fund utilization. Donors receive specific reports on how their contributions are used."
    },
    {
      question: "Can I specify how my donation should be used?",
      answer: "Yes! While we appreciate unrestricted donations that allow us to allocate funds where most needed, you can designate your donation to specific programs like education, healthcare, or economic empowerment."
    },
    {
      question: "How do you ensure community participation in your programs?",
      answer: "All our programs are community-driven. We conduct needs assessments, form community advisory committees, and involve beneficiaries in planning and implementation. Regular feedback sessions ensure we remain responsive to community priorities."
    }
  ];

  return (  <> <Navbar />
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#fe0000]/5 via-white to-[#03ac56]/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
                Contact Us
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to Likuyani Community Empowerment Organization - we'd love to hear from you!
            </p>
          </div>
        </div>
        
        {/* Floating animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-[#9ed462] opacity-5 mix-blend-multiply animate-blob"></div>
          <div className="absolute bottom-1/3 right-20 w-48 h-48 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Card */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#b60808]/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#b60808]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                    <div className="mt-2 space-y-1">
                      <a href="tel:0711394908" className="block text-gray-600 hover:text-[#b60808] transition-colors">0711 394 908</a>
                      <a href="tel:0711394827" className="block text-gray-600 hover:text-[#b60808] transition-colors">0711 394 827</a>
                      <a href="tel:0727434732" className="block text-gray-600 hover:text-[#b60808] transition-colors">0727 434 732</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#03ac56]/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#03ac56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                    <a href="mailto:likuyanicommunityorganization@gmail.com" className="mt-2 block text-gray-600 hover:text-[#03ac56] transition-colors">
                      likuyanicommunityorganization@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fe0000]/10 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#fe0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                    <p className="mt-2 text-gray-600">
                      Likuyani Sub-County Headquarters<br />
                      P.O Box 123-50100<br />
                      Kakamega, Kenya
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
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
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#0077B5]/10 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 hover:text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#FF0000]/10 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 hover:text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form and Map */}
            <div className="lg:col-span-2 space-y-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent transition-all"
                        placeholder="What's your message about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent transition-all"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-[#b60808] to-[#fe0000] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Location</h2>
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.755575058426!2d34.98741531526171!3d0.2832995641070085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTcnMDAuMCJOIDM0wrA5OScyMS4xIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
                      className="w-full h-96 border-0"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#03ac56]/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-[#03ac56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Office Hours</h3>
                        <p className="mt-2 text-gray-600">
                          Monday - Friday: 8:00 AM - 5:00 PM<br />
                          Saturday: 9:00 AM - 1:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#fe0000]/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-[#fe0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">Headquarters</h3>
                        <p className="mt-2 text-gray-600">
                          Likuyani Sub-County HQ<br />
                          Along Kakamega-Kitale Road<br />
                          P.O Box 123-50100, Kakamega
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Can't find what you're looking for? <a href="#contact" className="text-[#03ac56] hover:underline">Contact us directly</a>.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-[#fe0000] transition-transform duration-200 ${activeFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeFaq === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Join our community of changemakers today. Whether you want to volunteer, partner with us, or support our work, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-8 py-3 bg-white text-[#b60808] rounded-full hover:bg-gray-100 transition duration-300 font-bold"
              onClick={() => setIsModalOpen(true)}
            >
              Become a Volunteer
            </button>
            <button 
              className="px-8 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white/10 transition duration-300 font-bold"
              onClick={() => setIsModalOpen(true)}
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>

      {/* Under Construction Modal */}
      <UnderConstructionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Feature Under Development"
        message="This feature is currently under development and will be available soon."
        featureName="Contact Form"
        estimatedCompletion="in the next update"
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}