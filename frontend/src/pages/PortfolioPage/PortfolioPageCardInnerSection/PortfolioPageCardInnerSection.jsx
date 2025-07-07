// /* eslint-disable no-unused-vars */

// import React from "react";
// import { motion } from "framer-motion";
// import { useParams, useNavigate } from "react-router-dom";
// import BannerSection from "../../../components/BannerSection/BannerSection";
// import image from "../../../assets/banner.jpg";

// const PortfolioPageCardInnerSection = () => {
//   const { hotelName } = useParams();
//   const navigate = useNavigate();

//   const formatDisplayName = (name) => {
//     return name
//       .split("-")
//       .map((word) => word.toUpperCase())
//       .join(" ");
//   };

//   const hotels = [
//     {
//       name: "HAMPTON INN",
//       location: "Fayetteville, GA",
//       description:
//         "Experience southern hospitality at our Fayetteville location with modern amenities and comfortable accommodations.",
//     },
//     {
//       name: "HOME 2 SUITES",
//       location: "Fayetteville, GA",
//       description:
//         "Extended stay suites designed for comfort and convenience with fully equipped kitchens.",
//     },
//     {
//       name: "TOWN PLACE SUITES",
//       location: "Rowery Branch, GA",
//       description:
//         "Spacious suites perfect for longer stays with separate living and sleeping areas.",
//     },
//     {
//       name: "TRUBY HILTON",
//       location: "Columbus, OH",
//       description:
//         "A premium hotel experience in the heart of Columbus with exceptional service.",
//     },
//     {
//       name: "HAMPTON INN",
//       location: "Peachtree City, GA",
//       description:
//         "Charming location near golf cart paths with complimentary breakfast and cozy rooms.",
//     },
//   ];

//   const currentHotel = hotels.find(
//     (hotel) => hotel.name.toLowerCase().replace(/\s+/g, "-") === hotelName
//   );

//   if (!currentHotel) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <p>Hotel not found</p>
//       </div>
//     );
//   }

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <>
//       <BannerSection bgImage={image} title="" subtitle="" />
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" animate="visible" variants={container}>

//             <motion.div variants={item}>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//                 {formatDisplayName(hotelName)}
//               </h1>
//               <p className="text-xl text-gray-600 mb-8">
//                 {currentHotel.location}
//               </p>
//             </motion.div>

//             <motion.div
//               className="bg-gray-50 rounded-xl p-8 shadow-sm"
//               variants={item}
//             >
//               <p className="text-lg text-gray-700 mb-6">
//                 {currentHotel.description}
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default PortfolioPageCardInnerSection;

import React from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/banner.jpg";

const PortfolioPageCardInnerSection = () => {
  const { hotelName } = useParams();

  const formatHotelName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const displayName = formatHotelName(hotelName);
  return (
    <>
      <BannerSection bgImage={image} title={displayName} subtitle="" />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl text-center font-bold mb-6">{displayName}</h2>
      </div>
    </>
  );
};

export default PortfolioPageCardInnerSection;
