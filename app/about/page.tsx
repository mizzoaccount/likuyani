"use client"

import React from 'react';
import Image from 'next/image';
import Navbart from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
        <Navbart />
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#fe0000]/5 via-white to-[#03ac56]/5 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
                Our Leadership & Governance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by integrity, transparency, and a commitment to community transformation
            </p>
          </div>
        </div>
        
        {/* Floating animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-[#9ed462] opacity-5 mix-blend-multiply animate-blob"></div>
          <div className="absolute bottom-1/3 right-20 w-48 h-48 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Governance Structure Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Governance Framework
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A robust structure ensuring accountability and effective service delivery
            </p>
          </div>

          {/* Governance Steps */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#03ac56] via-[#fe0000] to-[#b60808] transform -translate-x-1/2"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1">
                <div className="bg-gradient-to-br from-[#fe0000]/10 to-[#b60808]/10 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-[#b60808] mb-4">General Assembly</h3>
                  <p className="text-gray-600 mb-4">
                    The supreme governing body comprising all registered members that meets annually to review organizational performance and set strategic direction.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#b60808] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Approves annual reports</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#b60808] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Elects board members</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#b60808] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Amends constitution</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center order-2 md:order-3">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/assets/asset13.jpeg"
                    alt="General Assembly Meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#b60808] text-white font-bold text-xl order-2 mx-4">
                1
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center mb-16">
              <div className="w-full md:w-1/2 md:pl-12 order-3">
                <div className="bg-gradient-to-br from-[#03ac56]/10 to-[#9ed462]/10 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-[#03ac56] mb-4">Board of Directors</h3>
                  <p className="text-gray-600 mb-4">
                    A 9-member team providing strategic oversight, policy direction, and ensuring compliance with legal and ethical standards.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Committees:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 mt-2">
                        <li>• Finance & Audit</li>
                        <li>• Programs</li>
                        <li>• Governance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Meetings:</h4>
                      <ul className="text-sm text-gray-600 space-y-1 mt-2">
                        <li>• Quarterly full board</li>
                        <li>• Monthly committee</li>
                        <li>• Special as needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/assets/asset14.jpeg"
                    alt="Board of Directors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#03ac56] text-white font-bold text-xl order-2 mx-4">
                2
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0 order-1">
                <div className="bg-gradient-to-br from-[#9ed462]/10 to-[#fe0000]/10 p-6 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-[#fe0000] mb-4">Management Team</h3>
                  <p className="text-gray-600 mb-4">
                    Led by the Executive Director, implements programs and day-to-day operations with support from department heads.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#fe0000]/10 text-[#b60808] rounded-full text-sm">Executive Director</span>
                    <span className="px-3 py-1 bg-[#03ac56]/10 text-[#03ac56] rounded-full text-sm">Programs Manager</span>
                    <span className="px-3 py-1 bg-[#9ed462]/10 text-[#03ac56] rounded-full text-sm">Finance Officer</span>
                    <span className="px-3 py-1 bg-[#b60808]/10 text-[#b60808] rounded-full text-sm">M&E Specialist</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center order-2 md:order-3">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/assets/asset15.jpeg"
                    alt="Management Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#fe0000] text-white font-bold text-xl order-2 mx-4">
                3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Meet Our Leadership
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate individuals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Board Chair */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/chairperson.jpg"
                  alt="Board Chairperson"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Dr. Sarah Mwangi</h3>
                  <p className="text-[#9ed462] font-medium">Board Chairperson</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Community development expert with 15+ years experience in NGO governance and rural transformation.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-[#03ac56]/10 text-[#03ac56] rounded-full text-xs">Governance</span>
                  <span className="px-2 py-1 bg-[#b60808]/10 text-[#b60808] rounded-full text-xs">Strategy</span>
                  <span className="px-2 py-1 bg-[#9ed462]/10 text-[#03ac56] rounded-full text-xs">Advocacy</span>
                </div>
              </div>
            </div>

            {/* Executive Director */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/director.jpg"
                  alt="Executive Director"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">James Omondi</h3>
                  <p className="text-[#fe0000] font-medium">Executive Director</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Social entrepreneur and program implementation specialist with a track record of impactful community projects.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-[#fe0000]/10 text-[#fe0000] rounded-full text-xs">Leadership</span>
                  <span className="px-2 py-1 bg-[#03ac56]/10 text-[#03ac56] rounded-full text-xs">Programs</span>
                  <span className="px-2 py-1 bg-[#b60808]/10 text-[#b60808] rounded-full text-xs">Partnerships</span>
                </div>
              </div>
            </div>

            {/* Treasurer */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/assets/treasurer.jpg"
                  alt="Board Treasurer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Grace Atieno</h3>
                  <p className="text-[#03ac56] font-medium">Board Treasurer</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Certified public accountant with expertise in financial management for non-profit organizations.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-[#b60808]/10 text-[#b60808] rounded-full text-xs">Finance</span>
                  <span className="px-2 py-1 bg-[#9ed462]/10 text-[#03ac56] rounded-full text-xs">Audit</span>
                  <span className="px-2 py-1 bg-[#03ac56]/10 text-[#03ac56] rounded-full text-xs">Compliance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              View Full Leadership Team
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-gradient-to-br from-[#b60808]/5 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-[#b60808] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600 text-center">
                We uphold the highest ethical standards in all our actions and decisions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gradient-to-br from-[#fe0000]/5 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-[#fe0000] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Transparency</h3>
              <p className="text-gray-600 text-center">
                We maintain open communication with stakeholders about our operations and finances.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gradient-to-br from-[#03ac56]/5 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-[#03ac56] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Community First</h3>
              <p className="text-gray-600 text-center">
                We prioritize the needs and aspirations of the communities we serve in all our programs.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-gradient-to-br from-[#9ed462]/5 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-[#9ed462] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600 text-center">
                We embrace creative solutions to address complex community challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and impact
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#03ac56] via-[#fe0000] to-[#b60808] transform -translate-x-1/2"></div>
            
            {/* Milestone 1 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#b60808] rounded-full flex items-center justify-center text-white font-bold">
                    2019
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 ml-10">Foundation</h3>
                  <p className="text-gray-600">
                    LCEO was founded by a group of local leaders to address education disparities in Likuyani Sub-County.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/founding.jpg"
                    alt="LCEO Founding"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="w-full md:w-1/2 md:pl-12 order-2 md:order-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#fe0000] rounded-full flex items-center justify-center text-white font-bold">
                    2020
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">First Major Project</h3>
                  <p className="text-gray-600">
                    Launched our scholarship program, supporting 50 needy students with full secondary education funding.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
                <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/scholarship.jpg"
                    alt="Scholarship Program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#03ac56] rounded-full flex items-center justify-center text-white font-bold">
                    2023
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 ml-10">Strategic Expansion</h3>
                  <p className="text-gray-600">
                    Expanded our programs to include healthcare initiatives and economic empowerment, impacting 5,000+ community members.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/expansion.jpg"
                    alt="Program Expansion"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Empowering Likuyani
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether as a volunteer, partner, or donor, your support helps us create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#b60808] rounded-full hover:bg-gray-100 transition duration-300 font-bold">
              Become a Volunteer
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white/10 transition duration-300 font-bold">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

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