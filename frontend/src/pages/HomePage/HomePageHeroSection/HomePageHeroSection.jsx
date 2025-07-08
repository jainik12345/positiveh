// import { motion } from "framer-motion";
// import BgImg from "../../../assets/banner.jpg";
// import { useNavigate } from "react-router-dom";

// const HomePageHeroSection = () => {
//   const navigate = useNavigate();
//   const HandleOnclick = () => {
//     navigate("/contact-us");
//   };

//   return (
//     <div
//       className="hero-section relative h-[600px] w-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${BgImg})` }}
//     >
// {/* ...SVGs and overlays... */}
// <svg
//   className="absolute bottom-0 left-0 w-full"
//   height="80"
//   viewBox="0 0 1440 40"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
//   preserveAspectRatio="none"
//   style={{ zIndex: 2 }}
// >
//   <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="#fff" />
// </svg>
// {/* Overlay gradient */}
// <div
//   className="absolute inset-0"
//   style={{
//     background:
//       "linear-gradient(to top, rgba(14,17,34,0.65) 50%, rgba(14,17,34,0.82) 100%)",
//   }}
// />

//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center h-full text-center  "
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <motion.h1
//           className="text-5xl font-bold mb-4 text-gray-100 font-(family-name:--font-navbar-font)"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//         >
//           Positive Hospitality
//         </motion.h1>
//         <motion.p
//           className="text-xl mb-6 text-gray-300 font-(family-name:--font-navbar-font)"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//         >
//           Creating unforgettable experiences through exceptional service.
//         </motion.p>
//         <motion.button
//           className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-semibold shadow-lg cursor-pointer  transition"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//           onClick={HandleOnclick}
//         >
//           GET STARTED NOW!
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default HomePageHeroSection;

/* eslint-disable no-unused-vars */ import React, {
  useState,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import sliderImg1 from "../../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import sliderImg2 from "../../../assets/images/whats_new_image_1.avif";
import sliderImg3 from "../../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import sliderImg4 from "../../../assets/images/whats_new_image_1.avif";

const staticImages = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

const HomePageHeroSection = ({ images = staticImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    clearInterval(intervalId);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    clearInterval(intervalId);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full h-[70vh] md:h-[100vh] relative overflow-hidden">
      <AnimatePresence>
        {images.map((image, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full bg-cover"
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Black gradient at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white z-10"
      >
        <FaAngleLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white z-10"
      >
        <FaAngleRight size={30} />
      </button>
    </div>
  );
};

export default HomePageHeroSection;
