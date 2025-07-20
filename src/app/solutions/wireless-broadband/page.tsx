// src/app/services/wireless-broadband/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Link, // Used for Point-to-Point
  Home, // Used for Last-Mile
  Globe, // Used for Managed WISP
  Satellite, // Used for "Extended Coverage Areas" benefit
  Layers, // Used for "Rapid Deployment" benefit
  Zap, // Used for "Fast & Reliable Speeds" benefit (instead of Space)
  Check, // For features list
} from "lucide-react";

const WirelessBroadband = () => {
  const services = [
    {
      icon: Link,
      title: "Point-to-Point Wireless Links",
      description:
        "High-throughput wireless links for securely connecting remote offices or buildings over long distances.",
      features: [
        "Long Range Capability",
        "Low Latency",
        "High Capacity Backhaul",
        "Dedicated Bandwidth",
      ],
      color: "blue", // Added color property
    },
    {
      icon: Home,
      title: "Last-Mile Connectivity Solutions",
      description:
        "Bringing high-speed internet access directly to homes and businesses where wired solutions are impractical or unavailable.",
      features: [
        "Rural Internet Access",
        "Quick Deployment",
        "Cost-Effective Alternatives",
        "Reliable Connection",
      ],
      color: "purple", // Added color property
    },
    {
      icon: Globe,
      title: "Managed Wireless ISP Services",
      description:
        "Assisting Wireless Internet Service Providers (WISPs) with complete infrastructure setup and network optimization.",
      features: [
        "Network Design & Planning",
        "Equipment Supply & Installation",
        "Technical Support & Maintenance",
        "Scalable Solutions",
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
              High-Speed Wireless Broadband
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Smaller initial y
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} // Faster transition
              className="text-sm text-gray-600 max-w-xl mx-auto sm:text-base" // Smaller font size
            >
              Delivering fast and reliable internet access to remote areas,
              businesses, and homes through cutting-edge wireless technology,
              bridging the digital divide.
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

          {/* Why Choose Wireless Broadband Section - Made even smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }} // Faster transition
            className="bg-white rounded-xl p-8 shadow-md" // Smaller padding, shadow, border radius
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-3xl">
              {" "}
              {/* Smaller font size */}
              Why Choose Wireless Broadband?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {" "}
              {/* Reduced gap */}
              <div className="text-center">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon, used Zap for speed */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Fast & Reliable Speeds
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Enjoy high-speed internet access with consistent performance,
                  even in challenging locations.
                </p>
              </div>
              <div className="text-center">
                <Satellite className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">
                  {" "}
                  {/* Smaller font size */}
                  Extended Coverage Areas
                </h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Ideal for areas where traditional wired infrastructure is
                  expensive or impossible to deploy.
                </p>
              </div>
              <div className="text-center">
                <Layers className="w-12 h-12 text-blue-500 mx-auto mb-3" />{" "}
                {/* Smaller icon */}
                <h3 className="text-lg font-semibold mb-3">Rapid Deployment</h3>
                <p className="text-gray-600 text-sm">
                  {" "}
                  {/* Smaller font size */}
                  Get your network up and running quickly with minimal
                  disruption and infrastructure requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default WirelessBroadband;
