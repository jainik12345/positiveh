import React from "react";
import BannerSection from "../../../components/BannerSection/BannerSection";
import image from "../../../assets/images/contact_banner.jpg";

const ContactUsPageBanner = () => {
  return (
    <BannerSection
      bgImage={image}
      title="Contact Us"
      subtitle=""
    />
  );
};

export default ContactUsPageBanner;
