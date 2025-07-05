import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./../../components/MainLayout";
import LoginPage from "../../components/LoginSection/LoginPage";
import ForgotPassword from "../../components/LoginSection/ForgotPassword";
import VerifyOTP from "../../components/LoginSection/VerifyOTP";
import ResetPassword from "../../components/LoginSection/ResetPassword";

import HomePage from "../../pages/HomePage/HomePage";
import PrivatePolicy from "../../pages/PrivatePolicy/PrivatePolicy";
import TermsConditions from "../../pages/TermsConditions/TermsConditions";
import PrivatePolicyInsert from "../../pages/PrivatePolicy/PrivatePolicyInsert";
import PrivatePolicyUpdate from "../../pages/PrivatePolicy/PrivatePolicyUpdate";
import PrivatePolicyTrace from "../../pages/PrivatePolicy/PrivatePolicyTrace";
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

const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
    
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



          {/* -----------------------------------------------------Terms----------------------------------------------------- */}




          <Route path="private-policy" element={<PrivatePolicy />} />
          <Route path="private-policy/insert" element={<PrivatePolicyInsert />} />
          <Route path="private-policy/update" element={<PrivatePolicyUpdate/>} />
          <Route path="private-policy/trace" element={<PrivatePolicyTrace />} />


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




        </Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
