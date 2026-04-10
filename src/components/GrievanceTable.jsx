import React from "react";
import { Link } from "react-router-dom";

function StatusBadge({ status }) {
  const normalized = status?.toLowerCase();

  const map = {
    completed: "bg-green-100 text-green-800",
    complete: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    "not complete": "bg-red-100 text-red-800",
    "not completed": "bg-red-100 text-red-800",
    in_progress: "bg-blue-100 text-blue-800",
  };

  const cls = map[normalized] || "bg-gray-100 text-gray-800";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${cls}`}>
      {status}
    </span>
  );
}

export default function GrievanceTable({
  data,
  selectedIds,
  setSelectedIds,
}) {

  const isSelectable =
    Array.isArray(selectedIds) && typeof setSelectedIds === "function";

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === data.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data.map((row) => row.id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm w-full">
      <div className="w-full overflow-x-auto overflow-y-auto max-h-[600px]">
        <table className="min-w-[1800px] w-full border-collapse text-sm whitespace-nowrap">

          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="border-b">

              {isSelectable && (
                <th className="py-3 px-4 text-center">
                  <input
                    type="checkbox"
                    checked={
                      data.length > 0 &&
                      selectedIds.length === data.length
                    }
                    onChange={handleSelectAll}
                  />
                </th>
              )}

              {[
                "SL No.",
                "Name",
                "Father/Spouse",
                "Block",
                "GP",
                "Village/Sahi",
                "Ward",
                "Location",
                "Topic",
                "Remarks",
                "Date",
                "Status",
                "Agent",
                "Actions",
              ].map((h) => (
                <th
                  key={h}
                  className={`py-3 px-4 text-xs font-semibold text-gray-600 uppercase tracking-wide ${
                    h === "Actions" ? "text-center" : "text-left"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y">
            {data && data.length > 0 ? (
              data.map((row, i) => (
                <tr key={row.id || i} className="hover:bg-blue-50 transition">

                  {isSelectable && (
                    <td className="px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.id)}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                  )}

                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">{row.fatherSpouseName}</td>
                  <td className="px-4 py-3">{row.block}</td>
                  <td className="px-4 py-3">{row.gp}</td>
                  <td className="px-4 py-3">{row.villageSahi}</td>
                  <td className="px-4 py-3">{row.wardNo}</td>
                  <td className="px-4 py-3">{row.location}</td>
                  <td className="px-4 py-3 max-w-[250px] truncate">{row.topic}</td>
                  <td className="px-4 py-3 max-w-[250px] truncate">{row.agentRemarks}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3">{row.agent}</td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-2">
                      <Link to={`/grievance/${row.id}`}>
                        <button className="px-3 py-1.5 rounded-md text-xs font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200">
                          View
                        </button>
                      </Link>
                      <Link to={`/grievance/edit/${row.id}`}>
                        <button className="px-3 py-1.5 rounded-md text-xs font-semibold text-amber-600 bg-amber-100 hover:bg-amber-200">
                          Edit
                        </button>
                      </Link>
                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={isSelectable ? 15 : 14}
                  className="py-8 text-center text-gray-500"
                >
                  No grievances found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}
