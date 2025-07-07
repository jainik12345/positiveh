import TeamPageRedirectContactUsSection from "../TeamPage/TeamPageRedirectContactUsSection/TeamPageRedirectContactUsSection";
import PortfolioPageBannerSection from "./PortfolioPageBannerSection/PortfolioPageBannerSection";
import PortfolioPageCardsSection from "./PortfolioPageCardsSection/PortfolioPageCardsSection";
import PortfolioPageRedirectContactUsSection from "./PortfolioPageRedirectContactUsSection/PortfolioPageRedirectContactUsSection";

const PortfolioPage = () => {
  return (
    <>
      <PortfolioPageBannerSection />
      <PortfolioPageCardsSection />
      {/* <PortfolioPageRedirectContactUsSection /> */} {/* Not Use */}
      <TeamPageRedirectContactUsSection />
    </>
  );
};

export default PortfolioPage;
