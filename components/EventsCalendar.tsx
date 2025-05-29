"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UnderConstructionModal } from './ConstructionModal';

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  color: string;
};

export default function EventsCalendar() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const events: EventType[] = [
    {
      id: 1,
      title: "Women's Entrepreneurship Workshop",
      date: "June 15, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "LCEO Community Center, Likuyani",
      description: "Join us for a day of skill-building and networking for women entrepreneurs in our community. Learn about business planning, financial management, and marketing strategies.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Workshop",
      color: "from-[#b60808] to-[#fe0000]"
    },
    {
      id: 2,
      title: "Youth Climate Action Forum",
      date: "June 22, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Likuyani Secondary School",
      description: "Young environmental leaders will discuss climate challenges and solutions for our community. Featuring guest speakers and action planning sessions.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Forum",
      color: "from-[#03ac56] to-[#9ed462]"
    },
    {
      id: 3,
      title: "Community Budget Advocacy Meeting",
      date: "July 5, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Likuyani Chief's Camp",
      description: "Learn how to participate in county budget processes and advocate for community needs. Open to all residents.",
      image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Community Meeting",
      color: "from-[#fe0000] to-[#b60808]"
    }
  ];

  const handleRSVP = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('RSVP submitted:', formData);
    setRsvpSuccess(true);
    setTimeout(() => {
      setSelectedEvent(null);
      setRsvpSuccess(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Upcoming Events
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Join our community meetings, workshops, and campaigns
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20">
          {events.map((event) => (
            <div key={event.id} className="group">
              <div className="h-full bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
                {/* Image with gradient overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`bg-gradient-to-r ${event.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {event.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="text-sm text-gray-500 mb-1">{event.date} • {event.time}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#b60808] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      RSVP Now
                    </button>
                    <div
                      className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#b60808] to-[#03ac56] font-medium inline-flex items-center"
                    onClick={() => setIsModalOpen(true)}
                    >
                      More details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            href="/events" 
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-[#b60808] to-[#03ac56] hover:from-[#fe0000] hover:to-[#9ed462] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Events
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {rsvpSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">RSVP Confirmed!</h3>
                <p className="text-gray-600 mb-6">You're registered for <span className="font-semibold">{selectedEvent.title}</span></p>
                <p className="text-sm text-gray-500">We've sent details to your email</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Register for {selectedEvent.title}</h3>
                <p className="text-gray-600 mb-6">{selectedEvent.date} • {selectedEvent.time}</p>
                
                <form onSubmit={handleRSVP}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white rounded-full hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsModalOpen(true)}
                  >
                    Confirm RSVP
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}