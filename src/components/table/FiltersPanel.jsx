import { useState, useMemo } from "react";

const initialFilters = {
  status: "",
  block: "",
  ward: "",
  dateFrom: "",
  dateTo: "",
};

export const useTableFilter = (data) => {
  const [filters, setFilters] = useState(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState(initialFilters);

  const applyFilters = () => {
    console.log("Apply clicked", filters);
    setAppliedFilters(filters);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      if (appliedFilters.status && item.status !== appliedFilters.status)
        return false;

      if (appliedFilters.block && item.block !== appliedFilters.block)
        return false;

      if (
        appliedFilters.ward &&
        !item.ward?.toString().includes(appliedFilters.ward)
      )
        return false;

      if (appliedFilters.dateFrom) {
        if (new Date(item.date) < new Date(appliedFilters.dateFrom))
          return false;
      }

      if (appliedFilters.dateTo) {
        if (new Date(item.date) > new Date(appliedFilters.dateTo))
          return false;
      }

      return true;
    });
  }, [data, appliedFilters]);

  return {
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    filteredData,
  };
};
