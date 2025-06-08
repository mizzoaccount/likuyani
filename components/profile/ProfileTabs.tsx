/*"use client";

import { motion } from "framer-motion";
import { User, ShoppingBag } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdmin: boolean;
}

export const ProfileTabs = ({ activeTab, setActiveTab, isAdmin }: ProfileTabsProps) => {
  const tabs: Tab[] = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
 
  ];

  if (isAdmin) {
    tabs.push(
      { id: "users", label: "Users", icon: <User size={18} /> },
      { id: "products", label: "Products", icon: <ShoppingBag size={18} /> }
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-8 border-b border-[#f4b500]"
    >
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? "border-[#f4b500] text-[#f4b500]"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </div>
          </button>
        ))}
      </nav>
    </motion.div>
  );
};*/

"use client";

import { motion } from "framer-motion";
import { User, ShoppingBag } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isAdmin: boolean;
}

export const ProfileTabs = ({ activeTab, setActiveTab, isAdmin }: ProfileTabsProps) => {
  const tabs: Tab[] = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
  ];

  if (isAdmin) {
    tabs.push(
      { id: "users", label: "Users", icon: <User size={18} /> },
      { id: "products", label: "Products", icon: <ShoppingBag size={18} /> }
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-8 border-b border-[#03ac56]"
    >
      <nav className="flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "border-[#03ac56] text-[#b60808] font-bold"
                : "border-transparent text-gray-500 hover:text-[#03ac56] hover:border-[#b60808]/30"
            }`}
          >
            <div className="flex items-center gap-2">
              {activeTab === tab.id ? (
                <span className="text-[#03ac56]">{tab.icon}</span>
              ) : (
                tab.icon
              )}
              {tab.label}
            </div>
          </button>
        ))}
      </nav>
    </motion.div>
  );
};