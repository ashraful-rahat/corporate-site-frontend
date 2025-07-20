// src/app/solutions/page.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Network, // Structure Network
  Wifi, // Enterprise Wi-Fi
  Globe, // Wireless Broadband
  Server, // Data Center
  ShieldCheck, // Security
  Camera, // CCTV Surveillance
  ArrowRight, // For "Learn More" button
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

// Animation variants
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced y for smaller movement
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Slightly faster transition
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced stagger effect
      delayChildren: 0.2, // Reduced delay
    },
  },
};

const SolutionsPage = () => {
  const solutionsData = [
    {
      id: 1,
      icon: Network,
      title: "Structure Network",
      description:
        "Robust wired and wireless infrastructure for seamless business operations.",
      href: "/solutions/structure-network", // Link to the specific service page
      color: "blue",
    },
    {
      id: 2,
      icon: Wifi,
      title: "Enterprise Wi-Fi",
      description:
        "Secure, high-capacity wireless networks for large offices and campuses.",
      href: "/solutions/enterprise-wifi",
      color: "purple",
    },
    {
      id: 3,
      icon: Globe,
      title: "Wireless Broadband",
      description:
        "High-speed internet access to remote areas and challenging locations.",
      href: "/solutions/wireless-broadband",
      color: "indigo",
    },
    {
      id: 4,
      icon: Server,
      title: "Data Center",
      description:
        "State-of-the-art facilities ensuring optimal performance and data security.",
      href: "/solutions/data-center",
      color: "green",
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: "Security",
      description:
        "Comprehensive protection against cyber threats for your digital assets.",
      href: "/solutions/security",
      color: "emerald", // Changed from 'orange' for better color harmony
    },
    {
      id: 6,
      icon: Camera,
      title: "CCTV Surveillance",
      description:
        "Intelligent video monitoring systems for enhanced property security and insights.",
      href: "/solutions/cctv-surveillance",
      color: "rose", // Changed from 'red' for better color harmony
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16 text-center">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl font-extrabold mb-3 leading-tight sm:text-5xl" // Smaller font size
          >
            Our Advanced <br />{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
              Solutions for Your Business
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base max-w-3xl mx-auto leading-relaxed opacity-90 sm:text-lg" // Smaller font size
          >
            We provide tailored technology solutions that empower your
            organization with robust infrastructure, seamless connectivity, and
            uncompromised security.
          </motion.p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-12">
        {" "}
        {/* Reduced padding */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10 sm:text-4xl" // Smaller font size
        >
          Explore Our Service Areas
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" // Reduced gap
        >
          {solutionsData.map((solution) => (
            <motion.div
              key={solution.id}
              variants={fadeInUp}
              className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden" // Smaller padding, less shadow/transform
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${solution.color}-50 to-${solution.color}-100 z-0 rounded-xl`} // Smaller border radius
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300`} // Smaller icon container, reduced shadow
                >
                  <solution.icon className="w-6 h-6 text-white" />{" "}
                  {/* Smaller icon */}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors mb-2">
                  {" "}
                  {/* Smaller font size */}
                  {solution.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-700 transition-colors mb-5 leading-relaxed flex-grow text-sm">
                  {" "}
                  {/* Smaller font size, reduced margin-bottom */}
                  {solution.description}
                </p>
                <Link href={solution.href} className="mt-auto">
                  <Button
                    size="sm" // Smaller button size
                    className={`bg-gradient-to-r from-${solution.color}-600 to-${solution.color}-800 hover:from-${solution.color}-700 hover:to-${solution.color}-900 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm group-hover:shadow-md transform group-hover:scale-105 transition-all duration-300`} // Smaller padding, font size, shadow
                  >
                    Learn More <ArrowRight className="ml-1.5 w-3 h-3" />{" "}
                    {/* Smaller icon */}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* General CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
            {" "}
            {/* Smaller font size */}
            Ready to Transform Your Business?
          </h2>
          <p className="text-base mb-6 max-w-2xl mx-auto">
            {" "}
            {/* Smaller font size */}
            Contact our experts today to find the perfect technology solutions
            tailored to your unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {" "}
            {/* Reduced gap */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-base" // Smaller padding and font size
            >
              Get a Free Consultation
            </Button>
            <Link href="/contact-us">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2.5 text-base" // Smaller padding and font size
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
