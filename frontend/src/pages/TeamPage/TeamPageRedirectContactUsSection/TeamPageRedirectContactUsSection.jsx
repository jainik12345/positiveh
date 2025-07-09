/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamPageRedirectContactUsSection = () => {
  return (
    <motion.section
      className="relative bg-[#f9f9f9] py-10 px-4 md:px-10 lg:px-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8">
        {/* Heading */}
        <motion.h3
          className="text-center md:text-4xl text-lg font-medium leading-relaxed text-gray-900"
          variants={itemVariants}
        >
          Positive Hospitality is a{" "}
          <strong className="font-extrabold text-black">fantastic</strong>{" "}
          Hospitality Management Company{" "}
          <strong className="font-extrabold text-black">that offers</strong>{" "}
          everything!
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          className="text-gray-500 text-base md:text-lg text-center"
          variants={itemVariants}
        >
          The Best Company in business.
        </motion.p>

        {/* CTA Button and Arrow */}
        <motion.div
          className="relative flex justify-center md:justify-end w-full max-w-5xl mt-4"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold text-sm sm:text-base shadow-md"
          >
            Get Started Now
          </motion.button>

          {/* Arrow SVG */}
          <motion.div
            className="absolute -top-10 md:block hidden -right-10 md:-top-12 md:-right-12"
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 12 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 48"
              strokeWidth={3}
              stroke="currentColor"
              className="w-16 h-16 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 42c4-14 18-22 36-24m0 0l-8-8m8 8l-8 8"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamPageRedirectContactUsSection;
