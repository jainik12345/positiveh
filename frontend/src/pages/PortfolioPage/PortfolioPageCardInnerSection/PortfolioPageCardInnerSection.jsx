import React from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/banner.jpg";

const PortfolioPageCardInnerSection = () => {
  const { hotelName } = useParams();

  const formatHotelName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const displayName = formatHotelName(hotelName);
  return (
    <>
      <BannerSection bgImage={image} title={displayName} subtitle="" />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl text-center font-bold mb-6">{displayName}</h2>
      </div>
    </>
  );
};

export default PortfolioPageCardInnerSection;
