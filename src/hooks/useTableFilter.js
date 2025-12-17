import { useState, useMemo } from "react";

const initialFilters = {
  status: "",
  block: "",
  ward: "",
  dateFrom: "",
  dateTo: "",
};

export const useTableFilter = (data, loggedInUser = "SONU") => {
  const [filters, setFilters] = useState({ ...initialFilters });
  const [appliedFilters, setAppliedFilters] = useState({ ...initialFilters });
  const [activeTab, setActiveTab] = useState("ALL");

  const applyFilters = () => {
    setAppliedFilters({ ...filters }); // ✅ CLONE
  };

  const resetFilters = () => {
    setFilters({ ...initialFilters });
    setAppliedFilters({ ...initialFilters });
    setActiveTab("ALL");
  };

  const parseDate = (dateStr) => {
  // handles "DD/MM/YYYY"
  const [dd, mm, yyyy] = dateStr.split("/");
  return new Date(`${yyyy}-${mm}-${dd}`);
};


  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Tabs
      if (activeTab === "RECENT") {
        const itemDate = new Date(item.date);
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        if (itemDate < sevenDaysAgo) return false;
      }

      if (activeTab === "HIGH_PRIORITY" && item.priority !== "High") {
        return false;
      }

      if (activeTab === "ASSIGNED" && item.agent !== loggedInUser) {
        return false;
      }

      // Filters
      if (appliedFilters.status && item.status !== appliedFilters.status)
        return false;

      if (appliedFilters.block && item.block !== appliedFilters.block)
        return false;

if (appliedFilters.ward) {
  const match = item.location?.match(/Ward\s*(\d+)/i);
  const wardFromLocation = match ? match[1] : "";

  if (!wardFromLocation.includes(appliedFilters.ward)) {
    return false;
  }
}


if (appliedFilters.dateFrom) {
  if (parseDate(item.date) < new Date(appliedFilters.dateFrom))
    return false;
}

if (appliedFilters.dateTo) {
  if (parseDate(item.date) > new Date(appliedFilters.dateTo))
    return false;
}


      return true;
    });
  }, [data, appliedFilters, activeTab, loggedInUser]);

  return {
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    filteredData,
    activeTab,
    setActiveTab,
  };
};
