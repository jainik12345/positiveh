import React from "react";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/images/download.jpeg";

const TeamPageBannerSection = () => {
  return (
    <BannerSection
      bgImage={image}
      title="Meet Our Team"
      subtitle="A group of professionals shaping the future"
    />
  );
};

export default TeamPageBannerSection;
