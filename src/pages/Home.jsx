// import React from "react";
// import { sampleData } from "../data/sampleData";
// import { useTableFilter } from "../hooks/useTableFilter";
// import { DataTable, SearchFilters } from "../components/table";

// export default function Home() {
//   const { filters, handleChange, filteredData } = useTableFilter(sampleData);

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full overflow-auto">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Grievance Data Table
//         </h1>

//         <SearchFilters filters={filters} onChange={handleChange} />

//         <div className="overflow-x-auto">
//           <DataTable data={filteredData} />
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { sampleData } from "../data/sampleData";
// import { useTableFilter } from "../hooks/useTableFilter";

// import DataTable from "../components/table/DataTable";
// import SearchFilters from "../components/table/SearchFilters";

// export default function Home() {
//   const navigate = useNavigate();

//   const { filters, handleChange, filteredData } = useTableFilter(sampleData);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-2xl rounded-2xl p-6 w-full overflow-auto">
       
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Grievance Data Table
//           </h1>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-blue px-4 py-2 rounded-lg font-semibold transition duration-300"
//           >
//             Logout
//           </button>
//         </div>

       
//         <SearchFilters filters={filters} onChange={handleChange} />

       
//         <div className="overflow-x-auto mt-4">
//           <DataTable data={filteredData} />
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { sampleData } from "../data/sampleData";
// import { useTableFilter } from "../hooks/useTableFilter";

// import DataTable from "../components/table/DataTable";
// import SearchFilters from "../components/table/SearchFilters";
// import FiltersPanel from "../components/table/FiltersPanel";

// export default function Home() {
//   const navigate = useNavigate();

//   const {
//     filters,
//     handleChange,
//     handleFilterChange,
//     filteredData,
//     globalSearch,
//     setGlobalSearch,
//   } = useTableFilter(sampleData);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-2xl rounded-2xl p-6 w-full overflow-auto">
        
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Grievance Data Table
//           </h1>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-300"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Search Bar */}
//         <SearchFilters filters={filters} onChange={handleChange} />

//         {/* ✅ Filters Panel added here */}
//         <div className="mt-4">
//           <FiltersPanel
//             filters={filters}
//             setFilters={() => {}}
//             globalSearch={globalSearch}
//             setGlobalSearch={setGlobalSearch}
//             handleFilterChange={handleFilterChange}
//           />
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto mt-4">
//           <DataTable data={filteredData} />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { sampleData } from "../data/sampleData";
import { useTableFilter } from "../hooks/useTableFilter";

import DataTable from "../components/table/DataTable";
import SearchFilters from "../components/table/SearchFilters";

export default function Home() {
  const navigate = useNavigate();
  const { filters, handleChange, filteredData } = useTableFilter(sampleData);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full overflow-auto">

        {/* ✅ Header with Logout button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Grievance Data Table
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>

        <SearchFilters filters={filters} onChange={handleChange} />

        <div className="overflow-x-auto mt-4">
          <DataTable data={filteredData} />
        </div>
      </div>
    </div>
  );
}
