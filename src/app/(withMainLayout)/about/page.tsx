"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Award,
  Cog,
  BookOpen,
  TrendingUp,
  Shield,
  Globe,
  Settings,
  HeadphonesIcon,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 }, // Y অক্ষের গতিও কমানো হয়েছে
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }, // ট্রানজিশন সময়ও কমানো হয়েছে
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 }, // X অক্ষের গতিও কমানো হয়েছে
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 }, // X অক্ষের গতিও কমানো হয়েছে
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.05, // স্ট্যাগার সময় কমানো হয়েছে
      },
    },
  };

  const services = [
    {
      icon: Cog,
      title: "Project Management",
      description:
        "Design, Development and Implementation of comprehensive IT solutions",
    },
    {
      icon: TrendingUp,
      title: "Business Process Re-engineering",
      description:
        "Optimizing business processes for enhanced productivity and efficiency",
    },
    {
      icon: BookOpen,
      title: "Transfer of Technology",
      description: "Knowledge transfer and technology implementation services",
    },
    {
      icon: Users,
      title: "Training & Competence Development",
      description:
        "Professional training programs to enhance team capabilities",
    },
  ];

  const stats = [
    {
      number: "2018",
      label: "Established",
      description: "Years of Experience",
    },
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successful Implementations",
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Satisfied Customers",
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock Service",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Reliable Solutions",
      description:
        "Proven track record of delivering secure and dependable IT infrastructure solutions for businesses across Bangladesh.",
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description:
        "Comprehensive service coverage across Bangladesh with local expertise and global technology standards.",
    },
    {
      icon: Settings,
      title: "Custom Integration",
      description:
        "Tailored technology solutions that seamlessly integrate with your existing business processes and requirements.",
    },
    {
      icon: HeadphonesIcon,
      title: "Expert Support",
      description:
        "Dedicated technical support team providing ongoing maintenance and troubleshooting services.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      {/* Company Overview with Image */}
      <motion.section
        className="py-16 px-4 bg-white" // py-20 থেকে py-16, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* max-w-7xl থেকে max-w-6xl */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {" "}
            {/* gap-16 থেকে gap-12 */}
            <motion.div variants={fadeInLeft}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Technology Solutions"
                  className="w-full h-72 object-cover rounded-xl shadow-xl" // h-96 থেকে h-72, rounded-2xl থেকে rounded-xl, shadow-2xl থেকে shadow-xl
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>{" "}
                {/* rounded-2xl থেকে rounded-xl */}
              </div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {" "}
                {/* text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4 */}
                What We Are
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mb-6"></div>{" "}
              {/* w-24 থেকে w-20, mb-8 থেকে mb-6 */}
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {" "}
                {/* text-lg থেকে text-base, mb-6 থেকে mb-4 */}
                Janata Communications & Technologies has expertise in Wireless &
                Wi-Fi solutions for commercial and government network operators
                as well as broadband service providers.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {" "}
                {/* text-lg থেকে text-base, mb-8 থেকে mb-6 */}
                This makes JCT a one-stop solution center for design,
                implementation and management of networking technology projects
                for customers in Bangladesh.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {" "}
                {/* gap-4 থেকে gap-3 */}
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  {" "}
                  {/* p-4 থেকে p-3, rounded-xl থেকে rounded-lg */}
                  <div className="text-xl font-bold text-blue-600 mb-1">
                    {" "}
                    {/* text-2xl থেকে text-xl */}
                    6+
                  </div>
                  <div className="text-xs text-gray-600">
                    Years Experience
                  </div>{" "}
                  {/* text-sm থেকে text-xs */}
                </div>
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  {" "}
                  {/* p-4 থেকে p-3, rounded-xl থেকে rounded-lg */}
                  <div className="text-xl font-bold text-indigo-600 mb-1">
                    {" "}
                    {/* text-2xl থেকে text-xl */}
                    100%
                  </div>
                  <div className="text-xs text-gray-600">
                    {" "}
                    {/* text-sm থেকে text-xs */}
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-12 px-4 bg-gray-50" // py-16 থেকে py-12, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-5xl mx-auto">
          {" "}
          {/* max-w-6xl থেকে max-w-5xl */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" // gap-8 থেকে gap-6
            variants={staggerChildren}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" // p-8 থেকে p-6, rounded-2xl থেকে rounded-xl, shadow-lg থেকে shadow-md, hover:shadow-xl থেকে hover:shadow-lg
                variants={fadeInUp}
                whileHover={{ y: -3 }} // y: -5 থেকে y: -3
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {" "}
                  {/* text-4xl থেকে text-3xl, mb-2 থেকে mb-1 */}
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {" "}
                  {/* text-xl থেকে text-lg */}
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">{stat.description}</div>{" "}
                {/* text-sm থেকে text-xs */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision with Images */}
      <motion.section
        className="py-16 px-4 bg-white" // py-20 থেকে py-16, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* max-w-7xl থেকে max-w-6xl */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            {" "}
            {/* mb-16 থেকে mb-12 */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {" "}
              {/* text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4 */}
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>{" "}
            {/* w-24 থেকে w-20 */}
          </motion.div>
          {/* Mission */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {" "}
            {/* gap-16 থেকে gap-12, mb-20 থেকে mb-16 */}
            <motion.div variants={fadeInLeft}>
              <Card className="h-full border-0 shadow-xl bg-white overflow-hidden">
                {" "}
                {/* shadow-2xl থেকে shadow-xl */}
                <CardContent className="p-6">
                  {" "}
                  {/* p-8 থেকে p-6 */}
                  <div className="flex items-center mb-4">
                    {" "}
                    {/* mb-6 থেকে mb-4 */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      {" "}
                      {/* w-16 h-16 থেকে w-12 h-12, rounded-2xl থেকে rounded-lg, mr-4 থেকে mr-3 */}
                      <Target className="w-6 h-6 text-white" />{" "}
                      {/* w-8 h-8 থেকে w-6 h-6 */}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {" "}
                      {/* text-3xl থেকে text-2xl */}
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {" "}
                    {/* text-lg থেকে text-base */}
                    To empower our clients by delivering exceptional service and
                    innovative technology solutions that add value to their
                    strategic goals. Through a commitment to quality and
                    integrity, we provide authentic products and specialized
                    expertise in wireless and Wi-Fi solutions, ensuring our
                    clients achieve sustained growth and operational efficiency.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team Collaboration"
                className="w-full h-72 object-cover rounded-xl shadow-xl" // h-96 থেকে h-72, rounded-2xl থেকে rounded-xl, shadow-2xl থেকে shadow-xl
              />
            </motion.div>
          </div>
          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {" "}
            {/* gap-16 থেকে gap-12 */}
            <motion.div variants={fadeInLeft} className="lg:order-2">
              <Card className="h-full border-0 shadow-xl bg-white overflow-hidden">
                {" "}
                {/* shadow-2xl থেকে shadow-xl */}
                <CardContent className="p-6">
                  {" "}
                  {/* p-8 থেকে p-6 */}
                  <div className="flex items-center mb-4">
                    {" "}
                    {/* mb-6 থেকে mb-4 */}
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                      {" "}
                      {/* w-16 h-16 থেকে w-12 h-12, rounded-2xl থেকে rounded-lg, mr-4 থেকে mr-3 */}
                      <Eye className="w-6 h-6 text-white" />{" "}
                      {/* w-8 h-8 থেকে w-6 h-6 */}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {" "}
                      {/* text-3xl থেকে text-2xl */}
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {" "}
                    {/* text-lg থেকে text-base */}
                    To be the leading one-stop solution center for networking
                    technology projects in Bangladesh, recognized for our
                    dedication to excellence, innovation, and impactful
                    technology solutions that shape the future of connectivity
                    for commercial, government, and broadband service providers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInRight} className="lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Technology Vision"
                className="w-full h-72 object-cover rounded-xl shadow-xl" // h-96 থেকে h-72, rounded-2xl থেকে rounded-xl, shadow-2xl থেকে shadow-xl
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 px-4 bg-gray-50" // py-20 থেকে py-16, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-5xl mx-auto">
          {" "}
          {/* max-w-6xl থেকে max-w-5xl */}
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            {" "}
            {/* mb-16 থেকে mb-12 */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {" "}
              {/* text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-6 থেকে mb-4 */}
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>{" "}
            {/* w-24 থেকে w-20, mb-8 থেকে mb-6 */}
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              {" "}
              {/* text-xl থেকে text-base, max-w-3xl থেকে max-w-2xl */}
              We offer a broad array of services to help businesses increase
              productivity and achieve their strategic goals.
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" // gap-8 থেকে gap-6
            variants={staggerChildren}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -5, // y: -10 থেকে y: -5
                  boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.2)", // শ্যাডো কমানো হয়েছে
                }}
                transition={{ type: "spring", stiffness: 250 }} // স্টিফনেস কমানো
              >
                <Card className="h-full border-0 shadow-md bg-white text-center group">
                  {" "}
                  {/* shadow-xl থেকে shadow-md */}
                  <CardContent className="p-6">
                    {" "}
                    {/* p-8 থেকে p-6 */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      {" "}
                      {/* w-16 h-16 থেকে w-12 h-12, rounded-2xl থেকে rounded-lg, mb-6 থেকে mb-4, scale-110 থেকে scale-105 */}
                      <service.icon className="w-6 h-6 text-white" />{" "}
                      {/* w-8 h-8 থেকে w-6 h-6 */}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {" "}
                      {/* text-xl থেকে text-lg, mb-4 থেকে mb-3 */}
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {" "}
                      {/* text-gray-600 থেকে text-sm */}
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section with Image */}
      <motion.section
        className="py-16 px-4 bg-white" // py-20 থেকে py-16, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* max-w-7xl থেকে max-w-6xl */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {" "}
            {/* gap-16 থেকে gap-12 */}
            <motion.div variants={fadeInLeft}>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Technology Infrastructure"
                className="w-full h-72 object-cover rounded-xl shadow-xl" // h-96 থেকে h-72, rounded-2xl থেকে rounded-xl, shadow-2xl থেকে shadow-xl
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {" "}
                {/* text-4xl থেকে text-3xl, mb-8 থেকে mb-6 */}
                Why Choose JCT?
              </h2>
              <div className="space-y-4">
                {" "}
                {/* space-y-6 থেকে space-y-4 */}
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300" // space-x-4 থেকে space-x-3, p-4 থেকে p-3, rounded-xl থেকে rounded-lg
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }} // ডিলে কমানো হয়েছে
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {" "}
                      {/* w-12 h-12 থেকে w-10 h-10, rounded-xl থেকে rounded-lg */}
                      <feature.icon className="w-5 h-5 text-white" />{" "}
                      {/* w-6 h-6 থেকে w-5 h-5 */}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {" "}
                        {/* text-xl থেকে text-lg, mb-2 থেকে mb-1 */}
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {" "}
                        {/* text-gray-600 থেকে text-sm */}
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="py-12 px-4 bg-gray-50" // py-16 থেকে py-12, px-6 থেকে px-4
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="max-w-3xl mx-auto text-center">
          {" "}
          {/* max-w-4xl থেকে max-w-3xl */}
          <motion.h2
            className="text-2xl font-bold mb-6 text-gray-900" // text-3xl থেকে text-2xl, mb-8 থেকে mb-6
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6" // gap-8 থেকে gap-6
            variants={staggerChildren}
          >
            <motion.div
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md" // p-6 থেকে p-4, rounded-xl থেকে rounded-lg, shadow-lg থেকে shadow-md
              variants={fadeInUp}
            >
              <Phone className="w-10 h-10 text-blue-600 mb-3" />{" "}
              {/* w-12 h-12 থেকে w-10 h-10, mb-4 থেকে mb-3 */}
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {" "}
                {/* text-lg থেকে text-base, mb-2 থেকে mb-1 */}
                Call Us
              </h3>
              <p className="text-sm text-gray-600">+880 1234 567890</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md" // p-6 থেকে p-4, rounded-xl থেকে rounded-lg, shadow-lg থেকে shadow-md
              variants={fadeInUp}
            >
              <Mail className="w-10 h-10 text-blue-600 mb-3" />{" "}
              {/* w-12 h-12 থেকে w-10 h-10, mb-4 থেকে mb-3 */}
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {" "}
                {/* text-lg থেকে text-base, mb-2 থেকে mb-1 */}
                Email Us
              </h3>
              <p className="text-sm text-gray-600">info@jctbd.com</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md" // p-6 থেকে p-4, rounded-xl থেকে rounded-lg, shadow-lg থেকে shadow-md
              variants={fadeInUp}
            >
              <MapPin className="w-10 h-10 text-blue-600 mb-3" />{" "}
              {/* w-12 h-12 থেকে w-10 h-10, mb-4 থেকে mb-3 */}
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {" "}
                {/* text-lg থেকে text-base, mb-2 থেকে mb-1 */}
                Visit Us
              </h3>
              <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>{" "}
              {/* text-gray-600 থেকে text-sm */}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
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
            <Award className="w-8 h-8 text-blue-200" />{" "}
            {/* w-10 h-10 থেকে w-8 h-8 */}
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6" // text-4xl md:text-5xl থেকে text-3xl md:text-4xl, mb-8 থেকে mb-6
            initial={{ opacity: 0, y: 20 }} // Y অক্ষের গতিও কমানো হয়েছে
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-blue-100" // text-xl থেকে text-lg, mb-10 থেকে mb-8
            initial={{ opacity: 0, y: 20 }} // Y অক্ষের গতিও কমানো হয়েছে
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Join hands with JCT for innovative technology solutions that drive
            growth and success.
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-50 transition-colors duration-300 shadow-md" // px-8 py-4 থেকে px-6 py-3, text-lg থেকে text-base, shadow-lg থেকে shadow-md
            initial={{ opacity: 0, y: 20 }} // Y অক্ষের গতিও কমানো হয়েছে
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }} // scale: 1.05 থেকে scale: 1.02
            whileTap={{ scale: 0.98 }} // scale: 0.95 থেকে scale: 0.98
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;