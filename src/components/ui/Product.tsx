// src/components/FeaturedProducts.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // For optimized images
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button"; // Assuming your button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"; // Assuming your card components
import { useGetProductsQuery } from "@/redux/api/productApi";
import { IProduct } from "@/types/product";

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
  // Fetch products dynamically
  const { data: productsData, isLoading, error } = useGetProductsQuery();

  // Handle loading and error states
  if (isLoading) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4  text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto my-20"></div>
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4  text-center">
          <div className="text-red-500 py-20">Failed to load featured products.</div>
        </div>
      </section>
    );
  }

  // Extract products array
  const products = (productsData && 'data' in productsData && Array.isArray(productsData.data))
    ? productsData.data
    : [];


    console.log(products)

  // Filter for featured products (isFeatured === true)
  const featuredProducts = products.filter((product: IProduct) => product.isFeatured).slice(0, 4);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 ">
        {/* Section Heading and Subtitle */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight leading-tight"
          >
            Our <span className="text-[#1159ce] font-semibold">Featured Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            Explore a curated selection of our most popular and high-performance networking solutions, hand-picked for their exceptional quality and reliability.
          </motion.p>
        </div>
        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product: IProduct & { _id: string }) => (
            <motion.div key={product._id} variants={fadeInUp}>
              <Link
                href={`/products/${product._id}`}
                className="group block h-full"
              >
                <Card className="h-full flex py-0 flex-col rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 transform hover:-translate-y-1 relative bg-white">
                  {/* Image Container with aspect ratio */}
                  <CardHeader className="p-0 flex justify-center items-center bg-gray-50 aspect-video rounded-t-xl overflow-hidden relative border-b border-gray-100">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.metaImageAlt || product.title}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 group-hover:scale-105"
                        priority={false}
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-2 leading-snug">
                        {product.title}
                      </CardTitle>
                      {product.brand && (
                        <p className="text-sm text-gray-600 mb-2">
                          Brand: {product.brand}
                        </p>
                      )}
                      <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Button
                        size="sm"
                        className="w-full bg-janataBlue  bg-[#123a7a] hover:bg-[#123a7a]/90 text-white py-2 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                      >
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        {/* Optional: Button to view all products */}
        {products.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border border-blue-500 text-blue-600 hover:bg-blue-700 hover:text-blue-700 px-6 py-3 text-base rounded-full transition-all duration-300"
              >
                View all Products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;