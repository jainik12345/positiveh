import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ContactUsPage from "../../pages/ContactUsPage/ContactUsPage";
import TeamPage from "../../pages/TeamPage/TeamPage";
import PrivatePolicy from "../../pages/PrivatePolicyPage/PrivatePolicyPage";
import PortfolioPage from "../../pages/PortfolioPage/PortfolioPage";
import CareersPage from "../../pages/CareersPage/CareersPage";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import TermsConditionsPage from "../../pages/TermsConditionPage/TermsConditionPage";
import PortfolioPageCardInnerSection from "../../pages/PortfolioPage/PortfolioPageCardInnerSection/PortfolioPageCardInnerSection";

const WebsitePage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const RouteComponent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WebsitePage><HomePage /></WebsitePage>} /> 
        <Route path="/about" element={<WebsitePage><AboutPage /></WebsitePage>} /> 
        <Route path="/contact-us" element={<WebsitePage><ContactUsPage /></WebsitePage>} />
        <Route path="/team" element={<WebsitePage><TeamPage /></WebsitePage>} />
        <Route path="/private-policy" element={<WebsitePage><PrivatePolicy /></WebsitePage>} />
        <Route path="/portfolio" element={<WebsitePage><PortfolioPage /></WebsitePage>} /> 
        <Route path="/portfolio/:hotelName" element={<WebsitePage><PortfolioPageCardInnerSection /></WebsitePage>} />
        <Route path="/careers" element={<WebsitePage><CareersPage /></WebsitePage>} />
        <Route path="/terms-conditions" element={<WebsitePage><TermsConditionsPage /></WebsitePage>} />
      </Routes>
    </>
  );
};
    
export default RouteComponent;