import { useState } from "react";
import { getGrievanceFilter } from "../api/userService";

const initialFilters = {
  status: "",
  block: "",
  ward: "",
  name: "",
  contact: "",
  fatherSpouseName: "",
  gp: "",
  villageSahi: "",
  Remark: "",
  topic: "",
  startDate: "",
  endDate: "",
};

export const useTableFilter = (baseData = []) => {
  const [filters, setFilters] = useState(initialFilters);
  const [filteredData, setFilteredData] = useState(baseData);
  const [isFiltered, setIsFiltered] = useState(false);

  const applyFilters = async () => {
    try {
      setIsFiltered(true);

      const params = new URLSearchParams();

      if (filters.status) params.append("status", filters.status);
      if (filters.block) params.append("block", filters.block);
      if (filters.ward) params.append("wardNo", filters.ward);
      if (filters.name) params.append("name", filters.name);
      if (filters.contact) params.append("contact", filters.contact);
      if (filters.fatherSpouseName)
        params.append("fatherSpouseName", filters.fatherSpouseName);
      if (filters.gp) params.append("gp", filters.gp);
      if (filters.villageSahi) params.append("villageSahi", filters.villageSahi);
      if (filters.Remark) params.append("agentRemarks", filters.Remark);
      if (filters.topic) params.append("topic", filters.topic);

      if (filters.startDate) params.append("startDate", filters.startDate);
if (filters.endDate) params.append("endDate", filters.endDate);


      const data = await getGrievanceFilter(params.toString());

      const mapped = data.map((g) => ({
        id: g.grievanceId,
        name: g.name,
        subName: g.contact,
        fatherSpouseName: g.fatherSpouseName,
        gp: g.gp,
        villageSahi: g.villageSahi,
        wardNo: g.wardNo,
        Remarks: g.agentRemarks,
        location: g.address,
        topic: [g.topic1, g.topic2, g.topic3, g.topic4, g.topic5]
          .filter(Boolean)
          .join(", "),
        block: g.block,
        date: g.createdAt,              // ✅ correct date field
        status: g.status,
        agent: g.agentName || "Unassigned",
      }));

      setFilteredData(mapped);
    } catch (err) {
      console.error("Filter API error:", err);
    }
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setIsFiltered(false);
    setFilteredData(baseData);
  };

  return {
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    filteredData: isFiltered ? filteredData : baseData,
  };
};
