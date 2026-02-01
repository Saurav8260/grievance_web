import { useState } from "react";
import { uploadAttachments } from "../api/userService";

export default function AttachmentUpload({ grievanceId }) {

  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    try {
      const res = await uploadAttachments(files, grievanceId);
      alert(res.message);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />

      <button onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}
