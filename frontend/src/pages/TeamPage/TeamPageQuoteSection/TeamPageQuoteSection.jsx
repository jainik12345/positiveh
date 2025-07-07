/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const TeamPageQuoteSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const scaleInVariant = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full py-16 px-4 md:px-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto text-center space-y-8">
        {/* Top Subtitle Text */}
        <motion.p
          className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
          variants={fadeUpVariant}
        >
          At Positive Hospitality, we are committed to hiring the best and
          brightest talent in the industry. Our team is passionate about
          hospitality, which shows in our exceptional service to our guests.
        </motion.p>

        {/* Quote Box */}
        <motion.div
          className="bg-gray-100 rounded-xl p-6 sm:p-8 md:p-10 border-l-4 border-blue-500 shadow-md"
          variants={scaleInVariant}
        >
          <p className="text-gray-700 text-base sm:text-lg md:text-xl font-semibold leading-relaxed">
            <span className="text-blue-600 text-2xl sm:text-3xl font-bold">
              "
            </span>
            <span className="font-bold">
              Coming together is a beginning. Keeping together is progress.
              Working together is a success.
            </span>
            <span className="text-blue-600 text-2xl sm:text-3xl font-bold">
              "
            </span>
            <span className="italic text-gray-500 text-sm sm:text-base ml-2">
              — Henry Ford
            </span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamPageQuoteSection;
