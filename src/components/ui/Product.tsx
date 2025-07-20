// src/components/FeaturedProducts.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // For optimized images
import { motion, Variants } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button"; // Assuming your button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"; // Assuming your card components
import { allProducts, Product } from "@/config/products"; // Import allProducts and Product interface

// Animation variants
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced movement
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Slightly faster transition
      ease: "easeOut",
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

const FeaturedProducts = () => {
  // Get a selection of featured products.
  // For demonstration, let's take the first 4 products.
  // In a real app, you might have a 'isFeatured: true' flag in your data
  const featuredProducts: Product[] = allProducts.slice(0, 4);

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {" "}
        {/* Smaller max-width */}
        {/* Section Heading and Subtitle */}
        <div className="text-center mb-10">
          {" "}
          {/* Reduced margin-bottom */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight" // Smaller font size
          >
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">
              Featured Products
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed" // Smaller font size, reduced max-width
          >
            Explore a curated selection of our most popular and high-performance
            networking solutions, hand-picked for their exceptional quality and
            reliability.
          </motion.p>
        </div>
        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" // Reduced gap
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.productId} variants={fadeInUp}>
              <Link
                href={`/products/${product.productId}`}
                className="group block h-full"
              >
                <Card className="h-full flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 transform hover:-translate-y-1 relative bg-white">
                  {" "}
                  {/* Smaller shadow, border, and transform */}
                  {/* Image Container with aspect ratio */}
                  <CardHeader className="p-0 flex justify-center items-center bg-gray-50 aspect-video rounded-t-xl overflow-hidden relative border-b border-gray-100">
                    {product.imageUrl && (
                      <Image
                        src={product.imageUrl}
                        alt={product.productName}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 group-hover:scale-105" // Reduced scale
                        priority={false}
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    {" "}
                    {/* Reduced padding */}
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2 leading-snug">
                        {" "}
                        {/* Smaller font size */}
                        {product.productName}
                      </CardTitle>
                      {product.brand && (
                        <p className="text-sm text-gray-600 mb-2">
                          {" "}
                          {/* Smaller font size */}
                          Brand: {product.brand}
                        </p>
                      )}
                      <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                        {" "}
                        {/* Smaller font size */}
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Button
                        size="sm" // Smaller button size
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105" // Smaller padding, font size
                      >
                        View Details <ArrowRight className="ml-2 w-4 h-4" />{" "}
                        {/* Smaller icon */}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Optional: Button to view all products */}
        {allProducts.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12" // Reduced margin-top
          >
            <Link href="/products">
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-6 py-3 text-base rounded-full shadow-md transform hover:scale-105 transition-all duration-300 font-semibold" // Smaller padding, font size, shadow
              >
                View All Products <Eye className="ml-2 w-4 h-4" />{" "}
                {/* Smaller icon */}
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
