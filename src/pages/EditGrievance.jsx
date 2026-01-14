import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGrievanceById, updateGrievance } from "../api/userService";

export default function EditGrievance() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    block: "",
    gp: "",
    villageSahi: "",
    wardNo: "",
    address: "",
    grievanceDetails: "",
    status: "",
    agentName: "",
    workGivenTo: "",
    topic1: "",
    topic2: "",
    topic3: "",
    topic4: "",
    topic5: "",
    adminRemarks: ""
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGrievanceById(id).then((data) => {
      setForm({
        name: data.name,
        contact: data.contact,
        block: data.block,
        gp: data.gp,
        villageSahi: data.villageSahi,
        wardNo: data.wardNo,
        address: data.address,
        grievanceDetails: data.grievanceDetails,
        status: data.status,
        agentName: data.agentName,
        workGivenTo: data.workGivenTo,
        topic1: data.topic1,
        topic2: data.topic2,
        topic3: data.topic3,
        topic4: data.topic4,
        topic5: data.topic5,
        adminRemarks: data.adminRemarks
      });
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateGrievance(id, form);
      alert("Grievance updated successfully");
      navigate("/dashboard");
    } catch (error) {
      alert("Update failed: " + error.message);
    }
  };

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;
  }

 return (
  <div className="max-w-4xl mx-auto p-6">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
        <h2 className="text-white text-lg font-semibold">
          Edit Grievance #{id}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label">Citizen Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="label">Contact Number</label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="label">Block</label>
            <input
              name="block"
              value={form.block}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="label">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="input"
            >
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="COMPLETED">Completed</option>
              <option value="REJECTED">Rejected</option>
            </select>
          </div>
        </div>

        {/* Topics */}
        <div>
          <h3 className="section-title">Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="topic1" value={form.topic1} onChange={handleChange} placeholder="Topic 1" className="input" />
            <input name="topic2" value={form.topic2} onChange={handleChange} placeholder="Topic 2" className="input" />
            <input name="topic3" value={form.topic3} onChange={handleChange} placeholder="Topic 3" className="input" />
            <input name="topic4" value={form.topic4} onChange={handleChange} placeholder="Topic 4" className="input" />
            <input name="topic5" value={form.topic5} onChange={handleChange} placeholder="Topic 5" className="input" />
          </div>
        </div>

        {/* Grievance Details */}
        <div>
          <label className="label">Grievance Description</label>
          <textarea
            name="grievanceDetails"
            value={form.grievanceDetails}
            onChange={handleChange}
            rows={4}
            className="input"
          />
        </div>

        {/* Assignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="label">Assigned Agent</label>
            <input
              name="agentName"
              value={form.agentName}
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="label">Department</label>
            <input
              name="workGivenTo"
              value={form.workGivenTo}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        {/* Admin Remarks */}
        <div>
          <label className="label">Admin Remarks</label>
          <textarea
            name="adminRemarks"
            value={form.adminRemarks}
            onChange={handleChange}
            rows={3}
            className="input"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
          >
            Update Grievance
          </button>
        </div>
      </form>
    </div>
  </div>
);

}
