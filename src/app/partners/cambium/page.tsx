// src/app/partners/cambium/page.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // For optimized images
import { ArrowRight, Cloud, Radio, LayoutDashboard } from "lucide-react"; // Icons for sections
import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar"; // Uncomment if you want Navbar inside this component

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

const CambiumPartnerPage = () => {
  const cambiumSections = [
    {
      id: 1,
      title: "Cloud-Managed Wi-Fi Solutions",
      description:
        "Seamless and scalable Wi-Fi management with cnPilot and cnMaestro, offering robust cloud control.",
      image: "/images/cambium_cloud_wifi.png", // Replace with actual image path
      link: "/products/wifi-ap", // Link to Wi-Fi AP products
      icon: Cloud,
    },
    {
      id: 2,
      title: "Fixed Wireless Broadband (ePMP/PMP)",
      description:
        "High-performance wireless broadband and backhaul solutions for diverse connectivity needs.",
      image: "/images/cambium_radio_solution.png", // Replace with actual image path
      link: "/products/radio-device", // Link to Radio Device products
      icon: Radio,
    },
    {
      id: 3,
      title: "Cambium Network Overview",
      description:
        "Learn more about Cambium Networks' comprehensive portfolio and their vision for connected communities.",
      image: "/images/cambium_overview_roadshow.png", // Replace with actual image path
      link: "https://www.cambiumnetworks.com/", // Link to Cambium's official site or an internal overview
      icon: LayoutDashboard,
    },
  ];

  return (
    <>
      {/* <Navbar /> */}{" "}
      {/* Uncomment if you want Navbar inside this component */}
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-16 text-center">
          {" "}
          {/* Reduced padding */}
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl font-extrabold mb-3 leading-tight sm:text-5xl" // Smaller font size
            >
              Partnering with{" "}
              <span className="bg-gradient-to-r from-lime-300 to-white bg-clip-text text-transparent">
                Cambium Networks
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-md max-w-3xl mx-auto leading-relaxed opacity-90 sm:text-lg" // Smaller font size
            >
              As a proud partner of Cambium Networks, we deliver robust and
              scalable wireless broadband solutions to connect communities and
              businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6"
            >
              <Image
                src="/images/cambium_logo.png"
                alt="Cambium Networks Logo"
                width={160} // Adjusted logo size
                height={25} // Adjusted logo size
                className="mx-auto"
                priority={false}
              />{" "}
              {/* Add Cambium logo */}
            </motion.div>
          </div>
        </div>

        {/* Cambium Solutions Sections */}
        <div className="container mx-auto px-4 py-12">
          {" "}
          {/* Reduced padding */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8 sm:text-4xl" // Smaller font size
          >
            Explore Cambium&lsquo;s Wireless Innovations
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Reduced gap
          >
            {cambiumSections.map((section) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl p-5 shadow-md border border-gray-100 transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden text-center" // Smaller padding, less scale
              >
                {/* Visual Accent */}
                <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-green-600 transition-colors">
                    {" "}
                    {/* Smaller icon container */}
                    <section.icon className="w-7 h-7 text-white" />{" "}
                    {/* Smaller icon */}
                  </div>
                  {section.image && (
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={200} // Adjusted image size
                      height={150} // Adjusted image size
                      className="mb-3 object-contain rounded-lg"
                      priority={false}
                    />
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 sm:text-2xl">
                    {" "}
                    {/* Smaller font size */}
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-5 flex-grow text-sm sm:text-base">
                    {" "}
                    {/* Smaller font size */}
                    {section.description}
                  </p>
                  <Link href={section.link} className="mt-auto">
                    <Button
                      size="sm" // Smaller button size
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm transform group-hover:scale-105 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="ml-1 w-3 h-3" />{" "}
                      {/* Smaller icon */}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          {" "}
          {/* Reduced padding */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              {" "}
              {/* Smaller font size */}
              Need a Specific Cambium Solution?
            </h2>
            <p className="text-lg mb-6 max-w-xl mx-auto sm:text-xl">
              {" "}
              {/* Smaller font size */}
              Our wireless experts can help you design and deploy a robust
              network using Cambium&lsquo;s leading technology.
            </p>
            <Link href="/contact-us">
              <Button
                size="sm" // Smaller button size
                className="bg-green-600 hover:bg-green-700 px-6 py-2 text-sm" // Smaller padding and font size
              >
                Contact Our Wireless Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CambiumPartnerPage;
