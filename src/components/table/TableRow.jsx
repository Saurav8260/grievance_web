import React from "react";

export default function TableRow({ item, index }) {
  return (
    <tr className="odd:bg-gray-200 cursor-pointer text-black hover:bg-blue-300 transition-colors duration-200 c">
      <td className="p-3">{index + 1}</td>
      <td className="p-3">{item.block}</td>
      <td className="p-3">{item.gp}</td>
      <td className="p-3">{item.village}</td>
      <td className="p-3">{item.ward}</td>
      <td className="p-3">{item.name}</td>
      <td className="p-3">{item.fatherName}</td>
      <td className="p-3">{item.contact}</td>
      <td className="p-3">{item.topic1}</td>
      <td className="p-3">{item.topic2}</td>
      <td className="p-3">{item.topic3}</td>
      <td className="p-3">{item.grievance}</td>
      <td className="p-3">{item.remark}</td>
      <td className="p-3">{item.photo}</td>
      <td className="p-3">{item.photo2}</td>
      <td className="p-3">{item.date}</td>
      <td className="p-3">{item.collected}</td>
      <td className="p-3">{item.workGiven}</td>
      <td className="p-3">{item.status}</td>
      <td className="p-3">{item.date2}</td>
      <td className="p-3">{item.remark2}</td>
    </tr>
  );
}
