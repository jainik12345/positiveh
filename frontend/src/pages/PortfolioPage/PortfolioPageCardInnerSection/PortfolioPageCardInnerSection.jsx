import BannerSection from "../../../components/BannerSection/BannerSection";
import { useParams } from "react-router-dom";
import hotelData from "../hotelData";
import image from "../../../assets/banner.jpg";
import TeamPageRedirectContactUsSection from "../../TeamPage/TeamPageRedirectContactUsSection/TeamPageRedirectContactUsSection";
import PortfolioPageCardInnerHeroSection from "./PortfolioPageCardInnerHeroSection/PortfolioPageCardInnerHeroSection";
import PortfolioPageCardInnerGallerySection from "./PortfolioPageCardInnerGallerySection/PortfolioPageCardInnerGallerySection";
import PortfolioPageCardInnerContactSection from "./PortfolioPageCardInnerContactSection/PortfolioPageCardInnerContactSection";

import PortfolioPageCardInnerAmenitiesSection from "./PortfolioPageCardInnerAmenitiesSection/PortfolioPageCardInnerAmenitiesSection";

const PortfolioPageCardInnerSection = () => {
  const { hotelName } = useParams();
  const hotel = hotelData[hotelName];

  if (!hotel) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Data Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <BannerSection bgImage={image} title={hotel.displayName} subtitle="" />
      <PortfolioPageCardInnerHeroSection HotelData={hotel} />
      <PortfolioPageCardInnerAmenitiesSection HotelData={hotel} />
      <PortfolioPageCardInnerGallerySection />
      <PortfolioPageCardInnerContactSection />
      <TeamPageRedirectContactUsSection />
    </>
  );
};

export default PortfolioPageCardInnerSection;
