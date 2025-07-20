// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // For your logo
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  X, // Formerly Twitter
  ChevronRight, // For list item arrows
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "News & Blog", href: "/news" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const productCategories = [
    { name: "Routers", href: "/products/routers" },
    { name: "Switches", href: "/products/switches" },
    { name: "Wi-Fi AP", href: "/products/wifi-ap" },
    { name: "Radio Device", href: "/products/radio-device" },
    { name: "Accessories", href: "/products/accessories" },
    { name: "PoE Injector", href: "/products/poe-injector" },
    { name: "SFP Module", href: "/products/sfp-module" },
    { name: "Network Rack", href: "/products/network-rack" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/yourpage" }, // Replace with actual links
    { icon: Linkedin, href: "https://linkedin.com/company/yourcompany" }, // Replace with actual links
    { icon: X, href: "https://x.com/youraccount" }, // Replace with actual links
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A192F] text-gray-200 py-16 border-t border-blue-950 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info with Logo */}
          <div className="flex flex-col items-start md:col-span-1">
            <Link
              href="/"
              className="relative flex-shrink-0 flex items-center h-full mb-6"
              style={{ width: "220px", height: "80px" }}
            >
              <Image
                src="/images/main.png"
                alt="Janata Logo"
                fill
                className="object-cover rounded-lg"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Janata Communications & Technologies, an IT-based company, started
              its journey in 2018 with a mission to provide the best services
              and authentic goods to its clients, helping them achieve their
              strategic goals by adding value.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-transform duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-xl text-white mb-6 border-b-2 border-blue-500 pb-3 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-xl text-white mb-6 border-b-2 border-blue-500 pb-3 inline-block">
              Product Categories
            </h3>
            <ul className="space-y-4">
              {productCategories.map((category, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-base"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-xl text-white mb-6 border-b-2 border-blue-500 pb-3 inline-block">
              Contact Us
            </h3>
            <address className="not-italic space-y-4 text-base text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <p>
                  House #62 (2nd Floor), West Merul, <br /> Badda, Dhaka-1212,
                  Bangladesh
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <p>+880193-2710127</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <p>info@janatatechnologies.com</p>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Codexaa limited All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
