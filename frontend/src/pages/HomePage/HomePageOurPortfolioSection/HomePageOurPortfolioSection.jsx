// import client1 from "../../../assets/images/1.png";
// import client2 from "../../../assets/images/2.png";
// import client3 from "../../../assets/images/3.png";
// import client4 from "../../../assets/images/4.png";
// import { motion } from "framer-motion";

// import "./HomePageOurPortfolioSection.css";

// // Static logo images array
// const ClientLogos = [
//   { src: client1, alt: "Client 1" },
//   { src: client2, alt: "Client 2" },
//   { src: client3, alt: "Client 3" },
//   { src: client4, alt: "Client 4" },
//   ,
// ];

// const HomePageOurPortfolioSection = () => {
//   return (
//     <div className="bg-gray-100 ">
//       <div className="client_logo_main_container py-10 ">
//         <h2 className="text-center md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800">
//           Our Portfolio
//         </h2>
//         <motion.div
//           className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
//           initial={{ opacity: 0, scaleX: 0 }}
//           whileInView={{ opacity: 1, scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         />

//         <div className="client_logo_content">
//           {ClientLogos.concat(ClientLogos).map((logo, index) => (
//             <img
//               key={index}
//               src={logo.src}
//               alt={logo.alt}
//               className="bg-cover ml-2"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageOurPortfolioSection;

import client1 from "../../../assets/images/1.png";
import client2 from "../../../assets/images/2.png";
import client3 from "../../../assets/images/3.png";
import client4 from "../../../assets/images/4.png";
import { motion } from "framer-motion";
import "./HomePageOurPortfolioSection.css";
import BE_URL from "../../../config";
import { useState, useEffect } from "react";
import axios from "axios";

// Static logo images array
const ClientLogos = [
  { src: client1, alt: "Client 1" },
  { src: client2, alt: "Client 2" },
  { src: client3, alt: "Client 3" },
  { src: client4, alt: "Client 4" },
  ,
];

const HomePageOurPortfolioSection = () => {
  const [HomePortfolioData, setHomePortfolioData] = useState([]);
  const [FetchError, setFetchError] = useState(false);

  useEffect(() => {
    const FetchHomePortfolioAPI = async () => {
      try {
        const FetchResponse = await axios.get(`${BE_URL}/homeOurPortfolio`);
        const FetchResponseData = FetchResponse.data.data;

        if (FetchResponse.status === 200 && FetchResponseData.length > 0) {
          if (typeof FetchResponseData === "string") {
            const tmp = JSON.parse(FetchResponseData);
            setHomePortfolioData(tmp);
            setFetchError(false);
          } else {
            setHomePortfolioData(FetchResponseData);
            setFetchError(false);
          }
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("Unable to fetch the data:", error);
        setFetchError(true); // error fetching data
      }
    };

    FetchHomePortfolioAPI();
  }, []);

  return (
    <div className="bg-gray-100 ">
      <div className="client_logo_main_container py-10 ">
        <h2 className="text-center md:text-5xl sm:text-3xl text-2xl font-bold text-gray-800">
          Our Portfolio
        </h2>
        <motion.div
          className="mx-auto h-1 w-30 bg-[var(--color-logo-color)] rounded-full mt-3"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <div className="client_logo_content">
          {HomePortfolioData?.concat(HomePortfolioData)?.map((logo, index) => (
            <img
              key={index}
              src={`${BE_URL}/Images/HomeImages/HomeOurPortfolio/${logo.image}`}
              alt={logo.alt}
              className="bg-cover ml-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageOurPortfolioSection;
