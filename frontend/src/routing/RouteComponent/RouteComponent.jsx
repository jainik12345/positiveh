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
        {/* Home */}

        <Route
          path="/"
          element={
            <WebsitePage>
              <HomePage />
            </WebsitePage>
          }
        />

        {/* About Us */}

        <Route
          path="/about"
          element={
            <WebsitePage>
              <AboutPage />
            </WebsitePage>
          }
        />

        {/* Contact Us */}

        <Route
          path="/contact-us"
          element={
            <WebsitePage>
              <ContactUsPage />
            </WebsitePage>
          }
        />

        {/* Teams */}

        <Route
          path="/team"
          element={
            <WebsitePage>
              <TeamPage />
            </WebsitePage>
          }
        />

        {/* Private Policy */}

        <Route
          path="/private-policy"
          element={
            <WebsitePage>
              <PrivatePolicy />
            </WebsitePage>
          }
        />

        {/* Portfolio */}

        <Route
          path="/portfolio"
          element={
            <WebsitePage>
              <PortfolioPage />
            </WebsitePage>
          }
        />

        {/* Careers */}

        <Route
          path="/careers"
          element={
            <WebsitePage>
              <CareersPage />
            </WebsitePage>
          }
        />

        {/* Terms & Conditions */}

        <Route
          path="/terms-conditions"
          element={
            <WebsitePage>
              <TermsConditionsPage />
            </WebsitePage>
          }
        />
      </Routes>
    </>
  );
};
    
export default RouteComponent;
