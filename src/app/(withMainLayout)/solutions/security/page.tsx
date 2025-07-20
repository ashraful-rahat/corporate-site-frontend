// src/app/services/security/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Laptop,
  Bug,
  Lock, // Used for "Safeguard Sensitive Data" benefit
  Fingerprint, // Used for "Meet Regulatory Compliance" benefit
  Activity, // Used for "Business Continuity" benefit
  Check, // Added for features list
} from "lucide-react";

const Security = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Firewall & VPN Solutions",
      description:
        "Implement next-gen firewalls and secure VPN solutions for robust perimeter defense and secure remote access.",
      features: [
        "Intrusion Prevention",
        "Application Control",
        "Secure Remote Access",
        "Threat Intelligence",
      ],
      color: "blue", // Added color property for dynamic gradient
    },
    {
      icon: Laptop,
      title: "Endpoint Security & Protection",
      description:
        "Secure all your endpoints, from desktops to mobile devices, against malware, ransomware, and sophisticated attacks.",
      features: [
        "Antivirus & EDR",
        "Device Control",
        "Data Encryption",
        "Mobile Device Management",
      ],
      color: "purple", // Added color property
    },
    {
      icon: Bug,
      title: "Vulnerability Assessment & Pen Testing",
      description:
        "Proactively identify and remediate security weaknesses before they can be exploited by malicious actors.",
      features: [
        "Network Scans",
        "Web Application Testing",
        "Compliance Audits",
        "Security Posture Review",
      ],
      color: "indigo", // Added color property
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 15 }} // Smaller initial y
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Faster transition
          className="container mx-auto px-3 py-8 sm:px-4 sm:py-10" // Reduced padding
        >
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            {" "}
            {/* Reduced max-width and margin-bottom */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }} // Faster transition
              className="text-3xl font-extrabold text-gray-900 leading-tight mb-3 sm:text-4xl" // Smaller font size
            >
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-[#164897] to-[#123a7a] bg-clip-text text-transparent">
                Network Security Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} // Faster transition
              className="text-sm text-gray-700 leading-relaxed sm:text-base" // Smaller font size
            >
              Protect your digital assets and infrastructure from evolving cyber
              threats with our proactive and adaptive security services,
              ensuring business continuity and data integrity.
            </motion.p>
          </div>

          {/* Main Offerings Grid */}
          <div className="grid md:grid-cols-3 gap-5 mb-10 sm:gap-6 sm:mb-12">
            {" "}
            {/* Reduced gap and margin-bottom */}
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.95 }} // Smaller initial scale
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }} // Faster transition and stagger
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 transform hover:scale-[1.01] transition-all duration-300" // Smaller padding, shadow, border radius, less scale
              >
                <div className="flex items-center mb-3">
                  {" "}
                  {/* Reduced margin-bottom */}
                  <div
                    className={`w-9 h-9 bg-gradient-to-br from-${service.color}-500 to-${service.color}-700 rounded-md flex items-center justify-center mr-2.5 shadow-sm`} // Smaller icon container, reduced shadow
                  >
                    <service.icon className="w-4.5 h-4.5 text-white" />{" "}
                    {/* Smaller icon */}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {" "}
                    {/* Smaller font size */}
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  {" "}
                  {/* Smaller font size, reduced margin-bottom */}
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {" "}
                  {/* Reduced spacing */}
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 text-xs"
                    >
                      {" "}
                      {/* Smaller font size */}
                      <Check className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />{" "}
                      {/* Smaller icon */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why Network Security Matters Section - Made even smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }} // Faster transition
            className="bg-white rounded-xl p-8 shadow-md" // Smaller padding, shadow, border radius
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
              {" "}
              {/* Smaller font size */}
              Why Network Security Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {" "}
              {/* Reduced gap */}
              <div className="text-center">
                <Lock className="w-12 h-12 text-blue-300 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg text-blue-800 font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Safeguard Sensitive Data
                </h3>
                <p className="text-gray-900 text-sm opacity-90">
                  {" "}
                  {/* Smaller font size */}
                  Protect your confidential information from breaches and
                  unauthorized access.
                </p>
              </div>
              <div className="text-center">
                <Fingerprint className="w-12 h-12 text-blue-300 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3
                  className="text-lg  text-blue-800
                 font-semibold mb-3"
                >
                  {" "}
                  {/* Smaller font size */}
                  Meet Regulatory Compliance
                </h3>
                <p className="text-gray-900 text-sm opacity-90">
                  {" "}
                  {/* Smaller font size */}
                  Adhere to industry regulations and avoid costly fines and
                  reputational damage.
                </p>
              </div>
              <div className="text-center">
                <Activity className="w-12 h-12 text-blue-300 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg text-blue-800 font-semibold mb-3">
                  Ensure Business Continuity
                </h3>
                <p className="text-gray-900 text-sm opacity-90">
                  {" "}
                  {/* Smaller font size */}
                  Minimize downtime and disruptions caused by cyber incidents,
                  keeping your operations running smoothly.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Security;
