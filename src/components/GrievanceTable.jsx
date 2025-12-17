import React from "react";

function StatusBadge({ status }) {
  const map = {
    Complete: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    "Not Complete": "bg-red-100 text-red-800",
  };
  const cls = map[status] || "bg-gray-100 text-gray-800";
  return <span className={`px-3 py-1 rounded-full text-sm font-medium ${cls}`}>{status}</span>;
}

export default function GrievanceTable({ data }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead className="bg-gray-50 sticky top-0 z-10">
        <tr className="border-b">
          {[
            "SL No.",
            "Name",
            "Location",
            "Topic",
            "Block",
            "Date",
            "Status",
            "Agent",
            "Actions",
          ].map((h) => (
            <th
              key={h}
              className={`py-3 px-4 font-semibold text-gray-600 uppercase tracking-wide ${
                h === "Actions" ? "text-center" : "text-left"
              }`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y">
        {data.map((row, i) => (
          <tr
            key={row.id}
            className="hover:bg-blue-50 transition-colors"
          >
            <td className="py-3 px-4 text-gray-700">{row.id}</td>

            <td className="py-3 px-4">
              <div className="font-semibold text-gray-800">
                {row.name}
              </div>
              <div className="text-xs text-gray-500">
                {row.subName}
              </div>
            </td>

            <td className="py-3 px-4 text-gray-700">
              {row.location}
            </td>

            <td className="py-3 px-4 text-gray-700">
              {row.topic}
            </td>

            <td className="py-3 px-4 text-gray-700">
              {row.block}
            </td>

            <td className="py-3 px-4 text-gray-700">
              {row.date}
            </td>

            <td className="py-3 px-4">
              <StatusBadge status={row.status} />
            </td>

            <td className="py-3 px-4 text-gray-700">
              {row.agent}
            </td>

            <td className="py-3 px-4">
              <div className="flex justify-center gap-2">
                <button className="px-3 py-1.5 rounded-md text-xs font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 transition">
                  View
                </button>
                <button className="px-3 py-1.5 rounded-md text-xs font-semibold text-amber-600 bg-amber-100 hover:bg-amber-200 transition">
                  Edit
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
