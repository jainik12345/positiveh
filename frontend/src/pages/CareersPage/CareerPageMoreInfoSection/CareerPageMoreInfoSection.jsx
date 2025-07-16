/* eslint-disable no-unused-vars */
// Static Design Code

// import React from "react";
// import { motion } from "framer-motion";
// import person1 from "../../../assets/images/careerimg1.jpg";
// import person2 from "../../../assets/images/careerimg2.jpg";

// const CareerPageMoreInfoSection = ({ members }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const teamMembers = members || [
//     {
//       id: 1,
//       name: "Andy Patel",
//       position: "More About Us",
//       image: person1,
//       description: [
//         "Andy Patel is a seventeen-year hospitality veteran deeply experienced in hotel operations, acquisitions, debt and equity capitalization, renovations, and franchising. A hands-on operator whose operations reflect a commitment to the highest possible guest experience achieved through excellent guest service and well-maintained facilities.",
//       ],
//       quote: {
//         text: "Nothing is as important as passion. No matter what you want to do with your life, be passionate.",
//         author: "Jon Bon Jovi",
//       },
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       position: "Vice President",
//       image: person2,
//       description: [
//         "Jane Smith brings over 15 years of strategic management and hotel development experience. She has successfully led several turnaround operations and emphasizes leadership development and team culture.",
//       ],
//       quote: {
//         text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
//         author: "Simon Sinek",
//       },
//     },
//   ];

//   return (
//     <section className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-blue-50 to-white">
//       <motion.div
//         className="max-w-screen-xl mx-auto space-y-24"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={containerVariants}
//       >
//         {teamMembers.map((member, index) => (
//           <motion.div
//             key={member.id}
//             className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
//               index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//             variants={itemVariants}
//           >
//             {/* Member Image */}
//             <motion.div className="w-full lg:w-1/2 relative group">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-auto rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
//               />
//               {/* Decorative Accent */}
//               <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-70 group-hover:opacity-100 transition" />
//             </motion.div>

//             {/* Member Details */}
//             <motion.div
//               className="w-full lg:w-1/2 bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
//               variants={itemVariants}
//             >
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
//                 {member.name}
//               </h2>
//               <p className="text-blue-600 text-lg font-semibold uppercase mb-6 tracking-wide">
//                 {member.position}
//               </p>
//               {member.description.map((para, i) => (
//                 <p
//                   key={i}
//                   className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg"
//                 >
//                   {para}
//                 </p>
//               ))}

//               {/* Quote */}
//               <div className="mt-6 border-l-4 border-r-4 border-blue-400 pl-4 italic text-gray-600">
//                 “{member.quote.text}”
//                 <p className="mt-2 text-sm font-medium text-gray-500">
//                   — {member.quote.author}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default CareerPageMoreInfoSection;

// API Fetched  Design Code

// import { motion } from "framer-motion";
// import BE_URL from "../../../config";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const CareerPageMoreInfoSection = () => {
//   const [CareerInfoData, setCareerInfoData] = useState([]);
//   const [FetchError, setFetchError] = useState(false);

//   useEffect(() => {
//     const FetchCareerInfoAPI = async () => {
//       try {
//         const FetchRespose = await axios.get(`${BE_URL}/careerMoreInfo`);
//         const FetchResposeData = FetchRespose.data.data;

//         if (FetchRespose.status === 200 && FetchResposeData.length > 0) {
//           if (typeof FetchResposeData === "string") {
//             const tmp = JSON.parse(FetchResposeData);
//             setCareerInfoData(tmp);
//             setFetchError(false);
//           } else {
//             setCareerInfoData(FetchResposeData);
//             setFetchError(false);
//           }
//         } else {
//           setFetchError(true);
//         }
//       } catch (error) {
//         console.error("Unable to fetch the data:", error);
//         setFetchError(true);
//       }
//     };

//     FetchCareerInfoAPI();
//   }, []);

//   // Animation variants
//   const cardVariants = {
//     offscreen: { opacity: 0, y: 100 },
//     onscreen: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         bounce: 0.2,
//         duration: 0.8,
//       },
//     },
//   };

//   const detailsVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { delay: 0.2, duration: 0.8 },
//     },
//   };

//   return (
//     <section className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-screen-xl mx-auto space-y-24">
//         {CareerInfoData?.map((member, index) => (
//           <motion.div
//             key={member.id}
//             className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
//               index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={cardVariants}
//           >
//             {/* Member Image */}
//             <motion.div
//               className="w-full lg:w-1/2 flex justify-center relative group"
//               initial={{ scale: 0.9, rotate: -5 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               <img
//                 src={`${BE_URL}/Images/CareerImages/MoreInfo/${member.image}`}
//                 alt={member.name}
//                 className="w-full h-auto rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
//               />
//               <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-70 group-hover:opacity-100 transition" />
//             </motion.div>

//             {/* Member Details */}
//             <motion.div
//               className="w-full lg:w-1/2 bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
//               initial="hidden"
//               whileInView="visible"
//               variants={detailsVariants}
//             >
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
//                 {member.heading}
//               </h2>
//               <p className="text-blue-600 text-lg font-semibold uppercase mb-6 tracking-wide">
//                 {member.position}
//               </p>
//               <div className="text-gray-700 leading-relaxed mb-4 text-base text-justify sm:text-lg space-y-2">
//                 {member.description.split("\n").map((para, idx) => (
//                   <p key={idx}>{para.trim()}</p>
//                 ))}
//               </div>

//               {/* Quote */}
//               <div className="mt-6 border-l-4 border-r-4 border-blue-400 pl-4 bg-gray-50 italic text-gray-600">
//                 “{member.quote}”
//                 <p className="mt-2 text-sm font-medium text-gray-500">
//                   — {member.name}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}

//         {FetchError && (
//           <div className="text-center text-red-500 text-lg font-semibold">
//             Failed to load career info data.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CareerPageMoreInfoSection;




//design no 3

import { motion } from "framer-motion";
import BE_URL from "../../../config";
import { useEffect, useState } from "react";
import axios from "axios";

const CareerPageMoreInfoSection = () => {
  const [CareerInfoData, setCareerInfoData] = useState([]);
  const [FetchError, setFetchError] = useState(false);

  useEffect(() => {
    const FetchCareerInfoAPI = async () => {
      try {
        const FetchRespose = await axios.get(`${BE_URL}/careerMoreInfo`);
        const FetchResposeData = FetchRespose.data.data;

        if (FetchRespose.status === 200 && FetchResposeData.length > 0) {
          if (typeof FetchResposeData === "string") {
            const tmp = JSON.parse(FetchResposeData);
            setCareerInfoData(tmp);
            setFetchError(false);
          } else {
            setCareerInfoData(FetchResposeData);
            setFetchError(false);
          }
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true);
      }
    };

    FetchCareerInfoAPI();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gray-800"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Career <span className="text-blue-600">Highlights</span>
            </h1>
            <div className="w-20 h-px bg-gray-800"></div>
          </div>
          <motion.div
            className="mx-auto h-1 w-24 bg-blue-600 rounded-full"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Career Info Timeline */}
        <div className="space-y-0">
          {FetchError ? (
            <div className="text-center py-16 border-l-2 border-red-400 pl-6">
              <p className="text-red-600 font-medium text-lg">
                Failed to load career info data
              </p>
            </div>
          ) : CareerInfoData.length === 0 ? (
            <div className="text-center py-16 border-l-2 border-gray-300 pl-6">
              <p className="text-gray-600 font-medium text-lg">No data found</p>
            </div>
          ) : (
            CareerInfoData.map((member, index) => (
              <motion.div
                key={member.id}
                className="relative border-l-2 border-gray-800"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 bg-blue-600 border-2 border-white rounded-full shadow-lg"></div>

                {/* Content Container */}
                <div className="pl-8 py-8">
                  {/* Section Number */}
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-400 tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-8 h-px bg-gray-300"></div>
                  </div>

                  {/* Main Grid */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Member Image */}
                    <motion.div
                      className={`relative ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                      initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden bg-white rounded-xl shadow-lg">
                        <img
                          src={`${BE_URL}/Images/CareerImages/MoreInfo/${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-xl transition duration-300 ease-in-out"
                        />
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                      </div>
                    </motion.div>

                    {/* Member Details */}
                    <motion.div
                      className={`space-y-4 ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                      initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {/* Heading */}
                      <h2 className="text-2xl font-bold text-gray-800">
                        {member.heading}
                      </h2>
                      <p className="text-blue-600 font-semibold uppercase tracking-wide">
                        {member.position}
                      </p>

                      {/* Description */}
                      <div className="space-y-3 text-gray-700 text-justify leading-relaxed font-medium">
                        {member.description
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                          .map((line, lineIndex) => (
                            <div
                              key={lineIndex}
                              className="flex items-start gap-3"
                            >
                              <span className="text-xs font-bold text-gray-400 flex-shrink-0 mt-1">
                                {String(lineIndex + 1).padStart(2, "0")}
                              </span>
                              <p className="flex-1">{line}</p>
                            </div>
                          ))}
                      </div>

                      {/* Quote */}
                      <div className="mt-4 pl-4 border-l-4 border-blue-400 italic text-gray-600">
                        “{member.quote}”
                        <p className="mt-1 text-sm font-medium text-gray-500">
                          — {member.name}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerPageMoreInfoSection;
