/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
// import img1 from "../../../../assets/images/h2s.jpg";
// import img2 from "../../../../assets/images/hampton.jpg";

// const galleryImages = [img1, img2, img1, img2];

// const INITIAL_VISIBLE_COUNT = 3;

// const imageMotionProps = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: 60 },
//   transition: { duration: 0.7, ease: "easeOut" },
// };

// const PortfolioPageCardInnerGallerySection = () => {
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showAll, setShowAll] = useState(false);

//   const displayedImages = showAll
//     ? galleryImages
//     : galleryImages.slice(0, INITIAL_VISIBLE_COUNT);

//   const openPopup = (index) => {
//     setCurrentImageIndex(index);
//     setPopupOpen(true);
//   };

//   const closePopup = () => setPopupOpen(false);

//   const handlePrev = () => {
//     setCurrentImageIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + galleryImages.length) % galleryImages.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
//   };

//   return (
//     <motion.div
//       className="max-w-screen-xl mx-auto px-8 space-y-12 "
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//     >
//       {/* Section Title */}
//       <div className="text-center">
//         <h2 className="text-3xl md:text-4xl font-serif text-gray-700">
//           Gallery
//         </h2>
//       </div>

//       {/* Images Grid with per-image motion animation */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         <AnimatePresence initial={false}>
//           {displayedImages.map((img, idx) => (
//             <motion.img
//               key={img + "_" + idx}
//               src={img}
//               alt={`Gallery ${idx}`}
//               onClick={() => openPopup(idx)}
//               whileHover={{ scale: 0.97 }}
//               {...imageMotionProps}
//               className="w-full h-[250px] object-cover cursor-pointer rounded shadow"
//             />
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* View All / Hide Button */}
//       {galleryImages.length > INITIAL_VISIBLE_COUNT && (
//         <div className="text-center">
//           <button
//             onClick={() => setShowAll((prev) => !prev)}
//             className="text-blue-600 hover:text-blue-800 font-medium text-xl transition-colors cursor-pointer"
//           >
//             {showAll ? "Hide" : "View All"}
//           </button>
//         </div>
//       )}

//       {/* Image Popup */}
//       <AnimatePresence>
//         {popupOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-[4px]"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.5, opacity: 0, y: 100 }}
//               transition={{ duration: 0.4 }}
//               className="relative w-[90vw] max-w-[800px] aspect-video flex flex-col items-center"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closePopup}
//                 className="absolute top-4 right-4 text-white text-2xl"
//               >
//                 <FaTimes />
//               </button>

//               {/* Image Display */}
//               <img
//                 src={galleryImages[currentImageIndex]}
//                 alt="Popup"
//                 className="w-full h-full  rounded-lg shadow-lg bg-cover"
//               />

//               {/* Navigation Buttons */}
//               <div className="absolute top-1/2 left-4 -translate-y-1/2">
//                 <button
//                   onClick={handlePrev}
//                   className="bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-60"
//                 >
//                   <FaArrowLeft size={30} />
//                 </button>
//               </div>
//               <div className="absolute top-1/2 right-4 -translate-y-1/2">
//                 <button
//                   onClick={handleNext}
//                   className="bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-60"
//                 >
//                   <FaArrowRight size={30} />
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default PortfolioPageCardInnerGallerySection;

/* */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import axios from "axios";
import BE_URL from "../../../../config";

const INITIAL_VISIBLE_COUNT = 3;

const imageMotionProps = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const PortfolioPageCardInnerGallerySection = () => {
  const { hotelName } = useParams();
  const [galleryImages, setGalleryImages] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const slugify = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Step 1: Get all hotels
        const hotelRes = await axios.get(`${BE_URL}/hotelName`);
        const matched = hotelRes.data.data.find(
          (hotel) => slugify(hotel.name) === hotelName
        );

        if (!matched) return;

        // Step 2: Fetch images by hotel ID
        const galleryRes = await axios.get(
          `${BE_URL}/hotelGallery/hotel/${matched.id}`
        );

        const formattedImages = galleryRes?.data?.data?.map((img) => {
          return `${BE_URL}/Images/HotelImages/HotelGallery/${img.image}`;
        });

        setGalleryImages(formattedImages);
      } catch (err) {
        console.error("Error loading gallery images:", err);
      }
    };

    fetchImages();
  }, [hotelName]);

  const displayedImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_VISIBLE_COUNT);

  const openPopup = (index) => {
    setCurrentImageIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => setPopupOpen(false);
  const handlePrev = () =>
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  const handleNext = () =>
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);

  if (galleryImages.length === 0) return null;

  return (
    <motion.div
      className="max-w-screen-xl mx-auto px-8 space-y-12"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-700">
          Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
          {displayedImages.map((img, idx) => (
            <motion.img
              key={img + "_" + idx}
              src={img}
              alt={`Gallery ${idx}`}
              onClick={() => openPopup(idx)}
              whileHover={{ scale: 0.97 }}
              {...imageMotionProps}
              className="w-full h-[250px] object-cover cursor-pointer rounded shadow"
            />
          ))}
        </AnimatePresence>
      </div>

      {galleryImages.length > INITIAL_VISIBLE_COUNT && (
        <div className="text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-blue-600 hover:text-blue-800 font-medium text-xl"
          >
            {showAll ? "Hide" : "View All"}
          </button>
        </div>
      )}

      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-[4px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="relative w-[90vw] max-w-[980px] aspect-video flex flex-col items-center"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 cursor-pointer text-white text-2xl"
              >
                <FaTimes />
              </button>

              <img
                src={galleryImages[currentImageIndex]}
                alt="Popup"
                className="w-full h-full rounded-lg shadow-lg bg-cover"
              />

              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-30 p-2 cursor-pointer rounded-full text-white hover:bg-opacity-60"
                >
                  <FaArrowLeft size={30} />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-black bg-opacity-30 p-2 cursor-pointer rounded-full text-white hover:bg-opacity-60"
                >
                  <FaArrowRight size={30} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioPageCardInnerGallerySection;
