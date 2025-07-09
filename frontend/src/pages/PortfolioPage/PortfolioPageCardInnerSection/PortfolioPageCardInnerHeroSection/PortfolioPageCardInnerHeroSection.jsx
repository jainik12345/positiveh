// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const PortfolioPageCardInnerHeroSection = ({ HotelData }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [needsReadMore, setNeedsReadMore] = useState(false);
//   const paragraphRef = useRef(null);

//   useEffect(() => {
//     // Check if the paragraph height is greater than 70px
//     if (paragraphRef.current) {
//       setNeedsReadMore(paragraphRef.current.scrollHeight > 70);
//     }
//   }, [HotelData.overview]);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
//       <div className="grid md:grid-cols-2 gap-8 items-center">
//         <motion.img
//           src={HotelData.image}
//           alt={HotelData.displayName}
//           className="rounded-lg shadow-lg w-full h-full object-cover"
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         />
//         <motion.div
//           className="h-full"
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <h2 className="text-3xl font-bold text-gray-800 mb-4 ml-2 ">
//             {HotelData.displayName}
//           </h2>
//           <div
//             className={`text-gray-600 leading-relaxed text-justify font-semibold p-2 ${
//               isExpanded
//                 ? "max-h-60 overflow-y-auto"
//                 : "max-h-62 overflow-hidden"
//             } transition-all duration-300`}
//             ref={paragraphRef}
//             style={{
//               scrollbarWidth: "thin", // For Firefox
//             }}
//           >
//             {HotelData.overview}
//           </div>
//           {needsReadMore && (
//             <button
//               onClick={toggleReadMore}
//               className="text-blue-500 underline mt-2 ml-2 w-fit cursor-pointer"
//             >
//               {isExpanded ? "Read less" : "Read more"}
//             </button>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioPageCardInnerHeroSection;



import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const COLLAPSED_HEIGHT = 300; // px

const PortfolioPageCardInnerHeroSection = ({ HotelData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const paragraphRef = useRef(null);

  // Overflow check
  useEffect(() => {
    const checkOverflow = () => {
      if (paragraphRef.current) {
        setNeedsReadMore(paragraphRef.current.scrollHeight > COLLAPSED_HEIGHT);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [HotelData.overview]);

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          src={HotelData.image}
          alt={HotelData.displayName}
          className="rounded-lg shadow-lg w-full h-full object-cover"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="h-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 ml-2 ">
            {HotelData.displayName}
          </h2>
          <div
            className="text-gray-600 leading-relaxed text-justify font-semibold p-2 transition-all duration-300"
            ref={paragraphRef}
            style={{
              maxHeight: isExpanded ? 300 : COLLAPSED_HEIGHT,
              overflow: isExpanded ? "auto" : "hidden",
              scrollbarWidth: "thin", 
            }}
          >
            {HotelData.overview}
          </div>
          {needsReadMore && (
            <button
              onClick={toggleReadMore}
              className="text-blue-500 underline mt-2 ml-2 w-fit cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPageCardInnerHeroSection;