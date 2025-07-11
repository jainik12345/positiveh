// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// import sliderImg1 from "../../../assets/images/banner.jpg";
// import sliderImg2 from "../../../assets/images/banner.jpg";
// import sliderImg3 from "../../../assets/images/banner.jpg";
// import sliderImg4 from "../../../assets/images/banner.jpg";

// const staticImages = [sliderImg1, sliderImg2, sliderImg3, sliderImg4];

// const HomePageHeroSection = ({ images = staticImages }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 4000);
//     setIntervalId(interval);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleNext = () => {
//     clearInterval(intervalId);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     clearInterval(intervalId);
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="w-full h-[60vh] md:h-[100vh] relative overflow-hidden">
//       <AnimatePresence>
//         {images.map((image, index) =>
//           index === currentIndex ? (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 1.05 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 1.2, ease: "easeInOut" }}
//               className="absolute inset-0"
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index}`}
//                 className="w-full h-full"
//               />
//             </motion.div>
//           ) : null
//         )}
//       </AnimatePresence>

//       {/* Black gradient at the top */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>

//       {/* Left Arrow */}
//       <button
//         onClick={handlePrev}
//         className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 text-white z-10"
//       >
//         <FaAngleLeft size={30} />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={handleNext}
//         className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 text-white z-10"
//       >
//         <FaAngleRight size={30} />
//       </button>
//     </div>
//   );
// };

// export default HomePageHeroSection;





//fecthing code


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import sliderImg1 from "../../../assets/images/banner.jpg";
import sliderImg2 from "../../../assets/images/banner.jpg";
import sliderImg3 from "../../../assets/images/banner.jpg";
import sliderImg4 from "../../../assets/images/banner.jpg";

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
    <div className="w-full h-[60vh] md:h-[100vh] relative overflow-hidden">
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
                className="w-full h-full"
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
