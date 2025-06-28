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
          {/* <Route path="private-policy" element={<PrivatePolicy />} /> */}
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteComponents;
