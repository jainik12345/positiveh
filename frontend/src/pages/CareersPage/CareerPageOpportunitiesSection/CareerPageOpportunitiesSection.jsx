/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BE_URL from "../../../config";

const CareerPageOpportunitiesSection = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get(`${BE_URL}/careerOpportunities`);
        if (res?.data?.status === "success") {
          setOpportunities(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching career opportunities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join <span className="text-blue-600">Our Team</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore career opportunities that empower you to grow and impact the
            world of hospitality.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-48">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : opportunities.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {opportunities.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white border border-sky-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300"
                variants={cardVariants}
              >
                <div className="h-24 w-full mb-3 overflow-hidden rounded-lg bg-sky-50 flex items-center justify-center">
                  <img
                    src={`${BE_URL}/Images/CareerImages/CareerOpportunities/${item.image}`}
                    alt={item.heading}
                    className="max-h-full max-w-[70%] object-contain"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.heading}
                </h3>
                <p className="text-gray-600 text-justify text-sm leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Opportunities Available
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're currently updating our job listings. Please check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerPageOpportunitiesSection;
