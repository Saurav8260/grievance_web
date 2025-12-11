import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import FiltersPanel from "./FiltersPanel";
import { useTableFilter } from "../../hooks/useTableFilter";

export default function DataTable({ data }) {
  const { filters, globalSearch, setGlobalSearch, handleFilterChange, filteredData } = useTableFilter(data);

  return (
   <div className="w-full p-4 bg-gray-50 rounded-xl shadow-lg border border-gray-200">


      {/* Filters Panel */}
      <FiltersPanel
        filters={filters}
        setFilters={() => {}}
        globalSearch={globalSearch}
        setGlobalSearch={setGlobalSearch}
        handleFilterChange={handleFilterChange}
      />

      {/* Scrollable Table */}
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
