/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import BE_URL from "../../../../config";

const COLLAPSED_HEIGHT = 300;

const PortfolioPageCardInnerHeroSection = () => {
  const { hotelName } = useParams();
  const [hotelData, setHotelData] = useState(null);
  const [overviewData, setOverviewData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  const paragraphRef = useRef(null);

  const slugify = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const hotelRes = await axios.get(`${BE_URL}/hotelName`);
  //       const hotels = hotelRes.data.data;

  //       const matchedHotel = hotels.find(
  //         (hotel) => slugify(hotel.name) === hotelName
  //       );

  //       if (!matchedHotel) {
  //         console.warn("Hotel not found for slug:", hotelName);
  //         return;
  //       }
  //       if (hotelRes.status === 200 && hotels.length > 0) {

  //         const tmp = JSON.parse(hotels);
  //         setHotelData({
  //         id: matchedHotel.id,
  //         displayName: matchedHotel.name,
  //       })

  //       } else {
          
  //       }
  //       setHotelData({
  //         id: matchedHotel.id,
  //         displayName: matchedHotel.name,
  //       });

  //       const overviewRes = await axios.get(
  //         `${BE_URL}/hotelOverview/hotel/${matchedHotel.id}`
  //       );

  //       const overview = overviewRes?.data?.data?.[0];

  //       if (overview) {
  //         const imageUrls = overview.images.map(
  //           (img) => `${BE_URL}/Images/HotelImages/HotelOverview/${img}`
  //         );

  //         setOverviewData({
  //           description: overview.description,
  //           images: imageUrls,
  //         });
  //       } else {
  //         setOverviewData({
  //           description: "No overview available.",
  //           images: [],
  //         });
  //       }
  //     } catch (err) {
  //       console.error("Error fetching hotel or overview data:", err);
  //     }
  //   };

  //   fetchData();
  // }, [hotelName]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const hotelRes = await axios.get(`${BE_URL}/hotelName`);
      let hotels = hotelRes.data.data;

      if (hotelRes.status === 200 && hotels.length > 0) {
        // Check if hotels is a string and parse if necessary
        if (typeof hotels === "string") {
          hotels = JSON.parse(hotels);
        }

        const matchedHotel = hotels.find(
          (hotel) => slugify(hotel.name) === hotelName
        );

        if (!matchedHotel) {
          console.warn("Hotel not found for slug:", hotelName);
          return;
        }

        setHotelData({
          id: matchedHotel.id,
          displayName: matchedHotel.name,
        });

        const overviewRes = await axios.get(
          `${BE_URL}/hotelOverview/hotel/${matchedHotel.id}`
        );

        const overview = overviewRes?.data?.data?.[0];

        if (overview) {
          const imageUrls = overview.images.map(
            (img) => `${BE_URL}/Images/HotelImages/HotelOverview/${img}`
          );

          setOverviewData({
            description: overview.description,
            images: imageUrls,
          });
        } else {
          setOverviewData({
            description: "No overview available.",
            images: [],
          });
        }
      } else {
        console.warn("No hotels found in API response");
      }
    } catch (err) {
      console.error("Error fetching hotel or overview data:", err);
    }
  };

  fetchData();
}, [hotelName]);


  useEffect(() => {
    const checkOverflow = () => {
      if (paragraphRef.current) {
        setNeedsReadMore(paragraphRef.current.scrollHeight > COLLAPSED_HEIGHT);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [overviewData]);

  const toggleReadMore = () => setIsExpanded((prev) => !prev);
  const handleNext = () =>
    setCurrentIndex((prev) =>
      overviewData?.images?.length ? (prev + 1) % overviewData.images.length : 0
    );
  const handlePrev = () =>
    setCurrentIndex((prev) =>
      overviewData?.images?.length
        ? (prev - 1 + overviewData.images.length) % overviewData.images.length
        : 0
    );

  if (!hotelData || !overviewData) {
    return (
      <div className="min-h-[300px] flex items-center justify-center text-gray-500">
        Loading hotel overview...
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence>
            {overviewData.images?.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${hotelData.displayName} ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                  />
                )
            )}
          </AnimatePresence>

          {overviewData.images?.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10"
              >
                <FaAngleLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10"
              >
                <FaAngleRight size={28} />
              </button>
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                {overviewData.images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <motion.div
          className="h-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 ml-2">
            {hotelData.displayName}
          </h2>
          <div
            className="text-gray-600 leading-relaxed text-justify font-semibold p-2 transition-all duration-300"
            ref={paragraphRef}
            style={{
              maxHeight: isExpanded ? "none" : COLLAPSED_HEIGHT,
              overflow: isExpanded ? "auto" : "hidden",
              scrollbarWidth: "thin",
            }}
          >
            {overviewData.description}
          </div>
          {needsReadMore && (
            <button
              onClick={toggleReadMore}
              className="text-blue-500 underline mt-2 ml-2 w-fit cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPageCardInnerHeroSection;
