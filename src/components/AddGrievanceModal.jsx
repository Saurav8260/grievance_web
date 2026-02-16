import React, { useState } from "react";
import { createGrievance, uploadAttachments } from "../api/userService";
import locationMaster from "../data/locationMaster.js";

export default function AddGrievanceModal({ onClose, onSuccess }) {
  const loggedInName = localStorage.getItem("dashboard_name") || "";

  const [form, setForm] = useState({
    name: "",
    fatherSpouseName: "",
    contact: "",
    block: "",
    gp: "",
    villageSahi: "",
    wardNo: "",
    address: "",
    topics: [""],
    grievanceDetails: "",
    agentRemarks: "",
    createddate: new Date().toISOString().split("T")[0],
    agentName: loggedInName,
    attachment: [], // ✅ multiple files
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});


  const blocks = Object.keys(locationMaster);
  const gps = form.block ? Object.keys(locationMaster[form.block]) : [];
  const villages =
  form.block === "Athagarh NAC"
    ? form.wardNo
      ? locationMaster[form.block][form.wardNo]
      : []
    :  form.block
    ? Object.keys(locationMaster[form.block][form.gp] || {})
    : [];

 const wards =
   form.block === "Athagarh NAC"
     ? form.block
       ? Object.keys(locationMaster[form.block])
       : []
     : form.villageSahi && form.block && form.gp
       ? locationMaster[form.block][form.gp][form.villageSahi]
       : [];


 const handleChange = (e) => {
  const { name, value, files } = e.target;

  
  setFieldErrors((prev) => ({ ...prev, [name]: false }));

 
  if (name === "contact") {
    const numericValue = value.replace(/\D/g, ""); 

    if (numericValue.length <= 10) {
      setForm({ ...form, contact: numericValue });
    }
    return;
  }

  if (name === "attachment") {
    setForm((prev) => ({
      ...prev,
      attachment: Array.from(files),
    }));
  } else if (name === "block") {
    setForm({ ...form, block: value, gp: "", villageSahi: "", wardNo: "" });
  } else if (name === "gp") {
    setForm({ ...form, gp: value, villageSahi: "", wardNo: "" });
  } else if (name === "villageSahi") {
    setForm({
      ...form,
      villageSahi: value,
      wardNo: form.block === "Athagarh NAC" ? form.wardNo : "",
    });
  } else {
    setForm({ ...form, [name]: value });
  }
};

  const addTopic = () => {
  if (form.topics.length >= 5) return; 

  setForm((prev) => ({
    ...prev,
    topics: [...prev.topics, ""],
  }));
};

  const removeTopic = (index) => {
    const newTopics = form.topics.filter((_, i) => i !== index);
    setForm({ ...form, topics: newTopics });
  };

  const handleTopicChange = (index, value) => {
    const newTopics = [...form.topics];
    newTopics[index] = value;
    setForm({ ...form, topics: newTopics });
  };
const handleSubmit = async () => {

  if (loading) return;   // ✅ Prevent double click instantly

  try {
    setError("");
    let errors = {};

    // Required fields
    if (!form.name.trim()) errors.name = true;
    if (!form.fatherSpouseName.trim()) errors.fatherSpouseName = true;
  if (!form.contact.trim() || !/^\d{10}$/.test(form.contact))
  errors.contact = true;

    if (!form.block) errors.block = true;

    // GP required only if NOT NAC
    if (form.block !== "Athagarh NAC" && !form.gp)
      errors.gp = true;

    // Ward required ONLY for NAC
    if (form.block === "Athagarh NAC" && !form.wardNo)
      errors.wardNo = true;

    if (!form.villageSahi) errors.villageSahi = true;

    if (!form.grievanceDetails.trim())
      errors.grievanceDetails = true;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError("Fill Complete Data");
      return;
    }

    setLoading(true);


    const payload = {
      name: form.name,
      fatherSpouseName: form.fatherSpouseName,
      contact: form.contact,
      block: form.block,
      gp: form.gp,
      villageSahi: form.villageSahi,
      wardNo: form.wardNo,
      address: form.address,
      topic1: form.topics[0] || "",
      topic2: form.topics[1] || "",
      topic3: form.topics[2] || "",
      topic4: form.topics[3] || "",
      topic5: form.topics[4] || "",
      grievanceDetails: form.grievanceDetails,
      agentRemarks: form.agentRemarks,
      date: form.createddate,
      agentName: form.agentName,
    };

    const created = await createGrievance(payload);

    const grievanceId =
      created?.id ||
      created?.grievanceId ||
      created?.data?.id ||
      created?.data?.grievanceId;

    if (!grievanceId) {
      throw new Error("Grievance ID not returned from backend");
    }

    if (form.attachment && form.attachment.length > 0) {
      await uploadAttachments(form.attachment, grievanceId);
    }

    onSuccess();
    onClose();
  } catch (err) {
    console.error("Add grievance error:", err);
    setError(err.message || "Failed to save grievance");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[450px] max-h-[90vh] rounded-xl p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold text-center mb-4 text-white bg-blue-700 py-2 rounded-lg">
          Create New Grievance
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-2 text-sm rounded mb-3 text-center">
            {error}
          </div>
        )}

        <Input
          label="Citizen Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={fieldErrors.name}
        />

        <Input
          label="Father / Spouse"
          name="fatherSpouseName"
          value={form.fatherSpouseName}
          onChange={handleChange}
          error={fieldErrors.fatherSpouseName}
        />

        <Input
          label="Contact"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          error={fieldErrors.contact}
        />

        <Select
          label="Block"
          name="block"
          value={form.block}
          options={blocks}
          onChange={handleChange}
          error={fieldErrors.block}
        />

        {form.block === "Athagarh NAC" ? (
          <>
            <Select
              label="Ward No"
              name="wardNo"
              value={form.wardNo}
              options={wards}
              onChange={handleChange}
              disabled={!form.block}
            />

            <Select
              label="Village / Sahi"
              name="villageSahi"
              value={form.villageSahi}
              options={villages}
              onChange={handleChange}
              disabled={!form.wardNo}
            />
          </>
        ) : (
          <>
            <Select
              label="GP"
              name="gp"
              value={form.gp}
              options={gps}
              onChange={handleChange}
              disabled={!form.block}
            />

            <Select
              label="Village / Sahi"
              name="villageSahi"
              value={form.villageSahi}
              options={villages}
              onChange={handleChange}
              disabled={!form.gp}
            />

            <Select
              label="Ward No"
              name="wardNo"
              value={form.wardNo}
              options={wards}
              onChange={handleChange}
              disabled={!form.villageSahi}
            />
          </>
        )}
        <Input
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        {/* 
        <Input
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <Input
          label="Citizen Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Father / Spouse"
          name="fatherSpouseName"
          value={form.fatherSpouseName}
          onChange={handleChange}
        />
        <Input
          label="Contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
        /> */}

        <div className="mb-2">
          <label className="text-xs text-gray-600">Topics</label>
          {form.topics.map((topic, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                value={topic}
                onChange={(e) => handleTopicChange(index, e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
                placeholder={`Topic ${index + 1}`}
              />
              {form.topics.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeTopic(index)}
                  className="px-3 bg-red-500 text-white rounded"
                >
                  −
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addTopic}
            disabled={form.topics.length >= 5}
            className={`text-sm font-semibold ${
              form.topics.length >= 5
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-600"
            }`}
          >
            + Add another topic
          </button>

          {form.topics.length >= 5 && (
            <p className="text-xs text-red-500 mt-1">
              Maximum 5 topics allowed
            </p>
          )}
        </div>

        <Input
          label="Grievance Details"
          name="grievanceDetails"
          value={form.grievanceDetails}
          onChange={handleChange}
          error={fieldErrors.grievanceDetails}
          textarea
        />

        <Input
          label="Remark"
          name="agentRemarks"
          value={form.agentRemarks}
          onChange={handleChange}
        />
        <Input
          label="Agent Name"
          name="agentName"
          value={form.agentName}
          readOnly
        />

        {/* ✅ MULTIPLE FILE INPUT */}
        <div className="mb-3">
          <label className="text-xs text-gray-600">Attachments</label>

          <input
            type="file"
            name="attachment"
            multiple
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 text-sm"
          />

          {/* ✅ Preview Selected Files */}
          {form.attachment && form.attachment.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-3">
              {form.attachment.map((file, index) => {
                const fileUrl = URL.createObjectURL(file);
                const isImage = file.type.startsWith("image");

                return (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden text-xs"
                  >
                    {isImage && (
                      <img
                        src={fileUrl}
                        alt={file.name}
                        className="w-full h-32 object-cover"
                      />
                    )}

                    <div className="p-2">
                      <p className="font-semibold truncate">{file.name}</p>
                      <p className="text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="px-4 py-2 border rounded-md">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`px-4 py-2 rounded-md text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
function Input({ label, name, value, onChange, readOnly, error, textarea }) {
  return (
    <div className="mb-2">
      <label className="text-xs text-gray-600">{label}</label>

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          rows={4}
          className={`w-full border rounded-md px-3 py-2 text-sm resize-none ${
            error ? "border-red-500" : ""
          }`}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className={`w-full border rounded-md px-3 py-2 text-sm ${
            error ? "border-red-500" : ""
          }`}
        />
      )}
    </div>
  );
}



function Select({ label, name, value, options, onChange, disabled, error }) {
  return (
    <div className="mb-2">
      <label className="text-xs text-gray-600">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border rounded-md px-3 py-2 text-sm ${
          error ? "border-red-500" : ""
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

