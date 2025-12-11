// import React from "react";

// export default function FiltersPanel({ filters, setFilters, globalSearch, setGlobalSearch, handleFilterChange }) {
//   return (
//     <div className="mb-4 p-4 bg-gray-300 rounded-xl shadow-md space-y-4">

//       {/* Global Search */}
//       <input
//         type="text"
//     placeholder="Search..."
//     className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//         value={globalSearch}
//         onChange={(e) => setGlobalSearch(e.target.value)}
        
//       />

//       {/* Location & Name/Contact Filters */}
//        <div className="grid grid-cols-6 gap-4">
//         <input name="block" placeholder="Block" value={filters.block} onChange={handleFilterChange} className="border rounded-lg p-2 shadow text-blue-300" />
//         <input name="gp" placeholder="GP" value={filters.gp} onChange={handleFilterChange} className="border rounded-lg p-2 shadow text-blue-300" />
//         <input name="village" placeholder="Village" value={filters.village} onChange={handleFilterChange} className="border rounded-lg p-2  text-blue-300 shadow" />
//         <input name="ward" placeholder="Ward" value={filters.ward} onChange={handleFilterChange} className="border rounded-lg p-2  text-blue-300  shadow" />
//         <input name="name" placeholder="Name" value={filters.name} onChange={handleFilterChange} className="border rounded-lg p-2  text-blue-300 shadow" />
//         <input name="contact" placeholder="Contact" value={filters.contact} onChange={handleFilterChange} className="border rounded-lg p-2  text-blue-300 shadow" />
//       </div>

//       {/* Status & Date Range Filters */}
//       <div className="flex gap-4 items-center">
       

//         <div className="flex gap-4 items-end">


// <div className="flex flex-col">
//    <select name="status" value={filters.status} onChange={handleFilterChange} className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//           <option value="">All Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Resolved">Resolved</option>
//           <option value="In-Progress">In-Progress</option>
//         </select>
// </div>

//   <div className="flex flex-col">
//     <label htmlFor="dateFrom" className="text-xs text-gray-600 mb-1">From Date</label>
//     <input
//       type="date"
//       id="dateFrom"
//       name="dateFrom"
//       value={filters.dateFrom}
//       onChange={handleFilterChange}
//       className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//     />
//   </div>

//   <div className="flex flex-col">
//     <label htmlFor="dateTo" className="text-xs text-gray-600 mb-1">To Date</label>
//     <input
//       type="date"
//       id="dateTo"
//       name="dateTo"
//       value={filters.dateTo}
//       onChange={handleFilterChange}
//       className="border border-gray-300 rounded-lg p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//     />
//   </div>
// </div>

//       </div>
//     </div>
//   );
// }
export default function DataTable({ data }) {
  const {
    filters,
    setFilters,
    globalSearch,
    setGlobalSearch,
    handleFilterChange,
    filteredData
  } = useTableFilter(data);

  return (
    <div className="w-full p-4 bg-gray-200 rounded-xl shadow-lg border border-gray-200">
<FiltersPanel
  filters={filters}
  setFilters={setFilters}
  globalSearch={globalSearch}
  setGlobalSearch={setGlobalSearch}
  handleFilterChange={handleFilterChange}
/>


      <div className="overflow-x-auto">
        <div className="max-h-[580px] overflow-y-auto">
          <table className="w-full min-w-[800px] border-collapse shadow-md rounded-xl">
            <TableHeader />
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="21" className="text-center p-4 text-gray-500">
                    No matching data
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <TableRow
                    key={index}
                    item={item}
                    index={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
