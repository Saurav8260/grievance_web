import React, { useState } from "react";
import { exportGrievances } from "../api/userService";

export default function ExportButton({ selectedIds }) {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    if (!selectedIds || selectedIds.length === 0) {
      alert("Please select at least one item");
      return;
    }

    try {
      setLoading(true);

      // ✅ USE YOUR SERVICE
      const blob = await exportGrievances(selectedIds);

      const fileName = `grievances_${Date.now()}.xlsx`;

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", fileName);

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(error);
      alert("Export failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleExport}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Exporting..." : "Export Excel"}
      </button>
    </div>
  );
}