import { motion } from "framer-motion";
import { useState } from "react";

const PortfolioPageCardInnerAmenitiesSection = ({ HotelData }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine which amenities to show
  const displayedAmenities = showAll
    ? HotelData.amenities
    : HotelData.amenities.slice(0, 3);

  return (
    <>
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-items-center gap-5 text-gray-600">
          {displayedAmenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-white p-5  rounded  shadow flex justify-center items-center text-left gap-5 w-full h-30 border border-gray-200"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Icon */}
              {amenity.icon && (
                <div className="flex justify-center items-center">
                  <div className="text-2xl">{amenity.icon}</div>
                </div>
              )}

              <div className="flex flex-col  justify-center items-center ">
                {/* Title */}
                <h4 className="text-lg font-bold text-gray-800  w-full">
                  {amenity.title}
                </h4>

                {/* Details */}
                <p className="text-gray-600  font-semibold text-sm">
                  {amenity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {HotelData.amenities.length > 3 && (
          <div className="text-center ">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-blue-600 hover:text-blue-800 font-medium text-xl  transition-colors cursor-pointer"
            >
              {showAll ? "Hide" : "View All"}
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default PortfolioPageCardInnerAmenitiesSection;
