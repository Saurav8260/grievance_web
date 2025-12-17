import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function DataTable({ data }) {
  return (
    <div className="w-full bg-gray-50 rounded-xl shadow-lg border border-gray-200">

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <div className="max-h-[580px] overflow-y-auto">
          <table className="w-full min-w-[900px] border-collapse">
            <TableHeader />
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan="20"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No matching data
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <TableRow
                    key={index}
                    item={item}
                    index={index}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
