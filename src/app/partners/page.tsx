// src/app/partners/page.tsx
"use client";
import { Variants } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // For optimized images
import { ArrowRight, Handshake, Briefcase } from "lucide-react"; // Icons for sections
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
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

const PartnersPage = () => {
  const partnersData = [
    {
      id: 1,
      name: "TRENDnet",
      logo: "/images/trendnet_logo.png", // Ensure this path is correct and logo exists
      description:
        "Delivering reliable and innovative networking solutions for homes and businesses worldwide.",
      href: "/partners/trendnet",
      color: "blue", // Accent color for card hover
    },
    {
      id: 2,
      name: "Cambium Networks",
      logo: "/images/cambium_logo.png", // Ensure this path is correct and logo exists
      description:
        "Connecting the unconnected with robust and scalable wireless broadband solutions.",
      href: "/partners/cambium",
      color: "purple", // Accent color for card hover
    },
    // Add more partners here if needed
    // {
    //   id: 3,
    //   name: "Another Partner",
    //   logo: "/images/another_partner_logo.png",
    //   description: "Brief description of what this partner offers.",
    //   href: "/partners/another-partner",
    //   color: "green",
    // },
  ];

  return (
    <>
      {/* <Navbar /> */}{" "}
      {/* Uncomment if you want Navbar inside this component */}
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
              Our Valued{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Technology Partners
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-md max-w-3xl mx-auto leading-relaxed opacity-90 sm:text-lg" // Smaller font size
            >
              We collaborate with industry leaders to bring you the highest
              quality and most innovative networking and communication
              solutions.
            </motion.p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="container mx-auto px-4 py-12">
          {" "}
          {/* Reduced padding */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8 sm:text-4xl" // Smaller font size
          >
            Meet Our Strategic Alliances
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" // Adjust grid columns as needed
          >
            {partnersData.map((partner) => (
              <motion.div
                key={partner.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center" // Smaller padding, less scale
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${partner.color}-50 to-${partner.color}-100 z-0 rounded-xl`}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  {partner.logo && (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      width={160} // Adjusted logo size
                      height={50} // Adjusted logo size
                      className="object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                      priority={false}
                    />
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors mb-2 sm:text-xl">
                    {" "}
                    {/* Smaller font size */}
                    {partner.name}
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-700 transition-colors mb-6 leading-relaxed flex-grow text-sm max-w-lg sm:text-base">
                    {" "}
                    {/* Smaller font size */}
                    {partner.description}
                  </p>
                  <Link href={partner.href} className="mt-auto">
                    <Button
                      size="sm" // Smaller button size
                      className={`bg-gradient-to-r from-${partner.color}-600 to-${partner.color}-800 hover:from-${partner.color}-700 hover:to-${partner.color}-900 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-sm group-hover:shadow-md transform group-hover:scale-105 transition-all duration-300`}
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

        {/* CTA Section for new partners or general inquiry */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
          {" "}
          {/* Reduced padding */}
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
              {" "}
              {/* Smaller font size */}
              Interested in Partnering with Us?
            </h2>
            <p className="text-lg mb-6 max-w-xl mx-auto sm:text-xl">
              {" "}
              {/* Smaller font size */}
              We are always looking for synergistic collaborations to expand our
              offerings and deliver more value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {" "}
              {/* Reduced gap */}
              <Link href="/contact-us">
                <Button
                  size="sm" // Smaller button size
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-sm" // Smaller padding and font size
                >
                  Become a Partner <Handshake className="ml-1 w-4 h-4" />{" "}
                  {/* Smaller icon */}
                </Button>
              </Link>
              <Link href="/about-us">
                <Button
                  size="sm" // Smaller button size
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2 text-sm" // Smaller padding and font size
                >
                  About Our Company <Briefcase className="ml-1 w-4 h-4" />{" "}
                  {/* Smaller icon */}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
