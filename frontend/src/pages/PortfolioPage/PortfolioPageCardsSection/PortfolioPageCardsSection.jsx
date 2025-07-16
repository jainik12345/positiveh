// /* eslint-disable no-unused-vars */
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// // import InputLabel from "@mui/material/InputLabel";
// // import MenuItem from "@mui/material/MenuItem";
// // import FormControl from "@mui/material/FormControl";
// // import Select from "@mui/material/Select";
// import { useState, useEffect } from "react";
// import BE_URL from "./../../../config";
// import PortfolioPageBannerSection from "../PortfolioPageBannerSection/PortfolioPageBannerSection";

// import axios from "axios";

// const PortfolioPageCardsSection = () => {
//   const [status, setStatus] = useState("ALL");
//   const [hotels, setHotels] = useState([]);

//   const navigate = useNavigate();

//   // const HandleOnChangeSelector = (event) => {
//   //   setStatus(event.target.value);
//   // };

//   const fetchHotels = async () => {
//     try {
//       const res = await axios.get(`${BE_URL}/hotelName`);
//       console.log("result:_ ",res);
//       if (res.data.status === "success") {
//         setHotels(res.data.data.filter((item) => item.deleted_at === 0));
//       }
//     } catch (err) {
//       console.error("Error fetching hotel data:", err);
//     }
//   };

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const filteredHotels =
//     status === "ALL"
//       ? hotels
//       : hotels.filter((hotel) => hotel.status === status);

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   const makeSlug = (str) =>
//     str
//       .toLowerCase()
//       .replace(/\s+/g, "-")
//       .replace(/[^\w-]/g, "");

//   return (
//     <>
//       <PortfolioPageBannerSection />
//       <section>
//         <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={container}
//             className="text-center mb-10"
//           >
//             <motion.h2
//               className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4"
//               variants={item}
//             >
//               Positive Hospitality Portfolio
//             </motion.h2>
//             <motion.p
//               className="text-md font-semibold md:text-lg text-gray-600"
//               variants={item}
//             >
//               Our portfolio highlights hotels that prioritize guest
//               satisfaction, provide exceptional service and amenities, and
//               embrace their local surroundings while also prioritizing
//               sustainability.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={container}
//             className="flex justify-end p-5 mb-5"
//           >
//             {/* <FormControl className="w-50">
//             <InputLabel id="Status-select-label">Status</InputLabel>
//             <Select
//               labelId="Status-select-label"
//               id="Status"
//               value={status}
//               label="Status"
//               name="Status"
//               onChange={HandleOnChangeSelector}
//               MenuProps={{ disableScrollLock: true }}
//             >
//               <MenuItem value="ALL">All</MenuItem>
//               {["UpComing", "Running"].map((val, index) => (
//                 <MenuItem key={index} value={val}>
//                   {val}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl> */}
//           </motion.div>

//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             initial="hidden"
//             animate="visible"
//             variants={container}
//           >
//             {filteredHotels.map((hotel, index) => (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col h-full"
//                 onClick={() => navigate(`/portfolio/${makeSlug(hotel.name)}`)}
//               >
//                 <div className="h-48 md:h-56 w-full overflow-hidden">
//                   <img
//                     src={`${BE_URL}/Images/HotelImages/HotelName/${hotel.image}`}
//                     alt={hotel.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6 mt-auto">
//                   <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-2">
//                     {hotel.name}
//                   </h3>
//                   <p className="text-gray-600">{hotel.address.trim()}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {filteredHotels.length === 0 && (
//             <p className="text-center text-gray-500 mt-10">
//               No hotels available for the selected status.
//             </p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default PortfolioPageCardsSection;

import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BE_URL from "./../../../config";
import PortfolioPageBannerSection from "../PortfolioPageBannerSection/PortfolioPageBannerSection";
import axios from "axios";

const PortfolioPageCardsSection = () => {
  const navigate = useNavigate();
  const { HotelStatus } = useParams();
  const [FetchError, setFetchError] = useState(false);
  const [AllHotels, setAllHotels] = useState([]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // const makeSlug = (str) =>
  //   str
  //     .toLowerCase()
  //     .replace(/\s+/g, "-")
  //     .replace(/[^\w-]/g, "");

  const makeSlug = (str) =>
    str
      .toLowerCase()
      .replace(/[\s_-]+/g, "") // remove spaces, hyphens, underscores
      .trim();

  //fetching

  useEffect(() => {
    const FetchHotelByCatergory = async () => {
      try {
        const FetchResponse = await axios.get(`${BE_URL}/hotelName`);
        const FilteredResponse = FetchResponse.data.data;

        if (FetchResponse.status === 200 && FilteredResponse.length > 0) {
          if (typeof FilteredResponse === "string") {
            const tmp = JSON.parse(FilteredResponse);
            const FilteredHotelsData = tmp.filter((HotelVal) =>
              makeSlug(HotelStatus).includes(makeSlug(HotelVal.status))
            );
            setAllHotels(FilteredHotelsData);
          } else {
            const FilteredHotelsData = FilteredResponse.filter((HotelVal) =>
              makeSlug(HotelStatus).includes(makeSlug(HotelVal.status))
            );
            setAllHotels(FilteredHotelsData);
          }
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("unable to fetch portfolio card data :- ", error);
        setFetchError(true);
      }
    };

    FetchHotelByCatergory();
  }, []);

  return (
    <>
      <PortfolioPageBannerSection />
      <section>
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4"
              variants={item}
            >
              Positive Hospitality Portfolio
            </motion.h2>
            <motion.p
              className="text-md font-semibold md:text-lg text-gray-600"
              variants={item}
            >
              Our portfolio highlights hotels that prioritize guest
              satisfaction, provide exceptional service and amenities, and
              embrace their local surroundings while also prioritizing
              sustainability.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {AllHotels.map((hotel, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer flex flex-col h-full"
                onClick={() => navigate(`/portfolio/${makeSlug(hotel.name)}`)}
              >
                <div className="h-48 md:h-56 w-full overflow-hidden">
                  <img
                    src={`${BE_URL}/Images/HotelImages/HotelName/${hotel.image}`}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 mt-auto">
                  <h3 className="md:text-2xl text-xl font-bold text-gray-900 mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600">{hotel.address.trim()}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {AllHotels.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No hotels available for the selected status.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioPageCardsSection;
