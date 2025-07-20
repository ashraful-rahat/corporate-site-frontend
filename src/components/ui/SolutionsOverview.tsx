// src/components/SolutionsOverview.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Network,
  Wifi,
  Globe,
  Server,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const SolutionsOverview = () => {
  const solutionsData = [
    {
      id: 1,
      icon: Network,
      title: "Structure Network",
      description:
        "Robust wired & wireless infrastructure for seamless operations.",
      href: "/solutions/structure-network",
      color: "blue",
    },
    {
      id: 2,
      icon: Wifi,
      title: "Enterprise Wi-Fi",
      description:
        "Secure, high-capacity wireless networks for large organizations.",
      href: "/solutions/enterprise-wi-fi",
      color: "purple",
    },
    {
      id: 3,
      icon: Globe,
      title: "Wireless Broadband",
      description:
        "High-speed internet access to remote areas & challenging locations.",
      href: "/solutions/wireless-broadband",
      color: "indigo",
    },
    {
      id: 4,
      icon: Server,
      title: "Data Center",
      description:
        "State-of-the-art facilities ensuring optimal performance & data security.",
      href: "/solutions/data-center",
      color: "green",
    },
    {
      id: 5,
      icon: Globe,
      title: "Security",
      description:
        "Comprehensive protection against cyber threats for your digital assets.",
      href: "/solutions/security",
      color: "emerald",
    },
    {
      id: 6,
      icon: Wifi,
      title: "CCTV Surveillance",
      description:
        "Intelligent video monitoring systems for enhanced property security.",
      href: "/solutions/cctv-surveillance",
      color: "rose",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full text-blue-700 text-xs font-medium mb-3"
          >
            <Lightbulb className="w-4 h-4" />
            <span>Our Core Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Tailored{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Your Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
          >
            From robust infrastructure to cutting-edge security, our services
            are designed to meet your every technological need.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutionsData.map((solution) => (
            <motion.div
              key={solution.id}
              variants={fadeInUp}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:border-blue-500 group transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient hover background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-${solution.color}-50 to-${solution.color}-100 z-0 rounded-xl`}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br from-${solution.color}-500 to-${solution.color}-700 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {solution.description}
                </p>
                <Link href={solution.href} className="mt-auto w-full">
                  {" "}
                  {/* Added w-full */}
                  <Button
                    size="sm"
                    // Changed button color to match FeaturedProducts' View Details button
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/solutions">
            <Button
              size="lg"
              variant="outline"
              className="border border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700 px-6 py-3 text-base rounded-full transition-all duration-300" // Adjusted padding and text size for consistency
            >
              Explore All Services <ArrowRight className="ml-2 w-4 h-4" />{" "}
              {/* Adjusted icon size */}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
