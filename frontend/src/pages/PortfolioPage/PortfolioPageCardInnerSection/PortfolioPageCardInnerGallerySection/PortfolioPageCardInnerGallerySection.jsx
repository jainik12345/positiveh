// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
// import img1 from "../../../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
// import img2 from "../../../../assets/images/whats_new_image_1.avif";

// const galleryImages = [img1, img2, img1]; // All gallery images here

// const PortfolioPageCardInnerGallerySection = () => {
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const openPopup = (index) => {
//     setCurrentImageIndex(index);
//     setPopupOpen(true);
//   };

//   const closePopup = () => {
//     setPopupOpen(false);
//   };

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
//     <div className="flex flex-col justify-center items-center relative w-full py-10">
//       <div className="max-w-[1440px] mx-auto px-8 space-y-12 w-full">
//         {/* Section Title */}
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-serif text-gray-700">
//             Gallery
//           </h2>
//         </div>

//         {/* Images Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {galleryImages.map((img, idx) => (
//             <motion.img
//               key={idx}
//               src={img}
//               alt={`Gallery ${idx}`}
//               onClick={() => openPopup(idx)}
//               whileHover={{ scale: 0.97 }}
//               transition={{ duration: 0.3 }}
//               className="w-full h-[250px] object-cover cursor-pointer rounded shadow"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Image Popup */}
//       <AnimatePresence>
//         {popupOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-[10px]"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.5, opacity: 0, y: 100 }}
//               transition={{ duration: 0.4 }}
//               className="relative max-w-[90%] max-h-[90%] flex flex-col items-center"
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
//                 className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
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
//     </div>
//   );
// };

// export default PortfolioPageCardInnerGallerySection;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import img1 from "../../../../assets/images/22172a778498fdd0b4894ccf93fd1ca3.jpg";
import img2 from "../../../../assets/images/whats_new_image_1.avif";

const galleryImages = [img1, img2, img1]; // All gallery images here

const PortfolioPageCardInnerGallerySection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index) => {
    setCurrentImageIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  return (
    <div className="flex flex-col justify-center items-center relative w-full py-10">
      <div className="max-w-[1440px] mx-auto px-8 space-y-12 w-full">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700">
            Gallery
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Gallery ${idx}`}
              onClick={() => openPopup(idx)}
              whileHover={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="w-full h-[250px] object-cover cursor-pointer rounded shadow"
            />
          ))}
        </div>
      </div>

      {/* Image Popup */}
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
              className="relative w-[90vw] max-w-[800px] aspect-video flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                <FaTimes />
              </button>

              {/* Image Display */}
              <img
                src={galleryImages[currentImageIndex]}
                alt="Popup"
                className="w-full h-full  rounded-lg shadow-lg bg-cover"
              />

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-60"
                >
                  <FaArrowLeft size={30} />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-60"
                >
                  <FaArrowRight size={30} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPageCardInnerGallerySection;
