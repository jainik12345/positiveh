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

//design no:2

// import { motion } from "framer-motion";
// import person1 from "../../../assets/images/andy.jpg";
// import person2 from "../../../assets/images/ken.jpg";
// import person3 from "../../../assets/images/bobby.jpg";

// const TeamPageMembersDetailsSection = ({ members }) => {
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
//       position: "President & CEO",
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
//       name: "Ken Patel",
//       position: "CFO",
//       image: person2,
//       description: [
//         "Ken Patel brings over 15 years of strategic management and hotel development experience. He has successfully led several turnaround operations and emphasizes leadership development and team culture.",
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
//         "Bobby Tipton has extensive experience in operational excellence and service delivery. His hands-on approach to leadership fosters collaboration across all levels of the organization.",
//       ],
//       quote: {
//         text: "Teamwork divides the task and multiplies the success.",
//         author: "Unknown",
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
//             <motion.div className="w-full lg:w-1/2  flex justify-center relative group">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-fit  h-130 rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
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

// export default TeamPageMembersDetailsSection;

//design no:3

// import { motion } from "framer-motion";
// import person1 from "../../../assets/images/andy.jpg";
// import person2 from "../../../assets/images/ken.jpg";
// import person3 from "../../../assets/images/bobby.jpg";

// // Animation variants extracted for reusability and cleaner component
// const animationVariants = {
//   container: {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   },
//   item: {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   },
//   image: {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   },
//   text: {
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   },
// };

// // Default team members data
// const defaultTeamMembers = [
//   {
//     id: 1,
//     name: "Andy Patel",
//     position: "President & CEO",
//     image: person1,
//     description: [
//       "Andy Patel is a seventeen-year hospitality veteran deeply experienced in hotel operations, acquisitions, debt and equity capitalization, renovations, and franchising. A hands-on operator whose operations reflect a commitment to the highest possible guest experience achieved through excellent guest service and well-maintained facilities.",
//     ],
//     quote: {
//       text: "Nothing is as important as passion. No matter what you want to do with your life, be passionate.",
//       author: "Jon Bon Jovi",
//     },
//   },
//   {
//     id: 2,
//     name: "Ken Patel",
//     position: "CFO",
//     image: person2,
//     description: [
//       "Ken Patel brings over 15 years of strategic management and hotel development experience. He has successfully led several turnaround operations and emphasizes leadership development and team culture.",
//       "With a background in both finance and hospitality, he bridges the gap between investment and operations, delivering consistent performance for investors and guests alike.",
//     ],
//     quote: {
//       text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
//       author: "Simon Sinek",
//     },
//   },
//   {
//     id: 3,
//     name: "Bobby Tipton",
//     position: "Director of Operations",
//     image: person3,
//     description: [
//       "Bobby Tipton is an operations expert with a proven track record in optimizing hotel performance. His hands-on approach ensures operational excellence across all properties.",
//       "With a keen eye for detail and guest satisfaction, Bobby implements best practices that elevate service standards and operational efficiency.",
//     ],
//     quote: {
//       text: "Excellence is not a skill, it's an attitude.",
//       author: "Ralph Marston",
//     },
//   },
// ];

// const TeamMemberCard = ({ member, isEvenIndex }) => {
//   return (
//     <div className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 `}>
//       {/* Image */}
//       <motion.div
//         className={`w-full lg:w-2/5 ${
//           isEvenIndex ? "lg:order-2" : "lg:order-1"
//         }`}
//         variants={animationVariants.image}
//       >
//         <img
//           src={member.image}
//           alt={member.name}
//           className="w-full h-auto max-h-[500px] rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
//         />
//       </motion.div>

//       {/* Text content */}
//       <motion.div
//         className={`w-full lg:w-3/5 ${
//           isEvenIndex ? "lg:order-1" : "lg:order-2"
//         }`}
//         variants={animationVariants.text}
//       >
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
//           variants={animationVariants.item}
//         >
//           {member.name}
//         </motion.h2>
//         <motion.p
//           className="text-blue-600 text-lg font-semibold uppercase tracking-wide mb-6"
//           variants={animationVariants.item}
//         >
//           {member.position}
//         </motion.p>

//         {member.description.map((paragraph, i) => (
//           <motion.p
//             key={i}
//             className="text-gray-700 leading-relaxed mb-4 text-lg"
//             variants={animationVariants.item}
//           >
//             {paragraph}
//           </motion.p>
//         ))}

//         {/* Quote Box */}
//         <motion.div
//           className={`mt-8 bg-gradient-to-r ${
//             isEvenIndex
//               ? "from-gray-50 to-blue-50 border-r-4"
//               : "from-blue-50 to-gray-50 border-l-4"
//           } border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300`}
//           variants={animationVariants.item}
//         >
//           <p className="text-gray-800 text-lg italic mb-2">
//             "{member.quote.text}"
//           </p>
//           <p className="text-gray-600 font-medium">— {member.quote.author}</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// const TeamPageMembersDetailsSection = ({ members = defaultTeamMembers }) => {
//   return (
//     <section className="w-full px-4 md:px-8 py-20 ">
//       <motion.div
//         className="max-w-screen-xl mx-auto space-y-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         variants={animationVariants.container}
//       >
//         {members.map((member, index) => (
//           <React.Fragment key={member.id}>
//             <TeamMemberCard member={member} isEvenIndex={index % 2 === 0} />

//             {index < members.length - 1 && (
//               <motion.hr
//                 className="border-t border-gray-200 my-8 max-w-6xl mx-auto"
//                 variants={animationVariants.item}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default TeamPageMembersDetailsSection;

//fetching code

// import { motion } from "framer-motion";
// import person1 from "../../../assets/images/andy.jpg";
// import person2 from "../../../assets/images/ken.jpg";
// import person3 from "../../../assets/images/bobby.jpg";
// import BE_URL from "../../../config";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

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
//             setTeamMembersData(tmp);
//             setFetchError(false);
//           }
//         } else {
//           setFetchError(true); // error fetching data
//         }
//       } catch (error) {
//         console.error("Unable to fetch the data:", error);
//         setFetchError(true); // error fetching data
//       }
//     };

//     FetchTeamMembersAPI();
//   }, []);

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

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Andy Patel",
//       position: "President & CEO",
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
//       name: "Ken Patel",
//       position: "CFO",
//       image: person2,
//       description: [
//         "Ken Patel brings over 15 years of strategic management and hotel development experience. He has successfully led several turnaround operations and emphasizes leadership development and team culture.",
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
//         "Bobby Tipton has extensive experience in operational excellence and service delivery. His hands-on approach to leadership fosters collaboration across all levels of the organization.",
//       ],
//       quote: {
//         text: "Teamwork divides the task and multiplies the success.",
//         author: "Unknown",
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
//         {TeamMembersData?.map((member, index) => (
//           <motion.div
//             key={member.id}
//             className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
//               index % 2 !== 0 ? "lg:flex-row-reverse" : ""
//             }`}
//             variants={itemVariants}
//           >
//             {/* Member Image */}
//             <motion.div className="w-full lg:w-1/2  flex justify-center relative group">
//               <img
//                 src={`${BE_URL}/Images/TeamImages/TeamMemberName/${member.image}`}
//                 alt={member.name}
//                 className="w-fit  h-130 rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
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

// export default TeamPageMembersDetailsSection;

import { motion } from "framer-motion";
import BE_URL from "../../../config";
import axios from "axios";
import { useState, useEffect } from "react";

const TeamPageMembersDetailsSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [TeamMembersData, setTeamMembersData] = useState([]);

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
          setFetchError(true); // error fetching data
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true); // error fetching data
      }
    };

    FetchTeamMembersAPI();
  }, []);

  console.log("TeamMembersData", TeamMembersData);
  console.log("Is Array?", Array.isArray(TeamMembersData));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="max-w-screen-xl mx-auto space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {TeamMembersData?.map((member, index) => (
          <motion.div
            key={member.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            variants={itemVariants}
          >
            {/* Member Image */}
            <motion.div className="w-full lg:w-1/2 flex justify-center relative group">
              <img
                src={`${BE_URL}/Images/TeamImages/TeamMemberName/${member.image}`}
                alt={member.name}
                className="w-fit h-130 rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
              />
              {/* Decorative Accent */}
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-70 group-hover:opacity-100 transition" />
            </motion.div>

            {/* Member Details */}
            <motion.div
              className="w-full lg:w-1/2 bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                {member.name}
              </h2>
              <p className="text-blue-600 text-lg font-semibold uppercase mb-6 tracking-wide">
                {member.position}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                {member.description}
              </p>

              {/* Quote */}
              <div className="mt-6 border-l-4 border-r-4 border-blue-400 pl-4 italic text-gray-600">
                “{member.heading}”
                <p className="mt-2 text-sm font-medium text-gray-500">
                  — {member.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {FetchError && (
          <div className="text-center text-red-500 text-lg font-semibold">
            Failed to load team member data.
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default TeamPageMembersDetailsSection;
