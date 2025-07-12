/* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { useState } from "react";

// const PortfolioPageCardInnerAmenitiesSection = ({ HotelData }) => {
//   const [showAll, setShowAll] = useState(false);

//   // Determine which amenities to show
//   const displayedAmenities = showAll
//     ? HotelData.amenities
//     : HotelData.amenities.slice(0, 3);

//   return (
//     <>
//       <motion.div
//         className="container max-w-screen-xl mx-auto flex flex-col gap-5 p-10"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.2 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         <h3 className="text-3xl md:text-4xl font-serif text-gray-700 text-center">
//           Hotel Amenities
//         </h3>
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-5 text-gray-600">
//           {displayedAmenities.map((amenity, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-5  rounded  shadow flex justify-center items-center text-left gap-5 w-full h-30 border border-gray-200"
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             >
//               {/* Icon */}
//               {amenity.icon && (
//                 <div className="flex justify-center items-center">
//                   <div className="text-2xl">{amenity.icon}</div>
//                 </div>
//               )}

//               <div className="flex flex-col  justify-center items-center ">
//                 {/* Title */}
//                 <h4 className="text-lg font-bold text-gray-800  w-full">
//                   {amenity.title}
//                 </h4>

//                 {/* Details */}
//                 <p className="text-gray-600  font-semibold text-sm">
//                   {amenity.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         {HotelData.amenities.length > 3 && (
//           <div className="text-center ">
//             <button
//               onClick={() => setShowAll((prev) => !prev)}
//               className="text-blue-600 hover:text-blue-800 font-medium text-xl  transition-colors cursor-pointer"
//             >
//               {showAll ? "Hide" : "View All"}
//             </button>
//           </div>
//         )}
//       </motion.div>
//     </>
//   );
// };

// export default PortfolioPageCardInnerAmenitiesSection;

/* */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import BE_URL from "../../../../config";
import { useParams } from "react-router-dom";

const PortfolioPageCardInnerAmenitiesSection = () => {
  const { hotelName } = useParams();
  const [hotelId, setHotelId] = useState(null);
  const [amenities, setAmenities] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  useEffect(() => {
    const fetchHotelIdAndAmenities = async () => {
      try {
        // 1. Fetch all hotels
        const hotelRes = await axios.get(`${BE_URL}/hotelName`);
        const hotels = hotelRes.data?.data || [];

        // 2. Match slugified hotel name from URL
        const matchedHotel = hotels.find(
          (hotel) => slugify(hotel.name) === hotelName
        );

        if (!matchedHotel) {
          console.warn("Hotel not found for slug:", hotelName);
          return;
        }

        setHotelId(matchedHotel.id);

        // 3. Fetch amenities for matched hotel ID
        const amenitiesRes = await axios.get(
          `${BE_URL}/hotelAmenities/hotel/${matchedHotel.id}`
        );
        const fetchedAmenities = amenitiesRes.data?.data || [];

        // 4. Attach image URL to each amenity
        const formatted = fetchedAmenities.map((item) => ({
          ...item,
          imageUrl: `${BE_URL}/Images/HotelImages/HotelAmenities/${item.image}`,
        }));

        setAmenities(formatted);
      } catch (err) {
        console.error("Error fetching hotel amenities:", err);
      }
    };

    fetchHotelIdAndAmenities();
  }, [hotelName]);

  const displayedAmenities = showAll ? amenities : amenities.slice(0, 3);

  return (
    <motion.div
      className="container max-w-screen-xl mx-auto flex flex-col gap-5 p-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h3 className="text-3xl md:text-4xl font-serif text-gray-700 text-center">
        Hotel Amenities
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {displayedAmenities.map((amenity, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 rounded shadow flex gap-5 border border-gray-200"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Image instead of icon */}
            {amenity.imageUrl && (
              <div className="w-16 h-16">
                <img
                  src={amenity.imageUrl}
                  alt={amenity.title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            <div className="flex flex-col">
              <h4 className="text-lg font-bold text-gray-800">
                {amenity.title}
              </h4>
              <p className="text-sm font-semibold text-gray-600">
                {amenity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toggle View All Button */}
      {amenities.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-blue-600 hover:text-blue-800 font-medium text-xl"
          >
            {showAll ? "Hide" : "View All"}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioPageCardInnerAmenitiesSection;
