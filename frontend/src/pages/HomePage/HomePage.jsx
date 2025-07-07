import HomePageHeroSection from "./HomePageHeroSection/HomePageHeroSection";
import HomePageOurPortfolioSection from "./HomePageOurPortfolioSection/HomePageOurPortfolioSection";
import HomePageInfoSection from "./HomePageInfoSection/HomePageInfoSection";
import HomePageAboutUsSection from "./HomePageAboutUsSection/HomePageAboutUsSection";

const HomePage = () => {
  return (
    <>
      <HomePageHeroSection/>
      <HomePageAboutUsSection/>
      <HomePageInfoSection />
      {/* <HomePageOurPortfolioSection /> */}
    </>
  );
};

export default HomePage;

