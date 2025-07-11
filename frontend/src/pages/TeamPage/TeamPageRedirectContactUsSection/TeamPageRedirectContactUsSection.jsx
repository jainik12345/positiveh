/* eslint-disable no-unused-vars */

//design no:1

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
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const TeamPageRedirectContactUsSection = () => {
//   return (
//     <motion.section
//       className="relative bg-[#f9f9f9] py-10 px-4 md:px-10 lg:px-20 overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8">
//         {/* Heading */}
//         <motion.h3
//           className="text-center md:text-4xl text-lg font-medium leading-relaxed text-gray-900"
//           variants={itemVariants}
//         >
//           Positive Hospitality is a{" "}
//           <strong className="font-extrabold text-black">fantastic</strong>{" "}
//           Hospitality Management Company{" "}
//           <strong className="font-extrabold text-black">that offers</strong>{" "}
//           everything!
//         </motion.h3>

//         {/* Subtitle */}
//         <motion.p
//           className="text-gray-500 text-base md:text-lg text-center"
//           variants={itemVariants}
//         >
//           The Best Company in business.
//         </motion.p>

//         {/* CTA Button and Arrow */}
//         <motion.div
//           className="relative flex justify-center md:justify-end w-full max-w-5xl mt-4"
//           variants={itemVariants}
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold text-sm sm:text-base shadow-md"
//           >
//             Get Started Now
//           </motion.button>

//           {/* Arrow SVG */}
//           <motion.div
//             className="absolute -top-10 md:block hidden -right-10 md:-top-12 md:-right-12"
//             initial={{ opacity: 0, rotate: 0 }}
//             whileInView={{ opacity: 1, rotate: 12 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 48 48"
//               strokeWidth={3}
//               stroke="currentColor"
//               className="w-16 h-16 text-gray-800"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 42c4-14 18-22 36-24m0 0l-8-8m8 8l-8 8"
//               />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TeamPageRedirectContactUsSection;


//design no:2


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

            {/* Decorative Curved Arrow */}
            {/* <motion.div
              className="absolute -top-14 md:-top-16"
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -10 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className="w-14 h-14 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 40c10-18 24-22 36-24m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamPageRedirectContactUsSection;



//design no:3


// import { motion } from "framer-motion";

// const TeamPageRedirectContactUsSection = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 60 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1],
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { 
//         duration: 0.6, 
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },
//   };

//   const buttonVariants = {
//     hover: { 
//       scale: 1.05,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
//     },
//     tap: { 
//       scale: 0.98,
//       boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.1)"
//     }
//   };

//   const arrowVariants = {
//     hidden: { opacity: 0, rotate: 0, x: 20 },
//     visible: { 
//       opacity: 1, 
//       rotate: 12,
//       x: 0,
//       transition: { 
//         duration: 0.8, 
//         delay: 0.5,
//         ease: [0.34, 1.56, 0.64, 1]
//       }
//     }
//   };

//   return (
//     <motion.section
//       className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 sm:px-10 lg:px-10 overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//       </div>

//       <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-6 relative z-10">
//         {/* Heading */}
//         <motion.h3
//           className="text-center text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-gray-900"
//           variants={itemVariants}
//         >
//           Positive Hospitality is a{" "}
//           <span className="font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
//             fantastic
//           </span>{" "}
//           Hospitality Management Company{" "}
//           <span className="font-bold bg-gradient-to-r from-amber-500 to-blue-600 bg-clip-text text-transparent">
//             that offers
//           </span>{" "}
//           everything!
//         </motion.h3>

//         {/* Subtitle */}
//         <motion.p
//           className="text-gray-600 text-lg sm:text-xl text-center max-w-3xl"
//           variants={itemVariants}
//         >
//           The premier company in hospitality management, delivering exceptional service and results.
//         </motion.p>

//         {/* CTA Button and Arrow */}
//         <motion.div
//           className="relative flex justify-center w-full mt-8"
//           variants={itemVariants}
//         >
//           <motion.button
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap="tap"
//             className="relative bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg overflow-hidden group"
//           >
//             <span className="relative z-10">Get Started Now</span>
//             <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//           </motion.button>

//           {/* Arrow SVG */}
//           <motion.div
//             className="absolute -top-10 -right-6 sm:-top-12 sm:-right-8 hidden md:block"
//             variants={arrowVariants}
//             initial="hidden"
//             whileInView="visible"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 48 48"
//               strokeWidth={2.5}
//               stroke="currentColor"
//               className="w-16 h-16 text-gray-800"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 42c4-14 18-22 36-24m0 0l-8-8m8 8l-8 8"
//               />
//             </svg>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TeamPageRedirectContactUsSection;