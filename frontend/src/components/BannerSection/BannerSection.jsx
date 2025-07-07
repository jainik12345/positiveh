// /* eslint-disable no-unused-vars */
// import React from "react";
// import { motion } from "framer-motion";

// const BannerSection = ({
//   bgImage,
//   title = "Default Title",
//   subtitle = "",
//   height = "h-[250px] md:h-[350px] lg:h-[450px]",
//   overlayOpacity = 0.4,
// }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.3,
//         duration: 1,
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className={`relative w-full ${height} overflow-hidden`}>
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center bg-cover"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black"
//         style={{ opacity: overlayOpacity }}
//       />

//       {/* Centered Content */}
//       <motion.div
//         className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight"
//           variants={textVariants}
//         >
//           {title}
//         </motion.h1>

//         {subtitle && (
//           <motion.p
//             className="mt-2 text-lg md:text-xl text-gray-200 max-w-2xl"
//             variants={textVariants}
//           >
//             {subtitle}
//           </motion.p>
//         )}
//       </motion.div>
//     </section>
//   );
// };

// export default BannerSection;

/* */

/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const BannerSection = ({
  bgImage,
    title = "Default Title",
  subtitle = "",
  height = "h-[250px] md:h-[350px] lg:h-[450px]",
  overlayOpacity = 0.4,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Base Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* TOP DARK SHADOW GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-10" />

      {/* Centered Content */}
      <motion.div
        className="relative z-20 h-full w-full flex flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight"
          variants={textVariants}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-2 text-lg md:text-xl text-gray-200 max-w-2xl"
            variants={textVariants}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default BannerSection;
