/* eslint-disable no-unused-vars */

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFileContract, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { MdPolicy } from "react-icons/md";
import { IoIosHome, IoIosContact } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";

const menuItems = [
  {
    path: "/home",
    name: "Home",
    icon: <IoIosHome />,
    children: [
      { path: "/home-our-team", name: "Home Our Team" },
      { path: "/home-our-portfolio", name: "Home Our Portfolio" },
      { path: "/home-image-slider", name: "Home Image Slider" },
      { path: "/home-about-hotel-section", name: "Home About Hotels Section" },
    ],
  },

  {
    path: "/team",
    name: "Team",
    icon: <AiOutlineTeam />,
    children: [
      { path: "/team-member", name: "Team Member" },
      { path: "/team-section-title", name: "Team Section Title" },
    ],
  },

  {
    path: "/contact",
    name: "Contact",
    icon: <IoIosContact />,
    children: [
      { path: "/contact-form", name: "Contact Form" },
      { path: "/contact-data-details", name: "Contact Data Details" },
    ],
  },

  {
    path: "/career",
    name: "Career",
    icon: <IoIosContact />,
    children: [
      { path: "/career-opportunities", name: "Career Opportunities" },
      { path: "/career-more-info", name: "Career More Info" },
    ],
  },

  {
    path: "/hotel",
    name: "Hotel",
    icon: <FaHotel />,
    children: [
      { path: "/hotel-name", name: "Hotel Name" },
      { path: "/hotel-overview", name: "Hotel Overview" },
      { path: "/hotel-banner-bg-image", name: "Hotel Banner Bg image" },
      { path: "/hotel-amenities", name: "Hotel Amenities" },
      { path: "/hotel-gallery", name: "Hotel Gallery" },
      { path: "/hotel-location", name: "Hotel Location" },
      { path: "/hotel-inquirys", name: "Hotel Inquirys" },
    ],
  },

  {
    path: "/employee-data",
    name: "Employee Data",
    icon: <FaPersonChalkboard />,
    children: [
      { path: "/employee-designation", name: "Employee Designation" },
      { path: "/employee-data", name: "Employee Data Name" },
    ],
  },

  {
    path: "/general-manager",
    name: "General Manager",
    icon: <FcManager />,
    children: [
      { path: "/general-manager-data-name", name: "General Manager Data Name" },
    ],
  },

  {
    path: "/private-policy",
    name: "Private Policy",
    icon: <MdPolicy />,
  },
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
    icon: <FaFileContract />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedMenu, setExpandedMenu] = React.useState("");

  const handleToggle = (name) => {
    setExpandedMenu((prev) => (prev === name ? "" : name));
  };

  const isActive = (item) => {
    if (item.children && item.children.length > 0) {
      return (
        item.children.some((child) =>
          location.pathname.startsWith(child.path)
        ) || location.pathname.startsWith(item.path)
      );
    }
    return location.pathname.startsWith(item.path);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    navigate("/admin");
  };

  return (
    <div
      className="fixed top-0  left-0 h-screen w-[280px]  bg-[#15181c] overflow-auto flex flex-col justify-between z-40 shadow-2xl"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#15181c #2a3037",
      }}
    >
      {/* Logo */}
      <div>
        <div className="flex items-center justify-center h-[90px] border-b border-[#232323]">
          <span className="text-2xl font-bold text-white tracking-widest">
            LOGO
          </span>
        </div>

        <nav className="mt-4">
          <ul className="flex flex-col gap-1 px-2">
            {menuItems.map((item) => {
              const active = isActive(item);
              const hasChildren = item.children && item.children.length > 0;

              return (
                <li key={item.path}>
                  {hasChildren ? (
                    <>
                      <div
                        onClick={() => handleToggle(item.name)}
                        className={`flex items-center h-12 px-5 rounded-xl font-medium text-base transition-colors duration-200 gap-4 cursor-pointer ${
                          active
                            ? "bg-white text-[#1746ff] shadow-lg"
                            : "text-white hover:bg-[#232731]"
                        }`}
                      >
                        <span className={`text-lg`}>{item.icon}</span>
                        {item.name}
                        <span className="ml-auto text-sm">
                          <svg
                            className={`transition-transform duration-200 ${
                              expandedMenu === item.name ? "rotate-90" : ""
                            }`}
                            width="15"
                            height="15"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7 6a1 1 0 011.707-.707l4 4a1 1 0 010 1.414l-4 4A1 1 0 017 13V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>

                      {/* Animate Children */}
                      <AnimatePresence initial={false}>
                        {expandedMenu === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden p-1 "
                          >
                            {item.children.map((child) => {
                              const isChildActive =
                                location.pathname.startsWith(child.path);
                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`block ml-8  px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                    isChildActive
                                      ? "bg-[#003af7] text-[#ffffff] shadow-sm"
                                      : "text-white hover:bg-[#232731]"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center h-12 px-5 rounded-xl font-medium text-base transition-colors duration-200 gap-4 ${
                        active
                          ? "bg-white text-[#1746ff] shadow-lg"
                          : "text-white hover:bg-[#232731]"
                      }`}
                    >
                      <span className={`text-lg`}>{item.icon}</span>
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Logout */}
      <div className="flex flex-col items-center mb-8">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-[90%] py-3 justify-center rounded-xl bg-[#1746ff] text-white font-semibold text-lg shadow-lg transition-all cursor-pointer"
        >
          <FaSignOutAlt className="text-xl" />
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
