"use client"

import React, { useState } from 'react';
import Image from 'next/image';

export default function DonationSection() {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  const presetAmounts = [500, 1000, 2000, 5000, 10000, 0]; // 0 for custom amount
  const [customAmount, setCustomAmount] = useState('');

  const impactMetrics = [
    { amount: 500, text: "Provides school supplies for 2 children" },
    { amount: 1000, text: "Supports a woman's business training for 1 week" },
    { amount: 2000, text: "Plants 20 trees in our climate initiative" },
    { amount: 5000, text: "Sponsors a youth leadership workshop" },
    { amount: 10000, text: "Funds a community health outreach for a month" },
  ];

  interface HandleDonateEvent extends React.FormEvent<HTMLFormElement> {}

  const handleDonate = (e: HandleDonateEvent): void => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setDonationSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setDonationSuccess(false);
        setPhoneNumber('');
        setEmail('');
        setSelectedAmount(1000);
        setCustomAmount('');
      }, 5000);
    }, 2000);
  };

  const getImpactText = () => {
    if (selectedAmount === 0 && customAmount) {
      const amount = parseInt(customAmount);
      if (amount >= 10000) return impactMetrics[4].text;
      if (amount >= 5000) return impactMetrics[3].text;
      if (amount >= 2000) return impactMetrics[2].text;
      if (amount >= 1000) return impactMetrics[1].text;
      if (amount >= 500) return impactMetrics[0].text;
      return "Every shilling makes a difference in our community";
    }
    
    const impact = impactMetrics.find(metric => metric.amount === selectedAmount);
    return impact ? impact.text : "Your donation will support our community programs";
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-[#b60808] opacity-5 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#03ac56] opacity-5 mix-blend-multiply animate-blob animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b60808] via-[#fe0000] to-[#03ac56] animate-gradient">
              Support Our Cause
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Your donation empowers the Likuyani community through education, healthcare, and sustainable development
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Donation Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                {donationSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Donation Successful!</h3>
                    <p className="text-gray-600 mb-6">Thank you for your generous support of {selectedAmount === 0 ? `${customAmount} KES` : `${selectedAmount} KES`}.</p>
                    <p className="text-sm text-gray-500">A confirmation has been sent to your {paymentMethod === 'mpesa' ? 'phone' : 'email'}.</p>
                  </div>
                ) : (
                  <>
                    {/* Donation Type Toggle */}
                    <div className="flex bg-gray-100 rounded-full p-1 mb-8">
                      <button
                        onClick={() => setDonationType('one-time')}
                        className={`flex-1 py-3 px-4 rounded-full transition-all duration-300 ${donationType === 'one-time' ? 'bg-gradient-to-r from-[#b60808] to-[#fe0000] text-white shadow-md' : 'text-gray-700'}`}
                      >
                        One-Time
                      </button>
                      <button
                        onClick={() => setDonationType('recurring')}
                        className={`flex-1 py-3 px-4 rounded-full transition-all duration-300 ${donationType === 'recurring' ? 'bg-gradient-to-r from-[#03ac56] to-[#9ed462] text-white shadow-md' : 'text-gray-700'}`}
                      >
                        Monthly
                      </button>
                    </div>

                    {/* Amount Selection */}
                    <div className="mb-8">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Select Amount (KES)</h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {presetAmounts.slice(0, -1).map((amount) => (
                          <button
                            key={amount}
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount('');
                            }}
                            className={`py-3 rounded-lg transition-all duration-300 ${selectedAmount === amount && !customAmount ? 'bg-gradient-to-r from-[#b60808] to-[#fe0000] text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                          >
                            {amount.toLocaleString()}
                          </button>
                        ))}
                        <button
                          onClick={() => setSelectedAmount(0)}
                          className={`py-3 rounded-lg transition-all duration-300 col-span-3 ${selectedAmount === 0 ? 'bg-gradient-to-r from-[#03ac56] to-[#9ed462] text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
                        >
                          Custom Amount
                        </button>
                      </div>
                      {selectedAmount === 0 && (
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">KES</span>
                          <input
                            type="number"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                          />
                        </div>
                      )}
                    </div>

                    {/* Payment Method */}
                    <div className="mb-8">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Payment Method</h3>
                      <div className="flex gap-4">
                        <button
                          onClick={() => setPaymentMethod('mpesa')}
                          className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg border transition-all duration-300 ${paymentMethod === 'mpesa' ? 'border-[#03ac56] bg-[#03ac56]/10' : 'border-gray-300 hover:border-gray-400'}`}
                        >
                          <Image 
                            src="/mpesa-logo.png" // Replace with your M-Pesa logo path
                            alt="M-Pesa"
                            width={80}
                            height={40}
                            className="h-6 object-contain"
                          />
                        </button>
                        <button
                          onClick={() => setPaymentMethod('paypal')}
                          className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg border transition-all duration-300 ${paymentMethod === 'paypal' ? 'border-[#003087] bg-[#003087]/10' : 'border-gray-300 hover:border-gray-400'}`}
                        >
                          <Image 
                            src="/paypal-logo.png" // Replace with your PayPal logo path
                            alt="PayPal"
                            width={80}
                            height={40}
                            className="h-6 object-contain"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Payment Details Form */}
                    <form onSubmit={handleDonate}>
                      {paymentMethod === 'mpesa' ? (
                        <div className="mb-6">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">M-Pesa Phone Number</label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+254</span>
                            <input
                              type="tel"
                              id="phone"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="712 345 678"
                              className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="mb-6">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03ac56] focus:border-transparent"
                            required
                          />
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting || (selectedAmount === 0 && !customAmount)}
                        className={`w-full py-4 px-6 rounded-full text-white font-medium transition-all duration-300 ${isSubmitting ? 'bg-gray-400' : donationType === 'one-time' ? 'bg-gradient-to-r from-[#b60808] to-[#fe0000] hover:shadow-lg' : 'bg-gradient-to-r from-[#03ac56] to-[#9ed462] hover:shadow-lg'}`}
                      >
                        {isSubmitting ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          `Donate ${selectedAmount === 0 ? customAmount || '___' : selectedAmount.toLocaleString()} KES ${donationType === 'recurring' ? 'Monthly' : 'Now'}`
                                                  )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Impact Visualization */}
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-[#03ac56] to-[#9ed462] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="p-6 sm:p-8 text-white h-full flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">Your Impact</h3>
                
                <div className="flex-grow flex flex-col justify-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-6">
                    {selectedAmount === 0 ? (
                      customAmount ? (
                        <>{parseInt(customAmount).toLocaleString()} KES</>
                      ) : (
                        "___ KES"
                      )
                    ) : (
                      <>{selectedAmount.toLocaleString()} KES</>
                    )}
                  </div>
                  
                  <div className="text-xl sm:text-2xl mb-8">
                    {getImpactText()}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">{donationType === 'one-time' ? 'One-time' : 'Monthly'} Support</div>
                        <div className="text-sm opacity-80">{donationType === 'one-time' ? 'Immediate impact' : 'Sustained change'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Secure Payment</div>
                        <div className="text-sm opacity-80">{paymentMethod === 'mpesa' ? 'M-Pesa secured transaction' : 'PayPal protected payment'}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">Tax Deductible</div>
                        <div className="text-sm opacity-80">Receipt provided for all donations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
}