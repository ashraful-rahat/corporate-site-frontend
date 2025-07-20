"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Image from "next/image";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi/serviceApi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced stagger effect
      delayChildren: 0.2, // Reduced delay
    },
  },
};

const SolutionsPage = () => {
  const { data, isLoading, isError } = useGetAllServicesQuery(undefined);
  const solutions = data?.data || [];
 

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (isError) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Failed to load solutions.</div>;
  }

  const faqs = [
    {
      question: "What kind of businesses do you work with?",
      answer: "We work with businesses of all sizes, from startups to large enterprises, across various industries including tech, healthcare, finance, and retail. Our solutions are scalable and customizable to meet diverse needs.",
    },
    {
      question: "How long does it take to implement a solution?",
      answer: "Implementation timelines vary depending on the complexity and scope of the project. After an initial consultation and assessment, we provide a detailed project plan with estimated timelines. We prioritize efficient delivery without compromising quality.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-implementation support and maintenance packages to ensure your solutions run smoothly. This includes regular updates, troubleshooting, performance monitoring, and dedicated technical assistance.",
    },
 
    {
      question: "What makes your solutions different from competitors?",
      answer: "Our unique approach combines cutting-edge technology with deep industry expertise. We focus on delivering tailored solutions that not only solve immediate challenges but also drive long-term growth and innovation, backed by exceptional customer service.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-12">
        {" "}
        {/* Reduced padding */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10 sm:text-4xl" // Smaller font size
        >
          Explore Our Service Areas
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {solutions.map((solution: { _id: string; title: string; subtitle: string; image?: string }) => (
            <motion.div
              key={solution._id}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-xl border border-gray-200 transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col"
              style={{ minHeight: 400 }}
            >
              {/* Accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute top-0 left-0 z-20" />
              {/* Large image at the top */}
              {solution.image && typeof solution.image === 'string' && (
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
                    priority={true}
                  />
                </div>
              )}
              {/* Card content */}
              <div className="flex flex-col flex-1 items-center text-center px-6 py-6">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed flex-grow">
                  {solution.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10 sm:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>

 

      {/* General CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        {" "}
        {/* Reduced padding */}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
            {" "}
            {/* Smaller font size */}
            Ready to Transform Your Business?
          </h2>
          <p className="text-base mb-6 max-w-2xl mx-auto">
            {" "}
            {/* Smaller font size */}
            Contact our experts today to find the perfect technology solutions
            tailored to your unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {" "}
            {/* Reduced gap */}
            <Button
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 text-base" // Smaller padding and font size
            >
              Get a Free Consultation
            </Button>
            <Link href="/contact-us">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2.5 text-base" // Smaller padding and font size
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
