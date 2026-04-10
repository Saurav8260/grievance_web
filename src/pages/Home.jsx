
import { useTableFilter } from "../hooks/useTableFilter";
import FiltersPanel from "../components/table/FiltersPanel";
import DataTable from "../components/table/DataTable";
// import { sampleData } from "../data/sampleData";
import dashboardData from "../data/dashboardData";


export default function Dashboard() {
  const {
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    filteredData,
    activeTab,
    setActiveTab,
  } = useTableFilter(dashboardData);

  return (
    <div className="p-6">

      {/* 🔹 TAB BUTTONS (ADD HERE) */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("ALL")}
          className={activeTab === "ALL" ? "tab-active" : "tab"}
        >
          All Grievances
        </button>

        <button
          onClick={() => setActiveTab("RECENT")}
          className={activeTab === "RECENT" ? "tab-active" : "tab"}
        >
          Recent
        </button>

        <button
          onClick={() => setActiveTab("HIGH_PRIORITY")}
          className={activeTab === "HIGH_PRIORITY" ? "tab-active" : "tab"}
        >
          High Priority
        </button>

        <button
          onClick={() => setActiveTab("ASSIGNED")}
          className={activeTab === "ASSIGNED" ? "tab-active" : "tab"}
        >
          Assigned to Me
        </button>
      </div>

      {/* Filters */}
     <FiltersPanel
  filters={filters}
  setFilters={setFilters}
  applyFilters={applyFilters}
  resetFilters={resetFilters}
/>

      {/* Table */}
      <DataTable data={filteredData} />
    </div>
  );
}
