// import React from "react";
// import { 
//   HomeIcon, 
//   UsersIcon, 
//   DocumentTextIcon, 
//   Cog6ToothIcon 
// } from "@heroicons/react/24/outline";

// export default function Sidebar() {
//   return (
//     <aside className="w-20 bg-white border-r h-screen sticky top-0">
//       <div className="flex flex-col items-center space-y-6 py-6">
//         <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">G</div>

//         <nav className="flex flex-col gap-4">
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <HomeIcon className="w-6 h-6 text-gray-600" />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <ClipboardListIcon className="w-6 h-6 text-gray-600" />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <UsersIcon className="w-6 h-6 text-gray-600" />
//           </button>
//           <button className="p-2 rounded-lg hover:bg-gray-100">
//             <CogIcon className="w-6 h-6 text-gray-600" />
//           </button>
//         </nav>
//       </div>
//     </aside>
//   );
// }


import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-white border-r h-screen sticky top-0">
      <div className="flex flex-col items-center space-y-6 py-6">

        {/* Logo */}
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 12l5-5 4 4-5 5-4-4zm11-5l4-4 5 5-4 4-5-5zm-6 6l3-3 4 4-3 3-4-4zm6-2l3-3 4 4-3 3-4-4z"/>
          </svg>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 text-xl">🏠</button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-xl">📄</button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-xl">👥</button>
          <button className="p-2 rounded-lg hover:bg-gray-100 text-xl">⚙️</button>
        </nav>

      </div>
    </aside>
  );
}
