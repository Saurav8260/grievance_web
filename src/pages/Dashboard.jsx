import React, { useState,useMemo } from "react";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import GrievanceTable from "../components/GrievanceTable";
import { stats, grievances } from "../data/dashboardData";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  FiInbox,
  FiClock,
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";
import { useTableFilter } from "../hooks/useTableFilter";




export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
 const blocks = useMemo(() => {
  return [...new Set(grievances.map((g) => g.block).filter(Boolean))].sort();
}, [grievances]);


  const searchedData = grievances.filter((g) =>
    (g.name + g.subName + g.topic + g.location)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const {
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    filteredData,
  } = useTableFilter(searchedData);
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8 bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-black">Grievance Management Dashboard</h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search grievances, agents..."
                className="w-80 pl-10 pr-4 py-2 rounded-lg border bg-white text-gray-400"
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* Stats */}
       <div className="grid grid-cols-4 gap-4 mb-6">
  <StatsCard
    label="Total Grievances"
    value={stats.total}
    icon={<FiInbox className="text-yellow-600 text-2xl" />}
  />

  <StatsCard
    label="Pending"
    value={stats.pending}
    icon={<FiClock className="text-blue-600 text-2xl" />}
  />

  <StatsCard
    label="Completed"
    value={stats.completed}
    icon={<FiCheckCircle className="text-green-600 text-2xl" />}
  />

  <StatsCard
    label="Active Agents"
    value={stats.agents}
    icon={<FiUsers className="text-pink-500 text-2xl" />}
  />
</div>

        {/* Tabs + Filter panel */}
        <div className="bg-white rounded-xl shadow p-4 mb-6">
          <div className="flex items-center gap-6 border-b pb-4 mb-4">
         <button onClick={() => setActiveTab("ALL")}>All Grievances</button>
<button onClick={() => setActiveTab("RECENT")}>Recent</button>
<button onClick={() => setActiveTab("HIGH_PRIORITY")}>High Priority</button>
<button onClick={() => setActiveTab("ASSIGNED")}>Assigned to Me</button>

          </div>

          {/* Filters row */}
<div className="bg-white rounded-xl border shadow-sm p-5">
  <div className="grid grid-cols-6 gap-6 items-end">

    {/* Status */}
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600">
        Status
      </label>
      <select
        value={filters.status}
        onChange={(e) =>
          setFilters({ ...filters, status: e.target.value })
        }
        className="h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    {/* Block */}
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600">
        Block
      </label>
<select
  value={filters.block}
  onChange={(e) =>
    setFilters({ ...filters, block: e.target.value })
  }
  className="h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">All Blocks</option>

  {blocks.map((block) => (
    <option key={block} value={block}>
      {block}
    </option>
  ))}
</select>

    </div>

    {/* Ward */}
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600">
        Ward No.
      </label>
      <input
        value={filters.ward}
        onChange={(e) =>
          setFilters({ ...filters, ward: e.target.value })
        }
        placeholder="e.g. 12"
        className="h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Date Range */}
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600">
        Date Range
      </label>
      <div className="flex gap-2">
        <input
          type="date"
          value={filters.dateFrom}
          onChange={(e) =>
            setFilters({ ...filters, dateFrom: e.target.value })
          }
          className="h-10 w-full rounded-md border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* <input
          type="date"
          value={filters.dateTo}
          onChange={(e) =>
            setFilters({ ...filters, dateTo: e.target.value })
          }
          className="h-10 w-full rounded-md border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}
      </div>
    </div>

    {/* Buttons */}
    <div className="flex gap-3 justify-end col-span-2">
      <button
        onClick={resetFilters}
        className="h-10 px-4 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
      >
        Reset
      </button>

      <button
        onClick={applyFilters}
        className="h-10 px-5 rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition"
      >
        Apply Filters
      </button>
    </div>

  </div>
</div>



        </div>

        {/* Table */}
        <GrievanceTable data={filteredData} />
      </main>
    </div>
  );
}
