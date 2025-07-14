import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./../../components/MainLayout";
import LoginPage from "../../components/LoginSection/LoginPage";
import ForgotPassword from "../../components/LoginSection/ForgotPassword";
import VerifyOTP from "../../components/LoginSection/VerifyOTP";
import ResetPassword from "../../components/LoginSection/ResetPassword";

import HomePage from "../../pages/HomePage/HomePage"; 
import TermsConditions from "../../pages/TermsConditions/TermsConditions";
import TermsConditionsInsert from "../../pages/TermsConditions/TermsConditionsInsert";
import TermsConditionsUpdate from "../../pages/TermsConditions/TermsConditionsUpdate";
import TermsConditionsTrace from "../../pages/TermsConditions/TermsConditionsTrace";
import TeamSectionTitle from "../../pages/Team/TeamSectionTitle/TeamSectionTitle";
import TeamMember from './../../pages/Team/TeamMember/TeamMember';
import TeamMemberInsert from './../../pages/Team/TeamMember/TeamMemberInsert';
import TeamMemberUpdate from './../../pages/Team/TeamMember/TeamMemberUpdate';
import TeamMemberTrace from './../../pages/Team/TeamMember/TeamMemberTrace';
import ContactForm from './../../pages/ContactPage/ContactForm/ContactForm';
import ContactFormTrace from './../../pages/ContactPage/ContactForm/ContactFormTrace';
import ContactDataDetails from './../../pages/ContactPage/ContactDataDetails/ContactDataDetails';
import CareerOpportunities from "../../pages/CareerPage/CareerOpportunities/CareerOpportunities";
import CareerOpportunitiesInsert from "../../pages/CareerPage/CareerOpportunities/CareerOpportunitiesInsert";
import CareerOpportunitiesUpdate from "../../pages/CareerPage/CareerOpportunities/CareerOpportunitiesUpdate";
import CareerOpportunitiesTrace from "../../pages/CareerPage/CareerOpportunities/CareerOpportunitiesTrace";
import HomeOurTeam from "../../pages/HomePage/HomeOurTeam/HomeOurTeam"; 
import HomeOurPortfolio from "../../pages/HomePage/HomeOurPortfolio/HomeOurPortfolio";
import HomeOurPortfolioInsert from "../../pages/HomePage/HomeOurPortfolio/HomeOurPortfolioInsert";
import HomeOurPortfolioUpdate from "../../pages/HomePage/HomeOurPortfolio/HomeOurPortfolioUpdate";
import HomeOurPortfolioTrace from "../../pages/HomePage/HomeOurPortfolio/HomeOurPortfolioTrace";
import CareerMoreInfo from "../../pages/CareerPage/CareerMoreInfo/CareerMoreInfo";
import CareerMoreInfoInsert from './../../pages/CareerPage/CareerMoreInfo/CareerMoreInfoInsert';
import CareerMoreInfoUpdate from './../../pages/CareerPage/CareerMoreInfo/CareerMoreInfoUpdate';
import CareerMoreInfoTrace from './../../pages/CareerPage/CareerMoreInfo/CareerMoreInfoTrace';
import HomeImageSlider from './../../pages/HomePage/HomeImageSlider/HomeImageSlider';
import HomeImageSliderInsert from './../../pages/HomePage/HomeImageSlider/HomeImageSliderInsert';
import HomeImageSliderUpdate from './../../pages/HomePage/HomeImageSlider/HomeImageSliderUpdate';
import HomeImageSliderTrace from './../../pages/HomePage/HomeImageSlider/HomeImageSliderTrace';
import HomeAboutHotelSection from "../../pages/HomePage/HomeAboutHotelSection/HomeAboutHotelSection";
import HomeAboutHotelSectionInsert from "../../pages/HomePage/HomeAboutHotelSection/HomeAboutHotelSectionInsert";
import HomeAboutHotelSectionUpdate from "../../pages/HomePage/HomeAboutHotelSection/HomeAboutHotelSectionUpdate";
import HomeAboutHotelSectionTrace from "../../pages/HomePage/HomeAboutHotelSection/HomeAboutHotelSectionTrace";
import PrivatePolicy from '../../pages/PrivatePolicy/PrivatePolicy';
import PrivatePolicyInsert from "../../pages/PrivatePolicy/PrivatePolicyInsert";
import PrivatePolicyUpdate from "../../pages/PrivatePolicy/PrivatePolicyUpdate";
import PrivatePolicyTrace from './../../pages/PrivatePolicy/PrivatePolicyTrace';
import HotelName from './../../pages/HotelPage/HotelName/HotelName';
import HotelNameInsert from './../../pages/HotelPage/HotelName/HotelNameInsert';
import HotelNameUpdate from './../../pages/HotelPage/HotelName/HotelNameUpdate';
import HotelNameTrace from './../../pages/HotelPage/HotelName/HotelNameTrace';
import HotelOverview from './../../pages/HotelPage/HotelOverview/HotelOverview';
import HotelOverviewInsert from './../../pages/HotelPage/HotelOverview/HotelOverviewInsert';
import HotelOverviewUpdate from './../../pages/HotelPage/HotelOverview/HotelOverviewUpdate';
import HotelOverviewTrace from './../../pages/HotelPage/HotelOverview/HotelOverviewTrace';
import HotelBannerBgImage from './../../pages/HotelPage/HotelBannerBgImage/HotelBannerBgImage';
import HotelBannerBgImageInsert from './../../pages/HotelPage/HotelBannerBgImage/HotelBannerBgImageInsert';
import HotelBannerBgImageUpdate from './../../pages/HotelPage/HotelBannerBgImage/HotelBannerBgImageUpdate';
import HotelBannerBgImageTrace from './../../pages/HotelPage/HotelBannerBgImage/HotelBannerBgImageTrace';
import HotelAmenities from './../../pages/HotelPage/HotelAmenities/HotelAmenities';
import HotelAmenitiesInsert from './../../pages/HotelPage/HotelAmenities/HotelAmenitiesInsert';
import HotelAmenitiesUpdate from './../../pages/HotelPage/HotelAmenities/HotelAmenitiesUpdate';
import HotelAmenitiesTrace from './../../pages/HotelPage/HotelAmenities/HotelAmenitiesTrace';
import HotelGallery from './../../pages/HotelPage/HotelGallery/HotelGallery';
import HotelGalleryInsert from './../../pages/HotelPage/HotelGallery/HotelGalleryInsert';
import HotelGalleryUpdate from './../../pages/HotelPage/HotelGallery/HotelGalleryUpdate';
import HotelGalleryTrace from './../../pages/HotelPage/HotelGallery/HotelGalleryTrace';
import HotelLocation from './../../pages/HotelPage/HotelLocation/HotelLocation';
import HotelLocationInsert from './../../pages/HotelPage/HotelLocation/HotelLocationInsert';
import HotelLocationUpdate from './../../pages/HotelPage/HotelLocation/HotelLocationUpdate';
import HotelLocationTrace from './../../pages/HotelPage/HotelLocation/HotelLocationTrace';
import HotelInquirys from './../../pages/HotelPage/HotelInquirys/HotelInquirys';
import HotelInquirysTrace from './../../pages/HotelPage/HotelInquirys/HotelInquirysTrace';
import EmployeeData from "../../pages/UserSection/EmployeeData/EmployeeData";
import EmployeeDataInsert from "../../pages/UserSection/EmployeeData/EmployeeDataInsert";
import EmployeeDataUpdate from "../../pages/UserSection/EmployeeData/EmployeeDataUpdate";
import EmployeeDataTrace from "../../pages/UserSection/EmployeeData/EmployeeDataTrace";
import EmployeeDashboard from "../../pages/EmployeeDashboard/EmployeeDashboard";
// import EmployeeDashboard from "../../components/LoginSection/EmployeeDashboard";
 
const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* <Route path="/employee-dashboard" element={<EmployeeDashboard/>} /> */}


        <Route path="/employee-dashboard" element={<EmployeeDashboard/>} />
    
        {/* Redirect / to /admin */}

        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/" element={<MainLayout />}>
          {/* -----------------------------------------------------Home Pages----------------------------------------------------- */}

          <Route path="/home-page" element={<HomePage />} />


          <Route path="/home-our-team" element={<HomeOurTeam/>} /> 

          <Route path="/home-our-portfolio" element={<HomeOurPortfolio/>} />
          <Route path="/home-our-portfolio/insert" element={<HomeOurPortfolioInsert/>} />
          <Route path="/home-our-portfolio/update" element={<HomeOurPortfolioUpdate/>} />
          <Route path="/home-our-portfolio/trace" element={<HomeOurPortfolioTrace/>} />



          <Route path="/home-image-slider" element={<HomeImageSlider/>} />
          <Route path="/home-image-slider/insert" element={<HomeImageSliderInsert/>} />
          <Route path="/home-image-slider/update" element={<HomeImageSliderUpdate/>} />
          <Route path="/home-image-slider/trace" element={<HomeImageSliderTrace/>} />

          <Route path="/home-about-hotel-section" element={<HomeAboutHotelSection/>} />
          <Route path="/home-about-hotel-section/insert" element={<HomeAboutHotelSectionInsert/>} />
          <Route path="/home-about-hotel-section/update" element={<HomeAboutHotelSectionUpdate/>} />
          <Route path="/home-about-hotel-section/trace" element={<HomeAboutHotelSectionTrace/>} />



          {/* -----------------------------------------------------Terms----------------------------------------------------- */}




          <Route path="/private-policy" element={<PrivatePolicy />} />
          <Route path="/private-policy/insert" element={<PrivatePolicyInsert />} />
          <Route path="/private-policy/update" element={<PrivatePolicyUpdate/>} />
          <Route path="/private-policy/trace" element={<PrivatePolicyTrace />} />


          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-conditions/insert" element={<TermsConditionsInsert />} />
          <Route path="/terms-conditions/update" element={<TermsConditionsUpdate />} />
          <Route path="/terms-conditions/trace" element={<TermsConditionsTrace />} />


          {/* -----------------------------------------------------Team Pages----------------------------------------------------- */}
          <Route path="/team-section-title" element={<TeamSectionTitle />} />

          <Route path="/team-member" element={<TeamMember />} />
          <Route path="/team-member/insert" element={<TeamMemberInsert />} />
          <Route path="/team-member/update" element={<TeamMemberUpdate />} />
          <Route path="/team-member/trace" element={<TeamMemberTrace />} />

          {/* -----------------------------------------------------Contact Pages----------------------------------------------------- */}

          {<Route path="/contact-form" element={<ContactForm />} />}
          {<Route path="/contact-form/trace" element={<ContactFormTrace />} />}
          {<Route path="/contact-data-details" element={<ContactDataDetails />} />}



          {/* -----------------------------------------------------Career----------------------------------------------------- */}



          <Route path="/career-opportunities" element={<CareerOpportunities/>} />
          <Route path="/career-opportunities/insert" element={<CareerOpportunitiesInsert/>} />
          <Route path="/career-opportunities/update" element={<CareerOpportunitiesUpdate/>} />
          <Route path="/career-opportunities/trace" element={<CareerOpportunitiesTrace/>} />


          <Route path="/career-more-info" element={<CareerMoreInfo/>} />
          <Route path="/career-more-info/insert" element={<CareerMoreInfoInsert/>} />
          <Route path="/career-more-info/update" element={<CareerMoreInfoUpdate/>} />
          <Route path="/career-more-info/trace" element={<CareerMoreInfoTrace/>} />



          {/* -----------------------------------------------------Hotel----------------------------------------------------- */}



          <Route path="/hotel-name" element={<HotelName/>} />
          <Route path="/hotel-name/insert" element={<HotelNameInsert/>} />
          <Route path="/hotel-name/update" element={<HotelNameUpdate/>} />
          <Route path="/hotel-name/trace" element={<HotelNameTrace/>} />


          <Route path="/hotel-overview" element={<HotelOverview/>} />
          <Route path="/hotel-overview/insert" element={<HotelOverviewInsert/>} />
          <Route path="/hotel-overview/update" element={<HotelOverviewUpdate/>} />
          <Route path="/hotel-overview/trace" element={<HotelOverviewTrace/>} />


          <Route path="/hotel-banner-bg-image" element={<HotelBannerBgImage/>} />
          <Route path="/hotel-banner-bg-image/insert" element={<HotelBannerBgImageInsert/>} />
          <Route path="/hotel-banner-bg-image/update" element={<HotelBannerBgImageUpdate/>} />
          <Route path="/hotel-banner-bg-image/trace" element={<HotelBannerBgImageTrace/>} />


          <Route path="/hotel-amenities" element={<HotelAmenities/>} />
          <Route path="/hotel-amenities/insert" element={<HotelAmenitiesInsert/>} />
          <Route path="/hotel-amenities/update" element={<HotelAmenitiesUpdate/>} />
          <Route path="/hotel-amenities/trace" element={<HotelAmenitiesTrace/>} />


          <Route path="/hotel-gallery" element={<HotelGallery/>} />
          <Route path="/hotel-gallery/insert" element={<HotelGalleryInsert/>} />
          <Route path="/hotel-gallery/update" element={<HotelGalleryUpdate/>} />
          <Route path="/hotel-gallery/trace" element={<HotelGalleryTrace/>} />

          <Route path="/hotel-location" element={<HotelLocation/>} />
          <Route path="/hotel-location/insert" element={<HotelLocationInsert/>} />
          <Route path="/hotel-location/update" element={<HotelLocationUpdate/>} />
          <Route path="/hotel-location/trace" element={<HotelLocationTrace/>} />


          <Route path="/hotel-inquirys" element={<HotelInquirys/>} />
          <Route path="/hotel-inquirys/trace" element={<HotelInquirysTrace/>} />


          {/* -----------------------------------------USers Section----------------- ----------------------------- */}


          <Route path="/employee-data" element={<EmployeeData/>} />
          <Route path="/employee-data/insert" element={<EmployeeDataInsert/>} />
          <Route path="/employee-data/update" element={<EmployeeDataUpdate/>} />
          <Route path="/employee-data/trace" element={<EmployeeDataTrace/>} />


        </Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
