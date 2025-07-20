// src/app/services/data-center/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HardDrive,
  Server,
  ShieldAlert,
  Zap, // Used for "Guaranteed Uptime" benefit
  Thermometer, // Used for "Advanced Security & Compliance" benefit
  Database, // Used for "Optimized Performance & Efficiency" benefit
  Check, // Added Check icon for features list
} from "lucide-react";

// Assuming you have a Button component (though it's not used in this specific file, it's good practice to keep the comment if it's generally available)

const DataCenter = () => {
  const services = [
    {
      icon: HardDrive,
      title: "Data Center Design & Build",
      description:
        "From conceptualization to physical construction, we build robust data center infrastructures tailored to your needs.",
      features: [
        "Power & Cooling Systems",
        "Rack & Cabling Solutions",
        "Environmental Monitoring",
        "Modular Design",
      ],
      color: "blue", // Added color property for consistent gradient application
    },
    {
      icon: Server,
      title: "Network & Connectivity Solutions",
      description:
        "High-speed and ultra-low latency networking within the data center, ensuring seamless data flow.",
      features: [
        "Spine-Leaf Architecture",
        "10/40/100G Ethernet",
        "Load Balancing & Traffic Management",
        "Interconnectivity",
      ],
      color: "purple", // Added color property
    },
    {
      icon: ShieldAlert,
      title: "Security & Disaster Recovery",
      description:
        "Safeguard your data with advanced security measures and comprehensive business continuity plans.",
      features: [
        "Firewall & IDS/IPS",
        "Backup & Recovery Solutions",
        "Redundancy Planning",
        "Physical Security",
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
              State-of-the-Art{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Data Center Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} // Faster transition
              className="text-sm text-gray-700 leading-relaxed sm:text-base" // Smaller font size
            >
              Comprehensive data center services, including design, setup, and
              maintenance, ensuring optimal performance, security, and uptime
              for your critical IT infrastructure.
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

          {/* Advantages Section - Made even smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }} // Faster transition
            className="bg-white rounded-xl p-8 shadow-md" // Smaller padding, shadow, border radius
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
              {" "}
              {/* Smaller font size */}
              Advantages of Our Data Center Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {" "}
              {/* Reduced gap */}
              <div className="text-center">
                <Zap className="w-12 h-12 text-blue-300 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Guaranteed Uptime
                </h3>
                <p className="text-gray-100 text-sm opacity-90">
                  {" "}
                  {/* Smaller font size */}
                  Ensure continuous operation of your critical applications and
                  services with high availability.
                </p>
              </div>
              <div className="text-center">
                <Thermometer className="w-12 h-12 text-blue-300 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Advanced Security & Compliance
                </h3>
                <p className="text-gray-100 text-sm opacity-90">
                  {" "}
                  {/* Smaller font size */}
                  Protect your valuable data with multi-layered security
                  protocols and adhere to industry standards.
                </p>
              </div>
              <div className="text-center">
                <Database className="w-12 h-12 text-blue-300 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  Optimized Performance & Efficiency
                </h3>
                <p className="text-gray-100 text-sm opacity-90">
                  {" "}
                  {/* Smaller font size */}
                  Benefit from high-performance infrastructure and
                  energy-efficient operations, reducing costs.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default DataCenter;
