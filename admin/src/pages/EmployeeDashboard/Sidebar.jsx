import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const linkClass = (tab) =>
    `block px-4 py-3 rounded-xl font-medium transition-all w-full text-left ${
      activeTab === tab
        ? "bg-white text-[#1746ff] shadow"
        : "text-white hover:bg-[#232731]"
    }`;

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.clear();
    navigate("/admin");
  };

  return (
    <aside className="h-screen flex flex-col justify-between bg-[#15181c] p-6">
      <div>
        {/* Logo */}
        <h2 className="text-2xl font-bold text-white mb-8 tracking-wide">
          LOGO
        </h2>

        {/* Navigation */}
        <nav className="space-y-2  ">
          <button
            onClick={() => setActiveTab("profile")}
            className={linkClass("profile")}
          >
            👤 Profile Settings
          </button>
          <button
            onClick={() => setActiveTab("task")}
            className={linkClass("task")}
          >
            ✅ Task
          </button>
        </nav>
      </div>

      {/* Logout */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-[90%] cursor-pointer py-3 justify-center rounded-xl bg-[#1746ff] text-white font-semibold text-lg shadow-lg transition-all hover:bg-[#1034c2]"
        >
          <FaSignOutAlt className="text-xl" />
          LOGOUT
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
