// src/app/services/enterprise-wi-fi/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, Lock, Users, ArrowRight, Check } from "lucide-react"; // Import relevant icons, using Zap for speed

import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const EnterpriseWiFi = () => {
  // Data for the main service offerings/features
  const mainOfferings = [
    {
      icon: Wifi,
      title: "High-Density Coverage",
      description:
        "Seamless wireless connectivity even in environments with a large number of users and devices.",
      features: [
        "Optimal Access Point Placement",
        "Band Steering & Load Balancing",
        "Capacity Planning & Optimization",
      ],
      color: "blue", // Used for gradients and accents
    },
    {
      icon: Lock,
      title: "Robust Security Protocols",
      description:
        "Protect your sensitive data and network with enterprise-grade security features and best practices.",
      features: [
        "WPA3 Encryption",
        "RADIUS Authentication Integration",
        "Guest Network Isolation",
        "Intrusion Prevention",
      ],
      color: "purple",
    },
    {
      icon: Users,
      title: "Centralized Management",
      description:
        "Simplify network administration with intuitive tools for monitoring, configuration, and troubleshooting.",
      features: [
        "Cloud-Managed Solutions",
        "Real-time Analytics & Reporting",
        "Automated Firmware Updates",
        "Remote Diagnostics",
      ],
      color: "green",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        {" "}
        {/* Reduced shadow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} // Smaller initial y
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Faster transition
          className="container mx-auto px-3 py-8 sm:px-4 sm:py-10" // Reduced padding
        >
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            {" "}
            {/* Reduced max-width and margin-bottom */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }} // Faster transition
              className="text-3xl font-extrabold text-gray-900 leading-tight mb-3 sm:text-4xl" // Smaller font size
            >
              Enterprise{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Wi-Fi Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} // Faster transition
              className="text-sm text-gray-700 leading-relaxed sm:text-base" // Smaller font size
            >
              Deliver unparalleled wireless connectivity across your
              organization with our secure, scalable, and high-performance
              Enterprise Wi-Fi systems.
            </motion.p>
          </div>

          {/* Main Offerings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16">
            {" "}
            {/* Reduced gap and margin-bottom */}
            {mainOfferings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, scale: 0.95 }} // Smaller initial scale
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }} // Faster transition and stagger
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transform hover:scale-[1.01] transition-all duration-300" // Smaller padding, shadow, border radius, less scale
              >
                <div className="flex items-center mb-4">
                  {" "}
                  {/* Reduced margin-bottom */}
                  <div
                    className={`w-10 h-10 bg-gradient-to-br from-${offering.color}-500 to-${offering.color}-700 rounded-full flex items-center justify-center mr-3 shadow-sm`} // Smaller icon container, reduced shadow
                  >
                    <offering.icon className="w-5 h-5 text-white" />{" "}
                    {/* Smaller icon */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {" "}
                    {/* Smaller font size */}
                    {offering.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {" "}
                  {/* Smaller font size, reduced margin-bottom */}
                  {offering.description}
                </p>
                <ul className="space-y-1.5">
                  {" "}
                  {/* Reduced spacing */}
                  {offering.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 text-sm"
                    >
                      {" "}
                      {/* Smaller font size */}
                      <Check className="w-3.5 h-3.5 text-green-500 mr-1.5 flex-shrink-0" />{" "}
                      {/* Smaller icon */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us Section (Call to Action/Benefits) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }} // Faster transition
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center shadow-lg" // Smaller padding, shadow, border radius
          >
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              {" "}
              {/* Smaller font size */}
              Elevate Your Business Connectivity
            </h2>
            <p className="text-base mb-8 max-w-2xl mx-auto opacity-90 sm:text-lg">
              {" "}
              {/* Smaller font size */}
              Our expert team customizes Wi-Fi solutions to meet the unique
              demands of your enterprise, ensuring performance, reliability, and
              security.
            </p>
            <Button
              className="bg-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-2.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" // Smaller padding, font size, shadow
            >
              Get a Free Consultation <ArrowRight className="ml-1.5 w-4 h-4" />{" "}
              {/* Smaller icon */}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default EnterpriseWiFi;
