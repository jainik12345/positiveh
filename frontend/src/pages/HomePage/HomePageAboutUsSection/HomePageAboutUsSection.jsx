//design 1

// import { motion } from "framer-motion";
// import BE_URL from "../../../config";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const HomePageAboutUsSection = () => {
//   const [FetchError, setFetchError] = useState(false);
//   const [HomeAboutUsData, setHomeAboutUsData] = useState([]);

//   useEffect(() => {
//     const FetchHomeAboutSection = async () => {
//       try {
//         const FetchResponse = await axios.get(
//           `${BE_URL}/homeAboutHotelSection`
//         );
//         let FetchResponseData = FetchResponse.data.data;

//         // ✅ Handle case where API returns a JSON string
//         if (typeof FetchResponseData === "string") {
//           FetchResponseData = JSON.parse(FetchResponseData);
//         }

//         if (FetchResponse.status === 200 && FetchResponseData.length > 0) {
//           setHomeAboutUsData(FetchResponseData);
//           setFetchError(false);
//         } else {
//           setFetchError(true); // no data
//         }
//       } catch (error) {
//         console.error("Unable to fetch the data:", error);
//         setFetchError(true); // error fetching data
//       }
//     };

//     FetchHomeAboutSection();
//   }, []);

//   return (
//     <>
//       <div className="section">
//         <div className="container max-w-screen-2xl mx-auto md:p-10 p-5 flex flex-col gap-5 bg-gray-100">
//           <div className="text-center">
//             <motion.h1
//               className="text-2xl font-bold text-gray-900 md:text-5xl sm:text-3xl mb-4"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               Welcome To{" "}
//               <span className="text-[var(--color-logo-color)]">
//                 Positive Hospitality
//               </span>
//             </motion.h1>
//             <motion.div
//               className="mx-auto h-1 w-50 bg-[var(--color-footer-color)] rounded-full"
//               initial={{ opacity: 0, scaleX: 0 }}
//               whileInView={{ opacity: 1, scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             />
//           </div>

//           {FetchError ? (
//             <p className="text-center text-red-500 text-lg font-medium">
//               Failed to load data
//             </p>
//           ) : HomeAboutUsData.length === 0 ? (
//             <p className="text-center text-gray-500 text-lg font-medium">
//               No data found
//             </p>
//           ) : (
//             HomeAboutUsData.map((detail, index) => (
//               <div
//                 key={detail.id}
//                 className="bg-gray-200 md:p-8 p-3 mb-8 last:mb-0"
//               >
//                 <div className="max-w-screen-2xl mx-auto">
//                   <div
//                     className={`grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-4 items-center ${
//                       index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
//                     }`}
//                   >
//                     {/* Image */}
//                     <motion.div
//                       className={`relative ${
//                         index % 2 === 1 ? "lg:col-start-2" : ""
//                       }`}
//                       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.8 }}
//                       viewport={{ once: true }}
//                     >
//                       <div className="relative overflow-hidden shadow-lg">
//                         <img
//                           src={`${BE_URL}/Images/HomeImages/HomeAboutHotels/${detail.image}`}
//                           alt="img"
//                           className="w-full h-100 object-cover"
//                         />
//                       </div>
//                     </motion.div>

//                     {/* Content */}
//                     <motion.div
//                       className={`md:p-5 p-2 h-full flex flex-col gap-5 justify-between ${
//                         index % 2 === 1 ? "lg:col-start-1" : ""
//                       }`}
//                       initial={{
//                         opacity: 0,
//                         x: index % 2 === 0 ? 50 : -50,
//                       }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.8, delay: 0.2 }}
//                       viewport={{ once: true }}
//                     >
//                       <div
//                         className="space-y-4 p-2 h-70 overflow-y-auto"
//                         style={{ scrollbarWidth: "thin" }}
//                       >
//                         <p className="text-gray-700 leading-relaxed h-full text-justify text-md font-semibold">
//                           {detail.description}
//                         </p>
//                       </div>

//                       <button className="relative w-50 px-8 py-3 cursor-pointer bg-black text-white font-bold rounded-lg overflow-hidden group ">
//                         <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//                         <span className="relative z-10 flex items-center gap-2">
//                           <span>Know More</span>
//                           <svg
//                             className="w-4 h-4"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M14 5l7 7m0 0l-7 7m7-7H3"
//                             ></path>
//                           </svg>
//                         </span>
//                         <span className="absolute inset-0 border-2 border-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//                       </button>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePageAboutUsSection;

// //design 3

import { motion } from "framer-motion";
import BE_URL from "../../../config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomePageAboutUsSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [HomeAboutUsData, setHomeAboutUsData] = useState([]);
  const RedirectTo = useNavigate();

  useEffect(() => {
    const FetchHomeAboutSection = async () => {
      try {
        const FetchResponse = await axios.get(
          `${BE_URL}/homeAboutHotelSection`
        );
        let FetchResponseData = FetchResponse.data.data;

        // ✅ Handle case where API returns a JSON string
        if (typeof FetchResponseData === "string") {
          FetchResponseData = JSON.parse(FetchResponseData);
        }

        if (FetchResponse.status === 200 && FetchResponseData.length > 0) {
          setHomeAboutUsData(FetchResponseData);
          setFetchError(false);
        } else {
          setFetchError(true); // no data
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true); // error fetching data
      }
    };

    FetchHomeAboutSection();
  }, []);

  const HandleKnowMoreBtn = () => {
    RedirectTo("/portfolio");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header with unique line design */}
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
              Welcome To{" "}
              <span className="text-[var(--color-logo-color)]">
                Positive Hospitality
              </span>
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

        {/* Content */}
        <div className="space-y-0">
          {FetchError ? (
            <div className="text-center py-16 border-l-2 border-red-400 pl-6">
              <p className="text-red-600 font-medium text-lg">
                Failed to load data
              </p>
            </div>
          ) : HomeAboutUsData.length === 0 ? (
            <div className="text-center py-16 border-l-2 border-gray-300 pl-6">
              <p className="text-gray-600 font-medium text-lg">No data found</p>
            </div>
          ) : (
            HomeAboutUsData.map((detail, index) => (
              <motion.div
                key={detail.id}
                className="relative border-l-2 border-black"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
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

                  {/* Main Content Grid */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      className={`relative ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                      initial={{ opacity: 0, y: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative overflow-hidden bg-white">
                        <img
                          src={`${BE_URL}/Images/HomeImages/HomeAboutHotels/${detail.image}`}
                          alt="img"
                          className="w-full h-64 md:h-90 "
                        />

                        {/* Image overlay line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                      initial={{ opacity: 0, y: index % 2 === 0 ? 30 : -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {/* Description with line numbers */}
                      <div className="space-y-3">
                        {detail.description
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                          .map((line, lineIndex) => (
                            <div
                              key={lineIndex}
                              className="flex items-start gap-3"
                            >
                              <span className="text-xs font-bold text-gray-400 tracking-wider flex-shrink-0 mt-1">
                                {String(lineIndex + 1).padStart(2, "0")}
                              </span>
                              <p className="flex-1 text-gray-700 text-justify leading-relaxed font-medium">
                                {line}
                              </p>
                            </div>
                          ))}
                      </div>

                      {/* 🔥 Animated Know More Button */}
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

export default HomePageAboutUsSection;
