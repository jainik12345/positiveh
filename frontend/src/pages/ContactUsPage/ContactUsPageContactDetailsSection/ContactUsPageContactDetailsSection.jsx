/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUsPageContactDetailsSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "7600275859";
    const message = encodeURIComponent(
      "Hello, I am interested in your services."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleMapDirection = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Raj+Chamunda+Tours+And+Travels+Kothariya+Rajkot",
      "_blank"
    );
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-4xl text-white" />,
      title: "Mail Us",
      content: "gohilluckyrajsinhgohil8@gmail.com",
      action: () =>
        (window.location.href = "mailto:gohilluckyrajsinhgohil8@gmail.com"),
      bgGradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700",
      iconColor: "bg-blue-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-white" />,
      title: "Visit Us",
      content:
        "Shyam-1 Complex, Near P.N.B. School, Behind Petrol Pump, Devtirh Park, Relnagar, Rajkot.",
      action: handleMapDirection,
      bgGradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-600 to-purple-700",
      iconColor: "bg-purple-500",
    },
    {
      icon: <FaPhone className="text-4xl text-white" />,
      title: "Call Us",
      content: "+91 76002 75859",
      action: handleWhatsApp,
      bgGradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700",
      iconColor: "bg-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Touch
            </span>{" "}
            With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you plan your perfect journey. Reach out to us
            through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={item.action}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Background gradient that slides up on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}
              />

              {/* Hover background with different gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                {/* Icon container with animation */}
                <motion.div
                  className="relative mb-6"
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon background circle */}
                  <div
                    className={`w-20 h-20 rounded-full ${item.iconColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                  >
                    {/* Icon with upward animation on hover */}
                    <motion.div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Pulse effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 rounded-full ${item.iconColor} opacity-30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500`}
                  />
                </motion.div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-white mb-4 transition-colors duration-500">
                  {item.title}
                </h2>

                {/* Content */}
                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
                  {item.content}
                </p>

                {/* Action indicator */}
                <motion.div
                  className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                >
                  <div className="px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                    Click to {item.title.toLowerCase()}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Find Us On Map
            </h2>
            <p className="text-yellow-100">
              Visit our office for personalized travel planning
            </p>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8162689179135!2d70.81308387947041!3d22.247048827446946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5007776ee9f%3A0xd22324e900973926!2sRaj%20Chamunda%20Tours%20And%20Travels%20Kothariya%20Rajkot!5e0!3m2!1sen!2sin!4v1744006755723!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full filter hover:grayscale-0 grayscale-[0.2] transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsPageContactDetailsSection;
