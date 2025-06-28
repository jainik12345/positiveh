// /* eslint-disable no-unused-vars */

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaInfoCircle, FaFileContract } from "react-icons/fa";
// import { IoMenu, IoClose } from "react-icons/io5";
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa6";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const location = useLocation();
//   const [expandedMenu, setExpandedMenu] = useState("");

//   const sidebarVariants = {
//     open: { width: "250px" },
//     closed: { width: "80px" },
//   };

//   const menuItem = [
//     {
//       path: "/home",
//       name: "Home",
//       icon: <FaInfoCircle />,
//       children: [{ path: "/home-image-slider", name: "Home Image Slider" }],
//     },

//     {
//       path: "/priate-policy",
//       name: "Private Policy",
//       icon: <FaFileContract />,
//     },

//     {
//       path: "/terms-conditions",
//       name: "Terms & Conditions",
//       icon: <FaFileContract />,
//     },
//   ];

//   const handleToggle = (name) => {
//     setExpandedMenu((prev) => (prev === name ? "" : name));
//   };

//   const isActive = (item) => {
//     if (item.children && item.children.length > 0) {
//       return item.children.some((child) =>
//         location.pathname.startsWith(child.path)
//       );
//     }
//     return location.pathname.startsWith(item.path);
//   };

//   return (
//     <motion.div
//       animate={isOpen ? "open" : "closed"}
//       variants={sidebarVariants}
//       className="h-screen bg-gray-800 text-white flex flex-col fixed top-0 left-0 overflow-hidden shadow-lg z-50"
//     >
//       {/* Top Section */}
//       <div className="flex items-center justify-between p-4 border-b-2 border-gray-700">
//         <div className="flex items-center space-x-2">
//           <div className="text-2xl font-bold">{isOpen ? "Tourism" : "T"}</div>
//         </div>
//         <div className="cursor-pointer text-2xl" onClick={toggleSidebar}>
//           {isOpen ? <IoClose /> : <IoMenu />}
//         </div>
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-1 p-2 space-y-2 overflow-y-auto custom-scrollbar">
//         {menuItem.map((item, index) => {
//           const hasChildren = item.children && item.children.length > 0;
//           const active = isActive(item);
//           const isExpanded = expandedMenu === item.name;

//           if (hasChildren) {
//             return (
//               <div key={index}>
//                 {/* Parent menu item */}
//                 <div
//                   className={`flex items-center justify-between p-2 rounded-[12px] cursor-pointer hover:bg-gray-700 ${
//                     active ? "bg-gray-700" : ""
//                   }`}
//                   onClick={() => handleToggle(item.name)}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="text-xl">{item.icon}</div>
//                     {isOpen && <span>{item.name}</span>}
//                   </div>

//                   {isOpen && (
//                     <motion.div
//                       initial={{ rotate: 0 }}
//                       animate={{ rotate: isExpanded ? 360 : 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="text-lg"
//                     >
//                       {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
//                     </motion.div>
//                   )}
//                 </div>

//                 {/* Child links */}
//                 {isOpen && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={
//                       isExpanded
//                         ? { height: "auto", opacity: 1 }
//                         : { height: 0, opacity: 0 }
//                     }
//                     transition={{ duration: 0.3 }}
//                     className="pl-8 overflow-hidden"
//                   >
//                     {item.children.map((child, i) => {
//                       const isChildActive = location.pathname.startsWith(
//                         child.path
//                       );
//                       return (
//                         <Link
//                           key={i}
//                           to={child.path}
//                           className={`block p-2 m-0.5 rounded-md text-sm hover:bg-gray-600 transition-all duration-200 ${
//                             isChildActive ? "bg-gray-600" : ""
//                           }`}
//                         >
//                           {child.name}
//                         </Link>
//                       );
//                     })}
//                   </motion.div>
//                 )}
//               </div>
//             );
//           } else {
//             return (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className={`flex items-center p-2 rounded-[12px] hover:bg-gray-700 ${
//                   active ? "bg-gray-700" : ""
//                 }`}
//               >
//                 <div className="text-xl">{item.icon}</div>
//                 {isOpen && <span className="ml-4">{item.name}</span>}
//               </Link>
//             );
//           }
//         })}
//       </nav>
//     </motion.div>
//   );
// };

// export default Sidebar;



//test 1

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   FaUserCircle,
//   FaFolder,
//   FaBell,
//   FaEnvelope,
//   FaQuestionCircle,
//   FaCog,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const menuItems = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: <FaUserCircle />,
//   },
//   {
//     path: "/profile",
//     name: "Profile",
//     icon: <FaUserCircle />,
//   },
//   {
//     path: "/folders",
//     name: "Folders",
//     icon: <FaFolder />,
//   },
//   {
//     path: "/notification",
//     name: "Notification",
//     icon: <FaBell />,
//   },
//   {
//     path: "/messages",
//     name: "Messages",
//     icon: <FaEnvelope />,
//   },
//   {
//     path: "/help-center",
//     name: "Help Center",
//     icon: <FaQuestionCircle />,
//   },
//   {
//     path: "/setting",
//     name: "Setting",
//     icon: <FaCog />,
//   },
// ];

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <div className="fixed top-0 left-0 h-screen w-[250px] bg-[#15181c] flex flex-col justify-between z-40 shadow-2xl">
//       {/* Logo Section */}
//       <div>
//         <div className="flex items-center justify-center h-[90px]">
//           <span className="text-2xl font-bold text-white tracking-widest">
//             LOGO
//           </span>
//         </div>
//         <nav className="mt-4">
//           <ul className="flex flex-col gap-1 px-2">
//             {menuItems.map((item) => {
//               const isActive = location.pathname.startsWith(item.path);
//               return (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center h-12 px-5 rounded-xl font-medium text-base transition-colors duration-200 gap-4
//                       ${
//                         isActive
//                           ? "bg-white text-[#1746ff] shadow-lg"
//                           : "text-white hover:bg-[#232731]"
//                       }
//                     `}
//                   >
//                     <span
//                       className={`text-lg ${
//                         isActive ? "text-[#1746ff]" : "text-white"
//                       }`}
//                     >
//                       {item.icon}
//                     </span>
//                     {item.name}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//       {/* Logout Button */}
//       <div className="flex flex-col items-center mb-8">
//         <button className="flex items-center gap-3 w-[90%] py-3 justify-center rounded-xl bg-[#1746ff] text-white font-semibold text-lg shadow-lg transition-all hover:scale-105">
//           <FaSignOutAlt className="text-xl" />
//           LOGOUT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



//test 2

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInfoCircle, FaFileContract, FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  {
    path: "/home",
    name: "Home",
    icon: <FaInfoCircle />,
    children: [
      { path: "/home-image-slider", name: "Home Image Slider" },
    ],
  },
  {
    path: "/private-policy",
    name: "Private Policy",
    icon: <FaFileContract />,
  },
  {
    path: "/terms-conditions",
    name: "Terms & Conditions",
    icon: <FaFileContract />,
  },
];

const Sidebar = () => {
  const location = useLocation();
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

  return (
    <div className="fixed top-0 left-0 h-screen w-[250px] bg-[#15181c] flex flex-col justify-between z-40 shadow-2xl">
      {/* Logo */}
      <div>
        <div className="flex items-center justify-center h-[90px] border-b border-[#232323]">
          <span className="text-2xl font-bold text-white tracking-widest">LOGO</span>
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
                        className={`flex items-center h-12 px-5 rounded-xl font-medium text-base transition-colors duration-200 gap-4 cursor-pointer 
                          ${active ? "bg-white text-[#1746ff] shadow-lg" : "text-white hover:bg-[#232731]"}
                        `}
                      >
                        <span className={`text-lg ${active ? "text-[#1746ff]" : "text-white"}`}>
                          {item.icon}
                        </span>
                        {item.name}
                        <span className="ml-auto text-sm">
                          <svg
                            className={`transition-transform duration-200 ${expandedMenu === item.name ? "rotate-90" : ""}`}
                            width="15" height="15" fill="currentColor" viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M7 6a1 1 0 011.707-.707l4 4a1 1 0 010 1.414l-4 4A1 1 0 017 13V6z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      {/* Children */}
                      <div
                        className={`transition-all duration-200 overflow-hidden ${expandedMenu === item.name ? "max-h-40" : "max-h-0"}`}
                      >
                        {item.children.map((child) => {
                          const isChildActive = location.pathname.startsWith(child.path);
                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block ml-12 px-2 py-2 rounded-lg text-sm font-medium transition-colors duration-150
                                ${isChildActive ? "bg-[#1746ff] text-white" : "text-white hover:bg-[#232731]"}
                              `}
                            >
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center h-12 px-5 rounded-xl font-medium text-base transition-colors duration-200 gap-4
                        ${active ? "bg-white text-[#1746ff] shadow-lg" : "text-white hover:bg-[#232731]"}
                      `}
                    >
                      <span className={`text-lg ${active ? "text-[#1746ff]" : "text-white"}`}>
                        {item.icon}
                      </span>
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
        <button className="flex items-center gap-3 w-[90%] py-3 justify-center rounded-xl bg-[#1746ff] text-white font-semibold text-lg shadow-lg transition-all hover:scale-105">
          <FaSignOutAlt className="text-xl" />
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;



//test 3


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaInfoCircle, FaFileContract, FaSignOutAlt } from "react-icons/fa";

// const menuItems = [
//   {
//     path: "/home",
//     name: "Home",
//     icon: <FaInfoCircle />,
//     children: [
//       { path: "/home-image-slider", name: "Home Image Slider" },
//     ],
//   },
//   {
//     path: "/priate-policy",
//     name: "Private Policy",
//     icon: <FaFileContract />,
//   },
//   {
//     path: "/terms-conditions",
//     name: "Terms & Conditions",
//     icon: <FaFileContract />,
//   },
// ];

// const Sidebar = () => {
//   const location = useLocation();
//   const [expandedMenu, setExpandedMenu] = React.useState("");

//   const handleToggle = (name) => {
//     setExpandedMenu((prev) => (prev === name ? "" : name));
//   };

//   const isActive = (item) => {
//     if (item.children && item.children.length > 0) {
//       return (
//         item.children.some((child) =>
//           location.pathname.startsWith(child.path)
//         ) || location.pathname.startsWith(item.path)
//       );
//     }
//     return location.pathname.startsWith(item.path);
//   };

//   return (
//     <div className="fixed top-0 left-0 h-screen w-[250px] bg-[#15181c] flex flex-col justify-between z-40 shadow-2xl">
//       {/* Logo */}
//       <div>
//         <div className="flex items-center justify-center h-[90px] border-b border-[#232323]">
//           <span className="text-2xl font-bold text-white tracking-widest">LOGO</span>
//         </div>
//         <nav className="mt-4">
//           <ul className="flex flex-col gap-1 px-2">
//             {menuItems.map((item) => {
//               const active = isActive(item);
//               const hasChildren = item.children && item.children.length > 0;
//               return (
//                 <li key={item.path} className="relative">
//                   {hasChildren ? (
//                     <>
//                       <div
//                         onClick={() => handleToggle(item.name)}
//                         className={`flex items-center h-12 px-5 font-medium text-base gap-4 cursor-pointer transition-colors duration-200
//                           ${
//                             active
//                               ? "bg-[#22242a] text-white rounded-xl shadow-lg"
//                               : "text-white hover:bg-[#232731] rounded-xl"
//                           }
//                         `}
//                         style={{
//                           // Add left border highlight for active nav
//                           ...(active && {
//                             boxShadow: "0px 4px 24px 0px #00000026",
//                           }),
//                         }}
//                       >
//                         {/* Left border for active nav */}
//                         {active && (
//                           <span className="absolute left-0 top-2 bottom-2 w-[6px] bg-[#2776ff] rounded-r-md" />
//                         )}
//                         <span className={`text-lg z-10`}>{item.icon}</span>
//                         <span className="z-10">{item.name}</span>
//                         <span className="ml-auto text-sm z-10">
//                           <svg
//                             className={`transition-transform duration-200 ${expandedMenu === item.name ? "rotate-90" : ""}`}
//                             width="15" height="15" fill="currentColor" viewBox="0 0 20 20"
//                           >
//                             <path fillRule="evenodd" d="M7 6a1 1 0 011.707-.707l4 4a1 1 0 010 1.414l-4 4A1 1 0 017 13V6z" clipRule="evenodd" />
//                           </svg>
//                         </span>
//                       </div>
//                       {/* Children */}
//                       <div
//                         className={`transition-all duration-200 overflow-hidden ${expandedMenu === item.name ? "max-h-40" : "max-h-0"}`}
//                       >
//                         {item.children.map((child) => {
//                           const isChildActive = location.pathname.startsWith(child.path);
//                           return (
//                             <Link
//                               key={child.path}
//                               to={child.path}
//                               className={`block ml-10 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150
//                                 ${isChildActive ? "bg-[#2776ff] text-white" : "text-white hover:bg-[#232731]"}
//                               `}
//                             >
//                               {child.name}
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className={`relative flex items-center h-12 px-5 font-medium text-base gap-4 transition-colors duration-200
//                         ${
//                           active
//                             ? "bg-[#22242a] text-white rounded-xl shadow-lg"
//                             : "text-white hover:bg-[#232731] rounded-xl"
//                         }
//                       `}
//                       style={{
//                         ...(active && {
//                           boxShadow: "0px 4px 24px 0px #00000026",
//                         }),
//                       }}
//                     >
//                       {/* Left border for active nav */}
//                       {active && (
//                         <span className="absolute left-0 top-2 bottom-2 w-[6px] bg-[#2776ff] rounded-r-md" />
//                       )}
//                       <span className="text-lg z-10">{item.icon}</span>
//                       <span className="z-10">{item.name}</span>
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//       {/* Logout */}
//       <div className="flex flex-col items-center mb-8">
//         <button className="flex items-center gap-3 w-[90%] py-3 justify-center rounded-xl bg-[#2776ff] text-white font-semibold text-lg shadow-lg transition-all hover:scale-105">
//           <FaSignOutAlt className="text-xl" />
//           LOGOUT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



//test 4


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaInfoCircle, FaFileContract, FaSignOutAlt } from "react-icons/fa";


// const menuItems = [
//   {
//     path: "/home",
//     name: "Home",
//     icon: <FaInfoCircle />,
//     children: [
//       { path: "/home-image-slider", name: "Home Image Slider" },
//     ],
//   },
//   {
//     path: "/priate-policy",
//     name: "Private Policy",
//     icon: <FaFileContract />,
//   },
//   {
//     path: "/terms-conditions",
//     name: "Terms & Conditions",
//     icon: <FaFileContract />,
//   },
// ];

// const Sidebar = () => {
//   const location = useLocation();
//   const [expandedMenu, setExpandedMenu] = React.useState("");

//   const handleToggle = (name) => {
//     setExpandedMenu((prev) => (prev === name ? "" : name));
//   };

//   const isActive = (item) => {
//     if (item.children && item.children.length > 0) {
//       return (
//         item.children.some((child) =>
//           location.pathname.startsWith(child.path)
//         ) || location.pathname.startsWith(item.path)
//       );
//     }
//     return location.pathname.startsWith(item.path);
//   };

//   return (
//     <div className="fixed top-0 left-0 h-screen w-[250px] bg-[#15181c] flex flex-col justify-between z-40 shadow-2xl">
//       {/* Logo */}
//       <div>
//         <div className="flex items-center justify-center h-[90px] border-b border-[#232323]">
//           <span className="text-2xl font-bold text-white tracking-widest">LOGO</span>
//         </div>
//         <nav className="mt-4">
//           <ul className="flex flex-col gap-1 px-2">
//             {menuItems.map((item) => {
//               const active = isActive(item);
//               const hasChildren = item.children && item.children.length > 0;
//               return (
//                 <li key={item.path} className="relative">
//                   {hasChildren ? (
//                     <>
//                       <div
//                         onClick={() => handleToggle(item.name)}
//                         className={`flex items-center h-12 px-5 font-medium text-base gap-4 cursor-pointer transition-colors duration-200
//                           ${
//                             active
//                               ? "bg-white text-[#15181c] rounded-l-[30px] rounded-r-lg shadow"
//                               : "text-white hover:bg-[#232731] rounded-xl"
//                           }
//                         `}
//                         style={{
//                           // Extra shadow for active
//                           ...(active && {
//                             boxShadow: "0px 4px 24px 0px #00000026",
//                           }),
//                         }}
//                       >
//                         {/* Icon */}
//                         <span className={`text-lg z-10`}>{item.icon}</span>
//                         <span className="z-10">{item.name}</span>
//                         <span className="ml-auto text-sm z-10">
//                           <svg
//                             className={`transition-transform duration-200 ${expandedMenu === item.name ? "rotate-90" : ""}`}
//                             width="15" height="15" fill="currentColor" viewBox="0 0 20 20"
//                           >
//                             <path fillRule="evenodd" d="M7 6a1 1 0 011.707-.707l4 4a1 1 0 010 1.414l-4 4A1 1 0 017 13V6z" clipRule="evenodd" />
//                           </svg>
//                         </span>
//                       </div>
//                       {/* Children */}
//                       <div
//                         className={`transition-all duration-200 overflow-hidden ${
//                           expandedMenu === item.name ? "max-h-40" : "max-h-0"
//                         }`}
//                       >
//                         {item.children.map((child) => {
//                           const isChildActive = location.pathname.startsWith(child.path);
//                           return (
//                             <Link
//                               key={child.path}
//                               to={child.path}
//                               className={`block ml-10 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150
//                                 ${isChildActive ? "bg-[#232731] text-white" : "text-white hover:bg-[#232731]"}
//                               `}
//                             >
//                               {child.name}
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       to={item.path}
//                       className={`flex items-center h-12 px-5 font-medium text-base gap-4 transition-colors duration-200
//                         ${
//                           active
//                             ? "bg-white text-[#15181c] rounded-l-[30px] rounded-r-lg shadow"
//                             : "text-white hover:bg-[#232731] rounded-xl"
//                         }
//                       `}
//                       style={{
//                         ...(active && {
//                           boxShadow: "0px 4px 24px 0px #00000026",
//                         }),
//                       }}
//                     >
//                       <span className="text-lg z-10">{item.icon}</span>
//                       <span className="z-10">{item.name}</span>
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//       {/* Logout */}
//       <div className="flex flex-col items-center mb-8">
//         <button className="flex items-center gap-3 w-[90%] py-3 justify-center rounded-xl bg-[#2776ff] text-white font-semibold text-lg shadow-lg transition-all hover:scale-105">
//           <FaSignOutAlt className="text-xl" />
//           LOGOUT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

