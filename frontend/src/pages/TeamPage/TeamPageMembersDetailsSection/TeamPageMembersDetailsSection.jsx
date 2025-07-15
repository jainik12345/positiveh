/* eslint-disable no-unused-vars */

//design no:1

// import React from "react";
// import { motion } from "framer-motion";
// import person1 from "../../../assets/images/andy.jpg";
// import person2 from "../../../assets/images/ken.jpg";
// import person3 from "../../../assets/images/bobby.jpg";

// const TeamPageMembersDetailsSection = ({ members }) => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const teamMembers = members || [
//     {
//       id: 1,
//       name: "Andy Patel",
//       position: "President & CEO",
//       image: person1,
//       description: [
//         "Andy Patel is a Seventeen-year hospitality veteran deeply experienced in hotel operations, acquisitions, debt and equity capitalization, renovations, and franchising. A hands-on Operator whose operations reflect a commitment to the highest possible guest experience achieved through excellent guest service and well-maintained facilities, which typically meet or exceed the franchisor's standards.",
//       ],
//       quote: {
//         text: "Nothing is as important as passion. No matter what you want to do with your life, be passionate.",
//         author: "Jon Bon Jovi",
//       },
//     },
//     {
//       id: 2,
//       name: "Ken Patel",
//       position: "CFO",
//       image: person2,
//       description: [
//         "Jane Smith brings over 15 years of strategic management and hotel development experience. She has successfully led several turnaround operations and emphasizes leadership development and team culture.",
//         "With a background in both finance and hospitality, she bridges the gap between investment and operations, delivering consistent performance for investors and guests alike.",
//       ],
//       quote: {
//         text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
//         author: "Simon Sinek",
//       },
//     },
//     {
//       id: 3,
//       name: "Bobby Tipton",
//       position: "Director of Operations",
//       image: person3,
//       description: [
//         "Jane Smith brings over 15 years of strategic management and hotel development experience. She has successfully led several turnaround operations and emphasizes leadership development and team culture.",
//         "With a background in both finance and hospitality, she bridges the gap between investment and operations, delivering consistent performance for investors and guests alike.",
//       ],
//       quote: {
//         text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
//         author: "Simon Sinek",
//       },
//     },
//   ];

//   return (
//     <section className="w-full px-4 md:px-8 py-16 bg-white">
//       <motion.div
//         className="max-w-screen-xl mx-auto space-y-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={containerVariants}
//       >
//         {teamMembers.map((member, index) => (
//           <React.Fragment key={member.id}>
//             <motion.div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
//               {/* Image - alternates sides based on index */}
//               <motion.div
//                 className={`w-full lg:w-2/5 ${
//                   index % 2 === 0 ? "lg:order-1" : "lg:order-2"
//                 }`}
//                 variants={imageVariants}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-auto max-h-[500px] rounded-lg object-cover shadow-lg"
//                 />
//               </motion.div>

//               {/* Text content */}
//               <motion.div
//                 className={`w-full lg:w-3/5 ${
//                   index % 2 === 0 ? "lg:order-2" : "lg:order-1"
//                 }`}
//                 variants={textVariants}
//               >
//                 <motion.h2
//                   className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
//                   variants={itemVariants}
//                 >
//                   {member.name}
//                 </motion.h2>
//                 <motion.p
//                   className="text-blue-600 text-md font-semibold  uppercase mb-6"
//                   variants={itemVariants}
//                 >
//                   {member.position}
//                 </motion.p>

//                 {member.description.map((paragraph, i) => (
//                   <motion.p
//                     key={i}
//                     className="text-gray-700 leading-relaxed text-justify mb-4 text-lg "
//                     variants={itemVariants}
//                   >
//                     {paragraph}
//                   </motion.p>
//                 ))}

//                 {/* Quote Box */}
//                 <motion.div
//                   className={`mt-8 bg-gray-50 ${
//                     index % 2 === 0 ? "border-r-4" : "border-l-4"
//                   } border-blue-500 p-6 font-semibold rounded-lg shadow-sm`}
//                   variants={itemVariants}
//                 >
//                   <p className="text-gray-800 text-md md:text-lg italic mb-2">
//                     "{member.quote.text}"
//                   </p>
//                   <p className="text-gray-600 font-medium">
//                     — {member.quote.author}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             {index < teamMembers.length - 1 && (
//               <motion.hr
//                 className="border-t border-gray-200 my-8 max-w-6xl mx-auto"
//                 variants={itemVariants}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default TeamPageMembersDetailsSection;



//original approved design

// import { motion } from "framer-motion";
// import BE_URL from "../../../config";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const TeamPageMembersDetailsSection = () => {
//   const [FetchError, setFetchError] = useState(false);
//   const [TeamMembersData, setTeamMembersData] = useState([]);

//   useEffect(() => {
//     const FetchTeamMembersAPI = async () => {
//       try {
//         const Response = await axios.get(`${BE_URL}/team-member-name`);
//         const FetchResponse = Response.data.data;

//         if (Response.status === 200 && FetchResponse.length > 0) {
//           if (typeof FetchResponse === "string") {
//             const tmp = JSON.parse(FetchResponse);
//             setTeamMembersData(tmp);
//             setFetchError(false);
//           } else {
//             setTeamMembersData(FetchResponse);
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

//     FetchTeamMembersAPI();
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

//   const imageVariants = {
//     initial: { scale: 0.9, rotate: -5 },
//     animate: {
//       scale: 1,
//       rotate: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-screen-xl mx-auto space-y-24">
//         {TeamMembersData?.map((member, index) => (
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
//               variants={imageVariants}
//               initial="initial"
//               animate="animate"
//               whileHover="whileHover"
//             >
//               <img
//                 src={`${BE_URL}/Images/TeamImages/TeamMemberName/${member.image}`}
//                 alt={member.name}
//                 className="w-fit h-110 rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
//               />
//               <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-70 group-hover:opacity-100 transition" />
//             </motion.div>

//             {/* Member Details */}
//             <motion.div
//               className="w-full lg:w-1/2 bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.8 }}
//             >
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
//                 {member.name}
//               </h2>
//               <p className="text-blue-600 text-lg font-semibold uppercase mb-6 tracking-wide">
//                 {member.position}
//               </p>

//               {/* Indexed description with newlines */}
//               <div className="text-gray-700 leading-relaxed mb-4 text-base text-justify sm:text-lg space-y-2">
//                 {member.description.split("\n").map((para, idx) => (
//                   <p key={idx}>{para.trim()}</p>
//                 ))}
//               </div>

//               <div className="mt-6 border-l-4 border-r-4 border-blue-400 pl-4 italic text-gray-600">
//                 “{member.heading}”
//                 <p className="mt-2 text-sm font-medium text-gray-500">
//                   — {member.title}
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}

//         {FetchError && (
//           <div className="text-center text-red-500 text-lg font-semibold">
//             Failed to load team member data.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TeamPageMembersDetailsSection;


import { motion } from "framer-motion";
import BE_URL from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TeamPageMembersDetailsSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [TeamMembersData, setTeamMembersData] = useState([]);
  const RedirectTo = useNavigate();

  useEffect(() => {
    const FetchTeamMembersAPI = async () => {
      try {
        const Response = await axios.get(`${BE_URL}/team-member-name`);
        const FetchResponse = Response.data.data;

        if (Response.status === 200 && FetchResponse.length > 0) {
          if (typeof FetchResponse === "string") {
            const tmp = JSON.parse(FetchResponse);
            setTeamMembersData(tmp);
            setFetchError(false);
          } else {
            setTeamMembersData(FetchResponse);
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

    FetchTeamMembersAPI();
  }, []);

  const HandleKnowMoreBtn = () => {
    RedirectTo("/portfolio");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
            <div className="w-20 h-px bg-black"></div>
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Meet Our{" "}
              <span className="text-[var(--color-logo-color)]">Team</span>
            </h1>
            <div className="w-20 h-px bg-black"></div>
          </div>
          <motion.div
            className="mx-auto h-1 w-24 bg-[var(--color-footer-color)] rounded-full"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Team Member Cards */}
        <div className="space-y-0">
          {FetchError ? (
            <div className="text-center py-16 border-l-2 border-red-400 pl-6">
              <p className="text-red-600 font-medium text-lg">
                Failed to load team member data
              </p>
            </div>
          ) : TeamMembersData.length === 0 ? (
            <div className="text-center py-16 border-l-2 border-gray-300 pl-6">
              <p className="text-gray-600 font-medium text-lg">No data found</p>
            </div>
          ) : (
            TeamMembersData.map((member, index) => (
              <motion.div
                key={member.id}
                className="relative border-l-2 border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-8 w-4 h-4 bg-black border-2 border-black rounded-full"></div>

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
                          src={`${BE_URL}/Images/TeamImages/TeamMemberName/${member.image}`}
                          alt={member.name}
                          className="w-full h-80 object-contain"
                        />
                        <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
                      </div>
                    </motion.div>

                    {/* Member Details */}
                    <motion.div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                      initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {/* Name & Position */}
                      <h2 className="text-2xl font-bold text-gray-900">
                        {member.name}
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
                            <div key={lineIndex} className="flex items-start gap-3">
                              <span className="text-xs font-bold text-gray-400 flex-shrink-0 mt-1">
                                {String(lineIndex + 1).padStart(2, "0")}
                              </span>
                              <p className="flex-1">{line}</p>
                            </div>
                          ))}
                      </div>

                      {/* 🔥 Animated Know More Button */}
                      <div className="text-center">
                        <button
                          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden hover:scale-105"
                          onClick={HandleKnowMoreBtn}
                        >
                          {/* Background animation */}
                          <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                          <span className="relative z-10">Know More</span>
                          <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight className="w-5 h-5" />
                          </div>

                          {/* Border animation */}
                          <div className="absolute inset-0 border-2 border-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
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

export default TeamPageMembersDetailsSection;
