import React from "react";

export default function TableHeader() {
  return (
    <thead className="bg-blue-600 text-gray-400 text-left sticky top-0 z-10">

      <tr className="bg-blue-600 text-white text-left">
        <th className="p-3  whitespace-nowrap">Sl No</th>
        <th className="p-3 whitespace-nowrap">Block</th>
        {/* <th className="p-3 whitespace-nowrap">GP</th> */}
        <th className="p-3 whitespace-nowrap">Village</th>
        {/* <th className="p-3 whitespace-nowrap">Ward No</th> */}
        <th className="p-3 whitespace-nowrap">Name</th>
        <th className="p-3 whitespace-nowrap">Father / Spouse Name</th>
        <th className="p-3 whitespace-nowrap">Contact</th>
        <th className="p-3 whitespace-nowrap">Topic 1</th>
        <th className="p-3 whitespace-nowrap">Topic 2</th>
        <th className="p-3 whitespace-nowrap">Topic 3</th>
        <th className="p-3 whitespace-nowrap">Grievance Matter</th>
        <th className="p-3 whitespace-nowrap">Remark</th>
        <th className="p-3 whitespace-nowrap">Photo</th>
        <th className="p-3 whitespace-nowrap">Photo 2</th>
        <th className="p-3 whitespace-nowrap">Date</th>
        <th className="p-3 whitespace-nowrap">Collected</th>
        <th className="p-3 whitespace-nowrap">Work Given</th>
        <th className="p-3 whitespace-nowrap">Status</th>
        <th className="p-3 whitespace-nowrap">Date 2</th>
        <th className="p-3 whitespace-nowrap">Remark 2</th>
      </tr>
    </thead>
  );
}
