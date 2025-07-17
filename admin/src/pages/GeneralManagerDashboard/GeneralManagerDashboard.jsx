/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./GeneralManagerSidebar";
import ProfileSettings from "./GeneralManagerProfileSetting";
import GeneralManagerDesignationSection from "./GeneralManagerDesignationSection"

import BE_URL from "../../config";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const GeneralManagerDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [manager, setManager] = useState(null);
  const [hotelName, setHotelName] = useState("");
  const [loading, setLoading] = useState(true);

  const managerId = localStorage.getItem("generalManagerId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManager = async () => {
      try {
        const res = await axios.get(
          `${BE_URL}/generalManagerDataName/data/${managerId}`
        );
        const gm = res.data?.data?.[0];
        if (!gm) throw new Error("General Manager not found");
        setManager(gm);

        const hotelRes = await axios.get(`${BE_URL}/hotelName/${gm.hotel_id}`);
        setHotelName(hotelRes.data?.data?.name || "Unknown Hotel");
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (managerId) fetchManager();
  }, [managerId]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center text-white bg-[#0f1115] px-4 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          You do not have direct access.
        </h2>
        <p className="text-gray-400 mb-6">
          Please Login first to view the General Manager Dashboard.
        </p>
        <button
          onClick={() => navigate("/admin")}
          className="px-6 py-3 cursor-pointer bg-[#1746ff] hover:bg-[#133dcc] text-white font-semibold rounded-lg shadow-md transition"
        >
          🔐 Go to Login
        </button>
      </div>
    );
  }

  if (!manager) {
    return (
      <div className="h-screen flex justify-center items-center text-red-500 bg-[#0f1115]">
        General Manager not found.
      </div>
    );
  }

  return (
    <div className="flex bg-[#0f1115] text-white min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#15181c] min-h-screen fixed top-0 left-0 shadow-xl z-10">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Right Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-[#0f1115] text-white px-6 py-4 shadow">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#1746ff]">
              General Manager Portal
            </h1>
            <div className="flex items-center gap-3">
              <img
                src={
                  manager.image?.startsWith("http")
                    ? manager.image
                    : `${BE_URL}/Images/GeneralManagerDataImages/GeneralManagerDataName/${manager.image}`
                }
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover border-2 border-[#1746ff]"
              />
              <span>{manager.name}</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <AnimatePresence mode="wait">
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProfileSettings employee={manager} hotelName={hotelName} />
              </motion.div>
            )}

            {activeTab === "designation" && (
              <motion.div
                key="designation"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GeneralManagerDesignationSection />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default GeneralManagerDashboard;
