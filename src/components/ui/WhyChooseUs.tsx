// src/components/WhyChooseUs.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Users, Headset, Shield, MapPin, Award } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Users,
      title: "Expert & Certified Team",
      description:
        "Our highly skilled professionals are certified in the latest networking technologies.",
    },
    {
      icon: Headset,
      title: "24/7 Dedicated Support",
      description:
        "Receive round-the-clock technical assistance whenever you need it.",
    },
    {
      icon: Shield,
      title: "Unwavering Reliability",
      description:
        "Benefit from solutions built for maximum uptime and consistent performance.",
    },
    {
      icon: MapPin,
      title: "Local Presence & Fast Service",
      description:
        "As a local provider, we offer rapid response times and personalized service.",
    },
    {
      icon: Award,
      title: "Quality & Innovation",
      description:
        "We deliver cutting-edge solutions with a commitment to uncompromising quality.",
    },
  ];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 rounded-full text-blue-700 text-xs font-medium mb-3"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Core Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight"
          >
            Why Clients{" "}
            <span className="text-[#1159ce] font-semibold">Choose Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-600 max-w-xl mx-auto"
          >
            We go beyond technology to provide exceptional service and true
            partnership for your business.
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg p-4 border border-gray-200 group shadow-sm text-center hover:shadow-md hover:border-purple-500 transition-all duration-300 relative overflow-hidden transform hover:scale-[1.015]"
            >
              {/* Hover overlay background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <advantage.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {advantage.title}
                </h3>
                <p className="text-xs text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
