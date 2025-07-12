/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import person1 from "../../../assets/images/careerimg1.jpg";
import person2 from "../../../assets/images/careerimg2.jpg";

const CareerPageMoreInfoSection = ({ members }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const teamMembers = members || [
    {
      id: 1,
      name: "Andy Patel",
      position: "More About Us",
      image: person1,
      description: [
        "Andy Patel is a seventeen-year hospitality veteran deeply experienced in hotel operations, acquisitions, debt and equity capitalization, renovations, and franchising. A hands-on operator whose operations reflect a commitment to the highest possible guest experience achieved through excellent guest service and well-maintained facilities.",
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
      ],
      quote: {
        text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
        author: "Simon Sinek",
      },
    },
  ];

  return (
    <section className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="max-w-screen-xl mx-auto space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            variants={itemVariants}
          >
            {/* Member Image */}
            <motion.div className="w-full lg:w-1/2 relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded-3xl shadow-2xl object-cover transition duration-300 ease-in-out"
              />
              {/* Decorative Accent */}
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-70 group-hover:opacity-100 transition" />
            </motion.div>

            {/* Member Details */}
            <motion.div
              className="w-full lg:w-1/2 bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                {member.name}
              </h2>
              <p className="text-blue-600 text-lg font-semibold uppercase mb-6 tracking-wide">
                {member.position}
              </p>
              {member.description.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg"
                >
                  {para}
                </p>
              ))}

              {/* Quote */}
              <div className="mt-6 border-l-4 border-r-4 border-blue-400 pl-4 italic text-gray-600">
                “{member.quote.text}”
                <p className="mt-2 text-sm font-medium text-gray-500">
                  — {member.quote.author}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareerPageMoreInfoSection;
