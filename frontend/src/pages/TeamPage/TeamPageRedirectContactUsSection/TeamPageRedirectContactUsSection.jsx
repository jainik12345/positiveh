/* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";

// const TeamPageRedirectContactUsSection = () => {
//   return (
//     <section className="relative bg-[#f7f7f7] py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
//       <div className="text-center max-w-5xl mx-auto">
//         <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed">
//           Positive Hospitality is a{" "}
//           <strong className="font-bold text-black">fantastic</strong>{" "}
//           Hospitality Management Company{" "}
//           <strong className="font-bold text-black">that offers</strong>{" "}
//           everything!
//         </h3>
//         <p className="mt-4 text-lg text-gray-600">
//           The Best Company in business.
//         </p>

//         <div className="mt-10 flex justify-center items-center gap-6 flex-wrap">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-lg font-semibold"
//           >
//             Get Started Now
//           </motion.button>

//           <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg text-lg font-semibold hover:bg-blue-700 transition">
//             Get in Touch
//           </button>
//         </div>
//       </div>

//       {/* Arrow Illustration - customize or replace with image if needed */}
//       <div className="absolute right-10 top-10 hidden lg:block">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-24 h-24 rotate-[35deg] text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17 8l4 4m0 0l-4 4m4-4H3"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default TeamPageRedirectContactUsSection;

/* */

// import React from "react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       when: "beforeChildren",
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const TeamPageRedirectContactUsSection = () => {
//   return (
//     <motion.section
//       className="relative bg-gradient-to-r from-blue-50 to-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <motion.div
//         className="text-center max-w-4xl mx-auto space-y-6"
//         variants={itemVariants}
//       >
//         <motion.h3
//           className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed"
//           variants={itemVariants}
//         >
//           Positive Hospitality is a{" "}
//           <span className="text-blue-700">fantastic</span> Hospitality
//           Management Company{" "}
//           <span className="text-blue-700">that offers everything!</span>
//         </motion.h3>

//         <motion.p
//           className="text-md sm:text-lg md:text-xl text-gray-600"
//           variants={itemVariants}
//         >
//           The Best Company in business.
//         </motion.p>

//         <motion.div
//           className="mt-10 flex justify-center items-center gap-4 flex-wrap"
//           variants={itemVariants}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all hover:bg-blue-800"
//           >
//             Get Started Now
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
//           >
//             Get in Touch
//           </motion.button>
//         </motion.div>
//       </motion.div>

//     </motion.section>
//   );
// };

// export default TeamPageRedirectContactUsSection;

/* */

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
          className="text-center text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] font-medium leading-relaxed text-gray-900"
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
