// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FiHome,
//   FiFileText,
//   FiUsers,
//   FiSettings,
//   FiLogOut,
//   FiCheck,
//   FiActivity,
//   FiMenu,
//   FiUser,
//   FiPlusCircle,
//   FiLinkedin,
//   FiList,          // ✅ for All Grievances
// } from "react-icons/fi";
// import { FaHandshake } from "react-icons/fa";

// export default function Sidebar() {
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("id");
//   console.log(userId);

//   return (
//     <aside className="w-20 bg-white h-screen flex flex-col items-center py-6">
//      <div className="w-full md:w-20 bg-white shadow-md flex md:flex-col flex-row justify-around md:justify-start items-center py-3 md:py-6">

//         {/* <div className="flex flex-col items-center space-y-6 py-6"></div> */}
//         {/* Logo */}
//         <div className="w-15 h-15 bg-blue-600 rounded-full flex items-center justify-center">
//           <FaHandshake className="text-white text-4xl" />
//         </div>

//         {/* Navigation Buttons */}
//         <nav className="flex flex-col gap-4 mt-6">
//           <button
//             onClick={() => navigate("/dashboard")}
//             className="w-13 h-13 bg-white rounded-xl flex items-center justify-center
//                        text-gray-400 hover:bg-gray-800 transition text-2xl"
//             title="Home"
//           >
//             <FiHome className="text-xl" />
//           </button>

//           {/* All Grievance Details */}
//           <button
//             onClick={() => navigate("/allgrievances")}
//             className="w-13 h-13 bg-white rounded-xl flex items-center justify-center
//                        text-gray-400 hover:bg-gray-800 transition"
//             title="All Grievances"
//           >
//             <FiList className="text-xl" />
//           </button>

//           <button
//             onClick={() => navigate("/userdetails")}
//             className="w-13 h-13 bg-white rounded-xl flex items-center justify-center
//                        text-gray-400 hover:bg-gray-800 transition"
//             title="User Details"
//           >
//             <FiFileText className="text-xl" />
//           </button>

          
//           <button
//             onClick={() => navigate(`/profile/${userId}`)}
//             className="w-13 h-13 bg-white rounded-xl flex items-center justify-center
//                        text-gray-400 hover:bg-gray-800 transition"
//             title="Profile"
//           >
//             <FiUser className="text-xl" />
//           </button>

//           <button
//             onClick={() => navigate("/settings")}
//             className="w-13 h-13 bg-white rounded-xl flex items-center justify-center
//                        text-gray-400 hover:bg-gray-800 transition"
//             title="Settings"
//           >
//             <FiSettings className="text-xl" />
//           </button>

//           <button
//             onClick={() => {
//               localStorage.clear();
//               window.location.href = "/login";
//             }}
//             className="w-13 h-13 bg-white rounded-xl flex items-center justify-center
//                        text-gray-400 hover:bg-red-700 transition"
//             title="Logout"
//           >
//             <FiLogOut className="text-xl" />
//           </button>
//         </nav>
//       </div>
//     </aside>
//   );
// }

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
{/* 
        <SidebarButton
          onClick={() => navigate("/settings")}
          icon={<FiSettings />}
          title="Settings"
        /> */}

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
