/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import person1 from "../../../assets/images/home_image_slider_2.webp";
import person2 from "../../../assets/images/home_image_slider_3.webp";

const TeamPageMembersDetailsSection = ({ members }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const teamMembers = members || [
    {
      id: 1,
      name: "Andy Patel",
      position: "President & CEO",
      image: person1,
      description: [
        "Andy Patel is a Seventeen-year hospitality veteran deeply experienced in hotel operations, acquisitions, debt and equity capitalization, renovations, and franchising. A hands-on Operator whose operations reflect a commitment to the highest possible guest experience achieved through excellent guest service and well-maintained facilities, which typically meet or exceed the franchisor's standards.",
      ],
      quote: {
        text: "Nothing is as important as passion. No matter what you want to do with your life, be passionate.",
        author: "Jon Bon Jovi",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Vice President",
      image: person2,
      description: [
        "Jane Smith brings over 15 years of strategic management and hotel development experience. She has successfully led several turnaround operations and emphasizes leadership development and team culture.",
        "With a background in both finance and hospitality, she bridges the gap between investment and operations, delivering consistent performance for investors and guests alike.",
      ],
      quote: {
        text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
        author: "Simon Sinek",
      },
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {teamMembers.map((member, index) => (
          <React.Fragment key={member.id}>
            <motion.div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
              {/* Image - alternates sides based on index */}
              <motion.div
                className={`w-full lg:w-2/5 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
                variants={imageVariants}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto max-h-[500px] rounded-lg object-cover shadow-lg"
                />
              </motion.div>

              {/* Text content */}
              <motion.div
                className={`w-full lg:w-3/5 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
                variants={textVariants}
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                  variants={itemVariants}
                >
                  {member.name}
                </motion.h2>
                <motion.p
                  className="text-blue-600 font-semibold text-lg uppercase mb-6"
                  variants={itemVariants}
                >
                  {member.position}
                </motion.p>

                {member.description.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    className="text-gray-700 leading-relaxed mb-4 text-lg"
                    variants={itemVariants}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {/* Quote Box */}
                <motion.div
                  className="mt-8 bg-gray-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-sm"
                  variants={itemVariants}
                >
                  <p className="text-gray-800 text-md md:text-lg italic mb-2">
                    "{member.quote.text}"
                  </p>
                  <p className="text-gray-600 font-medium">
                    — {member.quote.author}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {index < teamMembers.length - 1 && (
              <motion.hr
                className="border-t border-gray-200 my-8 max-w-6xl mx-auto"
                variants={itemVariants}
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamPageMembersDetailsSection;
