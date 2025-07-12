// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";

// const TeamPageQuoteSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const fadeUpVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   const scaleInVariant = {
//     hidden: { scale: 0.95, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "backOut",
//       },
//     },
//   };

//   return (
//     <motion.section
//       className="w-full py-16 px-4 md:px-8 bg-white"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-screen-xl mx-auto text-center space-y-8">
//         {/* Top Subtitle Text */}
//         <motion.p
//           className="text-gray-700 font-semibold text-base sm:text-lg md:text-xl leading-relaxed"
//           variants={fadeUpVariant}
//         >
//           At Positive Hospitality, we are committed to hiring the best and
//           brightest talent in the industry. Our team is passionate about
//           hospitality, which shows in our exceptional service to our guests.
//         </motion.p>

//         {/* Quote Box */}
//         <motion.div
//           className="bg-gray-100 rounded-xl p-4 sm:p-8 md:p-10 border-l-4 border-r-4 border-blue-500 shadow-md"
//           variants={scaleInVariant}
//         >
//           <p className="text-gray-700 text-base sm:text-lg md:text-xl  leading-relaxed">
//             <span className="text-blue-600 text-2xl sm:text-3xl font-extrabold">
//               "
//             </span>
//             <span className="md:text-xl text-md">
//               Coming together is a beginning. Keeping together is progress.
//               Working together is a success.
//             </span>
//             <span className="text-blue-600 text-2xl sm:text-3xl font-extrabold">
//               "
//             </span>
//             <span className="italic text-gray-500 text-sm sm:text-base ml-2">
//               — Henry Ford
//             </span>
//           </p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TeamPageQuoteSection;

// test1

// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";

// const TeamPageQuoteSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const fadeUpVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   const scaleInVariant = {
//     hidden: { scale: 0.95, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "backOut",
//       },
//     },
//   };

//   return (
//     <motion.section
//       className="w-full py-20 px-4 md:px-8 bg-gray-100"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <div className="max-w-screen-xl mx-auto text-center space-y-10">
//         {/* Top Subtitle Text */}
//         <motion.p
//           className="text-gray-800 font-medium text-lg sm:text-xl md:text-2xl leading-relaxed"
//           variants={fadeUpVariant}
//         >
//           At{" "}
//           <span className="font-bold text-blue-600">Positive Hospitality</span>,
//           we believe in nurturing the best talent and creating a culture where
//           passion meets purpose.
//         </motion.p>

//         {/* Quote Box */}
//         <motion.div
//           className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-10 md:p-12 border border-[var(--color-logo-color)] shadow-xl transition-transform duration-300 ease-out"
//           variants={scaleInVariant}
//         >
//           <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
//             <span className="text-blue-500 text-4xl sm:text-5xl font-extrabold">
//               “
//             </span>
//             Coming together is a beginning. Keeping together is progress.
//             Working together is a success.
//             <span className="text-blue-500 text-4xl sm:text-5xl font-extrabold">
//               ”
//             </span>
//           </p>
//           <p className="italic text-gray-600 text-sm sm:text-base mt-4">
//             — Henry Ford
//           </p>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TeamPageQuoteSection;

//fetching code
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BE_URL from "../../../config";

const TeamPageQuoteSection = () => {
  const [FetchError, setFetchError] = useState(false);
  const [TeamQuoteData, setTeamQuoteData] = useState([]);

  useEffect(() => {
    const FetchQuoteAPI = async () => {
      try {
        const FetchResponse = await axios.get(`${BE_URL}/team-section-title`);
        const FetchResponseData = FetchResponse.data.data;

        if (FetchResponse.status === 200 && FetchResponseData.length > 0) {
          if (typeof FetchResponseData === "string") {
            const tmp = JSON.parse(FetchResponseData);
            setTeamQuoteData(tmp);
            setFetchError(false);
          } else {
            setTeamQuoteData(FetchResponseData);
            setFetchError(false); // ✅ Set false when data exists
          }
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true); // error fetching data
      }
    };

    FetchQuoteAPI();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const scaleInVariant = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  return (
    <>
      {FetchError ? (
        <div className="text-center text-red-500 text-lg font-medium py-10">
          Failed to load quote data.
        </div>
      ) : (
        TeamQuoteData &&
        TeamQuoteData?.map((val, idx) => {
          return (
            <motion.section
              key={idx}
              className="w-full py-20 px-4 md:px-8 bg-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="max-w-screen-xl mx-auto text-center space-y-10">
                {/* Top Subtitle Text */}
                <motion.p
                  className="text-gray-800 font-medium text-lg sm:text-xl md:text-2xl leading-relaxed"
                  variants={fadeUpVariant}
                >
                  {val.description}
                </motion.p>

                {/* Quote Box */}
                <motion.div
                  className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-10 md:p-12 border border-[var(--color-logo-color)] shadow-xl transition-transform duration-300 ease-out"
                  variants={scaleInVariant}
                >
                  <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed font-light">
                    <span className="text-blue-500 text-4xl sm:text-5xl font-extrabold">
                      “
                    </span>
                    {val.heading}
                    <span className="text-blue-500 text-4xl sm:text-5xl font-extrabold">
                      ”
                    </span>
                  </p>
                  <p className="italic text-gray-600 text-sm sm:text-base mt-4">
                    — {val.title}
                  </p>
                </motion.div>
              </div>
            </motion.section>
          );
        })
      )}
    </>
  );
};

export default TeamPageQuoteSection;
