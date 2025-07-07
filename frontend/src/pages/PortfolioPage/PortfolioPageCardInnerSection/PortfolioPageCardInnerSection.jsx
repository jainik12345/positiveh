import React from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/banner.jpg";
import hotelData from "../hotelData";
import TeamPageRedirectContactUsSection from "../../TeamPage/TeamPageRedirectContactUsSection/TeamPageRedirectContactUsSection";

const PortfolioPageCardInnerSection = () => {
  const { hotelName } = useParams();
  const hotel = hotelData[hotelName];

  if (!hotel) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Hotel Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <BannerSection bgImage={image} title={hotel.displayName} subtitle="" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={hotel.image}
            alt={hotel.displayName}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {hotel.displayName}
            </h2>
            <p className="text-gray-600 leading-relaxed">{hotel.overview}</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Hotel Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-600">
            {hotel.amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded shadow text-center"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </div>
      <TeamPageRedirectContactUsSection />
    </>
  );
};

export default PortfolioPageCardInnerSection;
