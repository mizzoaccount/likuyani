'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface UnderConstructionPageProps {
  pageName?: string;
  description?: string;
  estimatedCompletion?: string;
  showBackButton?: boolean;
}

export const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({
  pageName = "This Page",
  description = "We're building something amazing here that will help serve you better.",
  estimatedCompletion = "soon",
  showBackButton = true
}) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      {/* Header with logo */}
      <header className="w-full py-6 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
             <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/assets/logo.png" 
              alt="LCEO Logo"
              width={50} 
              height={50} 
              className="w-auto h-auto"
            />
          </Link>
        </div>
          {showBackButton && (
            <button
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              Go Back
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Construction Illustration */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b60808]/10 via-[#fe0000]/10 to-[#03ac56]/10 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-inner">
              <svg
                className="w-24 h-24 text-[#fe0000]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m1.745 1.437l1.745-1.437m6.615 8.206L15.75 17.25l-1.5-1.5 1.5-1.5h1.409l4.26 4.26"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {pageName} is Under Construction
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-lg mx-auto">
            {description}
          </p>
          {/*<p className="text-gray-500 mb-8">
            Estimated completion: <span className="font-medium text-[#03ac56]">{estimatedCompletion}</span>
          </p>*/}

          {/* Progress indicator */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8 max-w-md mx-auto">
            <div 
              className="bg-gradient-to-r from-[#b60808] to-[#03ac56] h-2.5 rounded-full animate-pulse" 
              style={{ width: '65%' }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-gradient-to-r from-[#b60808] to-[#03ac56] text-white font-medium rounded-full hover:from-[#b60808]/90 hover:to-[#03ac56]/90 transition-all duration-300 shadow-md"
            >
              Return Home
            </button>
            {/*<button
              onClick={() => router.push('/contact')}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Contact Us
            </button>*/}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 sm:px-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} L.C.E.O. All rights reserved.</p>
      </footer>
    </div>
  );
};