import React from "react";

export default function SearchFilters({ filters, onChange }) {
  return (
    <div className="grid grid-cols-6 gap-4 mb-6">
      <input name="block" placeholder="Search Block" value={filters.block} onChange={onChange} className="border rounded-lg p-2 shadow" />
      {/* <input name="gp" placeholder="Search GP" value={filters.gp} onChange={onChange} className="border rounded-lg p-2 shadow" /> */}
<input name="village" placeholder="Search Village" value={filters.village} onChange={onChange} className="border rounded-lg p-2 shadow" />
      <input name="ward" placeholder="Search Ward" value={filters.ward} onChange={onChange} className="border rounded-lg p-2 shadow" />
      <input name="name" placeholder="Search Name" value={filters.name} onChange={onChange} className="border rounded-lg p-2 shadow" />
      {/* <input name="contact" placeholder="Search Contact" value={filters.contact} onChange={onChange} className="border rounded-lg p-2 shadow" /> */}
    </div>
  );
}
