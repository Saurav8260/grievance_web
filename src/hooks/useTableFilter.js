import { useState, useMemo } from "react";

export const useTableFilter = (initialData) => {
  const [globalSearch, setGlobalSearch] = useState("");
  const [filters, setFilters] = useState({
    block: "",
    gp: "",
    village: "",
    ward: "",
    name: "",
    contact: "",
    status: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = useMemo(() => {
    return initialData.filter((item) => {
      // Column filters
      if (filters.block && !item.block?.toLowerCase().includes(filters.block.toLowerCase())) return false;
      if (filters.gp && !item.gp?.toLowerCase().includes(filters.gp.toLowerCase())) return false;
      if (filters.village && !item.village?.toLowerCase().includes(filters.village.toLowerCase())) return false;
      if (filters.ward && !item.ward?.toLowerCase().includes(filters.ward.toLowerCase())) return false;
      if (filters.name && !item.name?.toLowerCase().includes(filters.name.toLowerCase())) return false;
      if (filters.contact && !item.contact?.toLowerCase().includes(filters.contact.toLowerCase())) return false;

      // Status
      if (filters.status && item.status !== filters.status) return false;

      // Date range
      const itemDate = new Date(item.date);
      if (filters.dateFrom && itemDate < new Date(filters.dateFrom)) return false;
      if (filters.dateTo && itemDate > new Date(filters.dateTo)) return false;

      // Global search
      if (globalSearch) {
        const s = globalSearch.toLowerCase();
        const matches =
          (item.name?.toLowerCase().includes(s)) ||
          (item.contact?.toLowerCase().includes(s)) ||
          (item.block?.toLowerCase().includes(s)) ||
          (item.gp?.toLowerCase().includes(s)) ||
          (item.village?.toLowerCase().includes(s)) ||
          (item.ward?.toLowerCase().includes(s)) ||
          (item.grievanceMatter?.toLowerCase().includes(s)) ||
          (item.topic1?.toLowerCase().includes(s)) ||
          (item.topic2?.toLowerCase().includes(s)) ||
          (item.topic3?.toLowerCase().includes(s));

        if (!matches) return false;
      }

      return true;
    });
  }, [initialData, filters, globalSearch]);

  return { filters, globalSearch, setGlobalSearch, handleFilterChange, filteredData, setFilters };
};
