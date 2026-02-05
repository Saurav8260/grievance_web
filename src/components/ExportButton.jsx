import React, { useState } from "react";
import { exportGrievances } from "../api/userService";

export default function ExportButton({ selectedIds }) {
  const [loading, setLoading] = useState(false);

  const handleExport = async (format) => {
    try {
      setLoading(true);

      const blob = await exportGrievances(selectedIds, format);

      let fileName = "grievances";

      if (format === "EXCEL") fileName += ".xlsx";
      if (format === "CSV") fileName += ".csv";
      if (format === "PDF") fileName += ".pdf";

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={() => handleExport("EXCEL")}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Exporting..." : "Export Excel"}
      </button>

      <button
        onClick={() => handleExport("CSV")}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Exporting..." : "Export CSV"}
      </button>

      <button
        onClick={() => handleExport("PDF")}
        disabled={loading}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Exporting..." : "Export PDF"}
      </button>
    </div>
  );
}
