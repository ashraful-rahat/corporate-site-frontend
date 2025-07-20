"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Wifi } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";

type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[];
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState<
    Record<string, boolean>
  >({});
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setOpenMobileSubMenus({});
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const firstFocusableElement = mobileMenuRef.current.querySelector(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [isMobileMenuOpen]);

  const handleToggleMobileSubMenu = (key: string) => {
    setOpenMobileSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSubMenus({});
  };

  const isActiveRoute = (href: string) => pathname === href;

  const renderMobileNavItems = (
    items: NavItem[],
    level = 0,
    parentKey = ""
  ) => (
    <motion.div
      className={`${level > 0 ? "ml-4 pl-4 border-l border-blue-100" : ""}`}
    >
      {items.map((item) => {
        const key = parentKey ? `${parentKey}-${item.name}` : item.name;
        const isOpen = openMobileSubMenus[key];
        const isActive = isActiveRoute(item.href);
        return (
          <motion.div key={key} className="mb-1">
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                className={`flex-1 px-4 py-2 rounded-xl text-left text-sm transition-all duration-300 transform hover:scale-[1.02] ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : level === 0
                    ? "text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
              {item.subItems && (
                <button
                  onClick={() => handleToggleMobileSubMenu(key)}
                  className="p-2 text-gray-500 hover:text-blue-600 transition duration-300 hover:bg-blue-50 rounded-full"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
            {item.subItems && (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-1"
                  >
                    {renderMobileNavItems(item.subItems, level + 1, key)}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100"
            : "bg-gradient-to-r from-blue-50/90 via-white/90 to-purple-50/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo2.png"
                alt="Janata Logo"
                width={140}
                height={48}
                className="object-contain h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex justify-between">
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActiveRoute(item.href)
                        ? "bg-[#164897] text-white shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.subItems && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.subItems && (
                    <motion.div className="absolute top-full left-0 mt-2 w-64 bg-white/95 rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="p-2">
                        {item.subItems.map((subItem) => (
                          <div
                            key={subItem.name}
                            className="relative group/sub"
                          >
                            <Link
                              href={subItem.href}
                              className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
                            >
                              <span>{subItem.name}</span>
                              {subItem.subItems && (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </Link>
                            {subItem.subItems && (
                              <motion.div className="absolute left-full top-0 ml-2 w-56 bg-white/95 rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                <div className="p-2">
                                  {subItem.subItems.map((nestedItem) => (
                                    <Link
                                      key={nestedItem.name}
                                      href={nestedItem.href}
                                      className="block w-full px-4 py-2 text-sm text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600"
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-white/95 backdrop-blur-md shadow-2xl"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <Link
                    href="/"
                    className="flex items-center space-x-3"
                    onClick={closeMobileMenu}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">
                        Janata
                      </div>
                      <div className="text-xs text-blue-600 font-semibold">
                        Telecommunication
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  {renderMobileNavItems(NAV_ITEMS)}
                </div>
                {/* Removed the Call Now link from here */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
