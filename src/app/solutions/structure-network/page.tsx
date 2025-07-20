// src/app/services/structure-network/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cable,
  LayoutDashboard,
  Target,
  Link as LinkIcon, // For "Scalability" benefit
  ShieldCheck, // For "Data Security" benefit
  Check,
  Zap, // Using Zap for "Speed & Reliability" as SaudiRiyal is not appropriate here. You can change it back to Speedometer if you re-add it.
} from "lucide-react";

const StructureNetwork = () => {
  const services = [
    {
      icon: Cable,
      title: "High-Quality Structured Cabling",
      description:
        "Reliable foundation for your data and communication needs, ensuring optimal network performance.",
      features: [
        "CAT6/6A/7 Cabling",
        "Fiber Optic Deployment",
        "Patch Panel Installation",
        "Cable Management Solutions",
      ],
      color: "blue", // Added color property for dynamic gradient
    },
    {
      icon: LayoutDashboard,
      title: "Custom Network Design & Implementation",
      description:
        "Expert planning and deployment for scalable, efficient, and robust network architectures.",
      features: [
        "Topology Planning",
        "LAN/WAN Optimization",
        "Network Device Configuration",
        "Router & Switch Setup",
      ],
      color: "purple", // Added color property
    },
    {
      icon: Target,
      title: "Network Auditing & Optimization",
      description:
        "Identify bottlenecks, enhance security, and optimize your existing network infrastructure for peak performance.",
      features: [
        "Performance Analysis",
        "Security Vulnerability Scan",
        "Traffic Management",
        "Proactive Maintenance",
      ],
      color: "indigo", // Added color property
    },
  ];

  return (
    <>
      {/* Navbar component is intentionally omitted as per your request */}
      <div className="min-h-screen bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">
        {" "}
        {/* Reduced shadow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-3 py-8 sm:px-4 sm:py-10" // Further reduced padding
        >
          <div className="text-center mb-10 sm:mb-12">
            {" "}
            {/* Reduced margin-bottom */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:text-4xl" // Smaller font size
            >
              Structure Network Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm text-gray-600 max-w-xl mx-auto sm:text-base" // Smaller font size
            >
              Design, implement, and maintain high-performance wired and
              wireless networks tailored to your business needs, ensuring
              seamless connectivity and operations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10 sm:gap-6 sm:mb-12">
            {" "}
            {/* Reduced gap and margin-bottom */}
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }} // Faster stagger
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5" // Smaller padding, shadow, transform, border radius
              >
                <div className="flex items-center mb-3">
                  {" "}
                  {/* Reduced margin-bottom */}
                  <div
                    className={`w-9 h-9 bg-gradient-to-r from-${service.color}-500 to-${service.color}-700 rounded-md flex items-center justify-center mr-2.5`} // Smaller icon container, reduced border radius and margin
                  >
                    <service.icon className="w-4.5 h-4.5 text-white" />{" "}
                    {/* Smaller icon */}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {" "}
                    {/* Smaller font size */}
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs mb-3">
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
                      {/* Smaller icon, reduced margin */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits Section - Made even smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }} // Faster transition
            className="bg-white rounded-xl p-8 shadow-md" // Smaller padding, shadow, border radius
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
              {" "}
              {/* Smaller font size */}
              Key Benefits of a Well-Structured Network
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {" "}
              {/* Reduced gap */}
              <div className="text-center">
                <LinkIcon className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Scalability for Future Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Easily expand your network as your business grows without
                  major overhauls.
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon, changed to Zap */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Enhanced Speed and Reliability
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Experience faster data transfer and more reliable connections
                  across all devices.
                </p>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Improved Data Security
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}A structured network provides a more
                  secure environment, protecting your valuable data.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default StructureNetwork;
