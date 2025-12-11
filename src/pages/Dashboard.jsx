import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import GrievanceTable from "../components/GrievanceTable";
import { stats, grievances } from "../data/dashboardData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");

  const filtered = grievances.filter((g) =>
    (g.name + g.subName + g.topic + g.location).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-500 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-700">Grievance Management Dashboard</h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search grievances, agents..."
                className="w-80 pl-10 pr-4 py-2 rounded-lg border bg-white"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatsCard label="Total Grievances" value={stats.total} icon={<div className="text-yellow-600">📥</div>} />
          <StatsCard label="Pending" value={stats.pending} icon={<div className="text-blue-600">⏳</div>} />
          <StatsCard label="Completed" value={stats.completed} icon={<div className="text-green-600">✔️</div>} />
          <StatsCard label="Active Agents" value={stats.agents} icon={<div className="text-pink-500">👥</div>} />
        </div>

        {/* Tabs + Filter panel */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="flex items-center gap-6 border-b pb-4 mb-4">
            {["All Grievances", "Recent", "High Priority", "Assigned to Me"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-2 ${tab === t ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-600"}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filters row */}
          <div className="grid grid-cols-6 gap-4 items-end">
            <div>
              <label className="text-xs text-gray-500">Status</label>
              <select className="w-full mt-1 px-3 py-2 rounded border bg-white">
                <option>All Status</option>
                <option>Pending</option>
                <option>Complete</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500">Block</label>
              <select className="w-full mt-1 px-3 py-2 rounded border bg-white">
                <option>All Blocks</option>
                <option>Block A</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500">Ward No.</label>
              <input placeholder="Enter ward no." className="w-full mt-1 px-3 py-2 rounded border bg-white" />
            </div>

            <div>
              <label className="text-xs text-gray-500">Date Range</label>
              <input type="date" className="w-full mt-1 px-3 py-2 rounded border bg-white" />
            </div>

            <div className="flex items-center space-x-2 mt-1">
              <button className="px-4 py-2 rounded border bg-white">Reset</button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white">Apply Filters</button>
            </div>
          </div>
        </div>

        {/* Table */}
        <GrievanceTable data={filtered} />
      </main>
    </div>
  );
}
