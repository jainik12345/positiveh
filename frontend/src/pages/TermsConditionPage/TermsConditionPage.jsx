/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BE_URL from "../../config";
import BannerSection from "../../components/BannerSection/BannerSection";
import image from "../../assets/images/contact_banner.jpg";

const TermsConditionPage = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const res = await axios.get(`${BE_URL}/termsConditions`);
        if (res.data.status === "success") {
          setTerms(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch terms & conditions:", err);
      }
    };
    fetchTermsData();
  }, []);

  return (
    <>
      <BannerSection bgImage={image} title="Terms & Conditions" subtitle="" />
      <div className="bg-[#0A0E18] text-white px-4 md:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TERMS & CONDITIONS
          </motion.h1>

          {terms.map((item, idx) => (
            <motion.div
              key={item.id}
              className="mb-8 border-b border-gray-700 pb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <p className="text-sm md:text-base text-justify text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {terms.length === 0 && (
            <motion.p
              className="text-gray-500 text-center mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No terms & conditions available.
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
};

export default TermsConditionPage;
