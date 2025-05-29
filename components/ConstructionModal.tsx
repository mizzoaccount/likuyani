'use client';

import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface UnderConstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  featureName?: string;
  estimatedCompletion?: string;
}

export const UnderConstructionModal: React.FC<UnderConstructionModalProps> = ({
  isOpen,
  onClose,
  title = "Feature Coming Soon!",
  message = "We're working hard to bring you this functionality.",
  featureName = "this feature",
  estimatedCompletion = "soon"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          {/* Gradient border effect */}
          <div className="absolute inset-0.5 bg-gradient-to-br from-[#b60808] via-[#fe0000] to-[#03ac56] rounded-2xl -z-10" />
          
          {/* Modal content */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl">
            {/* Header with logo and close button */}
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="flex items-center gap-1 mr-2">
                  <Image
                    src="/assets/logo.png"
                    alt="L.C.E.O Logo"
                    width={32}
                    height={32}
                    className="w-12 h-12"
                  />
                </div>
              </div>
              <button
                type="button"
                className="rounded-md p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#03ac56]"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Main content */}
            <div className="mt-4 sm:mt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#b60808]/10 via-[#fe0000]/10 to-[#03ac56]/10">
                <svg
                  className="h-6 w-6 text-[#fe0000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m1.745 1.437l1.745-1.437m6.615 8.206L15.75 17.25l-1.5-1.5 1.5-1.5h1.409l4.26 4.26"
                  />
                </svg>
              </div>
              
              <h3 className="text-center text-lg font-bold leading-6 text-gray-900 mt-4">
                {title}
              </h3>
              
              <div className="mt-4 text-center text-gray-600">
                <p className="text-sm sm:text-base">
                  {message}
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <span className="font-medium text-[#b60808]">{featureName}</span> will be available {estimatedCompletion}.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 sm:mt-8">
              <button
                type="button"
                className="w-full rounded-md bg-gradient-to-r from-[#b60808] to-[#03ac56] px-4 py-3 text-base font-medium text-white shadow-sm hover:from-[#b60808]/90 hover:to-[#03ac56]/90 focus:outline-none focus:ring-2 focus:ring-[#03ac56] focus:ring-offset-2 transition-all duration-300"
                onClick={onClose}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};