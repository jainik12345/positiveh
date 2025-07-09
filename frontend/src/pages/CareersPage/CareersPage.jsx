import CareerPageMoreInfoSection from "./CareerPageMoreInfoSection/CareerPageMoreInfoSection";
import CareerPageOpportunitiesSection from "./CareerPageOpportunitiesSection/CareerPageOpportunitiesSection";
import CareerPageRedirectContactUsSection from "./CareerPageRedirectContactUsSection/CareerPageRedirectContactUsSection";
import BannerSection from "../../components/BannerSection/BannerSection";
import bgImage from "../../assets/images/career_download.jpeg"

const CareersPage = () => {
  return (
    <>
      <BannerSection  bgImage={bgImage} title="Be The Part Of Our Family" subtitle="Join The Our Family"/>
      <CareerPageOpportunitiesSection />
      <CareerPageMoreInfoSection />
      <CareerPageRedirectContactUsSection />
    </>
  );
};

export default CareersPage;
