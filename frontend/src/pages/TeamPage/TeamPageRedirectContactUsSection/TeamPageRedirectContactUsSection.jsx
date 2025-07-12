/* eslint-disable no-unused-vars */

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
      className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Glassmorphism Card */}
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl px-8 py-10 sm:px-10 md:px-16 lg:px-20 space-y-6"
          variants={itemVariants}
        >
          {/* Heading */}
          <motion.h3
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug"
            variants={itemVariants}
          >
            Positive Hospitality is a{" "}
            <span className="text-blue-600">fantastic</span> management company{" "}
            <span className="text-blue-600">that offers everything</span> you
            need!
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            className="text-gray-600 text-base md:text-lg"
            variants={itemVariants}
          >
            The Best Company in the Business.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center relative"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamPageRedirectContactUsSection;
