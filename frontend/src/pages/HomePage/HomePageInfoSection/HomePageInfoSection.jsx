// import { motion } from "framer-motion";
// import BE_URL from "../../../config";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const HomePageInfoSection = () => {
//   const [FetchError, setFetchError] = useState(false);
//   const [HomeOurTeamData, setHomeOurTeamData] = useState([]);

//   // Fetch API
//   useEffect(() => {
//     const FetchHomeOurTeamAPI = async () => {
//       try {
//         const Response = await axios.get(`${BE_URL}/homeOurTeam`);
//         let FetchedResponse = Response.data.data;

//         // ✅ Check if API response is a JSON string
//         if (typeof FetchedResponse === "string") {
//           FetchedResponse = JSON.parse(FetchedResponse);
//         }

//         if (Response.status === 200 && FetchedResponse.length > 0) {
//           setHomeOurTeamData(FetchedResponse);
//           setFetchError(false);
//         } else {
//           setFetchError(true); // no data
//         }
//       } catch (error) {
//         console.error("Unable to fetch the data:", error);
//         setFetchError(true); // error fetching data
//       }
//     };

//     FetchHomeOurTeamAPI();
//   }, []);

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
//           {FetchError ? (
//             <p className="text-center text-red-500 text-lg font-medium">
//               Failed to load data
//             </p>
//           ) : HomeOurTeamData.length === 0 ? (
//             <p className="text-center text-gray-500 text-lg font-medium">
//               No data found
//             </p>
//           ) : (
//             HomeOurTeamData.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[var(--color-footer-color)] border-r-4"
//                 variants={fadeInUp}
//               >
//                 <p className="text-gray-600 leading-relaxed text-justify font-[500]">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))
//           )}
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

//Best Design For Save But Not To Use

// import { useState, useEffect } from "react";
// import { Users, ArrowRight, Circle, Square } from "lucide-react";

// const HomePageInfoSection = () => {
//   const [FetchError, setFetchError] = useState(false);
//   const [HomeOurTeamData, setHomeOurTeamData] = useState([]);

//   // Mock data for demonstration
//   useEffect(() => {
//     const mockData = [
//       {
//         description: "We are a diverse team of passionate innovators\nDriven by creativity and excellence\nCommitted to delivering exceptional results\nBuilding the future together"
//       },
//       {
//         description: "Our expertise spans multiple domains\nCombining technical prowess with creative vision\nFocused on user-centric solutions\nEmpowering businesses through technology"
//       }
//     ];

//     setTimeout(() => {
//       setHomeOurTeamData(mockData);
//       setFetchError(false);
//     }, 1000);
//   }, []);

//   const HandleKnowMoreBtn = () => {
//     window.location.href = "/team";
//   };

//   return (
//     <section className="min-h-screen bg-white relative overflow-hidden">
//       {/* Grid background pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `
//             linear-gradient(to right, #1e40af 1px, transparent 1px),
//             linear-gradient(to bottom, #1e40af 1px, transparent 1px)
//           `,
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       {/* Diagonal geometric elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 transform rotate-45 translate-x-48 -translate-y-48"></div>
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 transform rotate-45 -translate-x-40 translate-y-40"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 transform rotate-45 -translate-x-32 -translate-y-32"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
//         {/* Header Section - Minimalist approach */}
//         <div className="mb-24">
//           <div className="flex items-center justify-center mb-8">
//             <div className="w-16 h-px bg-black"></div>
//             <div className="mx-8 px-6 py-2 border-2 border-blue-600 bg-white">
//               <span className="text-black font-bold text-sm tracking-widest">TEAM</span>
//             </div>
//             <div className="w-16 h-px bg-black"></div>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-black text-center text-black mb-4">
//             Our Team
//           </h1>

//           <div className="flex justify-center">
//             <div className="w-32 h-1 bg-blue-600"></div>
//           </div>
//         </div>

//         {/* Content Section - Card Grid Layout */}
//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {FetchError ? (
//             <div className="md:col-span-2">
//               <div className="bg-red-50 border-2 border-red-500 p-8 text-center">
//                 <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
//                   <span className="text-white font-bold">!</span>
//                 </div>
//                 <p className="text-red-600 font-semibold">Failed to load team data</p>
//               </div>
//             </div>
//           ) : HomeOurTeamData.length === 0 ? (
//             <div className="md:col-span-2">
//               <div className="bg-blue-50 border-2 border-blue-500 p-8 text-center">
//                 <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
//                   <Circle className="w-6 h-6 text-white" />
//                 </div>
//                 <p className="text-blue-600 font-semibold">Loading team information...</p>
//               </div>
//             </div>
//           ) : (
//             HomeOurTeamData.map((item, index) => (
//               <div key={index} className="relative">
//                 {/* Card number indicator */}
//                 <div className="absolute -top-6 -left-6 w-16 h-16 bg-black text-white font-black text-2xl flex items-center justify-center z-10">
//                   {String(index + 1).padStart(2, "0")}
//                 </div>

//                 {/* Main card */}
//                 <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#1e40af] transition-all duration-300">
//                   {/* Card header */}
//                   <div className="bg-blue-600 p-6 border-b-4 border-black">
//                     <div className="flex items-center gap-4">
//                       <Square className="w-8 h-8 text-white fill-white" />
//                       <div className="flex-1 h-1 bg-white/30"></div>
//                       <div className="w-4 h-4 bg-white"></div>
//                     </div>
//                   </div>

//                   {/* Card content */}
//                   <div className="p-8">
//                     <div className="space-y-6">
//                       {item.description
//                         .split("\n")
//                         .filter((line) => line.trim() !== "")
//                         .map((line, lineIndex) => (
//                           <div key={lineIndex} className="flex items-start gap-4">
//                             <div className="w-6 h-6 bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
//                               <span className="text-white font-bold text-xs">
//                                 {String(lineIndex + 1).padStart(2, "0")}
//                               </span>
//                             </div>
//                             <p className="text-gray-800 font-medium leading-relaxed text-lg">
//                               {line}
//                             </p>
//                           </div>
//                         ))}
//                     </div>
//                   </div>

//                   {/* Card footer accent */}
//                   <div className="h-2 bg-black"></div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Alternative layout for larger datasets */}
//         {HomeOurTeamData.length > 2 && (
//           <div className="mb-20">
//             <h3 className="text-2xl font-bold text-center mb-12 text-black">
//               More About Our Team
//             </h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {HomeOurTeamData.slice(2).map((item, index) => (
//                 <div key={index + 2} className="bg-gray-50 border-2 border-gray-300 p-6">
//                   <div className="w-12 h-12 bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-4">
//                     {String(index + 3).padStart(2, "0")}
//                   </div>
//                   <div className="space-y-3">
//                     {item.description
//                       .split("\n")
//                       .filter((line) => line.trim() !== "")
//                       .slice(0, 2)
//                       .map((line, lineIndex) => (
//                         <p key={lineIndex} className="text-gray-700 text-sm leading-relaxed">
//                           {line}
//                         </p>
//                       ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Statistics Section */}
//         <div className="mb-20">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-black text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
//                 50+
//               </div>
//               <p className="text-gray-600 font-medium">Team Members</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
//                 10+
//               </div>
//               <p className="text-gray-600 font-medium">Years Experience</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-black text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
//                 100+
//               </div>
//               <p className="text-gray-600 font-medium">Projects Done</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
//                 24/7
//               </div>
//               <p className="text-gray-600 font-medium">Support</p>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action Button - Keeping the perfect design */}
//         <div className="text-center">
//           <button
//             className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden hover:scale-105"
//             onClick={HandleKnowMoreBtn}
//           >
//             {/* Button background animation */}
//             <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

//             <span className="relative z-10">Know More</span>
//             <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
//               <ArrowRight className="w-5 h-5" />
//             </div>

//             {/* Button border animation */}
//             <div className="absolute inset-0 border-2 border-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePageInfoSection;

//design no.3

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import BE_URL from "../../../config";
// import { ArrowRight } from "lucide-react";

// const HomePageOurTeamSection = () => {
//   const [FetchError, setFetchError] = useState(false);
//   const [HomeOurTeamData, setHomeOurTeamData] = useState([]);

//   // Fetch API
//   useEffect(() => {
//     const FetchHomeOurTeamAPI = async () => {
//       try {
//         const Response = await axios.get(`${BE_URL}/homeOurTeam`);
//         let FetchedResponse = Response.data.data;

//         if (typeof FetchedResponse === "string") {
//           FetchedResponse = JSON.parse(FetchedResponse);
//         }

//         if (Response.status === 200 && FetchedResponse.length > 0) {
//           setHomeOurTeamData(FetchedResponse);
//           setFetchError(false);
//         } else {
//           setFetchError(true); // No data
//         }
//       } catch (error) {
//         console.error("Unable to fetch the data:", error);
//         setFetchError(true);
//       }
//     };

//     FetchHomeOurTeamAPI();
//   }, []);

//   return (
//     <section className="relative bg-black text-white py-20 px-4 md:px-8 overflow-hidden">
//       {/* Decorative Cyan Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-72 h-72 bg-[#00D2FF]/10 rounded-full blur-3xl -top-20 -left-20"></div>
//         <div className="absolute w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl -bottom-40 -right-40"></div>
//       </div>

//       <div className="relative max-w-5xl mx-auto space-y-16">
//         {/* Section Header */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold">
//             Meet <span className="text-[#00D2FF]">Our Team</span>
//           </h2>
//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             The minds and energy behind our vision.
//           </p>
//         </motion.div>

//         {/* Team Text Cards */}
//         <div className="space-y-10">
//           {FetchError ? (
//             <div className="text-center text-[#00D2FF] font-semibold">
//               Failed to load team data.
//             </div>
//           ) : HomeOurTeamData.length === 0 ? (
//             <div className="text-center text-gray-400 animate-pulse">
//               Loading team information...
//             </div>
//           ) : (
//             HomeOurTeamData.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="relative group bg-gray-900/50 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-[#00D2FF] hover:shadow-[0_0_30px_#00D2FF] transition-all duration-500"
//               >
//                 {/* Cyan Progress Bar */}
//                 <div className="absolute top-0 left-0 w-0 h-1 bg-[#00D2FF] rounded-full group-hover:w-full transition-all duration-500"></div>

//                 <div className="space-y-3">
//                   {item.description
//                     .split("\n")
//                     .filter((line) => line.trim() !== "")
//                     .map((line, lineIndex) => (
//                       <p
//                         key={lineIndex}
//                         className="text-gray-300 leading-relaxed text-lg hover:text-[#00D2FF] transition-colors duration-300"
//                       >
//                         {line}
//                       </p>
//                     ))}
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <button className="relative group inline-flex cursor-pointer items-center gap-3 px-6 py-3 border border-[#00D2FF] rounded-full text-[#00D2FF] font-semibold hover:bg-[#00D2FF] hover:text-black transition-all duration-300">
//             Know More
//             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HomePageOurTeamSection;

import { useEffect, useState } from "react";
import axios from "axios";
import BE_URL from "../../../config";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeamSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [HomeOurTeamData, setHomeOurTeamData] = useState([]);

  const RedirectTo = useNavigate();

  const HandleKnowMoreBtn = () => {
    RedirectTo("/team");
  };

  // Fetch API
  useEffect(() => {
    const FetchHomeOurTeamAPI = async () => {
      try {
        const Response = await axios.get(`${BE_URL}/homeOurTeam`);
        let FetchedResponse = Response.data.data;

        if (typeof FetchedResponse === "string") {
          FetchedResponse = JSON.parse(FetchedResponse);
        }

        if (Response.status === 200 && FetchedResponse.length > 0) {
          setHomeOurTeamData(FetchedResponse);
          setFetchError(false);
        } else {
          setFetchError(true); // No data
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true);
      }
    };

    FetchHomeOurTeamAPI();
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-gray-50">
      {/* Decorative Cyan Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72  rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96  rounded-full blur-3xl -bottom-40 -right-40"></div>
      </div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-20 h-px bg-black"></div>
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Our <span className="text-[var(--color-logo-color)]">Team</span>
        </h1>
        <div className="w-20 h-px bg-black"></div>
      </div>
      <div className="relative max-w-screen-xl mx-auto text-center space-y-12">
        {/* Main Paragraph or Fetched Data */}
        <div className="relative group   border border-[#212529]/10 rounded-2xl p-8 md:p-12  transition-all duration-500">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00D2FF]/40 rounded-tl-2xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#00D2FF]/40 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#00D2FF]/40 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#00D2FF]/40 rounded-br-2xl"></div>

          {/* Animated top border */}
          {/* <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00D2FF] to-[#00D2FF]/50 rounded-full group-hover:w-full transition-all duration-700"></div> */}

          {FetchError ? (
            <p className="text-lg md:text-xl leading-relaxed text-[#00D2FF] font-medium relative z-10">
              Failed to load team data.
            </p>
          ) : HomeOurTeamData.length === 0 ? (
            <p className="text-lg md:text-xl leading-relaxed text-gray-400 animate-pulse relative z-10">
              Loading team information...
            </p>
          ) : (
            <div className="space-y-4">
              {HomeOurTeamData.map((item, index) => (
                <p
                  key={item.id}
                  className="text-lg md:text-xl leading-relaxed text-[#212529] text-justify  relative z-10 transition-colors duration-300"
                >
                  {item.description}
                </p>
              ))}
            </div>
          )}

          {/* Floating particles inside the card */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#00D2FF]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-10 w-2 h-2 bg-[#00D2FF]/30 rounded-full animate-pulse"></div>

          <div className="absolute top-4 left-4 w-2 h-2 bg-[#00D2FF]/30 rounded-full animate-pulse"></div>

          <div className="absolute top-4 left-14 w-2 h-2 bg-[#00D2FF]/30 rounded-full animate-pulse"></div>

          <div
            className="absolute bottom-6 left-6 w-1 h-1 bg-[#00D2FF]/50 rounded-full animate-pulse"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white  rounded cursor-pointer shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden "
            onClick={HandleKnowMoreBtn}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

            <span className="relative z-10">Know More</span>
            <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-5 h-5" />
            </div>

            {/* Button border animation */}
            <div className="absolute inset-0  border-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-4 w-2 h-2 bg-[#00D2FF] rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-8 w-1 h-1 bg-[#00D2FF] rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-12 w-1.5 h-1.5 bg-[#00D2FF] rounded-full opacity-50 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
};

export default TeamSection;
