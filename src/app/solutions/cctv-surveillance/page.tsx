// src/app/services/cctv-surveillance/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, MonitorPlay, Shield, Eye, Video, Check } from "lucide-react"; // Import relevant icons

const CCTVSurveillance = () => {
  const services = [
    {
      icon: Camera,
      title: "HD & IP Camera Installation",
      description:
        "Installation of high-definition IP cameras for crystal-clear surveillance footage, ensuring every detail is captured.",
      features: [
        "4K & Full HD Cameras",
        "Night Vision Capabilities",
        "Weatherproof Designs",
        "Wide Angle Coverage",
      ],
      color: "blue", // Added color property for dynamic gradient
    },
    {
      icon: MonitorPlay,
      title: "Video Management Systems (VMS)",
      description:
        "Powerful software solutions for centralized recording, management, and analysis of all your video feeds.",
      features: [
        "Remote Viewing & Playback",
        "Intelligent Search & Analytics",
        "Scalable Storage Solutions",
        "Multi-site Integration",
      ],
      color: "purple", // Added color property
    },
    {
      icon: Shield, // Icon was Shield in your code, keeping it. Changed from SquareGantt in my previous template.
      title: "AI-Powered Video Analytics",
      description:
        "Leverage artificial intelligence for advanced security insights, automated alerts, and proactive threat detection.",
      features: [
        "Motion Detection Alerts",
        "Facial Recognition",
        "Perimeter Intrusion Detection",
        "Object Tracking",
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
          initial={{ opacity: 0, y: 15 }} // Smaller initial y
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} // Faster transition
          className="container mx-auto px-3 py-8 sm:px-4 sm:py-10" // Reduced padding
        >
          <div className="text-center mb-10 sm:mb-12">
            {" "}
            {/* Reduced margin-bottom */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }} // Faster transition
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:text-4xl" // Smaller font size
            >
              Intelligent CCTV Surveillance Systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} // Faster transition
              className="text-sm text-gray-600 max-w-xl mx-auto sm:text-base" // Smaller font size
            >
              Deploy cutting-edge CCTV solutions for enhanced security
              monitoring, advanced analytics, and remote access, ensuring peace
              of mind for your property.
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
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5" // Smaller padding, shadow, transform, border radius
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
                      <Check className="w-3 h-3 text-blue-500 mr-1 flex-shrink-0" />{" "}
                      {/* Smaller icon */}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Benefits of Modern CCTV Systems Section - Made even smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }} // Faster transition
            className="bg-white rounded-xl p-8 shadow-md" // Smaller padding, shadow, border radius
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
              {" "}
              {/* Smaller font size */}
              Benefits of Modern CCTV Systems
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {" "}
              {/* Reduced gap */}
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Effective Crime Deterrence
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Highly visible cameras act as a strong deterrent against
                  potential intruders and criminal activity.
                </p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  24/7 Remote Monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Access live and recorded footage from anywhere, anytime, via
                  your smartphone or computer.
                </p>
              </div>
              <div className="text-center">
                <Video className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  Reliable Evidence Collection
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  High-quality recordings provide crucial evidence for
                  investigations and insurance claims.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default CCTVSurveillance;
