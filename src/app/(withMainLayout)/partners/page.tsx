"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const partnersData = [
  {
    id: 1,
    name: "TRENDnet",
    logo: "/images/trendd.png",
    description:
      "Delivering reliable and innovative networking solutions for homes and businesses worldwide.",
    href: "https://www.trendnet.com/home",
    bgClass: "bg-gray-50",
    external: true,
  },
  {
    id: 2,
    name: "Cambium Networks",
    logo: "/images/cambium.svg",
    description:
      "Connecting the unconnected with robust and scalable wireless broadband solutions.",
    href: "https://www.cambiumnetworks.com/",
    bgClass: "bg-gray-50",
    external: true,
  },
];

const PartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Handshake className="w-12 h-12 text-[#164897]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Valued Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional
            networking solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {partnersData.map((partner) => (
            <motion.div
              key={partner.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`rounded-xl shadow-md overflow-hidden ${partner.bgClass}`}
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-32 mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="object-contain max-h-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
                  {partner.name}
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  {partner.description}
                </p>
                <div className="flex justify-center">
                  {partner.external ? (
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-[#164897] hover:bg-[#123b80] text-white">
                        Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={partner.href}>
                      <Button className="bg-[#164897] hover:bg-[#123b80] text-white">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 bg-white rounded-xl shadow-md p-8 text-center"
        >
          <Briefcase className="w-12 h-12 text-[#164897] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to become a partner?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            We&apos;re always looking to expand our network of technology
            partners.
          </p>
          <Button className="bg-[#164897] hover:bg-[#123b80] text-white">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PartnersPage;
