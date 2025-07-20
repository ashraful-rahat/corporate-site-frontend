// src/components/Testimonials.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Quote, Star, UserCircle2 } from "lucide-react";

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
    transition: { staggerChildren: 0.15 },
  },
};

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        "Janata Communications transformed our network infrastructure. The speed and reliability are unmatched, and their support team is truly exceptional. Highly recommended!",
      clientName: "Md. Karim Rahman",
      clientTitle: "IT Director, Alpha Corp.",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "We needed a robust Wi-Fi solution for our large campus, and Janata delivered perfectly. The centralized management has simplified everything.",
      clientName: "Fatema Akter",
      clientTitle: "Operations Manager, EduTech University",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Their data center services gave us peace of mind. Our uptime has been flawless, and the security measures are top-notch. A reliable partner for critical data.",
      clientName: "Dr. Alim Hossain",
      clientTitle: "CEO, MediServe Solutions",
      rating: 5,
    },
  ];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-100 rounded-full text-indigo-700 text-xs font-medium mb-3"
          >
            <Quote className="w-3 h-3" />
            <span>What Our Clients Say</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
          >
            Trusted by{" "}
            <span className="text-[#1159ce] font-semibold">
              Leading Businesses
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm text-gray-600 max-w-xl mx-auto"
          >
            Hear directly from our satisfied customers about how our solutions
            have empowered their organizations.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-white rounded-lg p-5 border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm italic text-gray-800 mb-4 flex-grow leading-relaxed text-center">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="text-center pt-3 border-t border-gray-100">
                <UserCircle2 className="w-8 h-8 text-gray-500 mx-auto mb-1" />
                <p className="text-sm font-medium text-gray-900">
                  {testimonial.clientName}
                </p>
                <p className="text-xs text-gray-600">
                  {testimonial.clientTitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
