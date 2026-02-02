

import React, { useState, useEffect } from "react";
import StatsCard from "../components/StatsCard";
import GrievanceTable from "../components/GrievanceTable";
import AddGrievanceModal from "../components/AddGrievanceModal";
import { FiInbox, FiClock, FiCheckCircle, FiUsers } from "react-icons/fi";
import { useTableFilter } from "../hooks/useTableFilter";
import { getDashboardStats } from "../api/userService";

export default function Dashboard() {
  const [openAddGrievance, setOpenAddGrievance] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);
  const [dashboardName, setDashboardName] = useState("");

  const [stats, setStats] = useState({
    totalGrievances: 0,
    pending: 0,
    completed: 0,
    activeAgents: 0,
  });

  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const savedName = localStorage.getItem("dashboard_name");
    if (!savedName) {
      setShowNameModal(true);
    }
  }, []);

  useEffect(() => {
    if (showNameModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNameModal]);

  const handleSaveName = () => {
    if (!dashboardName.trim()) return;
    localStorage.setItem("dashboard_name", dashboardName);
    setShowNameModal(false);
  };

  useEffect(() => {
    loadRecentGrievances();
  }, []);

  const loadRecentGrievances = async () => {
    try {
      const data = await getDashboardStats();

      setStats({
        totalGrievances: data.totalGrievances,
        pending: data.grievanceStatusCounts?.PENDING || 0,
        completed: data.grievanceStatusCounts?.COMPLETED || 0,
        activeAgents: data.totalUsers || 0,
      });

      const grievanceList = (data.recentActivity || []).map((g) => ({
        id: g.grievanceId,
        name: g.name,
        subName: g.contact,
        fatherSpouseName: g.fatherSpouseName,
        block: g.block,
        gp: g.gp,
        villageSahi: g.villageSahi,
        wardNo: g.wardNo,
        location: g.address,
        topic: [g.topic1, g.topic2, g.topic3, g.topic4, g.topic5]
          .filter(Boolean)
          .join(", "),

        agentRemarks: g.agentRemarks,
        date: g.createdAt,
        status: g.status,
        agent: g.agentName || "Unassigned",
      }));

      setGrievances(grievanceList);
    } catch (error) {
      console.error("Dashboard load error:", error);
    }
  };

  const { filteredData } = useTableFilter(grievances);
  const userName = localStorage.getItem("dashboard_name");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Grievance Management Dashboard
            </h2>
            <p className="text-sm text-gray-500">
              Welcome,{" "}
              <span className="font-semibold text-blue-600">
                {userName}
              </span>
            </p>
          </div>

          <button
            onClick={() => setOpenAddGrievance(true)}
            className="w-full sm:w-auto h-10 px-4 bg-blue-600 text-white rounded-md text-sm"
          >
            + Add Grievance
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            label="Total Grievances"
            value={stats.totalGrievances}
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
            value={stats.activeAgents}
            icon={<FiUsers className="text-pink-500 text-2xl" />}
          />
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-lg bg-white shadow">
          <GrievanceTable data={filteredData} />
        </div>

        {/* Add Grievance Modal */}
        {openAddGrievance && (
          <AddGrievanceModal
            onClose={() => setOpenAddGrievance(false)}
            onSuccess={() => loadRecentGrievances()}
          />
        )}
      </div>

      {/* Name Modal */}
      {showNameModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome 👋
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Please enter your name to continue
            </p>

            <input
              type="text"
              placeholder="Enter your name"
              value={dashboardName}
              onChange={(e) => setDashboardName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <button
              onClick={handleSaveName}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
