"use client";
import { motion } from "framer-motion";
import { ShoppingBag, CreditCard } from "lucide-react";

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface ProfileInfoSectionProps {
  firstName: string;
  email: string;
  shippingAddress: Address;
  billingAddress: Address;
}

export const ProfileInfoSection = ({
  firstName,
  email,
  shippingAddress,
  billingAddress,
}: ProfileInfoSectionProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Basic Info Card */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Information</h3>
      <div className="space-y-5">
        <div>
          <p className="text-sm text-gray-500">Full Name</p>
          <p className="text-gray-900 font-medium">{firstName}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email Address</p>
          <p className="text-gray-900 font-medium break-all">{email}</p>
        </div>
      </div>
    </motion.div>


    {/*<motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="space-y-6"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-4">Addresses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <ShoppingBag size={16} className="text-[#b60808]" />
            Shipping Address
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {shippingAddress.street}
            <br />
            {shippingAddress.city} {shippingAddress.state}, {shippingAddress.zip}
            <br />
            {shippingAddress.country}
          </p>
        </motion.div>

     
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <CreditCard size={16} className="text-[#03ac56]" />
            Billing Address
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {billingAddress.street}
            <br />
            {billingAddress.city} {billingAddress.state}, {billingAddress.zip}
            <br />
            {billingAddress.country}
          </p>
        </motion.div>
      </div>
    </motion.div>*/}
  </div>
);