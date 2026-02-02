

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiFileText,
  FiSettings,
  FiLogOut,
  FiUser,
  FiList,
} from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");

  return (
    <aside
      className="
        fixed bottom-0 left-0 right-0
        md:static
        bg-white shadow-md
        md:h-screen
        flex md:flex-col flex-row
        justify-around md:justify-start
        items-center
        md:w-20 w-full
        py-2 md:py-6
        z-50
      "
    >
      {/* Logo - visible only on desktop */}
      <div className="hidden md:flex w-14 h-14 bg-blue-600 rounded-full items-center justify-center mb-8">
        <FaHandshake className="text-white text-2xl" />
      </div>

      {/* Navigation */}
      <nav className="flex md:flex-col flex-row gap-4 md:gap-6 items-center">
        <SidebarButton
          onClick={() => navigate("/dashboard")}
          icon={<FiHome />}
          title="Home"
        />

        <SidebarButton
          onClick={() => navigate("/allgrievances")}
          icon={<FiList />}
          title="All Grievances"
        />

        <SidebarButton
          onClick={() => navigate("/userdetails")}
          icon={<FiFileText />}
          title="User Details"
        />

        <SidebarButton
          onClick={() => navigate(`/profile/${userId}`)}
          icon={<FiUser />}
          title="Profile"
        />

        <SidebarButton
          onClick={() => navigate("/settings")}
          icon={<FiSettings />}
          title="Settings"
        />

        <SidebarButton
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          icon={<FiLogOut />}
          title="Logout"
          logout
        />
      </nav>
    </aside>
  );
}

function SidebarButton({ onClick, icon, title, logout }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`
        w-10 h-10 md:w-12 md:h-12
        flex items-center justify-center
        rounded-xl
        transition
        text-gray-500
        hover:bg-gray-800
        hover:text-white
        ${logout ? "hover:bg-red-600" : ""}
      `}
    >
      <span className="text-lg md:text-xl">{icon}</span>
    </button>
  );
}
