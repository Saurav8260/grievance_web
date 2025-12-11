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
    <div className="bg-white rounded-xl shadow border">
      <table className="w-full table-fixed">
        <thead className="bg-white border-b">
          <tr>
            <th className="py-3 px-4 text-left text-sm text-gray-500">SL No.</th>
            <th className="py-3 px-4 text-left text-sm text-gray-500">Name</th>
            <th className="py-3 px-4 text-left text-sm text-gray-500">Location</th>
            <th className="py-3 px-4 text-left text-sm text-gray-500">Topic</th>
            <th className="py-3 px-4 text-left text-sm text-gray-500">Date</th>
            <th className="py-3 px-4 text-left text-sm text-gray-500">Status</th>
            <th className="py-3 px-4 text-left text-sm text-gray-500">Agent</th>
            <th className="py-3 px-4 text-center text-sm text-gray-500">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {data.map((row, i) => (
            <tr key={row.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-4 px-4 text-sm text-gray-700">{row.id}</td>

              <td className="py-4 px-4">
                <div className="text-sm font-semibold text-gray-800">{row.name}</div>
                <div className="text-xs text-gray-500">{row.subName}</div>
              </td>

              <td className="py-4 px-4 text-sm text-gray-700">{row.location}</td>

              <td className="py-4 px-4 text-sm text-gray-700">{row.topic}</td>

              <td className="py-4 px-4 text-sm text-gray-700">{row.date}</td>

              <td className="py-4 px-4">
                <StatusBadge status={row.status} />
              </td>

              <td className="py-4 px-4 text-sm text-gray-700">{row.agent}</td>

              <td className="py-4 px-4 text-center">
                <div className="flex gap-2 justify-center">
                  <button className="px-3 py-1 text-sm rounded bg-blue-50 text-blue-700 border">View</button>
                  <button className="px-3 py-1 text-sm rounded bg-yellow-50 text-yellow-700 border">Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
