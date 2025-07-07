/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import hotelData from "../hotelData";

const PortfolioPageCardsSection = () => {
  const navigate = useNavigate();

  const hotels = Object.entries(hotelData).map(([slug, hotel]) => ({
    slug,
    ...hotel,
  }));

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4"
            variants={item}
          >
            Positive Hospitality Portfolio
          </motion.h2>
          <motion.p
            className="text-lg md:text-lg text-gray-600 max-w-6xl mx-auto"
            variants={item}
          >
            Our portfolio highlights hotels that prioritize guest satisfaction,
            provide exceptional service and amenities, and embrace their local
            surroundings while also prioritizing sustainability.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/portfolio/${hotel.slug}`)}
            >
              <div className="h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.displayName}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 mt-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {hotel.displayName}
                </h3>
                <p className="text-gray-600">{hotel.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPageCardsSection;
