import React from "react";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/images/bannerdownload.jpeg";

const PortfolioPageBannerSection = () => {
  return (
    <BannerSection
      bgImage={image}
      title="Our Portfolio"
      subtitle="A group of professionals shaping the future"
    />
  );
};

export default PortfolioPageBannerSection;
