/* eslint-disable no-unused-vars */
// import BE_URL from "./../../../config";
// import axios from "axios";

// const CareerPageOpportunitiesSection = () => {
//   const benefits = [
//     {
//       title: "Travel Perks & Benefits",
//       description:
//         "Extra incentives provided by travel companies to enhance the travel experience and add value to the overall trip.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//           />
//         </svg>
//       ),
//       color: "bg-blue-100 text-blue-600",
//     },
//     {
//       title: "Recognition",
//       description:
//         "Act of acknowledging someone's achievements, contributions, or efforts.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//           />
//         </svg>
//       ),
//       color: "bg-amber-100 text-amber-600",
//     },
//     {
//       title: "Rewards",
//       description:
//         "Incentives given to someone in recognition of their achievements, contributions, or efforts.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 8v13m8-8v7m-16-5v5m8-15v3m0 0h.01M12 11h.01M16 11h.01M8 11h.01"
//           />
//         </svg>
//       ),
//       color: "bg-emerald-100 text-emerald-600",
//     },
//     {
//       title: "Growth Opportunities",
//       description:
//         "The chances for personal and professional development and advancement in a particular career or field.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//           />
//         </svg>
//       ),
//       color: "bg-purple-100 text-purple-600",
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-screen-xl mx-auto">
//         <div className="text-center mb-16 ">
//           <h1 className="font-bold text-gray-900 mb-4 md:text-4xl text-2xl">
//             Career Opportunities with{" "}
//             <span className="text-blue-600">Positive Hospitality</span>
//           </h1>
//           <p className=" text-gray-600  font-semibold text-center">
//             There are several career opportunities available within the
//             hospitality industry that focus on providing positive hospitality
//             experiences for customers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {benefits?.map((benefit, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//             >
//               <div
//                 className={`p-6 flex items-center justify-center ${benefit.color} rounded-t-xl`}
//               >
//                 {benefit.icon}
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3 ">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-600  text-justify ">
//                   {benefit.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerPageOpportunitiesSection;
 

// 

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BE_URL from "./../../../config";

const CareerPageOpportunitiesSection = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get(`${BE_URL}/careerOpportunities`);
        if (res?.data?.status === "success") {
          setOpportunities(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching career opportunities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <motion.h1
            className="font-bold text-gray-900 mb-6 text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.1,
            }}
          >
            Career Opportunities with{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                delay: 0.3,
              }}
            >
              Positive Hospitality
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-gray-600 font-medium text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            }}
          >
            Discover exciting career opportunities in the hospitality industry
            that focus on delivering exceptional positive experiences for
            customers and creating memorable moments.
          </motion.p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            className="flex justify-center items-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
              variants={loadingVariants}
              animate="animate"
            />
          </motion.div>
        )}

        {/* Opportunities Grid */}
        {!loading && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {opportunities.length > 0 ? (
              opportunities.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <motion.div className="relative" variants={cardHoverVariants}>
                    {/* Image Container */}
                    <div className="w-full h-48 lg:h-52 overflow-hidden bg-white">
                      <motion.img
                        src={`${BE_URL}/Images/CareerImages/CareerOpportunities/${item.image}`}
                        alt={item.heading}
                        className="w-full h-full object-contain"
                        variants={imageVariants}
                        whileHover="hover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                              <div class="text-center">
                                <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5"></path>
                                  </svg>
                                </div>
                                <p class="text-blue-600 font-medium">Career Opportunity</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                      >
                        {item.heading}
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 text-sm leading-relaxed line-clamp-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <motion.div
                  className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Opportunities Available
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We're currently updating our career opportunities. Please
                  check back soon for exciting new positions!
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CareerPageOpportunitiesSection;
