"use client"; // Ensure this is a client component

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send, // New icon for the form
  Building, // For the hero section
} from "lucide-react"; // Lucide icons

const Contact = () => {
  // Animation variants, consistent with your About Us page
  const fadeInUp = {
    initial: { opacity: 0, y: 30 }, // Y অক্ষের গতিও কমানো হয়েছে
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }, // ট্রানজিশন সময়ও কমানো হয়েছে
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.05, // স্ট্যাগার সময় কমানো হয়েছে
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white" // py-20 থেকে py-16, px-6 থেকে px-4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }} // ট্রানজিশন কমানো
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-5xl mx-auto">
          {" "}
          {/* max-w-6xl থেকে max-w-5xl */}
          <motion.div
            className="flex justify-center mb-4" // mb-6 থেকে mb-4
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }} // ট্রানজিশন কমানো
          >
            <Building className="w-12 h-12 text-blue-200" />{" "}
            {/* w-16 h-16 থেকে w-12 h-12 */}
          </motion.div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4" // text-5xl md:text-6xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed" // text-xl md:text-2xl থেকে text-base md:text-lg, max-w-4xl থেকে max-w-3xl
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Have a question, feedback, or need assistance? Reach out to us, and
            our dedicated team will get back to you promptly.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section
        className="py-12 px-4 bg-gray-50" // py-16 থেকে py-12, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-5xl mx-auto text-center">
          {" "}
          {/* max-w-6xl থেকে max-w-5xl */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" // text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4
            variants={fadeInUp}
          >
            Get in Touch
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>{" "}
          {/* w-24 থেকে w-20, mb-12 থেকে mb-8 */}
          <motion.div
            className="grid md:grid-cols-3 gap-6" // gap-8 থেকে gap-6
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" // p-8 থেকে p-6, rounded-2xl থেকে rounded-xl, shadow-lg থেকে shadow-md
              variants={fadeInUp}
            >
              <Phone className="w-10 h-10 text-blue-600 mb-3" />{" "}
              {/* w-12 h-12 থেকে w-10 h-10, mb-4 থেকে mb-3 */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {" "}
                {/* text-xl থেকে text-lg, mb-2 থেকে mb-1 */}
                Phone
              </h3>
              <p className="text-sm text-gray-600">+880 1234 567890</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
              <p className="text-sm text-gray-600">+880 9876 543210</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" // p-8 থেকে p-6, rounded-2xl থেকে rounded-xl, shadow-lg থেকে shadow-md
              variants={fadeInUp}
            >
              <Mail className="w-10 h-10 text-blue-600 mb-3" />{" "}
              {/* w-12 h-12 থেকে w-10 h-10, mb-4 থেকে mb-3 */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {" "}
                {/* text-xl থেকে text-lg, mb-2 থেকে mb-1 */}
                Email
              </h3>
              <p className="text-sm text-gray-600">info@jctbd.com</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
              <p className="text-sm text-gray-600">support@jctbd.com</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" // p-8 থেকে p-6, rounded-2xl থেকে rounded-xl, shadow-lg থেকে shadow-md
              variants={fadeInUp}
            >
              <MapPin className="w-10 h-10 text-blue-600 mb-3" />{" "}
              {/* w-12 h-12 থেকে w-10 h-10, mb-4 থেকে mb-3 */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {" "}
                {/* text-xl থেকে text-lg, mb-2 থেকে mb-1 */}
                Address
              </h3>
              <p className="text-sm text-gray-600">123, Main Street</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
              <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-16 px-4 bg-white" // py-20 থেকে py-16, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-3xl mx-auto">
          {" "}
          {/* max-w-4xl থেকে max-w-3xl */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center" // text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4
            variants={fadeInUp}
          >
            Send Us a Message
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>{" "}
          {/* w-24 থেকে w-20, mb-12 থেকে mb-8 */}
          <motion.form
            className="space-y-4 bg-gray-50 p-8 rounded-xl shadow-lg" // space-y-6 থেকে space-y-4, p-10 থেকে p-8, rounded-2xl থেকে rounded-xl, shadow-xl থেকে shadow-lg
            variants={fadeInUp}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-gray-700 mb-1.5" // text-lg থেকে text-base, mb-2 থেকে mb-1.5
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 sm:text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" // px-4 py-3 sm:text-lg থেকে px-3 py-2 sm:text-base
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-1.5" // text-lg থেকে text-base, mb-2 থেকে mb-1.5
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 sm:text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" // px-4 py-3 sm:text-lg থেকে px-3 py-2 sm:text-base
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-base font-medium text-gray-700 mb-1.5" // text-lg থেকে text-base, mb-2 থেকে mb-1.5
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-3 py-2 sm:text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" // px-4 py-3 sm:text-lg থেকে px-3 py-2 sm:text-base
                placeholder="Subject of your message"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium text-gray-700 mb-1.5" // text-lg থেকে text-base, mb-2 থেকে mb-1.5
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4} // rows={5} থেকে rows={4}
                className="mt-1 block w-full px-3 py-2 sm:text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" // px-4 py-3 sm:text-lg থেকে px-3 py-2 sm:text-base
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // px-6 py-3 text-lg থেকে px-5 py-2.5 text-base
              whileHover={{ scale: 1.02 }} // scale: 1.02 থেকে 1.02 (এইটা আগের মতোই রাখা হয়েছে, চাইলে আরও ছোট করা যায়)
              whileTap={{ scale: 0.98 }} // scale: 0.98 থেকে 0.98 (এইটা আগের মতোই রাখা হয়েছে, চাইলে আরও ছোট করা যায়)
            >
              <Send className="w-4 h-4 mr-1.5" />{" "}
              {/* w-5 h-5 mr-2 থেকে w-4 h-4 mr-1.5 */}
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Map Section (Example - you'll integrate a real map like Google Maps/Mapbox) */}
      <motion.section
        className="py-16 px-4 bg-gray-100" // py-20 থেকে py-16, px-6 থেকে px-4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }} // ট্রানজিশন কমানো
      >
        <div className="max-w-5xl mx-auto">
          {" "}
          {/* max-w-6xl থেকে max-w-5xl */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center" // text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4
            variants={fadeInUp}
          >
            Our Location
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>{" "}
          {/* w-24 থেকে w-20, mb-12 থেকে mb-8 */}
          <motion.div
            className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg border border-gray-200" // rounded-2xl shadow-xl থেকে rounded-xl shadow-lg
            variants={fadeInUp}
          >
            {/* Embed your interactive map code here (e.g., Google Maps iframe) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00972688005!2d90.33660144589255!3d23.780820436440597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087021f11%3A0xc71f53cd2512a297!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" // Example Google Maps embed URL for Dhaka
              width="100%"
              height="350" // height="450" থেকে height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Map"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action - Re-used from About Us style */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white" // py-20 থেকে py-16, px-6 থেকে px-4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }} // ট্রানজিশন কমানো
      >
        <div className="max-w-3xl mx-auto text-center">
          {" "}
          {/* max-w-4xl থেকে max-w-3xl */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }} // ট্রানজিশন কমানো
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6" // w-20 h-20 থেকে w-16 h-16, mb-8 থেকে mb-6
          >
            <Send className="w-8 h-8 text-blue-200" />{" "}
            {/* w-10 h-10 থেকে w-8 h-8 */}
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6" // text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-8 থেকে mb-6
            initial={{ opacity: 0, y: 20 }} // Y অক্ষের গতিও কমানো হয়েছে
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to Talk?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-blue-100" // text-xl থেকে text-lg, mb-10 থেকে mb-8
            initial={{ opacity: 0, y: 20 }} // Y অক্ষের গতিও কমানো হয়েছে
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Tell us your needs, and we&#39;ll help you find the perfect business
            solution.
          </motion.p>
          <motion.a
            href="mailto:info@jctbd.com" // Link for sending an email
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-50 transition-colors duration-300 shadow-md" // px-8 py-4 text-lg থেকে px-6 py-3 text-base, shadow-lg থেকে shadow-md
            initial={{ opacity: 0, y: 20 }} // Y অক্ষের গতিও কমানো হয়েছে
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }} // scale: 1.05 থেকে 1.02
            whileTap={{ scale: 0.98 }} // scale: 0.95 থেকে 0.98
          >
            Send an Email
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
