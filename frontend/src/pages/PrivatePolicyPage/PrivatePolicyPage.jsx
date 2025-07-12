/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BE_URL from "../../config";
import BannerSection from "../../components/BannerSection/BannerSection";
import image from "../../assets/images/contact_banner.jpg";

const PrivatePolicyPage = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const fetchPolicyData = async () => {
      try {
        const res = await axios.get(`${BE_URL}/privatePolicy`);
        if (res.data.status === "success") {
          setPolicies(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch privacy policy:", err);
      }
    };
    fetchPolicyData();
  }, []);

  return (
    <>
      <BannerSection bgImage={image} title="Private Policy" subtitle="" />
      <div className=" bg-[#0A0E18] text-white px-4 md:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PRIVACY POLICY
          </motion.h1>

          {policies.map((item, idx) => (
            <motion.div
              key={item.id}
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {item.title} :
              </h2>
              <p className="text-sm text-justify md:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

          {policies.length === 0 && (
            <motion.p
              className="text-gray-500 text-center mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No privacy policy content available.
            </motion.p>
          )}
        </div>
      </div>
    </>
  );
};

export default PrivatePolicyPage;
