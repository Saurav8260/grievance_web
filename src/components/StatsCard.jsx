import React from "react";

export default function StatsCard({ label, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-800">{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
        <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}
