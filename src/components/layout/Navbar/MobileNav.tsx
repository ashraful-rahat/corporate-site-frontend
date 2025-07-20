// navbarMobile.tsx (উদাহরণস্বরূপ)
import React, { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/config/navigation";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু খোলা আছে কিনা তা ট্র্যাক করে

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* লোগো */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          YOUR LOGO
        </Link>

        {/* মোবাইল মেনু টগল বাটন */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none focus:text-blue-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* মোবাইল মেনু কন্টেন্ট - স্লাইড-ইন অ্যানিমেশন */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none focus:text-blue-600 float-right mb-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="pt-12">
            {" "}
            {/* Close বাটনের জন্য কিছুটা প্যাডিং */}
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <ul className="ml-4 mt-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          onClick={toggleMenu}
                        >
                          {subItem.name}
                        </Link>
                        {/* মোবাইল মেনুতে নেস্টেড সাবমেনু সাধারণত টগলযোগ্য (একর্ডিয়ন) হয় */}
                        {subItem.subItems && (
                          <ul className="ml-4 mt-1">
                            {subItem.subItems.map((nestedSubItem) => (
                              <li key={nestedSubItem.name}>
                                <Link
                                  href={nestedSubItem.href}
                                  className="block px-4 py-2 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                                  onClick={toggleMenu}
                                >
                                  {nestedSubItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* ওভারলে যখন মেনু খোলা থাকে */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default NavbarMobile;
