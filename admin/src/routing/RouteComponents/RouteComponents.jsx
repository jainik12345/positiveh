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

          <Route path="/home-image" element={<HomePage />} />

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

        </Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
