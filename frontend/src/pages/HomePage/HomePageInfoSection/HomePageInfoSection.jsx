// import { motion } from "framer-motion";

// const HomePageInfoSection = () => {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
//         <div className="text-center">
//           <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800 mb-6 relative inline-block ">
//             Our Team
//             <motion.div
//               className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
//               initial={{ opacity: 0, scaleX: 0 }}
//               whileInView={{ opacity: 1, scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             />
//           </h1>

//           <p className="md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto">
//             Positive Hospitality is dedicated to making a positive impact on the
//             world
//           </p>
//         </div>

//         <div className="flex flex-col gap-5">
//           <motion.div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-footer-color)]  border-r-4 " >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Our Mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-justify font-[500]">
//               We provide exceptional hotel management services through an
//               owner-operator model. We strive to create a culture of hospitality
//               that inspires our team members to provide superior service to our
//               guests. We aim to maximize the value of our investor's investments
//               through effective management, revenue optimization, and
//               operational excellence. Focusing on continuous improvement,
//               innovation, and sustainability, we are committed to delivering
//               memorable experiences that exceed our guests' expectations while
//               creating long-term value for our investors.{" "}
//             </p>
//           </motion.div>

//           <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-r-4 border-[var(--color-logo-color)]">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Our Vision
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-justify font-[500]">
//               We provide exceptional hotel management services through an
//               owner-operator model. We strive to create a culture of hospitality
//               that inspires our team members to provide superior service to our
//               guests. We aim to maximize the value of our investor's investments
//               through effective management, revenue optimization, and
//               operational excellence. Focusing on continuous improvement,
//               innovation, and sustainability, we are committed to delivering
//               memorable experiences that exceed our guests' expectations while
//               creating long-term value for our investors.{" "}
//             </p>
//           </div>
//         </div>
//         <button className="relative w-50 px-8 py-3 cursor-pointer bg-black text-white font-bold rounded-lg overflow-hidden group ">
//           <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//           <span className="relative z-10 flex items-center gap-2">
//             <span>Know More</span>
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               ></path>
//             </svg>
//           </span>
//           <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HomePageInfoSection;

// import { motion } from "framer-motion";

// const HomePageInfoSection = () => {
//   // Animation variants for smooth bottom-to-top motion
//   const fadeInUp = {
//     hidden: {
//       opacity: 0,
//       y: 60
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1
//       }
//     }
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
//         {/* Animated Team Section */}
//         <motion.div
//           className="text-center"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800 mb-6 relative inline-block ">
//             Our Team
//             <motion.div
//               className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
//               initial={{ opacity: 0, scaleX: 0 }}
//               whileInView={{ opacity: 1, scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             />
//           </h1>

//           <p className="md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto">
//             Positive Hospitality is dedicated to making a positive impact on the
//             world
//           </p>
//         </motion.div>

//         {/* Animated Mission and Vision Cards */}
//         <motion.div
//           className="flex flex-col gap-5"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-footer-color)] border-r-4"
//             variants={fadeInUp}
//           >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Our Mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-justify font-[500]">
//               We provide exceptional hotel management services through an
//               owner-operator model. We strive to create a culture of hospitality
//               that inspires our team members to provide superior service to our
//               guests. We aim to maximize the value of our investor's investments
//               through effective management, revenue optimization, and
//               operational excellence. Focusing on continuous improvement,
//               innovation, and sustainability, we are committed to delivering
//               memorable experiences that exceed our guests' expectations while
//               creating long-term value for our investors.{" "}
//             </p>
//           </motion.div>

//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-r-4 border-[var(--color-logo-color)]"
//             variants={fadeInUp}
//           >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Our Vision
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-justify font-[500]">
//               We provide exceptional hotel management services through an
//               owner-operator model. We strive to create a culture of hospitality
//               that inspires our team members to provide superior service to our
//               guests. We aim to maximize the value of our investor's investments
//               through effective management, revenue optimization, and
//               operational excellence. Focusing on continuous improvement,
//               innovation, and sustainability, we are committed to delivering
//               memorable experiences that exceed our guests' expectations while
//               creating long-term value for our investors.{" "}
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Animated Button */}
//         <motion.button
//           className="relative w-50 px-8 py-3 cursor-pointer bg-black text-white font-bold rounded-lg overflow-hidden group"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//           <span className="relative z-10 flex items-center gap-2">
//             <span>Know More</span>
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               ></path>
//             </svg>
//           </span>
//           <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HomePageInfoSection;

//fetching code

// import { motion } from "framer-motion";
// import BE_URL from "../../../config";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const HomePageInfoSection = () => {
//   const [FetchError, setFetchError] = useState(false);
//   const [HomeOurTeamData, setHomeOurTeamData] = useState([]);

//   //fetching api

//   useEffect(() => {
//     const FetchHomeOurTeamAPI = async () => {
//       try {

//         const Response = await axios.get(`${BE_URL}/homeOurTeam`);
//         const FetchedResponse = Response.data.data;

//         console.log(FetchedResponse);

//       } catch (error) {
//         console.error("Unable to fetch the data:", error);
//         setFetchError(true); // error fetching data
//       }
//     };

//     FetchHomeOurTeamAPI();
//   });

//   // Animation variants for smooth bottom-to-top motion
//   const fadeInUp = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-4 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
//         {/* Animated Team Section */}
//         <motion.div
//           className="text-center"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800 mb-6 relative inline-block ">
//             Our Team
//             <motion.div
//               className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
//               initial={{ opacity: 0, scaleX: 0 }}
//               whileInView={{ opacity: 1, scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             />
//           </h1>

//           <p className="md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto">
//             Positive Hospitality is dedicated to making a positive impact on the
//             world
//           </p>
//         </motion.div>

//         {/* Animated Mission and Vision Cards */}
//         <motion.div
//           className="flex flex-col gap-5"
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <motion.div
//             className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-footer-color)] border-r-4"
//             variants={fadeInUp}
//           >
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
//               Our Mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed text-justify font-[500]">
//               We provide exceptional hotel management services through an
//               owner-operator model. We strive to create a culture of hospitality
//               that inspires our team members to provide superior service to our
//               guests. We aim to maximize the value of our investor's investments
//               through effective management, revenue optimization, and
//               operational excellence. Focusing on continuous improvement,
//               innovation, and sustainability, we are committed to delivering
//               memorable experiences that exceed our guests' expectations while
//               creating long-term value for our investors.{" "}
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Animated Button */}
//         <motion.button
//           className="relative w-50 px-8 py-3 cursor-pointer bg-black text-white font-bold rounded-lg overflow-hidden group"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//           <span className="relative z-10 flex items-center gap-2">
//             <span>Know More</span>
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               ></path>
//             </svg>
//           </span>
//           <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//         </motion.button>
//       </div>
//     </section>
//   );
// };

// export default HomePageInfoSection;


import { motion } from "framer-motion";
import BE_URL from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePageInfoSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [HomeOurTeamData, setHomeOurTeamData] = useState([]);

  // Fetch API
  useEffect(() => {
    const FetchHomeOurTeamAPI = async () => {
      try {
        const Response = await axios.get(`${BE_URL}/homeOurTeam`);
        let FetchedResponse = Response.data.data;

        // ✅ Check if API response is a JSON string
        if (typeof FetchedResponse === "string") {
          FetchedResponse = JSON.parse(FetchedResponse);
        }

        if (Response.status === 200 && FetchedResponse.length > 0) {
          setHomeOurTeamData(FetchedResponse);
          setFetchError(false);
        } else {
          setFetchError(true); // no data
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true); // error fetching data
      }
    };

    FetchHomeOurTeamAPI();
  }, []);

  // Animation variants for smooth bottom-to-top motion
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
        {/* Animated Team Section */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800 mb-6 relative inline-block ">
            Our Team
            <motion.div
              className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h1>

          <p className="md:text-xl font-semibold text-gray-600 max-w-2xl mx-auto">
            Positive Hospitality is dedicated to making a positive impact on the
            world
          </p>
        </motion.div>

        {/* Animated Mission and Vision Cards */}
        <motion.div
          className="flex flex-col gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FetchError ? (
            <p className="text-center text-red-500 text-lg font-medium">
              Failed to load data
            </p>
          ) : HomeOurTeamData.length === 0 ? (
            <p className="text-center text-gray-500 text-lg font-medium">
              No data found
            </p>
          ) : (
            HomeOurTeamData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-footer-color)] border-r-4"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {`Block ${index + 1}`}
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify font-[500]">
                  {item.description}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Animated Button */}
        <motion.button
          className="relative w-50 px-8 py-3 cursor-pointer bg-black text-white font-bold rounded-lg overflow-hidden group"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          <span className="relative z-10 flex items-center gap-2">
            <span>Know More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        </motion.button>
      </div>
    </section>
  );
};

export default HomePageInfoSection;
