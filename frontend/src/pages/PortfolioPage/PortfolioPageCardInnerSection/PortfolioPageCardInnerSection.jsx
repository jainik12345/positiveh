import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/images/banner.jpg";
import axios from "axios";
import BE_URL from "./../../../config";
import TeamPageRedirectContactUsSection from "../../TeamPage/TeamPageRedirectContactUsSection/TeamPageRedirectContactUsSection";
import PortfolioPageCardInnerHeroSection from "./PortfolioPageCardInnerHeroSection/PortfolioPageCardInnerHeroSection";
import PortfolioPageCardInnerAmenitiesSection from "./PortfolioPageCardInnerAmenitiesSection/PortfolioPageCardInnerAmenitiesSection";
import PortfolioPageCardInnerGallerySection from "./PortfolioPageCardInnerGallerySection/PortfolioPageCardInnerGallerySection";
// import PortfolioPageCardInnerContactSection from "./PortfolioPageCardInnerContactSection/PortfolioPageCardInnerContactSection";

const PortfolioPageCardInnerSection = () => {
  const { hotelName } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  const slugify = (str) =>
    str
      ?.toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(`${BE_URL}/hotelName`);
        const matched = res.data.data.find(
          (item) => slugify(item.name) === hotelName
        );
        if (matched) {
          setHotel({ id: matched.id, displayName: matched.name });
        } else {
          setHotel(null);
        }
      } catch (err) {
        console.error("Error fetching hotel:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [hotelName]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">Loading hotel...</div>
    );
  }

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
      {/* <PortfolioPageCardInnerHeroSection /> */}
      {/* <PortfolioPageCardInnerAmenitiesSection HotelData={hotel} /> */}
      <PortfolioPageCardInnerGallerySection />
      {/* <PortfolioPageCardInnerContactSection /> */}
      <TeamPageRedirectContactUsSection />
    </>
  );
};

export default PortfolioPageCardInnerSection;
